import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://betterdocs.msf.shahrear.site/category-box/');


  await expect(page.locator('#content')).toMatchAriaSnapshot(`
    - main:
      - heading "Category Box Sleek" [level=1]
      - paragraph
      - paragraph
      - 'link /৩য় পক্ষ 2 Docs Last Updated: September 9, \\d+/':
        - img
        - heading "৩য় পক্ষ" [level=2]
        - paragraph: "/Last Updated: September 9, \\\\d+/"
      - 'link /Alif 1 Sub Category \\| 1 Doc Last Updated: November \\d+, \\d+/':
        - img
        - heading "Alif" [level=2]
        - paragraph: "/Last Updated: November \\\\d+, \\\\d+/"
      - 'link /All In All MSF \\d+ Docs Last Updated: February 2, \\d+/':
        - heading "All In All MSF" [level=2]
        - paragraph: "/Last Updated: February 2, \\\\d+/"
      - 'link /API & Development 2 Docs Last Updated: December 7, \\d+/':
        - heading "API & Development" [level=2]
        - paragraph: "/Last Updated: December 7, \\\\d+/"
      - 'link /Architecture & Infastructure 5 Docs Last Updated: December 9, \\d+/':
        - img
        - heading "Architecture & Infastructure" [level=2]
        - paragraph: "/Last Updated: December 9, \\\\d+/"
      - 'link /Architektur Infrastruktur 3 Docs Last Updated: November \\d+, \\d+/':
        - img
        - heading "Architektur Infrastruktur" [level=2]
        - paragraph: "/Last Updated: November \\\\d+, \\\\d+/"
      - 'link /Ba 1 Doc Last Updated: November \\d+, \\d+/':
        - img
        - heading "Ba" [level=2]
        - paragraph: "/Last Updated: November \\\\d+, \\\\d+/"
      - 'link /Benefit, Reward, Voucher & Promotion Management \\d+ Docs Last Updated: September \\d+, \\d+/':
        - img
        - heading "Benefit, Reward, Voucher & Promotion Management" [level=2]
        - paragraph: "/Last Updated: September \\\\d+, \\\\d+/"
      - 'link /C 1 Doc Last Updated: November \\d+, \\d+/':
        - heading "C" [level=2]
        - paragraph: "/Last Updated: November \\\\d+, \\\\d+/"
      - 'link /Category December \\d+ 3 Docs Last Updated: December \\d+, \\d+/':
        - img
        - heading /Category December \\d+/ [level=2]
        - paragraph: "/Last Updated: December \\\\d+, \\\\d+/"
      - 'link /Child 1 2 Docs Last Updated: September 9, \\d+/':
        - heading "Child 1" [level=2]
        - paragraph: "/Last Updated: September 9, \\\\d+/"
      - 'link /Child 2 2 Docs Last Updated: December 7, \\d+/':
        - heading "Child 2" [level=2]
        - paragraph: "/Last Updated: December 7, \\\\d+/"
      - 'link /Config & urations 2 Docs Last Updated: September 9, \\d+/':
        - heading "Config & urations" [level=2]
        - paragraph: "/Last Updated: September 9, \\\\d+/"
      - 'link /December \\d+ 1 Doc Last Updated: December \\d+, \\d+/':
        - img
        - heading /December \\d+/ [level=2]
        - paragraph: "/Last Updated: December \\\\d+, \\\\d+/"
      - 'link /Einrichtungsprozess 1 Doc Last Updated: November 6, \\d+/':
        - heading "Einrichtungsprozess" [level=2]
        - paragraph: "/Last Updated: November 6, \\\\d+/"
      - 'link /Getting Started 3 Docs Last Updated: December \\d+, \\d+/':
        - heading "Getting Started" [level=2]
        - paragraph: "/Last Updated: December \\\\d+, \\\\d+/"
      - 'link /hello 3 Docs Last Updated: September \\d+, \\d+/':
        - heading "hello" [level=2]
        - paragraph: "/Last Updated: September \\\\d+, \\\\d+/"
      - 'link /hiwf 1 Doc Last Updated: September 9, \\d+/':
        - img
        - heading "hiwf" [level=2]
        - paragraph: "/Last Updated: September 9, \\\\d+/"
      - 'link /Installation 3 Docs Last Updated: September 9, \\d+/':
        - heading "Installation" [level=2]
        - paragraph: "/Last Updated: September 9, \\\\d+/"
      - 'link /January \\d+ 3 Docs Last Updated: January \\d+, \\d+/':
        - img
        - heading /January \\d+/ [level=2]
        - paragraph: "/Last Updated: January \\\\d+, \\\\d+/"
      - paragraph
      - paragraph
      - paragraph
      - paragraph
      - paragraph
      - paragraph
    `);
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- img`);
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- heading "৩য় পক্ষ" [level=2]`);
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- text: 2 Docs`);
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- paragraph: "/Last Updated: September 9, \\\\d+/"`);
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- img`);
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- heading "Alif" [level=2]`);
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- text: 1 Sub Category | 1 Doc`);
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- paragraph: "/Last Updated: November \\\\d+, \\\\d+/"`);
  await expect(page.locator('#content')).toMatchAriaSnapshot(``);
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- heading "All In All MSF" [level=2]`);
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- text: /\\d+ Docs/`);
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- paragraph: "/Last Updated: February 2, \\\\d+/"`);
  await expect(page.locator('#content')).toMatchAriaSnapshot(``);
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- heading "API & Development" [level=2]`);
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- text: 2 Docs`);
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- paragraph: "/Last Updated: December 7, \\\\d+/"`);
});






// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://betterdocs.msf.shahrear.site/category-box/');
  
//   await expect(page.locator('#content')).toMatchAriaSnapshot(`
//     - main:
//       - heading "Category Box Sleek" [level=1]
//       - paragraph
//       - paragraph
//       - 'link /৩য় পক্ষ 2 Docs Last Updated: September 9, \\d+/':
//         - img
//         - heading "৩য় পক্ষ" [level=2]
//         - paragraph: "/Last Updated: September 9, \\\\d+/"
//       - 'link /Alif 1 Sub Category \\| 1 Doc Last Updated: November \\d+, \\d+/':
//         - img
//         - heading "Alif" [level=2]
//         - paragraph: "/Last Updated: November \\\\d+, \\\\d+/"
//       - 'link /All In All MSF \\d+ Docs Last Updated: February 2, \\d+/':
//         - heading "All In All MSF" [level=2]
//         - paragraph: "/Last Updated: February 2, \\\\d+/"
//       - 'link /API & Development 2 Docs Last Updated: December 7, \\d+/':
//         - heading "API & Development" [level=2]
//         - paragraph: "/Last Updated: December 7, \\\\d+/"
//       - 'link /Architecture & Infastructure 5 Docs Last Updated: December 9, \\d+/':
//         - img
//         - heading "Architecture & Infastructure" [level=2]
//         - paragraph: "/Last Updated: December 9, \\\\d+/"
//       - 'link /Architektur Infrastruktur 3 Docs Last Updated: November \\d+, \\d+/':
//         - img
//         - heading "Architektur Infrastruktur" [level=2]
//         - paragraph: "/Last Updated: November \\\\d+, \\\\d+/"
//       - 'link /Ba 1 Doc Last Updated: November \\d+, \\d+/':
//         - img
//         - heading "Ba" [level=2]
//         - paragraph: "/Last Updated: November \\\\d+, \\\\d+/"
//       - 'link /Benefit, Reward, Voucher & Promotion Management \\d+ Docs Last Updated: September \\d+, \\d+/':
//         - img
//         - heading "Benefit, Reward, Voucher & Promotion Management" [level=2]
//         - paragraph: "/Last Updated: September \\\\d+, \\\\d+/"
//       - 'link /C 1 Doc Last Updated: November \\d+, \\d+/':
//         - heading "C" [level=2]
//         - paragraph: "/Last Updated: November \\\\d+, \\\\d+/"
//       - 'link /Category December \\d+ 3 Docs Last Updated: December \\d+, \\d+/':
//         - img
//         - heading /Category December \\d+/ [level=2]
//         - paragraph: "/Last Updated: December \\\\d+, \\\\d+/"
//       - 'link /Child 1 2 Docs Last Updated: September 9, \\d+/':
//         - heading "Child 1" [level=2]
//         - paragraph: "/Last Updated: September 9, \\\\d+/"
//       - 'link /Child 2 2 Docs Last Updated: December 7, \\d+/':
//         - heading "Child 2" [level=2]
//         - paragraph: "/Last Updated: December 7, \\\\d+/"
//       - 'link /Config & urations 2 Docs Last Updated: September 9, \\d+/':
//         - heading "Config & urations" [level=2]
//         - paragraph: "/Last Updated: September 9, \\\\d+/"
//       - 'link /December \\d+ 1 Doc Last Updated: December \\d+, \\d+/':
//         - img
//         - heading /December \\d+/ [level=2]
//         - paragraph: "/Last Updated: December \\\\d+, \\\\d+/"
//       - 'link /Einrichtungsprozess 1 Doc Last Updated: November 6, \\d+/':
//         - heading "Einrichtungsprozess" [level=2]
//         - paragraph: "/Last Updated: November 6, \\\\d+/"
//       - 'link /Getting Started 3 Docs Last Updated: December \\d+, \\d+/':
//         - heading "Getting Started" [level=2]
//         - paragraph: "/Last Updated: December \\\\d+, \\\\d+/"
//       - 'link /hello 3 Docs Last Updated: September \\d+, \\d+/':
//         - heading "hello" [level=2]
//         - paragraph: "/Last Updated: September \\\\d+, \\\\d+/"
//       - 'link /hiwf 1 Doc Last Updated: September 9, \\d+/':
//         - img
//         - heading "hiwf" [level=2]
//         - paragraph: "/Last Updated: September 9, \\\\d+/"
//       - 'link /Installation 3 Docs Last Updated: September 9, \\d+/':
//         - heading "Installation" [level=2]
//         - paragraph: "/Last Updated: September 9, \\\\d+/"
//       - 'link /January \\d+ 3 Docs Last Updated: January \\d+, \\d+/':
//         - img
//         - heading /January \\d+/ [level=2]
//         - paragraph: "/Last Updated: January \\\\d+, \\\\d+/"
//       - paragraph
//       - paragraph
//       - paragraph
//       - paragraph
//       - paragraph
//       - paragraph
//     `);
// });
