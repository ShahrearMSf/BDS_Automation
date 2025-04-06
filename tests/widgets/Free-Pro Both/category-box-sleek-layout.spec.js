//test pass screenshot https://d.pr/i/DK0rxW

import { test, expect } from '@playwright/test';

test.describe('Archive List Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.BASE_URL_MSF}/category-box-sleek-l/`);
  });
  

test('check aria snapshot for category box', async ({ page }) => {
  await expect(page.locator('#el-betterdocs-cat-box-bdd509c')).toMatchAriaSnapshot(`
    - 'link /Alif 1 Hi \\| Astaqfirullah 4 Ones Allahu Akbar: February 5, \\d+/':
      - img
      - heading "Alif" [level=2]
      - paragraph: "/Allahu Akbar: February 5, \\\\d+/"
    - 'link /All In All MSF Astaqfirullah \\d+ Ones Allahu Akbar: March \\d+, \\d+/':
      - heading "All In All MSF" [level=2]
      - paragraph: "/Allahu Akbar: March \\\\d+, \\\\d+/"
    - 'link /API & Development Astaqfirullah 2 Ones Allahu Akbar: October \\d+, \\d+/':
      - heading "API & Development" [level=2]
      - paragraph: "/Allahu Akbar: October \\\\d+, \\\\d+/"
    - 'link /Architecture & Infastructure Astaqfirullah 4 Ones Allahu Akbar: December 9, \\d+/':
      - img
      - heading "Architecture & Infastructure" [level=2]
      - paragraph: "/Allahu Akbar: December 9, \\\\d+/"
    - 'link /Benefit, Reward, Voucher & Promotion Management Astaqfirullah \\d+ Ones Allahu Akbar: September \\d+, \\d+/':
      - img
      - heading "Benefit, Reward, Voucher & Promotion Management" [level=2]
      - paragraph: "/Allahu Akbar: September \\\\d+, \\\\d+/"
    - 'link /C Astaqfirullah 2 Ones Allahu Akbar: November \\d+, \\d+/':
      - heading "C" [level=2]
      - paragraph: "/Allahu Akbar: November \\\\d+, \\\\d+/"
    - 'link /Category December \\d+ Astaqfirullah 2 Ones Allahu Akbar: December \\d+, \\d+/':
      - img
      - heading /Category December \\d+/ [level=2]
      - paragraph: "/Allahu Akbar: December \\\\d+, \\\\d+/"
    - 'link /Config & urations Astaqfirullah 2 Ones Allahu Akbar: September 9, \\d+/':
      - heading "Config & urations" [level=2]
      - paragraph: "/Allahu Akbar: September 9, \\\\d+/"
    - 'link /December \\d+ Astaqfirullah 1 Alhamdulillah Allahu Akbar: September 9, \\d+/':
      - img
      - heading /December \\d+/ [level=2]
      - paragraph: "/Allahu Akbar: September 9, \\\\d+/"
    - 'link /December \\d+ Astaqfirullah 2 Ones Allahu Akbar: December \\d+, \\d+/':
      - img
      - heading /December \\d+/ [level=2]
      - paragraph: "/Allahu Akbar: December \\\\d+, \\\\d+/"
    - 'link /December \\d+ \\d+ Astaqfirullah 2 Ones Allahu Akbar: September 9, \\d+/':
      - heading /December \\d+ \\d+/ [level=2]
      - paragraph: "/Allahu Akbar: September 9, \\\\d+/"
    - 'link /Einrichtungsprozess Astaqfirullah 2 Ones Allahu Akbar: November 6, \\d+/':
      - heading "Einrichtungsprozess" [level=2]
      - paragraph: "/Allahu Akbar: November 6, \\\\d+/"
    - 'link /Feb 6 Astaqfirullah 2 Ones Allahu Akbar: February 6, \\d+/':
      - img
      - heading "Feb 6" [level=2]
      - paragraph: "/Allahu Akbar: February 6, \\\\d+/"
    - 'link /Getting Started Astaqfirullah 2 Ones Allahu Akbar: December \\d+, \\d+/':
      - heading "Getting Started" [level=2]
      - paragraph: "/Allahu Akbar: December \\\\d+, \\\\d+/"
    - 'link /hello Astaqfirullah 2 Ones Allahu Akbar: September \\d+, \\d+/':
      - heading "hello" [level=2]
      - paragraph: "/Allahu Akbar: September \\\\d+, \\\\d+/"
    - 'link /hiwf Astaqfirullah 2 Ones Allahu Akbar: November \\d+, \\d+/':
      - img
      - heading "hiwf" [level=2]
      - paragraph: "/Allahu Akbar: November \\\\d+, \\\\d+/"
    - 'link /Installation Astaqfirullah 2 Ones Allahu Akbar: September 9, \\d+/':
      - heading "Installation" [level=2]
      - paragraph: "/Allahu Akbar: September 9, \\\\d+/"
    - 'link /Jan \\d+ Astaqfirullah 1 Alhamdulillah Allahu Akbar: January \\d+, \\d+/':
      - img
      - heading /Jan \\d+/ [level=2]
      - paragraph: "/Allahu Akbar: January \\\\d+, \\\\d+/"
    - 'link /January \\d+ Astaqfirullah 3 Ones Allahu Akbar: February \\d+, \\d+/':
      - img
      - heading /January \\d+/ [level=2]
      - paragraph: "/Allahu Akbar: February \\\\d+, \\\\d+/"
    - 'link /Member Management Astaqfirullah 2 Ones Allahu Akbar: September 9, \\d+/':
      - img
      - heading "Member Management" [level=2]
      - paragraph: "/Allahu Akbar: September 9, \\\\d+/"
    `);
});

