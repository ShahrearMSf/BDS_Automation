import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto(`${process.env.BASE_URL_MSF}/category-archive-list-l1/`);


  await expect(page.getByRole('heading')).toMatchAriaSnapshot(`- heading "Category Archive List L1" [level=1]`);
  await page.locator('div').filter({ hasText: '1% import duty threatens' }).nth(2).click();
  await page.locator('li').filter({ hasText: '1% import duty threatens' }).locator('i').click();
  await page.getByRole('link', { name: '1% import duty threatens' }).click();
  await page.locator('#betterdocs-breadcrumb').click();
  await page.goto(`${process.env.BASE_URL_MSF}/docs/client/1-import-duty-threatens-foreign-investment-in-economic-zones-stakeholders/`);

  await page.getByText('Home Docs MSF Muammar Test').click();
  await page.goto(`${process.env.BASE_URL_MSF}/docs/client/1-import-duty-threatens-foreign-investment-in-economic-zones-stakeholders/`);
  await page.locator('#betterdocs-breadcrumb').click();

  await page.goto(`${process.env.BASE_URL_MSF}/docs/client/1-import-duty-threatens-foreign-investment-in-economic-zones-stakeholders/`);
  await page.getByRole('heading', { name: '1% import duty threatens' }).click();
  await page.getByRole('link', { name: 'muammar-shahrear-famous' }).click();
  
  await page.goto(`${process.env.BASE_URL_MSF}/docs/client/1-import-duty-threatens-foreign-investment-in-economic-zones-stakeholders/`);
  await page.locator('div').filter({ hasText: '< 1 min read' }).nth(4).click();
  await page.locator('#betterdocs-single-content').click();
});