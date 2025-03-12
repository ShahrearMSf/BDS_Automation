import { test, expect } from '@playwright/test';

test.describe('FAQ Modern Layout Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to the page once before each test
    await page.goto(`${process.env.BASE_URL_MSF}/encyclopedia-modern-l/`, { waitUntil: 'networkidle' });
  });

  test('check menu and click', async ({ page }) => {

  await expect(page.locator('#content')).toMatchAriaSnapshot(`
    - list:
      - listitem:
        - link "All"
      - listitem:
        - link "A"
      - listitem:
        - link "B"
      - listitem:
        - link "C"
      - listitem:
        - link "D"
      - listitem:
        - link "E"
      - listitem:
        - link "F"
      - listitem:
        - link "G"
      - listitem:
        - link "H"
      - listitem:
        - link "I"
      - listitem:
        - link "J"
      - listitem:
        - link "K"
      - listitem:
        - link "L"
      - listitem:
        - link "M"
      - listitem:
        - link "N"
      - listitem:
        - link "O"
      - listitem:
        - link "P"
      - listitem:
        - link "Q"
      - listitem:
        - link "R"
      - listitem:
        - link "S"
      - listitem:
        - link "T"
      - listitem:
        - link "U"
      - listitem:
        - link "V"
      - listitem:
        - link "W"
      - listitem:
        - link "X"
      - listitem:
        - link "Y"
      - listitem:
        - link "Z"
    `);
  await page.locator('div').filter({ hasText: /^A$/ }).click();

  });

  test('One Glossary', async ({ page }) => {

  await page.locator('.tools-card__link-block').first().click();
  await page.locator('div').filter({ hasText: 'How are you today? All' }).nth(1).click();
  await page.getByText('AllABCDEFGHIJKLMNOPQRSTUVWXYZ').click();
  await page.getByRole('link', { name: 'All' }).click();
  await page.locator('.tools-card__link-block').first().click();
  await page.getByRole('heading', { name: 'Address' }).click();
  await page.locator('#betterdocs-single-main').getByRole('img').click();
  await page.getByText('< 1 min read').click();
  await page.getByText('Address - In computing, an').click();
});

test('Load More Button', async ({ page }) => {
  await page.locator('.tools-card__link-block').first().click();
  await page.getByText('Home Encyclopedia Classic L A').click();
  await page.getByText('Loard More').click();
 });

});