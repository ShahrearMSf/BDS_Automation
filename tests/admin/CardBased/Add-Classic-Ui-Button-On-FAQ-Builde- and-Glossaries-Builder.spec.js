import { test, expect } from "@playwright/test";

// Ensure to load environment variables before running tests
const baseUrl = process.env.BASE_URL_MSF;

test.describe("Add Classic UI Button To FAQ and Gloassary Section", () => {
  let adminContext, adminPage;

  test.beforeAll(async ({ browser }) => {
    // Create a new browser context with admin storage state
    adminContext = await browser.newContext({ storageState: "playwright/.auth/admin.json" });
    adminPage = await adminContext.newPage();
  });

test('test FAQ classic button', async ({ page }) => {
  await adminPage.goto(`${baseUrl}/wp-admin/admin.php?page=betterdocs-dashboard`); 
  await adminPage.getByRole('link', { name: 'FAQ Builder' }).click();
  await adminPage.getByRole('link', { name: 'Classic UI' }).click();
  await adminPage.getByRole('heading', { name: 'FAQ Categories' }).click();
  await expect(adminPage.locator('#col-left')).toMatchAriaSnapshot(`- heading "Add New FAQ Category" [level=2]`);
  await adminPage.locator('#addtag').getByText('Name', { exact: true }).click();
  await adminPage.locator('#addtag').getByText('Slug', { exact: true }).click();
  await adminPage.getByText('Parent FAQ Category').click();
});

test('test Glossaries classic button', async ({ page }) => {
  await adminPage.goto(`${baseUrl}/wp-admin/admin.php?page=betterdocs-dashboard`); 
  await adminPage.getByRole('link', { name: 'Glossaries' }).click();
  await adminPage.getByRole('link', { name: 'Classic UI' }).click();
  await adminPage.getByRole('heading', { name: 'Glossaries Terms' }).click();
  await adminPage.getByRole('heading', { name: 'Add New Glossaries Term' }).click();
  await adminPage.locator('#addtag').getByText('Name', { exact: true }).click();
  await adminPage.locator('#addtag').getByText('Slug', { exact: true }).click();
  await adminPage.getByText('Parent Glossaries Term').click();
  await adminPage.locator('#addtag').getByText('Description', { exact: true }).click();
});

});