test('check aria snapshot for img', async ({ page }) => {
  await expect(page.locator('#el-betterdocs-cat-box-bdd509c')).toMatchAriaSnapshot(`- img`);
});

test('check aria snapshot for heading "Alif"', async ({ page }) => {
  await expect(page.locator('#el-betterdocs-cat-box-bdd509c')).toMatchAriaSnapshot(`- heading "Alif" [level=2]`);
});

test('check aria snapshot for text: Astaqfirullah 4 Ones', async ({ page }) => {
  await expect(page.locator('#el-betterdocs-cat-box-bdd509c')).toMatchAriaSnapshot(`- text: Astaqfirullah 4 Ones`);
});

test('check aria snapshot for paragraph', async ({ page }) => {
  await expect(page.locator('#el-betterdocs-cat-box-bdd509c')).toMatchAriaSnapshot(`- paragraph: "/Allahu Akbar: February 5, \\\\d+/"`);
});

test('navigate to all in all msf page', async ({ page }) => {
  await page.getByRole('link', { name: 'All In All MSF Astaqfirullah' }).click();
  await page.getByRole('heading', { name: 'How are you today?' }).click();
});

test('navigate using text and filter', async ({ page }) => {
  await page.getByRole('link', { name: 'All In All MSF Astaqfirullah' }).click();
  await page.locator('form').filter({ hasText: 'All Categories January' }).click();
  await page.getByText('Popular Search mercedeshowmerhow momentsmerce').click();
  await page.locator('#main div').filter({ hasText: 'All In All MSF 16 docs' }).nth(1).click();
});

test('navigate to betterdocs full sidebar and skip content', async ({ page }) => {
  await page.getByRole('link', { name: 'All In All MSF Astaqfirullah' }).click();
  await page.locator('#betterdocs-full-sidebar-left div').filter({ hasText: '12-Party alliance urges' }).nth(4).click();
  await page.goto('https://betterdocs.msf.qa378.site/docs/bcb/allinallmsf/');
  await page.getByText('-Party alliance urges government to announce election roadmap Last Updated:').click();
  await page.goto('https://betterdocs.msf.qa378.site/category-box-sleek-l/');
});

});


