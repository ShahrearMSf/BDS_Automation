import { test, expect } from "@playwright/test";

// Ensure to load environment variables before running tests
const baseUrl = process.env.BASE_URL_MSF;

test.describe("BetterDocs 'betterdocs-admin' Class To Be Loaded Only In Betterdocs Pages", () => {
  let adminContext, adminPage;

  test.beforeAll(async ({ browser }) => {
    // Create a new browser context with admin storage state
    adminContext = await browser.newContext({ storageState: "playwright/.auth/admin.json" });
    adminPage = await adminContext.newPage();
  });

  test(" View should be greater than Unique View", async () => {


  await adminPage.goto(`${baseUrl}/wp-admin/admin.php?page=betterdocs-analytics`); 
  await page.getByRole('tab', { name: 'Views' }).click();

need to hover here

  await page.locator('foreignobject').click();
  await page.getByRole('cell', { name: 'Views', exact: true }).click();
  await page.getByRole('cell', { name: 'Unique Views' }).click();
  await page.getByRole('cell', { name: '66' }).first().click();
  await page.getByRole('cell', { name: '66' }).nth(1).click();
  await page.getByRole('cell', { name: '31' }).click();
  await page.getByRole('cell', { name: '26' }).click();
  await page.getByLabel('This list shows the leading Docs based on most Views.Leading Docs').getByText('22').click();
  await page.getByLabel('This list shows the leading Docs based on most Views.Leading Docs').getByText('4').first().click();
  await page.getByLabel('This list shows the leading Docs based on most Views.Leading Docs').getByText('16').click();
  await page.getByLabel('This list shows the leading Docs based on most Views.Leading Docs').getByText('15').click();
  await page.getByText('66', { exact: true }).first().click();
  await page.getByText('66', { exact: true }).nth(1).click();
  await page.getByLabel('This list shows the leading Docs based on most Views.Leading Docs').getByText('31').click();
  await page.getByLabel('This list shows the leading Docs based on most Views.Leading Docs').getByText('26').click();
  await page.getByRole('listitem', { name: 'Next Page' }).getByLabel('next page').click();
  await page.getByRole('row', { name: 'Explain how the system can' }).getByRole('paragraph').nth(3).click();
  await page.getByRole('row', { name: 'Explain how the system can' }).getByRole('paragraph').nth(4).click();
});

});