import { test, expect } from "@playwright/test";

test.describe("Editor Styling is not working", () => {
  let adminContext, adminPage;

  test.beforeAll(async ({ browser }) => {
    adminContext = await browser.newContext({ storageState: "playwright/.auth/admin.json" });
    adminPage = await adminContext.newPage();
  });

  // test.afterAll(async () => {
  //   await adminPage.close();
  // });

  // test('Go to BetterDocs Add New page', async () => {
  //   await adminPage.goto("/wp-admin/index.php");
  //   await adminPage.getByRole('link', { name: 'BetterDocs', exact: true }).click();
  //   await adminPage.locator('#toplevel_page_betterdocs-admin').getByRole('link', { name: 'Add New' }).click();
  // });

  test('Add and style First Heading block', async () => {
    await adminPage.goto("/wp-admin/post-new.php?post_type=docs&lang=en");
    await adminPage.getByLabel('Add title').fill('Playwright Test for Editor');
    await adminPage.getByLabel('Add default block').click();
    await adminPage.getByLabel('Block Inserter').click();
    await adminPage.getByPlaceholder('Search').fill('he');
    await adminPage.locator('button').filter({ hasText: 'Heading' }).click();
    await adminPage.getByLabel('Block: Heading').fill('First Heading');
    await adminPage.getByLabel('Block: Heading').dblclick();
    await adminPage.getByLabel('Block: Heading').press('ControlOrMeta+a');
    await adminPage.getByRole('button', { name: 'Text', exact: true }).click();
    await adminPage.getByLabel('Vivid green cyan').click();
    await adminPage.getByLabel('Change level').click();
    await adminPage.getByRole('menuitemradio', { name: 'Heading 1' }).click();
  });

  // test('Add and style Second Heading block', async () => {
  //   await adminPage.getByLabel('Add default block').click();
  //   await adminPage.getByLabel('Block Inserter').click();
  //   await adminPage.getByPlaceholder('Search').fill('he');
  //   await adminPage.locator('button').filter({ hasText: 'Heading' }).click();
  //   await adminPage.getByLabel('Block: Heading').fill('Second Heading');
  //   await adminPage.getByLabel('Block: Heading').dblclick();
  //   await adminPage.getByLabel('Block: Heading').press('ControlOrMeta+a');
  //   await adminPage.getByRole('button', { name: 'Text', exact: true }).click();
  //   await adminPage.getByLabel('Vivid green blue').click();
  //   await adminPage.getByLabel('Change level').click();
  //   await adminPage.getByRole('menuitemradio', { name: 'Heading 2' }).click();
  // });

  test('Publish the doc', async () => {
    // await adminPage.getByLabel('Save draft').click();
    await adminPage.getByRole('button', { name: 'Publish', exact: true }).click();
    await adminPage.getByLabel('Editor publish').getByRole('button', { name: 'Publish', exact: true }).click();


  // test('View the doc and verify headings', async () => {
    await adminPage.getByText('View Docs').click();
    await adminPage.getByRole('heading', { name: 'First Heading #' }).click();

    // await adminPage.getByRole('heading', { name: 'First Heading #' }).click();
    await adminPage.getByRole('heading', { name: 'Second Heading #' }).click();
  });

});
