import { test, expect } from '@playwright/test';

test.describe('Encyclopedia Retro - Basic Interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.BASE_URL_MSF}/multiple-kb-box-l/`);
  });


test('Main Content', async ({ page }) => {
  await expect(page.locator('#content')).toMatchAriaSnapshot(`
    - link /September \\d+, \\d+ 5 Docs/:
      - heading /September \\d+, \\d+/ [level=2]
    - link /BCB \\d+ Docs/:
      - heading "BCB" [level=2]
    - link "Country Roads 5 Docs":
      - heading "Country Roads" [level=2]
    - link "SAS 4 Docs":
      - heading "SAS" [level=2]
    - link "betterdocs-category-icon Loyalty Management 4 Docs":
      - img "betterdocs-category-icon"
      - heading "Loyalty Management" [level=2]
    - link /June \\d+ 3 Docs/:
      - heading /June \\d+/ [level=2]
    - link "Holiday 6 Docs":
      - heading "Holiday" [level=2]
    - link "betterdocs-category-icon এসএএস 1 Doc":
      - img "betterdocs-category-icon"
      - heading "এসএএস" [level=2]
    - link "betterdocs-category-icon বিসিবি 2 Docs":
      - img "betterdocs-category-icon"
      - heading "বিসিবি" [level=2]
    - link "betterdocs-category-icon A 2 Docs":
      - img "betterdocs-category-icon"
      - heading "A" [level=2]
    - link "betterdocs-category-icon B 1 Doc":
      - img "betterdocs-category-icon"
      - heading "B" [level=2]
    - link "betterdocs-category-icon Dabang 3 Docs":
      - img "betterdocs-category-icon"
      - heading "Dabang" [level=2]
    `);
  
  await expect(page.locator('#el-betterdocs-cat-box-ec8a558')).toMatchAriaSnapshot(`- heading "BCB" [level=2]`);
  await page.getByRole('link', { name: 'BCB 27 Docs' }).click();
  await page.getByRole('heading', { name: 'How are you today?' }).click();
  await page.getByRole('link', { name: 'All In All MSF 19 docs Last' }).click();
  await page.getByRole('heading', { name: 'How are you today?' }).click();
  await page.locator('#main').getByRole('heading', { name: 'All In All MSF' }).click();
  await page.getByText('19 docs').click();
  await page.locator('#main img').click();
  await page.getByText('All In All MSF 19 docs').click();
  await page.getByRole('heading', { name: '12-Party alliance urges' }).getByRole('link').click();
  await page.getByRole('heading', { name: '12-Party alliance urges' }).click();

});

});