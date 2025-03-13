import { test, expect } from '@playwright/test';

test.describe('Encyclopedia Retro Layout Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to the page once before each test
    await page.goto(`${process.env.BASE_URL_MSF}/encyclopedia-retro-l/`, { waitUntil: 'networkidle' });
  });

  test('Checking the whole menu', async ({ page }) => {
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

  test('One glossary item', async ({ page }) => {
    await page.getByRole('link', { name: 'Address' }).click();
    await page.locator('div').filter({ hasText: 'How are you today? All' }).nth(1).click();
    await page.getByText('Home Encyclopedia Classic L A').click();
    await page.getByRole('link', { name: 'Address' }).click();
    
    await expect(page.locator('#betterdocs-entry-title')).toMatchAriaSnapshot(`
      - heading "Address" [level=1]
    `);
    
    await page.locator('div').filter({ hasText: '< 1 min read' }).nth(4).click();
    await page.getByText('Address - In computing, an').click();
    await page.locator('div').filter({ hasText: 'AllABCDEFGHIJKLMNOPQRSTUVWXYZ' }).nth(1).click();
    await page.getByRole('link', { name: 'All' }).click();
    await page.getByText('Loard More').click();
  });

});
