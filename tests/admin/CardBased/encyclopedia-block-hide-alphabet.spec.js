import { test, expect } from "@playwright/test";

// Load environment variables
const baseUrl = process.env.BASE_URL_MSF;

test.describe('Feature Request | Option to manage show/hide Alphabetical items for the Encyclopedia page', () => {
  let adminContext, adminPage;

  test.beforeAll(async ({ browser }) => {
    // Use admin auth context
    adminContext = await browser.newContext({
      storageState: "playwright/.auth/admin.json",
    });
    adminPage = await adminContext.newPage();
  });

test('test', async ({ page }) => {

    await adminPage.goto(`${baseUrl}/wp-admin/post.php?post=48&action=edit`);

  await page.getByLabel('Block: BetterDocs Encyclopedia').locator('div').filter({ hasText: 'AllABCDEFGHIJKLMNOPQRSTUVWXYZAAddressAddress - In computing, an address refers' }).first().click();
  await page.locator('.css-19bb58m').click();
  await page.getByRole('option', { name: 'A', exact: true }).click();
  await page.getByText('AllBCDEFGHIJKLMNOPQRSTUVWXYZ').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByLabel('View Page', { exact: true }).click();
  const page1 = await page1Promise;
  await page.getByRole('button', { name: 'Save', exact: true }).click();
  await page.getByTestId('snackbar').getByRole('link', { name: 'View Page' }).click();
  await page.locator('.encyclopedia-alphabets').click();
  await page.getByRole('menuitem', { name: ' Edit Page' }).click();
  await page.getByLabel('Block: BetterDocs Encyclopedia').locator('div').filter({ hasText: 'AllBCDEFGHIJKLMNOPQRSTUVWXYZBBakhur Al OudBakhur Al Oud refers to a traditional' }).first().click();
  await page.locator('div').filter({ hasText: /^A$/ }).nth(2).click();
  await page.getByLabel('Remove A').click();
  await page.getByRole('button', { name: 'Save', exact: true }).click();
  await page.getByTestId('snackbar').getByRole('link', { name: 'View Page' }).click();
  await page.locator('.encyclopedia-alphabets').click();
  await expect(page.locator('#content')).toMatchAriaSnapshot(`
    - list:
      - listitem:
        - link "All"
      - listitem:
        - link "A"
      - listitem:
        - link "B"
      - listitem:
        - link "C"
      - listitem:
        - link "D"
      - listitem:
        - link "E"
      - listitem:
        - link "F"
      - listitem:
        - link "G"
      - listitem:
        - link "H"
      - listitem:
        - link "I"
      - listitem:
        - link "J"
      - listitem:
        - link "K"
      - listitem:
        - link "L"
      - listitem:
        - link "M"
      - listitem:
        - link "N"
      - listitem:
        - link "O"
      - listitem:
        - link "P"
      - listitem:
        - link "Q"
      - listitem:
        - link "R"
      - listitem:
        - link "S"
      - listitem:
        - link "T"
      - listitem:
        - link "U"
      - listitem:
        - link "V"
      - listitem:
        - link "W"
      - listitem:
        - link "X"
      - listitem:
        - link "Y"
      - listitem:
        - link "Z"
    `);
});

});