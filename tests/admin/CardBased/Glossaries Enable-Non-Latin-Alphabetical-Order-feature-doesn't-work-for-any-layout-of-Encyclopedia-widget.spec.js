import { test, expect } from "@playwright/test";

// Ensure to load environment variables before running tests
const baseUrl = process.env.BASE_URL_MSF;

test.describe("Encyclopedia/Glossaries Enable Non-Latin Alphabetical Order feature does not work for any layout of Encyclopedia widget", () => {
  let adminContext, adminPage;

  test.beforeAll(async ({ browser }) => {
    // Create a new browser context with admin storage state
    adminContext = await browser.newContext({ storageState: "playwright/.auth/admin.json" });
    adminPage = await adminContext.newPage();
  });


test('test', async ({ page }) => {
  await adminPage.goto(`${baseUrl}/wp-admin/admin.php?page=betterdocs-settings&mode=grid`); 
  
  await adminPage.locator('#betterdocsQuickBuilder').getByRole('list').locator('li').filter({ hasText: 'General' }).click();
  await adminPage.locator('#title-general-tab div').filter({ hasText: 'Enable Non-Latin Alphabetical' }).nth(1).click();
  await adminPage.locator('div:nth-child(16) > .wprf-control-field > .wprf-toggle-wrap > .wprf-input-label').click();
  await adminPage.getByRole('button', { name: 'Save' }).click();
  await adminPage.getByRole('menuitem', { name: ' BetterDocs by MSF' }).click();
  await adminPage.goto(`${baseUrl}/encyclopedia-2/`); 
  await adminPage.locator('#encyclopedia-container').getByText('П', { exact: true }).click();

  await adminPage.goto(`${baseUrl}/wp-admin/admin.php?page=betterdocs-settings&mode=grid`); 
  await adminPage.locator('div:nth-child(16) > .wprf-control-field').first().click();
  await adminPage.locator('div:nth-child(16) > .wprf-control-field > .wprf-toggle-wrap > .wprf-input-label').click();
  await adminPage.getByRole('button', { name: 'Save' }).click();
  await adminPage.getByText('Changes Saved Successfully.').click();
});

});