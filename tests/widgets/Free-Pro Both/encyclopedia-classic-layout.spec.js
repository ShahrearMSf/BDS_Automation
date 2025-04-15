import { test, expect } from '@playwright/test';

test.describe('Encyclopedia Retro - Basic Interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.BASE_URL_MSF}/encyclopedia-2/`);
  });


test('Encyclopedia A to Z', async ({ page }) => {
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
    - link "Address":
      - heading "Address" [level=2]
    - link "Address Bn":
      - heading "Address Bn" [level=2]
    - link "AMI":
      - heading "AMI" [level=2]
    - link "Appppplllle":
      - heading "Appppplllle" [level=2]
    - link /April \\d+/:
      - heading /April \\d+/ [level=2]
    - link "ASAAP":
      - heading "ASAAP" [level=2]
    - link "ASAP":
      - heading "ASAP" [level=2]
    - text: B
    - link "Bakhur Al Oud":
      - heading "Bakhur Al Oud" [level=2]
    - link "Bakhur Bengali":
      - heading "Bakhur Bengali" [level=2]
    - link "Bangladeş kazanıyor inşaAllah":
      - heading "Bangladeş kazanıyor inşaAllah" [level=2]
    - link "Bottle":
      - heading "Bottle" [level=2]
    - link "Bottle Bn":
      - heading "Bottle Bn" [level=2]
    - link "Break":
      - heading "Break" [level=2]
    - link "Broken":
      - heading "Broken" [level=2]
    - link "Butelka":
      - heading "Butelka" [level=2]
    - text: C
    - link "c":
      - heading "c" [level=2]
    - link "Cable":
      - heading "Cable" [level=2]
    - link "Cat":
      - heading "Cat" [level=2]
    - link "CB":
      - heading "CB" [level=2]
    - link "Charger":
      - heading "Charger" [level=2]
    - link "Cutie Pie":
      - heading "Cutie Pie" [level=2]
    - text: F
    - link /Feb \\d+/:
      - heading /Feb \\d+/ [level=2]
    - link "Flasche":
      - heading "Flasche" [level=2]
    - link "Football":
      - heading "Football" [level=2]
    - link "Fruitssss":
      - heading "Fruitssss" [level=2]
    - text: G
    - link "Glow":
      - heading "Glow" [level=2]
    - text: আরও টেক্সট দেখুন
    `);

});   

test('Encyclopedia Rest', async ({ page }) => {
   
  await page.locator('.encyclopedia-alphabets').click();
  await page.getByRole('link', { name: 'All' }).click();
  await page.locator('div').filter({ hasText: /^A$/ }).click();
  await page.getByRole('link', { name: 'Address', exact: true }).click();
  await page.getByRole('heading', { name: 'Address' }).click();
  await expect(page.locator('#betterdocs-single-main')).toMatchAriaSnapshot(`
    - paragraph:
      - img
      - text: < 1 min read
    `);
  });

  test('Encyclopedia Load More Button', async ({ page }) => {

  await page.getByText('আরও টেক্সট দেখুন').click();
  await page.locator('div').filter({ hasText: /^M$/ }).click();
});

});