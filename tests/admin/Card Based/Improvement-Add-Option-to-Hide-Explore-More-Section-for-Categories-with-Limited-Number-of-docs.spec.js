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
  });

  test('Block Editor: should allow hiding of "Explore More" section when docs are few', async () => {
    await adminPage.goto(`${baseUrl}/wp-admin/post-new.php?post_type=page`);

    // Add BetterDocs Category Grid block
    await adminPage.getByLabel('Block Inserter').click();
    await adminPage.getByPlaceholder('Search').fill('betterdocs');
    await adminPage.getByRole('option', { name: 'BetterDocs Category Grid' }).click();

    // Change Docs Per Page to 1
    await adminPage.getByLabel('Docs Per Page').fill('1');
    await adminPage.locator('.docs-cat-link-btn').first().click();
    await adminPage.getByLabel('Docs Per Page').fill('5');

    // Attempt to interact with 'Explore More'
    await adminPage.getByRole('link', { name: 'Explore More ' }).first().click();
    adminPage.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
  });

  test('Elementor: should allow interaction with BetterDocs widgets', async () => {
    await adminPage.goto(`${baseUrl}/wp-admin/post.php?post=3467&action=elementor`, {
      waitUntil: 'load',
    });

    await adminPage.waitForSelector('iframe[title="Preview"]', { timeout: 5000 });
    await adminPage.getByPlaceholder('Search Widget...').fill('better');
    await adminPage.getByRole('button', { name: 'BetterDocs Category Grid' }).first().click();

    const previewFrame = adminPage.frameLocator('iframe[title="Preview"]');

    await previewFrame
      .locator('article')
      .filter({ hasText: 'Alif4 Ghum Pasce This is life' })
      .getByRole('link')
      .nth(2)
      .click();

    await adminPage.getByLabel('Post Per Page').fill('1');

    await previewFrame
      .locator('article')
      .filter({ hasText: 'Alif4 Ghum Pasce Explore More' })
      .getByRole('link')
      .nth(1)
      .click();

    await adminPage.getByLabel('Post Per Page').fill('5');
  });
});
