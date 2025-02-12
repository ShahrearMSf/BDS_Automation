import { test, expect } from '@playwright/test';

// Grouping related tests together
test.describe('Category Grid Layout 1 Tests', () => {
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

  test('Verify first category content', async () => {
    const firstArticle = page.locator('article').first();
    await expect(firstArticle.locator('img')).toBeVisible();
    await expect(firstArticle.locator('h2')).toContainText(/January \d+/);
    await expect(page.locator('#content')).toMatchAriaSnapshot(`- link "Does your platform include an automatic promotion deployment tool that is triggered by customer actions or life cycle milestones? If so, please describe how this tool functions and the types of triggers that can be used."`);
    await expect(firstArticle.locator('ul li')).toHaveCount(3);
  });

  test('Verify Explore More Button', async () => {
    const firstArticle = page.locator('article').first();
    await expect(page.locator('#content')).toMatchAriaSnapshot(`- link "Explore More "`);
    await page.locator('article').filter({ hasText: 'January 20 3 Does your' }).getByRole('link').nth(3).click();
  });
  
  test.afterAll(async () => {
    await page.close();
  });
  
});
