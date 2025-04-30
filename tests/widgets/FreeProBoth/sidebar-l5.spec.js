import { test, expect } from '@playwright/test';

test.describe('Widget-sidebar Layout 5', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.BASE_URL_MSF}/sidebar-layout-5/`);

});

test('test whole section', async ({ page }) => {
  await expect(page.locator('#betterdocs-full-sidebar-left')).toMatchAriaSnapshot(`
    - img
    - text: Search... ⌘ K
    - article:
      - img
      - heading /January \\d+/ [level=2]
      - text: "2"
    - article:
      - heading "Parent" [level=2]
      - text: "8"
    - article:
      - img
      - heading "Program Management" [level=2]
      - text: /\\d+/
    - article:
      - img
      - heading "ব্যবহারকারী ও প্রশাসন" [level=2]
      - text: "4"
    - article:
      - img
      - heading "Other Salesforce Clouds" [level=2]
      - text: "3"
    - article:
      - img
      - heading "hiwf" [level=2]
      - text: "2"
    - article:
      - heading "টেস্ট জুন" [level=2]
      - text: "3"
    - article:
      - heading /September Ends \\d+/ [level=2]
      - text: "2"
    - article:
      - heading "Setup Process" [level=2]
      - text: "4"
    - article:
      - img
      - heading "Architektur Infrastruktur" [level=2]
      - text: "3"
    - article:
      - heading "hello" [level=2]
      - text: "2"
    - article:
      - img
      - heading "স্থাপত্য ও অবকাঠামো" [level=2]
      - text: "2"
    - article:
      - img
      - heading "মার্কেটার প্রয়োজন" [level=2]
      - text: "2"
    - article:
      - img
      - heading /December \\d+/ [level=2]
      - text: "3"
    - article:
      - img
      - heading "Third Party" [level=2]
      - text: "6"
    - article:
      - img
      - heading "Alif" [level=2]
      - text: "4"
    - article:
      - img
      - heading "সুবিধা, পুরস্কার, ভাউচার এবং প্রচার ব্যবস্থাপনা" [level=2]
      - text: "3"
    - article:
      - img
      - heading "Benefit, Reward, Voucher & Promotion Management" [level=2]
      - text: /\\d+/
    - article:
      - heading "Einrichtungsprozess" [level=2]
      - text: "2"
    - article:
      - img
      - heading "Uncategorized" [level=2]
      - text: "4"
    - article:
      - img
      - heading "hi" [level=2]
      - text: "2"
    - article:
      - heading "Config & urations" [level=2]
      - text: "2"
    - article:
      - heading /September \\d+/ [level=2]
      - text: "1"
    - article:
      - img
      - heading "Dec 8" [level=2]
      - text: "1"
    - article:
      - img
      - heading /December 8, \\d+/ [level=2]
      - text: "2"
    - article:
      - heading "শাহরিয়ার" [level=2]
      - text: "2"
    - article:
      - img
      - heading /Category December \\d+/ [level=2]
      - text: "2"
    - article:
      - img
      - heading "মোবাইল" [level=2]
      - text: "2"
    - article:
      - img
      - heading "Architecture & Infastructure" [level=2]
      - text: "4"
    - article:
      - img
      - heading "সদস্য ব্যবস্থাপনা" [level=2]
      - text: "2"
    - article:
      - heading "Getting Started" [level=2]
      - text: "2"
    - article:
      - heading "Shahrear" [level=2]
      - text: "3"
    - article:
      - img
      - heading "Member Management" [level=2]
      - text: "2"
    - article:
      - heading "কনফিগারেশন" [level=2]
      - text: "2"
    - article:
      - heading "মুয়াম্মার" [level=2]
      - text: "2"
    - article:
      - heading "MSF" [level=2]
      - text: /\\d+/
    - article:
      - img
      - heading "অন্যান্য সেলসফোর্স ক্লাউড" [level=2]
      - text: "1"
    - article:
      - img
      - heading "প্রোগ্রাম ব্যবস্থাপনা" [level=2]
      - text: "2"
    - article:
      - heading "Installation" [level=2]
      - text: "2"
    - article:
      - img
      - heading "Dec 9" [level=2]
      - text: "2"
    - article:
      - heading "স্থাপন" [level=2]
      - text: "2"
    - article:
      - heading "সেটআপ প্রক্রিয়া" [level=2]
      - text: "2"
    - article:
      - heading "API & Development" [level=2]
      - text: "2"
    - article:
      - heading "শুরু হচ্ছে" [level=2]
      - text: "3"
    - article:
      - img
      - heading "Users & Administration" [level=2]
      - text: "2"
    - article:
      - heading "C" [level=2]
      - text: "2"
    - article:
      - heading "পরীক্ষা ক্লায়েন্ট" [level=2]
      - text: "3"
    - article:
      - img
      - heading "Mobile" [level=2]
      - text: "2"
    - article:
      - heading "এমএসএফ" [level=2]
      - text: "2"
    - article:
      - heading "hello" [level=2]
      - text: "2"
    - article:
      - img
      - heading /December \\d+/ [level=2]
      - text: "2"
    - article:
      - heading /December \\d+ \\d+/ [level=2]
      - text: "2"
    - article:
      - img
      - heading "Pera nai" [level=2]
      - text: "3"
    - article:
      - img
      - heading /Jan \\d+/ [level=2]
      - text: "1"
    - article:
      - img
      - heading "Feb 6" [level=2]
      - text: "1"
    - article:
      - img
      - heading /ZCat \\d+/ [level=2]
      - text: "1"
    `);
  });

test('test deafult searchbar of this sidebar', async ({ page }) => {

  await page.locator('#betterdocs-search-modal').getByRole('img').click();
  await page.locator('div').filter({ hasText: /^ESCAll Categories$/ }).getByRole('img').click();
  await page.getByPlaceholder('Search...').click();
  await page.getByText('ESC', { exact: true }).click();
  await page.locator('.css-19bb58m').click();
  await page.getByRole('option', { name: 'All In All MSF' }).click();
//   await page.locator('#bd-select-option path').first().click();
//   await page.locator('#bd-select-option path').click();
//   await expect(page.locator('#betterdocs-search-modal')).toMatchAriaSnapshot(`- text: Popular Keywords`);
  await page.locator('div').filter({ hasText: /^Docs$/ }).getByRole('img').click();
  await page.getByText('Docs', { exact: true }).click();
  await page.locator('div').filter({ hasText: /^FAQ$/ }).locator('path').click();
  await page.locator('#betterdocs-search-modal').getByText('FAQ').click();
  await page.getByText('Show More').first().click();
  await page.getByText('Show Less').click();
  await page.getByText('ESC', { exact: true }).click();
  await page.getByText('Skip to content BetterDocs by').press('Escape');
});

test('workflow', async ({ page }) => {

  await page.getByText('January 20 2').click();
  await page.locator('#betterdocs-full-sidebar-left').getByRole('list').locator('li').filter({ hasText: 'Explain how the system can' }).getByRole('img').click();
  await page.getByRole('link', { name: 'Explain how the system can' }).click();
  await page.getByRole('heading', { name: 'Explain how the system can' }).click();
  await expect(page.locator('#betterdocs-single-main')).toMatchAriaSnapshot(`- text: /Updated on April \\d+, \\d+/`);
});

});