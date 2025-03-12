import { test, expect } from '@playwright/test';

test.describe('FAQ Classic Page Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to the page once before each test
    await page.goto(`${process.env.BASE_URL_MSF}/abc/`, { waitUntil: 'networkidle' });
  });

  test('Checking the whole menu and also clicking', async ({ page }) => {
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
    await page.locator('#encyclopedia-container').getByText('A', { exact: true }).click();
    await page.getByRole('link', { name: 'All', exact: true }).click();
    await page.locator('li').filter({ hasText: /^A$/ }).click();
    await page.locator('li').filter({ hasText: 'Z' }).click();
  });

  test('Click on Encyclopedia Alphabets Twice', async ({ page }) => {
    await page.locator('.encyclopedia-alphabets').click();
  });

  test('Open Address FAQ and Validate Content', async ({ page }) => {
    await page.getByRole('link', { name: 'Address' }).click();
    await page.getByText('Home Encyclopedia Classic L A Address').click();
    await page.getByRole('heading', { name: 'Address' }).click();
    await page.locator('div').filter({ hasText: '< 1 min read' }).nth(4).click();
    await page.getByText('Address - In computing, an').click();
  });
  
});




// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('****/abc/');
//   await expect(page.locator('#content')).toMatchAriaSnapshot(`
//     - main:
//       - heading "FAQ Classic L" [level=1]
//       - paragraph
//       - list:
//         - listitem:
//           - link "All"
//         - listitem:
//           - link "A"
//         - listitem:
//           - link "B"
//         - listitem:
//           - link "C"
//         - listitem:
//           - link "D"
//         - listitem:
//           - link "E"
//         - listitem:
//           - link "F"
//         - listitem:
//           - link "G"
//         - listitem:
//           - link "H"
//         - listitem:
//           - link "I"
//         - listitem:
//           - link "J"
//         - listitem:
//           - link "K"
//         - listitem:
//           - link "L"
//         - listitem:
//           - link "M"
//         - listitem:
//           - link "N"
//         - listitem:
//           - link "O"
//         - listitem:
//           - link "P"
//         - listitem:
//           - link "Q"
//         - listitem:
//           - link "R"
//         - listitem:
//           - link "S"
//         - listitem:
//           - link "T"
//         - listitem:
//           - link "U"
//         - listitem:
//           - link "V"
//         - listitem:
//           - link "W"
//         - listitem:
//           - link "X"
//         - listitem:
//           - link "Y"
//         - listitem:
//           - link "Z"
//       - text: A
//       - link "Address":
//         - heading "Address" [level=2]
//       - link "AMI":
//         - heading "AMI" [level=2]
//       - link "Appppplllle":
//         - heading "Appppplllle" [level=2]
//       - link "ASAAP":
//         - heading "ASAAP" [level=2]
//       - link "ASAP":
//         - heading "ASAP" [level=2]
//       - text: B
//       - link "Bakhur Al Oud":
//         - heading "Bakhur Al Oud" [level=2]
//       - link "Bangladeş kazanıyor inşaAllah":
//         - heading "Bangladeş kazanıyor inşaAllah" [level=2]
//       - link "Bottle":
//         - heading "Bottle" [level=2]
//       - link "Break":
//         - heading "Break" [level=2]
//       - link "Broken":
//         - heading "Broken" [level=2]
//       - text: C
//       - link "c":
//         - heading "c" [level=2]
//       - link "Cable":
//         - heading "Cable" [level=2]
//       - link "Cat":
//         - heading "Cat" [level=2]
//       - link "CB":
//         - heading "CB" [level=2]
//       - link "Charger":
//         - heading "Charger" [level=2]
//       - link "Cutie Pie":
//         - heading "Cutie Pie" [level=2]
//       - text: F
//       - link /Feb \\d+/:
//         - heading /Feb \\d+/ [level=2]
//       - link "Football":
//         - heading "Football" [level=2]
//       - link "Fruitssss":
//         - heading "Fruitssss" [level=2]
//       - text: G
//       - link "Glow":
//         - heading "Glow" [level=2]
//       - text: Loard More
//     `);
//   await page.locator('.encyclopedia-alphabets').click();
//   await page.locator('.encyclopedia-alphabets').click();
//   await page.getByRole('link', { name: 'All' }).click();
//   await page.getByRole('link', { name: 'A', exact: true }).click();
//   await page.locator('li').filter({ hasText: 'Z' }).click();
//   await page.getByRole('link', { name: 'All' }).click();
//   await page.getByRole('link', { name: 'Address' }).click();
//   await page.getByText('Home FAQ Classic L A Address').click();
//   await page.getByRole('heading', { name: 'Address' }).click();
//   await page.locator('div').filter({ hasText: '< 1 min read' }).nth(4).click();
//   await page.getByText('Address - In computing, an').click();
// });