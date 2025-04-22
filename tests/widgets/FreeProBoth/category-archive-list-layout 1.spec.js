import { test, expect } from '@playwright/test';

test.describe('Category Archive List L1 Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.BASE_URL_MSF}/category-archive-list-l1/`);
  });

  test('should have correct main heading', async ({ page }) => {
    await expect(page.getByRole('heading')).toMatchAriaSnapshot(`- heading "Category Archive List L1" [level=1]`);
  });

  test('should navigate to doc from div click', async ({ page }) => {
    await page.locator('div').filter({ hasText: '1% import duty threatens' }).nth(2).click();
  });

  test('should expand list item with icon click', async ({ page }) => {
    await page.locator('li').filter({ hasText: '1% import duty threatens' }).locator('i').click();
  });

  test('should go to the article via link click', async ({ page }) => {
    await page.getByRole('link', { name: '1% import duty threatens' }).click();
    await page.locator('#betterdocs-breadcrumb').click();
  });

  test('should open specific doc page and click breadcrumb', async ({ page }) => {
    await page.goto(`${process.env.BASE_URL_MSF}/docs/client/1-import-duty-threatens-foreign-investment-in-economic-zones-stakeholders/`);
    await page.getByText('Home Docs MSF Muammar Test').click();
    await page.goto(`${process.env.BASE_URL_MSF}/docs/client/1-import-duty-threatens-foreign-investment-in-economic-zones-stakeholders/`);
    await page.locator('#betterdocs-breadcrumb').click();
  });

  test('should interact with headings and related link', async ({ page }) => {
    await page.goto(`${process.env.BASE_URL_MSF}/docs/client/1-import-duty-threatens-foreign-investment-in-economic-zones-stakeholders/`);
    await page.getByRole('heading', { name: '1% import duty threatens' }).click();
    await page.getByRole('link', { name: 'muammar-shahrear-famous' }).click();
  });

  test('should interact with reading time and content', async ({ page }) => {
    await page.goto(`${process.env.BASE_URL_MSF}/docs/client/1-import-duty-threatens-foreign-investment-in-economic-zones-stakeholders/`);
    await page.locator('div').filter({ hasText: '< 1 min read' }).nth(4).click();
    await page.locator('#betterdocs-single-content').click();
  });
});
