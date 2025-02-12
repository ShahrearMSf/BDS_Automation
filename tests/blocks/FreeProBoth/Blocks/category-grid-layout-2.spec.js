import { test, expect } from '@playwright/test';

test.describe('Category Grid L2 Page Tests', () => {
  let page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('https://betterdocs.msf.qa378.site/category-grid-l2/');
    await page.waitForLoadState('domcontentloaded');
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('Click on first category in grid', async () => {
    await page.locator('.betterdocs-category-grid-wrapper').first().click();
    await expect(page.locator('#content')).toContainText('2');
  });

  test('Click on heading named "৩য় পক্ষ"', async () => {
    await page.getByRole('heading', { name: '৩য় পক্ষ' }).first().click();
    await expect(page).toHaveURL(/category-grid-l2/);
  });

  test('Click on first body content', async () => {
    await page.locator('.betterdocs-body').first().click();
  });

 

  test('Verify "How can your system surface" link is clickable and redirects', async () => {
    // Locate the link using its role and name
    const benefitsLink = page.locator('a', { name: 'How can your system surface' }).first();

    // Wait for the link to be visible and enabled and clickable
    await expect(benefitsLink).toBeVisible();
    await expect(benefitsLink).toBeEnabled();
    await page.getByRole('link', { name: 'How can your system surface' }).first().click();

});

//due to network issues following tests can fail, if these fail, then please run those separately

  test('Click on first visible icon with class "far"', async () => {
    const icon = page.locator('.far').first();
    await expect(icon).toBeVisible();
    await icon.click();
  });


  test('Click on first "Explore More"', async () => {
    await page.locator('.docs-cat-link-btn').first().click();
  });

  test('Click on footer element', async () => {
    await page.locator('.betterdocs-footer').first().click();
  });
});











// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://betterdocs.msf.qa378.site/category-grid-l2/');
//   await page.locator('.betterdocs-category-grid-wrapper').first().click();
//   await expect(page.locator('#content')).toMatchAriaSnapshot(`- text: "2"`);
//   await page.getByRole('heading', { name: '৩য় পক্ষ' }).first().click();
//   await page.locator('.betterdocs-body').first().click();
//   await page.locator('.far').first().click();
//   await page.getByRole('link', { name: 'How can your system surface' }).first().click();
//   await page.locator('.docs-cat-link-btn').first().click();
//   await page.goto('https://betterdocs.msf.qa378.site/category-grid-l2/');
//   await page.locator('.betterdocs-footer').first().click();
// });