
import { test, expect } from '@playwright/test';

test.describe('Block-Category=Box-Card', () => {
  // Load the page once before each test
  test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.BASE_URL_MSF}/category-box-card/`);
    });

    //fist three category to check the incidents

  test('Verify First 3 Category', async ({ page }) => {



  await expect(page.locator('#content')).toMatchAriaSnapshot(`- img "betterdocs-category-icon"`);
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- heading "৩য় পক্ষ" [level=2]`);
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- text: /\\d+/`);
  
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- img "betterdocs-category-icon"`);
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- heading "Alif" [level=2]`);
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- text: /\\d+/`);

  await expect(page.locator('#content')).toMatchAriaSnapshot(`- img "betterdocs-category-icon"`);
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- heading "All In All MSF" [level=2]`);
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- text: /\\d+/`);
});

}); 

// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://betterdocs.msf.qa378.site/category-box-card/');
//   await expect(page.locator('#content')).toMatchAriaSnapshot(`
//     - link "betterdocs-category-icon ৩য় পক্ষ 2":
//       - img "betterdocs-category-icon"
//       - heading "৩য় পক্ষ" [level=2]
//     - link "betterdocs-category-icon Alif 1":
//       - img "betterdocs-category-icon"
//       - heading "Alif" [level=2]
//     - link /All In All MSF \\d+/:
//       - heading "All In All MSF" [level=2]
//     - link "API & Development 2":
//       - heading "API & Development" [level=2]
//     - link "betterdocs-category-icon Architecture & Infastructure 5":
//       - img "betterdocs-category-icon"
//       - heading "Architecture & Infastructure" [level=2]
//     - link "betterdocs-category-icon Architektur Infrastruktur 3":
//       - img "betterdocs-category-icon"
//       - heading "Architektur Infrastruktur" [level=2]
//     - link "betterdocs-category-icon Ba 1":
//       - img "betterdocs-category-icon"
//       - heading "Ba" [level=2]
//     - link /betterdocs-category-icon Benefit, Reward, Voucher & Promotion Management \\d+/:
//       - img "betterdocs-category-icon"
//       - heading "Benefit, Reward, Voucher & Promotion Management" [level=2]
//     - link "C 1":
//       - heading "C" [level=2]
//     `);
//   await expect(page.locator('#content')).toMatchAriaSnapshot(`
//     - img "betterdocs-category-icon"
//     - heading "৩য় পক্ষ" [level=2]
//     - text: "2"
//     `);
//   await expect(page.locator('#content')).toMatchAriaSnapshot(`- img "betterdocs-category-icon"`);
//   await expect(page.locator('#content')).toMatchAriaSnapshot(`- heading "৩য় পক্ষ" [level=2]`);
//   await expect(page.locator('#content')).toMatchAriaSnapshot(`- text: "2"`);
//   await expect(page.locator('#content')).toMatchAriaSnapshot(`- text: "2"`);
//   await expect(page.locator('#content')).toMatchAriaSnapshot(`- img "betterdocs-category-icon"`);
//   await expect(page.locator('#content')).toMatchAriaSnapshot(`- heading "Alif" [level=2]`);
//   await expect(page.locator('#content')).toMatchAriaSnapshot(`- text: "1"`);
//   await expect(page.locator('#content')).toMatchAriaSnapshot(``);
//   await expect(page.locator('#content')).toMatchAriaSnapshot(`- heading "All In All MSF" [level=2]`);
//   await expect(page.locator('#content')).toMatchAriaSnapshot(`- heading "All In All MSF" [level=2]`);
//   await expect(page.locator('#content')).toMatchAriaSnapshot(`- text: /\\d+/`);