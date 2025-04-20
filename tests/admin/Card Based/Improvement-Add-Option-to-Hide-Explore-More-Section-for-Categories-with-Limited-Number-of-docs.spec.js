import { test, expect } from "@playwright/test";

// Load environment variables
const baseUrl = process.env.BASE_URL_MSF;

test.describe('Improvement | Hide "Explore More" Section for Categories with Limited Docs', () => {
  let adminContext, adminPage;

  test.beforeAll(async ({ browser }) => {
    // Use admin auth context
    adminContext = await browser.newContext({
      storageState: "playwright/.auth/admin.json",
    });
    adminPage = await adminContext.newPage();
    await adminPage.goto(`${baseUrl}/wp-admin/post-new.php?post_type=page`);
  });

  test('should update Docs Per Page and interact with "Explore More" section', async () => {
    // Add BetterDocs block
    await adminPage.getByLabel('Block Inserter').click();
    await adminPage.getByPlaceholder('Search').fill('betterdocs');
    await adminPage.getByRole('option', { name: 'BetterDocs Category Grid' }).click();

    // Navigate to existing post
    // await adminPage.goto(`${baseUrl}/wp-admin/post.php?post=3424&action=edit`);

    // Set Docs Per Page to 1
    // await adminPage.getByLabel('Docs Per Page').waitFor({ state: 'visible' });
    await adminPage.getByLabel('Docs Per Page').fill('1');

    // Click on the first category link (if needed to reload data)
    await adminPage.locator('.docs-cat-link-btn').first().click();

    // Wait for things to reload
    await adminPage.waitForTimeout(1000);

    // Now set Docs Per Page to 5
    await adminPage.getByLabel('Docs Per Page').fill('5');

    // Try interacting with "Explore More" link
    const exploreMoreLink = adminPage.getByRole('link', { name: 'Explore More ' }).first();

    if (await exploreMoreLink.isVisible()) {
      await exploreMoreLink.click();
    } else {
      console.log('"Explore More" link is not visible for this category.');
    }
  });
});