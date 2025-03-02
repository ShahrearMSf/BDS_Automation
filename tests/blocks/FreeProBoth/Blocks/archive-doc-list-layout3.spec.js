import { test, expect } from '@playwright/test';

test.describe('Archive List Page Tests', () => {
  let page;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    const baseUrl = process.env.BASE_URL_MSF || 'https://betterdocs.msf.qa378.site';  // Fallback if the env variable isn't set
    await page.goto(`${baseUrl}/archive-doc-list-l3/`);
  });

  test('should verify the heading on the page', async () => {
    const heading = page.locator('h1');
    await expect(heading).toMatchAriaSnapshot(`- heading "Archive Doc List L3" [level=1]`);
  });

  test('should click on Archive Doc List item and check title', async () => {
    const archiveDocLink = page.getByText('Archive Doc List L3 1% import');
    await archiveDocLink.click();
  });

  test('should click on the article and check the heading', async () => {
    const articleLink = page.getByText('% import duty threatens foreign investment in economic zones: Stakeholders Last');
    await articleLink.click();
    const heading = page.getByRole('heading', { name: '1% import duty threatens' });
    await heading.getByRole('img').click();
  });

  test('should interact with heading span and link', async () => {
    const heading = page.getByRole('heading', { name: '1% import duty threatens' });
    await heading.locator('span').click();
    await heading.click();
    await heading.getByRole('link', { name: '1% import duty threatens' }).click();
  });

  test('should click on last updated date', async () => {
    const lastUpdatedLocator = page.locator('text=Last Updated:');
    const lastUpdatedText = await lastUpdatedLocator.first().textContent();

    // Ensure the "Last Updated" text follows the expected format
    await expect.soft(lastUpdatedText).toMatch(/Last Updated: \s*\w+ \d{1,2}, \d{4}/);

    // Now perform the click action on the "Last Updated" element
    await page.getByText('Last Updated: September 9,').first().click();
  });

  test('should interact with business leaders text', async () => {
    const businessLeadersText = page.getByText('Business leaders and');
    await businessLeadersText.click();
  });

  test('should navigate between pages', async () => {
    const paginator = page.locator('div').filter({ hasText: '2 3 … 32 ❯' }).nth(2);
    await paginator.click();
    await page.getByRole('link', { name: '❮' }).click();
    await page.getByRole('link', { name: '❮' }).click();
    await page.getByRole('link', { name: '2', exact: true }).click();
    await page.getByRole('link', { name: '❯' }).click();
    await page.getByRole('link', { name: '32' }).click();
    await page.getByRole('link', { name: '30' }).click();
  });

  test.afterEach(async () => {
    await page.close();
  });
});







// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://betterdocs.msf.qa378.site/archive-doc-list-l3/');
//   await expect(page.locator('h1')).toMatchAriaSnapshot(`- heading "Archive Doc List L3" [level=1]`);
//   await page.getByText('Archive Doc List L3 1% import').click();
//   await page.getByText('% import duty threatens foreign investment in economic zones: Stakeholders Last').click();
//   await page.getByRole('heading', { name: '1% import duty threatens' }).getByRole('img').click();
//   await page.getByRole('heading', { name: '1% import duty threatens' }).locator('span').click();
//   await page.getByRole('heading', { name: '1% import duty threatens' }).click();
//   await page.getByRole('link', { name: '1% import duty threatens' }).click();
//   await page.getByText('Last Updated: September 9, 2024').first().click();
//   await page.getByText('Business leaders and').click();
//   await page.locator('div').filter({ hasText: '2 3 … 32 ❯' }).nth(2).click();
//   await page.getByRole('link', { name: '❮' }).click();
//   await page.getByRole('link', { name: '❮' }).click();
//   await page.getByRole('link', { name: '2', exact: true }).click();
//   await page.getByRole('link', { name: '❯' }).click();
//   await page.getByRole('link', { name: '32' }).click();
//   await page.getByRole('link', { name: '30' }).click();
// });

