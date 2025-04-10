import { test, expect } from "@playwright/test";

test.describe("Editor Styling is not working", () => {
  let adminContext, adminPage;
  let contributorContext, contributorPage;
  let subscriberContext, subscriberPage;

  test.beforeAll(async ({ browser }) => {
    adminContext = await browser.newContext({ storageState: "playwright/.auth/admin.json" });
    adminPage = await adminContext.newPage();
  });

  test.afterAll(async () => {
    await adminPage.close();
    if (contributorPage) await contributorPage.close();
    if (subscriberPage) await subscriberPage.close();
  });


test('test', async ({ page }) => {
  
    await adminPage.goto("/wp-admin/index.php");
    await page.getByRole('link', { name: 'BetterDocs' }).click();
    await page.locator('#toplevel_page_betterdocs-admin').getByRole('link', { name: 'Add New' }).click();
//   await page.getByRole('button', { name: 'Next' }).click();
//   await page.getByRole('button', { name: 'Next' }).click();
//   await page.getByRole('button', { name: 'Next' }).click();
//   await page.getByRole('button', { name: 'Get started' }).click();
  await page.getByLabel('Block Inserter').click();
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('header');
  await page.getByRole('option', { name: 'Header', exact: true }).click();

  await page.getByLabel('Block: Heading').fill('First Heading');
  await page.getByLabel('Block: Heading').dblclick();
  await page.getByText('This is testFirst Heading').click();
  await page.getByLabel('Block: Heading').press('ControlOrMeta+a');
  await page.getByRole('button', { name: 'Text', exact: true }).click();
  await page.getByLabel('Light green cyan').click();
  await page.getByLabel('Empty block; start writing or').click();
  await page.getByLabel('Empty block; start writing or').fill('2nd Heading');
  await page.getByLabel('Block: Paragraph').click();
  await page.getByText('This is testFirst Heading2nd').click();
  await page.getByLabel('Block: Paragraph').click();
  await page.getByLabel('Block: Paragraph').click();
  await page.getByLabel('Block: Paragraph').press('ControlOrMeta+a');
  await page.getByRole('button', { name: 'Text', exact: true }).click();
  await page.getByLabel('Luminous vivid amber').click();
  await page.getByText('First Heading2nd Heading').click();
  await page.getByLabel('View', { exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('menuitem', { name: 'Preview in new tab' }).click({
    modifiers: ['ControlOrMeta']
  });
  const page1 = await page1Promise;
  await adminPage.goto("/wp-admin/?post_type=docs&p=3309&preview=true");
  await page1.getByRole('heading', { name: 'First Heading #' }).click();
  await page1.getByText('2nd Heading', { exact: true }).click();
});

});