// // will decorate next day
// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto(`${process.env.BASE_URL_MSF}/category-box-sleek-l/`);
//   await expect(page.locator('#el-betterdocs-cat-box-bdd509c')).toMatchAriaSnapshot(`
//     - 'link /Alif 1 Hi \\| Astaqfirullah 4 Ones Allahu Akbar: February 5, \\d+/':
//       - img
//       - heading "Alif" [level=2]
//       - paragraph: "/Allahu Akbar: February 5, \\\\d+/"
//     - 'link /All In All MSF Astaqfirullah \\d+ Ones Allahu Akbar: March \\d+, \\d+/':
//       - heading "All In All MSF" [level=2]
//       - paragraph: "/Allahu Akbar: March \\\\d+, \\\\d+/"
//     - 'link /API & Development Astaqfirullah 2 Ones Allahu Akbar: October \\d+, \\d+/':
//       - heading "API & Development" [level=2]
//       - paragraph: "/Allahu Akbar: October \\\\d+, \\\\d+/"
//     - 'link /Architecture & Infastructure Astaqfirullah 4 Ones Allahu Akbar: December 9, \\d+/':
//       - img
//       - heading "Architecture & Infastructure" [level=2]
//       - paragraph: "/Allahu Akbar: December 9, \\\\d+/"
//     - 'link /Benefit, Reward, Voucher & Promotion Management Astaqfirullah \\d+ Ones Allahu Akbar: September \\d+, \\d+/':
//       - img
//       - heading "Benefit, Reward, Voucher & Promotion Management" [level=2]
//       - paragraph: "/Allahu Akbar: September \\\\d+, \\\\d+/"
//     - 'link /C Astaqfirullah 2 Ones Allahu Akbar: November \\d+, \\d+/':
//       - heading "C" [level=2]
//       - paragraph: "/Allahu Akbar: November \\\\d+, \\\\d+/"
//     - 'link /Category December \\d+ Astaqfirullah 2 Ones Allahu Akbar: December \\d+, \\d+/':
//       - img
//       - heading /Category December \\d+/ [level=2]
//       - paragraph: "/Allahu Akbar: December \\\\d+, \\\\d+/"
//     - 'link /Config & urations Astaqfirullah 2 Ones Allahu Akbar: September 9, \\d+/':
//       - heading "Config & urations" [level=2]
//       - paragraph: "/Allahu Akbar: September 9, \\\\d+/"
//     - 'link /December \\d+ Astaqfirullah 1 Alhamdulillah Allahu Akbar: September 9, \\d+/':
//       - img
//       - heading /December \\d+/ [level=2]
//       - paragraph: "/Allahu Akbar: September 9, \\\\d+/"
//     - 'link /December \\d+ Astaqfirullah 2 Ones Allahu Akbar: December \\d+, \\d+/':
//       - img
//       - heading /December \\d+/ [level=2]
//       - paragraph: "/Allahu Akbar: December \\\\d+, \\\\d+/"
//     - 'link /December \\d+ \\d+ Astaqfirullah 2 Ones Allahu Akbar: September 9, \\d+/':
//       - heading /December \\d+ \\d+/ [level=2]
//       - paragraph: "/Allahu Akbar: September 9, \\\\d+/"
//     - 'link /Einrichtungsprozess Astaqfirullah 2 Ones Allahu Akbar: November 6, \\d+/':
//       - heading "Einrichtungsprozess" [level=2]
//       - paragraph: "/Allahu Akbar: November 6, \\\\d+/"
//     - 'link /Feb 6 Astaqfirullah 2 Ones Allahu Akbar: February 6, \\d+/':
//       - img
//       - heading "Feb 6" [level=2]
//       - paragraph: "/Allahu Akbar: February 6, \\\\d+/"
//     - 'link /Getting Started Astaqfirullah 2 Ones Allahu Akbar: December \\d+, \\d+/':
//       - heading "Getting Started" [level=2]
//       - paragraph: "/Allahu Akbar: December \\\\d+, \\\\d+/"
//     - 'link /hello Astaqfirullah 2 Ones Allahu Akbar: September \\d+, \\d+/':
//       - heading "hello" [level=2]
//       - paragraph: "/Allahu Akbar: September \\\\d+, \\\\d+/"
//     - 'link /hiwf Astaqfirullah 2 Ones Allahu Akbar: November \\d+, \\d+/':
//       - img
//       - heading "hiwf" [level=2]
//       - paragraph: "/Allahu Akbar: November \\\\d+, \\\\d+/"
//     - 'link /Installation Astaqfirullah 2 Ones Allahu Akbar: September 9, \\d+/':
//       - heading "Installation" [level=2]
//       - paragraph: "/Allahu Akbar: September 9, \\\\d+/"
//     - 'link /Jan \\d+ Astaqfirullah 1 Alhamdulillah Allahu Akbar: January \\d+, \\d+/':
//       - img
//       - heading /Jan \\d+/ [level=2]
//       - paragraph: "/Allahu Akbar: January \\\\d+, \\\\d+/"
//     - 'link /January \\d+ Astaqfirullah 3 Ones Allahu Akbar: February \\d+, \\d+/':
//       - img
//       - heading /January \\d+/ [level=2]
//       - paragraph: "/Allahu Akbar: February \\\\d+, \\\\d+/"
//     - 'link /Member Management Astaqfirullah 2 Ones Allahu Akbar: September 9, \\d+/':
//       - img
//       - heading "Member Management" [level=2]
//       - paragraph: "/Allahu Akbar: September 9, \\\\d+/"
//     `);
//   await expect(page.locator('#el-betterdocs-cat-box-bdd509c')).toMatchAriaSnapshot(`- img`);
//   await expect(page.locator('#el-betterdocs-cat-box-bdd509c')).toMatchAriaSnapshot(`- heading "Alif" [level=2]`);
//   // await expect(page.locator('#el-betterdocs-cat-box-bdd509c')).toMatchAriaSnapshot(`- text: 1 Hi`);
//   await expect(page.locator('#el-betterdocs-cat-box-bdd509c')).toMatchAriaSnapshot(`- text: Astaqfirullah 4 Ones`);
//   await expect(page.locator('#el-betterdocs-cat-box-bdd509c')).toMatchAriaSnapshot(`- paragraph: "/Allahu Akbar: February 5, \\\\d+/"`);
//   await page.getByRole('link', { name: 'All In All MSF Astaqfirullah' }).click();
//   await page.getByRole('heading', { name: 'How are you today?' }).click();
//   await page.locator('form').filter({ hasText: 'All Categories January' }).click();
//   await page.getByText('Popular Search mercedeshowmerhow momentsmerce').click();
//   await page.locator('#main div').filter({ hasText: 'All In All MSF 16 docs' }).nth(1).click();
//   await page.getByText('Search...⌘ K').click();
//   await page.getByText('ESC').click();
//   await page.getByText('Skip to content BetterDocs by').press('Escape');
//   await page.locator('#betterdocs-full-sidebar-left div').filter({ hasText: '12-Party alliance urges' }).nth(4).click();
//   await page.goto('https://betterdocs.msf.qa378.site/docs/bcb/allinallmsf/');
//   await page.getByText('-Party alliance urges government to announce election roadmap Last Updated:').click();
//   await page.goto('https://betterdocs.msf.qa378.site/category-box-sleek-l/');
// });