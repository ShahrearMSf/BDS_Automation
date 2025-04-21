import { test, expect } from '@playwright/test';

test.describe('Encyclopedia Retro - Basic Interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.BASE_URL_MSF}/multiple-kb-box-classic-l/`);
  });


test('All The MKB', async ({ page }) => {
  await expect(page.locator('#el-betterdocs-cat-box-1ddc322')).toMatchAriaSnapshot(`
    - link "betterdocs-category-icon Dabang Muammar 3 Shahrear":
      - img "betterdocs-category-icon"
      - heading "Dabang" [level=1]
    - link /betterdocs-category-icon December 15 A Muammar 1 MSF/:
      - img "betterdocs-category-icon"
      - heading /December \\d+ A/ [level=1]
    - link /betterdocs-category-icon December 15 B Muammar 1 MSF/:
      - img "betterdocs-category-icon"
      - heading /December \\d+ B/ [level=1]
    - link /betterdocs-category-icon Feb 25 Muammar 1 MSF/:
      - img "betterdocs-category-icon"
      - heading /Feb \\d+/ [level=1]
    - link "Holiday Today is Tuesday Muammar 6 Shahrear":
      - heading "Holiday" [level=1]
      - paragraph: Today is Tuesday
    - link /June \\d+ Today is June 11 Muammar 3 Shahrear/:
      - heading /June \\d+/ [level=1]
      - paragraph: /Today is June \\d+/
    - link "betterdocs-category-icon Loyalty Management Muammar 4 Shahrear":
      - img "betterdocs-category-icon"
      - heading "Loyalty Management" [level=1]
    - link "betterdocs-category-icon Mahedi bhai Muammar 1 MSF":
      - img "betterdocs-category-icon"
      - heading "Mahedi bhai" [level=1]
    `);
  });

  test('1 MKB', async ({ page }) => {

  await expect(page.locator('#el-betterdocs-cat-box-1ddc322')).toMatchAriaSnapshot(`- heading "Dabang" [level=1]`);
  await expect(page.locator('#el-betterdocs-cat-box-1ddc322')).toMatchAriaSnapshot(`- text: Muammar 3 Shahrear`);
  });

  test('Workflow of a MKB', async ({ page }) => {

  await page.getByRole('link', { name: 'betterdocs-category-icon Loyalty Management Muammar 4 Shahrear' }).click();
  await expect(page.locator('body')).toMatchAriaSnapshot(`- heading "Benefit, Reward, Voucher & Promotion Management" [level=2]`);
  await page.getByRole('link', { name: 'Benefit, Reward, Voucher &' }).click();
  await expect(page.locator('#main')).toMatchAriaSnapshot(`- link "Can your loyalty platform award and track offers or promotions for individual members based on specific criteria such as purchases, spend thresholds, enrollments, or interactions with certain products or actions?"`);
  await expect(page.locator('#main')).toMatchAriaSnapshot(`- paragraph: Loyalty Management can issue offers. These offers can be distributed via Salesforce Marketing Cloud Engagement Channels or via the API.`);
});

});