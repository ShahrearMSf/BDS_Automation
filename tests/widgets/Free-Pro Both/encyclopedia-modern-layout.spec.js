import { test, expect } from '@playwright/test';

test.describe('Encyclopedia Modern - Basic Interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.BASE_URL_MSF}/encyclopedia-modern-l-2/`);
  });

test('Encyclopedia Modern - Basic Interactions', async ({ page }) => {
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
    - heading "Address" [level=2]
    - paragraph: Address - In computing, an address refers to a unique identifier that is assigned to...
    - link "Learn More"
    - link "→"
    - link
    - heading "Address Bn" [level=2]
    - paragraph: ঠিকানা
    - link "Learn More"
    - link "→"
    - link
    - heading "AMI" [level=2]
    - paragraph: Apple Mango Indigo
    - link "Learn More"
    - link "→"
    - link
    - heading "Appppplllle" [level=2]
    - paragraph: Apple Mango Banana
    - link "Learn More"
    - link "→"
    - link
    - heading /April \\d+/ [level=2]
    - paragraph: /April \\d+ is a date in the calendar, specifically referring to the 10th day of\\.\\.\\./
    - link "Learn More"
    - link "→"
    - link
    - heading "ASAAP" [level=2]
    - paragraph: AS SOON AS AS Posssible
    - link "Learn More"
    - link "→"
    - link
    - heading "ASAP" [level=2]
    - paragraph: This is heading Can you imagine it is now working? However life should be going on...
    - link "Learn More"
    - link "→"
    - link
    - text: B
    - heading "Bakhur Al Oud" [level=2]
    - paragraph: Bakhur Al Oud refers to a traditional incense blend that contains Oud, a highly prized...
    - link "Learn More"
    - link "→"
    - link
    - heading "Bakhur Bengali" [level=2]
    - paragraph
    - link "Learn More"
    - link "→"
    - link
    - heading "Bangladeş kazanıyor inşaAllah" [level=2]
    - paragraph: Bangladeş kazanıyor inşaAllah Bangladeş kazanıyor inşaAllah Bangladeş kazanıyor inşaAllah
    - link "Learn More"
    - link "→"
    - link
    - heading "Bottle" [level=2]
    - paragraph: Bottle is bottle
    - link "Learn More"
    - link "→"
    - link
    - heading "Bottle Bn" [level=2]
    - paragraph
    - link "Learn More"
    - link "→"
    - link
    - heading "Break" [level=2]
    - paragraph: life is in break
    - link "Learn More"
    - link "→"
    - link
    - heading "Broken" [level=2]
    - paragraph: Broken Angel Where
    - link "Learn More"
    - link "→"
    - link
    - heading "Butelka" [level=2]
    - paragraph
    - link "Learn More"
    - link "→"
    - link
    - text: C
    - heading "c" [level=2]
    - paragraph: CAT
    - link "Learn More"
    - link "→"
    - link
    - heading "Cable" [level=2]
    - paragraph: Hello How are you
    - link "Learn More"
    - link "→"
    - link
    - heading "Cat" [level=2]
    - paragraph: "Cat: A small domesticated carnivorous mammal with soft fur, sharp retractable claws, and a long..."
    - link "Learn More"
    - link "→"
    - link
    - heading "CB" [level=2]
    - paragraph: Center back
    - link "Learn More"
    - link "→"
    - link
    - heading "Charger" [level=2]
    - paragraph: Nipun Bhai Er charger
    - link "Learn More"
    - link "→"
    - link
    - heading "Cutie Pie" [level=2]
    - paragraph: "Cutie Pie: An endearing term used to describe someone who is adorable, charming, or sweet..."
    - link "Learn More"
    - link "→"
    - link
    - text: F
    - heading /Feb \\d+/ [level=2]
    - paragraph: "/\\\\*\\\\*Feb \\\\d+\\\\*\\\\*Definition: An abbreviation for the date February 2nd\\\\./"
    - link "Learn More"
    - link "→"
    - link
    - heading "Flasche" [level=2]
    - paragraph
    - link "Learn More"
    - link "→"
    - link
    - heading "Football" [level=2]
    - paragraph: "Football: Football refers to a team sport played by two teams of eleven players each, who..."
    - link "Learn More"
    - link "→"
    - link
    - heading "Fruitssss" [level=2]
    - paragraph: Apple Mango Orange
    - link "Learn More"
    - link "→"
    - link
    - text: G
    - heading "Glow" [level=2]
    - paragraph: Perfume
    - link "Learn More"
    - link "→"
    - link
    - text: Load More
    `);
  await page.locator('div').filter({ hasText: /^A$/ }).click();
  await page.locator('.tools-card__link-block').first().click();
  await page.getByRole('heading', { name: 'How are you today?' }).click();
  await page.getByRole('heading', { name: 'Address' }).click();
  await expect(page.locator('#betterdocs-entry-title')).toMatchAriaSnapshot(`- heading "Address" [level=1]`);
  await page.locator('div').filter({ hasText: '< 1 min read' }).nth(4).click();
});

});