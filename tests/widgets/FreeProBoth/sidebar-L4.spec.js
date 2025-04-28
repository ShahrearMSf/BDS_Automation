import { test, expect } from '@playwright/test';

test.describe('Widget-sidebar Layout 4', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.BASE_URL_MSF}/sidebar-layout-4/`);

});


test('Sidebar L4 All Categories', async ({ page }) => {
  await expect(page.locator('#betterdocs-sidebar-left')).toMatchAriaSnapshot(`
    - article:
      - heading /January \\d+/ [level=2]
    - article:
      - heading "Parent" [level=2]
    - article:
      - heading "Program Management" [level=2]
    - article:
      - heading "ব্যবহারকারী ও প্রশাসন" [level=2]
    - article:
      - heading "Other Salesforce Clouds" [level=2]
    - article:
      - heading "hiwf" [level=2]
    - article:
      - heading "টেস্ট জুন" [level=2]
    - article:
      - heading /September Ends \\d+/ [level=2]
    - article:
      - heading "Setup Process" [level=2]
    - article:
      - heading "Architektur Infrastruktur" [level=2]
    - article:
      - heading "hello" [level=2]
    - article:
      - heading "স্থাপত্য ও অবকাঠামো" [level=2]
    - article:
      - heading "মার্কেটার প্রয়োজন" [level=2]
    - article:
      - heading /December \\d+/ [level=2]
    - article:
      - heading "Third Party" [level=2]
    - article:
      - heading "Alif" [level=2]
    - article:
      - heading "সুবিধা, পুরস্কার, ভাউচার এবং প্রচার ব্যবস্থাপনা" [level=2]
    - article:
      - heading "Benefit, Reward, Voucher & Promotion Management" [level=2]
    - article:
      - heading "Einrichtungsprozess" [level=2]
    - article:
      - heading "Uncategorized" [level=2]
    - article:
      - heading "hi" [level=2]
    - article:
      - heading "Config & urations" [level=2]
    - article:
      - heading /September \\d+/ [level=2]
    - article:
      - heading "Dec 8" [level=2]
    - article:
      - heading /December 8, \\d+/ [level=2]
    - article:
      - heading "শাহরিয়ার" [level=2]
    - article:
      - heading /Category December \\d+/ [level=2]
    - article:
      - heading "মোবাইল" [level=2]
    - article:
      - heading "Architecture & Infastructure" [level=2]
    - article:
      - heading "সদস্য ব্যবস্থাপনা" [level=2]
    - article:
      - heading "Getting Started" [level=2]
    - article:
      - heading "Shahrear" [level=2]
    - article:
      - heading "Member Management" [level=2]
    - article:
      - heading "কনফিগারেশন" [level=2]
    - article:
      - heading "মুয়াম্মার" [level=2]
    - article:
      - heading "MSF" [level=2]
    - article:
      - heading "অন্যান্য সেলসফোর্স ক্লাউড" [level=2]
    - article:
      - heading "প্রোগ্রাম ব্যবস্থাপনা" [level=2]
    - article:
      - heading "Installation" [level=2]
    - article:
      - heading "Dec 9" [level=2]
    - article:
      - heading "স্থাপন" [level=2]
    - article:
      - heading "সেটআপ প্রক্রিয়া" [level=2]
    - article:
      - heading "API & Development" [level=2]
    - article:
      - heading "শুরু হচ্ছে" [level=2]
    - article:
      - heading "Users & Administration" [level=2]
    - article:
      - heading "C" [level=2]
    - article:
      - heading "পরীক্ষা ক্লায়েন্ট" [level=2]
    - article:
      - heading "Mobile" [level=2]
    - article:
      - heading "এমএসএফ" [level=2]
    - article:
      - heading "hello" [level=2]
    - article:
      - heading /December \\d+/ [level=2]
    - article:
      - heading /December \\d+ \\d+/ [level=2]
    - article:
      - heading "Pera nai" [level=2]
    - article:
      - heading /Jan \\d+/ [level=2]
    - article:
      - heading "Feb 6" [level=2]
    `);
  });

test('Sidebar L4 Checking expnasion of the catagories', async ({ page }) => {

  await page.getByRole('heading', { name: 'January' }).click();
  await page.locator('article').filter({ hasText: 'January 20 Explain how the' }).locator('svg').click();
  await page.locator('article').filter({ hasText: 'Parent What capabilities does' }).locator('svg').first().click();
  await page.locator('span').filter({ hasText: 'Child 2' }).locator('svg').first().click();
  await page.locator('article').filter({ hasText: 'Parent What capabilities does' }).locator('div').nth(1).click();

});

test('Sidebar L4 Workfloww', async ({ page }) => {


  await page.getByRole('heading', { name: 'Program Management' }).click();
  await page.locator('article:nth-child(3) > .betterdocs-single-category-inner > .betterdocs-body > .betterdocs-articles-list > li > .far').first().click();
  await page.getByRole('link', { name: 'Describe how the system can' }).first().click();
  await page.getByRole('heading', { name: 'Describe how the system can' }).click();
  await page.getByText('Salesforces Loyalty').click();
  await page.getByText('Updated on September 11,').nth(1).click();
    });
});