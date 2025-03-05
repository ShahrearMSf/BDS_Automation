import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto(`${process.env.BASE_URL_MSF}/multiple-kb-tab/`);
  await page.getByRole('link', { name: 'BCB' }).click();
  await page.getByText('ABBCBCupid bhaiDabangDecember 15 ADecember 15 BFeb 25Holiday C Jackfruit').click();
  await page.getByRole('link', { name: 'BCB' }).click();
  await page.locator('.bcb > .betterdocs-tabgrid-content-inner-wrapper > .betterdocs-category-grid-wrapper > .betterdocs-category-grid-inner-wrapper > article > .betterdocs-single-category-inner > .betterdocs-category-header').first().click();
  await page.locator('.bcb > .betterdocs-tabgrid-content-inner-wrapper > .betterdocs-category-grid-wrapper > .betterdocs-category-grid-inner-wrapper > article > .betterdocs-single-category-inner > .betterdocs-category-header > .betterdocs-category-header-inner > .betterdocs-category-icon > .betterdocs-category-icon-img').first().click();
  await page.getByRole('heading', { name: 'All In All MSF' }).click();
  await page.locator('.bcb > .betterdocs-tabgrid-content-inner-wrapper > .betterdocs-category-grid-wrapper > .betterdocs-category-grid-inner-wrapper > article > .betterdocs-single-category-inner > .betterdocs-body').first().click();
  await page.locator('li').filter({ hasText: '12-Party alliance urges' }).getByRole('img').click();
  await page.getByRole('link', { name: '12-Party alliance urges' }).click();
  await page.locator('#betterdocs-single-main').click();
  await page.getByRole('link', { name: 'B', exact: true }).click();
  await page.getByRole('article').locator('div').filter({ hasText: 'C' }).nth(1).click();
  await page.getByRole('article').locator('img').first().click();
  await page.getByRole('article').locator('div').filter({ hasText: 'C' }).nth(2).click();
  await page.getByRole('article').locator('div').filter({ hasText: 'Explore Button' }).nth(1).click();
  await page.goto('https://betterdocs.msf.qa378.site/multiple-kb-tab/');
  await page.getByRole('link', { name: 'B', exact: true }).click();
  await page.getByRole('link', { name: 'BCB' }).click();
  await page.getByRole('link', { name: 'Explore Button' }).first().click();
  await page.locator('div').filter({ hasText: 'How are you today? All' }).nth(1).click();
});