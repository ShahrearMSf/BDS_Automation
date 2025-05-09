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

test('test classic button', async ({ page }) => {
  await adminPage.goto(`${baseUrl}/wp-admin/admin.php?page=betterdocs-dashboard`); 
  await adminPage.getByRole('link', { name: 'Glossaries' }).click();
  await adminPage.getByRole('link', { name: 'Classic UI' }).click();
  await adminPage.getByRole('link', { name: 'BetterDocs' }).click();
  await adminPage.getByRole('link', { name: 'FAQ Builder' }).click();
  await adminPage.getByRole('link', { name: 'Classic UI' }).click();
});

});