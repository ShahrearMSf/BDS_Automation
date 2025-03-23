import { test, expect } from '@playwright/test';

test.describe('Multiple KB Tab Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.BASE_URL_MSF}/multiple-kb-tab/`);
  });

  test('Click on BCB link', async ({ page }) => {
    await page.getByRole('link', { name: 'BCB' }).click();
  });

  test('Click on text elements', async ({ page }) => {
    await page.getByText('ABBCBCupid bhaiDabangDecember 15 ADecember 15 BFeb 25Holiday C Jackfruit').click();
  });

  test('Click on BCB category header', async ({ page }) => {
    await page.getByRole('link', { name: 'BCB' }).click();
    await page.locator('.bcb > .betterdocs-tabgrid-content-inner-wrapper > .betterdocs-category-grid-wrapper > .betterdocs-category-grid-inner-wrapper > article > .betterdocs-single-category-inner > .betterdocs-category-header').first().click();
  });

//   test('Click on first category icon', async ({ page }) => {
//     await page.locator('.bcb > .betterdocs-tabgrid-content-inner-wrapper > .betterdocs-category-grid-wrapper > .betterdocs-category-grid-inner-wrapper > article > .betterdocs-single-category-inner > .betterdocs-category-header > .betterdocs-category-header-inner > .betterdocs-category-icon > .betterdocs-category-icon-img').first().click();
//   });

//   test('Click on "All In All MSF" heading', async ({ page }) => {
//     await page.getByRole('heading', { name: 'All In All MSF' }).click();
//   });

//   test('Click inside category body', async ({ page }) => {
//     await page.locator('.bcb > .betterdocs-tabgrid-content-inner-wrapper > .betterdocs-category-grid-wrapper > .betterdocs-category-grid-inner-wrapper > article > .betterdocs-single-category-inner > .betterdocs-body').first().click();
//   });

//   test('Open "12-Party alliance urges" article', async ({ page }) => {
//     await page.locator('li').filter({ hasText: '12-Party alliance urges' }).getByRole('img').click();
//     await page.getByRole('link', { name: '12-Party alliance urges' }).click();
//   });

//   test('Click on main content area', async ({ page }) => {
//     await page.locator('#betterdocs-single-main').click();
//   });

  test('Click on link "B"', async ({ page }) => {
    await page.getByRole('link', { name: 'B', exact: true }).click();
  });

  test('Click on second "C" div in an article', async ({ page }) => {
    await page.getByRole('link', { name: 'B', exact: true }).click();
    await page.getByRole('article').locator('div').filter({ hasText: 'C' }).nth(1).click();
  });

//   test('Click on first image in an article', async ({ page }) => {
//     await page.getByRole('article').locator('img').first().click();
//   });

//   test('Click on third "C" div in an article', async ({ page }) => {
//     await page.getByRole('article').locator('div').filter({ hasText: 'C' }).nth(2).click();
//   });

//   test('Click on second "Explore Button" in an article', async ({ page }) => {
//     await page.getByRole('article').locator('div').filter({ hasText: 'Explore Button' }).nth(1).click();
//   });


//   test('Click on first "Explore Button" link', async ({ page }) => {
//     await page.getByRole('link', { name: 'Explore Button' }).first().click();
//     await page.locator('div').filter({ hasText: 'How are you today? All' }).nth(1).click();
//   });
});
