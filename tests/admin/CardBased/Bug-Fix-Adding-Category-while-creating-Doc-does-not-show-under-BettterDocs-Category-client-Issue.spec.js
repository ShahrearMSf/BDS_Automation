//https://d.pr/i/6Jcxae all tests run

import { test, expect } from "@playwright/test";

// Ensure to load environment variables before running tests
const baseUrl = process.env.BASE_URL_MSF;

test.describe("Bug Fix | Adding Category while creating Doc does not show under BettterDocs Category | Client Issue", () => {
  let adminContext, adminPage;

  test.beforeAll(async ({ browser }) => {
    // Create a new browser context with admin storage state
    adminContext = await browser.newContext({ storageState: "playwright/.auth/admin.json" });
    adminPage = await adminContext.newPage();
  });

  test('Doc and Category Creation', async ({ page }) => {

    await adminPage.goto(`${baseUrl}/wp-admin/post-new.php?post_type=docs`);

    await adminPage.getByLabel('Add title').fill('What a beautiful day');
    await adminPage.getByLabel('Add default block').click();
    await adminPage.getByLabel('Empty block; start writing or').fill('Day');
    await adminPage.getByRole('tab', { name: 'Docs' }).click();
      // await adminPage.getByRole('tab', { name: 'Block' }).click();
      // await adminPage.getByRole('tab', { name: 'Docs' }).click();

    await adminPage.getByRole('button', { name: 'Categories' }).click();
    // await adminPage.waitForTimeout(1000);
    await adminPage.getByRole('button', { name: 'Add New Docs Category' }).click();
    await adminPage.getByLabel('New Docs Category Name').click();
    await adminPage.getByLabel('New Docs Category Name').fill('Live of Pie');
    await adminPage.locator('form').filter({ hasText: 'New Docs Category NameParent' }).getByRole('button').click();
    await adminPage.getByRole('button', { name: 'Publish', exact: true }).click();
    await adminPage.getByLabel('Editor publish').getByRole('button', { name: 'Publish', exact: true }).click();
    // await adminPage.getByLabel('View Posts').click();

  }); 

  test('Category check', async ({ page }) => {

    await adminPage.goto(`${baseUrl}/wp-admin/edit-tags.php?taxonomy=doc_category&post_type=docs`);

    await adminPage.locator('#toplevel_page_betterdocs-dashboard').getByRole('link', { name: 'Categories' }).click();
    await adminPage.getByLabel('Search Categories:').click();
    await adminPage.getByLabel('Search Categories:').fill('life of pie');
    await adminPage.getByRole('button', { name: 'Search Categories' }).click();
    await adminPage.getByLabel('Search Categories:').click();
    await adminPage.getByLabel('Search Categories:').fill('Live of pie');
    await adminPage.getByLabel('Search Categories:').press('Enter');
    await adminPage.getByRole('button', { name: 'Search Categories' }).click();
    await adminPage.getByLabel('“Live of Pie” (Edit)').click();


    await adminPage.getByRole('link', { name: 'All Docs' }).click();
    await adminPage.goto(`${baseUrl}/wp-admin/admin.php?page=betterdocs-admin`);
    await adminPage.waitForTimeout(1000);
    await adminPage.locator('section').filter({ hasText: 'Add New DocsAll DocsSelect' }).getByRole('list').getByRole('link').click();
    await adminPage.getByPlaceholder('Search Doc').click();
    await adminPage.getByPlaceholder('Search Doc').fill('what a beautiful day');
    await adminPage.getByRole('cell', { name: '✓ What a beautiful day |' }).locator('label').click();
    await adminPage.getByRole('button', { name: 'Move to Trash' }).click();
    await adminPage.getByRole('button', { name: 'Yes' }).click();
    await adminPage.locator('section').filter({ hasText: 'Add New DocsAll DocsSelect' }).getByRole('list').getByRole('link').click();



  // });

  // test('Put the doc in trash', async ({ page }) => {

  //   await adminPage.goto(`${baseUrl}/wp-admin/admin.php?mode=grid&page=betterdocs-admin`);

  //   await page1.locator('section').filter({ hasText: 'Add New DocsAll DocsSelect' }).getByRole('list').getByRole('link').click();
  //   await page1.getByRole('cell', { name: '✓ What a beautiful day |' }).locator('label').click();
  //   await page1.getByRole('button', { name: 'Move to Trash' }).click();
  //   await page1.getByRole('button', { name: 'Yes' }).click();
  //   await page1.locator('section').filter({ hasText: 'Add New DocsAll DocsSelect' }).getByRole('list').getByRole('link').click();
  });

  test('Delete the category', async ({ page }) => {

    await adminPage.goto(`${baseUrl}/wp-admin/edit-tags.php?taxonomy=doc_category&post_type=docs`);

    await adminPage.getByLabel('Search Categories:').click();
    await adminPage.getByLabel('Search Categories:').fill('live of pie');
    await adminPage.getByRole('button', { name: 'Search Categories' }).click();
    await adminPage.getByLabel('Select Live of Pie').check();
    await adminPage.locator('#bulk-action-selector-top').selectOption('delete');
    await adminPage.locator('#doaction').click();
  });
});
