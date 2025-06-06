import { test, expect } from '@playwright/test';

test.describe('Encyclopedia Retro - Basic Interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.BASE_URL_MSF}/encyclopedia-retro-l-2/`);
  });

  test('should render correct ARIA snapshot for the page', async ({ page }) => {
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
      - text: A
      - link "Address"
      - link "Address Bn"
      - link "AMI"
      - link "Appppplllle"
      - link "ASAAP"
      - link "ASAP"
      - text: B
      - link "Bakhur Al Oud"
      - link "Bakhur Bengali"
      - link "Bangladeş kazanıyor inşaAllah"
      - link "Bottle"
      - link "Bottle Bn"
      - link "Break"
      - link "Broken"
      - link "Butelka"
      - text: C
      - link "c"
      - link "Cable"
      - link "Cat"
      - link "CB"
      - link "Charger"
      - link "Cutie Pie"
      - text: F
      - link /Feb \\d+/
      - link "Flasche"
      - link "Football"
      - link "Fruitssss"
      - text: G
      - link "Glow"
      - text: Load More
    `);
  });

  test('should navigate to letter A and show entries', async ({ page }) => {
    await page.locator('.encyclopedia-alphabets').click();
    await page.getByRole('link', { name: 'All' }).click();
    await page.locator('div').filter({ hasText: /^A$/ }).click();
    await page.locator('#encyclopedia-container').getByText('A', { exact: true }).click();
  });

  test('should open entry "Address" and view heading', async ({ page }) => {
    await page.getByText('A Address Address Bn AMI').click();
    await page.getByRole('link', { name: 'Address', exact: true }).click();
    await page.getByRole('heading', { name: 'How are you today?' }).click();
  });

  test('should return to listing and revisit "Address"', async ({ page }) => {
    await page.getByText('A Address Address Bn AMI').click();
    await page.getByRole('link', { name: 'Address', exact: true }).click();
    await page.getByText('Home Encyclopedia Classic L A').click();
    await page.getByRole('link', { name: 'Address', exact: true }).click();
    await page.getByRole('heading', { name: 'Address' }).click();
  });

  test('should verify short read text and content preview', async ({ page }) => {
    await page.getByText('A Address Address Bn AMI').click();
    await page.getByRole('link', { name: 'Address', exact: true }).click();
    await page.locator('div').filter({ hasText: '< 1 min read' }).nth(4).click();
    await page.getByText('Address - In computing, an').click();
  });
});
