import { test, expect } from "@playwright/test";

// Ensure to load environment variables before running tests
const baseUrl = process.env.BASE_URL_MSF;

test.describe("Improvement | Add pagination when the category number crosses 100", () => {
  let adminContext, adminPage;

  test.beforeAll(async ({ browser }) => {
    // Create a new browser context with admin storage state
    adminContext = await browser.newContext({ storageState: "playwright/.auth/admin.json" });
    adminPage = await adminContext.newPage();
  });


test('test', async ({ page }) => {

  await adminPage.goto(`${baseUrl}/wp-admin/admin.php?page=betterdocs-admin`);
  await adminPage.getByRole('heading', { name: 'All Docs' }).click();
  await adminPage.getByRole('listitem', { name: '2' }).locator('a').click();
  await adminPage.locator('#betterdocs-dashboard-app select').selectOption('10');
  await adminPage.getByRole('listitem', { name: '3' }).locator('a').click();
  await adminPage.locator('#betterdocs-dashboard-app select').selectOption('50');
  await adminPage.getByLabel('prev page').click();
  await adminPage.locator('#betterdocs-dashboard-app select').selectOption('30');
  await adminPage.getByRole('listitem', { name: '4' }).locator('a').click();
  await adminPage.locator('#betterdocs-dashboard-app select').selectOption('70');
  await adminPage.getByRole('listitem', { name: '1' }).locator('a').click();
  await adminPage.getByRole('listitem', { name: '2' }).locator('a').click();
});

});