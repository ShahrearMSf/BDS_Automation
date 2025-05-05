//testpassed_screencast_https://d.pr/i/PkrvhN

import { test, expect } from "@playwright/test";

// Load environment variables
const baseUrl = process.env.BASE_URL_MSF;

test.describe('Feature Request | Option to manage show/hide Alphabetical items for the Encyclopedia page', () => {
  let adminContext, adminPage;

  test.beforeAll(async ({ browser }) => {
    adminContext = await browser.newContext({
      storageState: "playwright/.auth/admin.json",
    });
    adminPage = await adminContext.newPage();
  });

  test('Manage and verify alphabetical items', async () => {
    // Go to WP admin edit post page
    await adminPage.goto(`${baseUrl}/wp-admin/post.php?post=48&action=edit`);
    // await expect(adminPage).toHaveURL(/post=48/);

    // Select the encyclopedia block and click on Alphabet 'A'
    await adminPage.getByLabel('Block: BetterDocs Encyclopedia')
      .locator('div')
      .filter({ hasText: 'AllABCDEFGHIJKLMNOPQRSTUVWXYZAAddressAddress - In computing, an address refers' })
      .first()
      .click();

    // Click dropdown and choose 'A'
    await adminPage.locator('.css-19bb58m').click();
    await adminPage.getByRole('option', { name: 'A', exact: true }).click();

    // Toggle back to full alphabet view
    await adminPage.getByText('AllBCDEFGHIJKLMNOPQRSTUVWXYZ').click();

    // Wait and open the "View Page" link in a new popup
    const page1Promise = adminPage.waitForEvent('popup');
    await adminPage.getByLabel('View Page', { exact: true }).click();
    const page1 = await page1Promise;
    await page1.waitForLoadState('load');

    // Save changes
    await adminPage.getByRole('button', { name: 'Save', exact: true }).click();
    // await expect(adminPage.getByTestId('snackbar')).toBeVisible();

    // Click View Page from snackbar
    // await adminPage.getByTestId('snackbar').getByRole('link', { name: 'View Page' }).click();
    // await adminPage.waitForLoadState('networkidle');

    // Go to Encyclopedia menu and back to edit
    await adminPage.getByText('AllBCDEFGHIJKLMNOPQRSTUVWXYZ').click();


  });


test('Reverse Manage and verify alphabetical items', async () => {
    // Go to WP admin edit post page
    await adminPage.goto(`${baseUrl}/wp-admin/post.php?post=48&action=edit`);

    // Click block and remove 'A'
    await adminPage.getByLabel('Block: BetterDocs Encyclopedia')
      .locator('div')
      .filter({ hasText: 'AllBCDEFGHIJKLMNOPQRSTUVWXYZBBakhur Al OudBakhur Al Oud refers to a traditional' })
      .first()
      .click();

    await adminPage.locator('div').filter({ hasText: /^A$/ }).nth(2).click();
    await adminPage.getByLabel('Remove A').click();




// Wait and open the "View Page" link in a new popup
    const page1Promise = adminPage.waitForEvent('popup');
    await adminPage.getByLabel('View Page', { exact: true }).click();
    const page1 = await page1Promise;
    await page1.waitForLoadState('load');

    // Save changes
    await adminPage.getByRole('button', { name: 'Save', exact: true }).click();
    // await expect(adminPage.getByTestId('snackbar')).toBeVisible();

    // Click View Page from snackbar
    // await adminPage.getByTestId('snackbar').getByRole('link', { name: 'View Page' }).click();
    // await adminPage.waitForLoadState('networkidle');

    // Go to Encyclopedia menu and back to edit
    await adminPage.getByText('AllABCDEFGHIJKLMNOPQRSTUVWXYZ').click();

    // Validate that the full alphabet list is present
    // await expect(adminPage.locator('#content')).toMatchAriaSnapshot(`
    //   - list:
    //     - listitem:
    //       - link "All"
    //     - listitem:
    //       - link "A"
    //     - listitem:
    //       - link "B"
    //     - listitem:
    //       - link "C"
    //     - listitem:
    //       - link "D"
    //     - listitem:
    //       - link "E"
    //     - listitem:
    //       - link "F"
    //     - listitem:
    //       - link "G"
    //     - listitem:
    //       - link "H"
    //     - listitem:
    //       - link "I"
    //     - listitem:
    //       - link "J"
    //     - listitem:
    //       - link "K"
    //     - listitem:
    //       - link "L"
    //     - listitem:
    //       - link "M"
    //     - listitem:
    //       - link "N"
    //     - listitem:
    //       - link "O"
    //     - listitem:
    //       - link "P"
    //     - listitem:
    //       - link "Q"
    //     - listitem:
    //       - link "R"
    //     - listitem:
    //       - link "S"
    //     - listitem:
    //       - link "T"
    //     - listitem:
    //       - link "U"
    //     - listitem:
    //       - link "V"
    //     - listitem:
    //       - link "W"
    //     - listitem:
    //       - link "X"
    //     - listitem:
    //       - link "Y"
    //     - listitem:
    //       - link "Z"
    // `);
  });

});
