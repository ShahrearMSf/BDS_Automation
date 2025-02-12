
import { test, expect } from '@playwright/test';

test.describe('Block-Category=Box-Classic', () => {
  // Load the page once before each test
  test.beforeEach(async ({ page }) => {
    await page.goto('https://betterdocs.msf.qa378.site/category-box-classic/');
    });

    //fist row to check the incidents

  test('Verify First 3 Category', async ({ page }) => {

  await expect(page.locator('#content')).toMatchAriaSnapshot(`- img`);
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- heading "৩য় পক্ষ" [level=2]`);
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- text: /\\d+ Docs/`);
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- img`);
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- heading "Alif" [level=2]`);
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- text: /\\d+ Docs/`);
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- img`);
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- heading "All In All MSF" [level=2]`);
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- text: /\\d+ Docs/`);
  
});

});