import { test, expect } from '@playwright/test';

// Grouping related tests together
test.describe('Category Grid Page Tests', () => {
  let page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('https://betterdocs.msf.qa378.site/category-grid/');
    await page.waitForLoadState('domcontentloaded');
  });

  

  test('Click on first category and verify navigation', async () => {
    await page.locator('.betterdocs-category-header').first().click();
    await expect(page).toHaveURL(/category-grid/);
  });

  test('Verify first article content', async () => {
    const firstArticle = page.locator('article').first();
    await expect(firstArticle.locator('img')).toBeVisible();
    await expect(firstArticle.locator('h2')).toContainText(/January \d+/);
    await expect(firstArticle.locator('ul li')).toHaveCount(3);
  });

  
  test.afterAll(async () => {
    await page.close();
  });
  
});
