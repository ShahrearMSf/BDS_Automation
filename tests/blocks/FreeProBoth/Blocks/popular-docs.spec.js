import { test, expect } from '@playwright/test';

test.describe('Popular Docs Page Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`${process.env.BASE_URL_MSF}/popular-docs/`);
      });
      

  test('Verify Foosball Article Navigation', async ({ page }) => {
    await page.getByText('Importance of Playing Foosball In Office Does your platform include an').click();
    await page.getByText('Popular Docs Importance of').click();
    await expect(page.locator('#content')).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - img
          - link "Importance of Playing Foosball In Office"
        - listitem:
          - img
          - link "Does your platform include an automatic promotion deployment tool that is triggered by customer actions or life cycle milestones? If so, please describe how this tool functions and the types of triggers that can be used."
        - listitem:
          - img
          - link "Importance of 5 Times Salat"
        - listitem:
          - img
          - link "Asar"
        - listitem:
          - img
          - link "Can your loyalty platform award and track offers or promotions for individual members based on specific criteria such as purchases, spend thresholds, enrollments, or interactions with certain products or actions?"
        - listitem:
          - img
          - 'link "Mercedes GLS450: Here’s why every driveway of upscale Dhaka has one"'
        - listitem:
          - img
          - link /February \\d+/
        - listitem:
          - img
          - link "Season of Europe"
        - listitem:
          - img
          - link "Obayed Mamur – The Story of a Handsome Man"
        - listitem:
          - img
          - link "hi"
        - listitem:
          - img
          - link "WordPress Plugin And It’s Versatility"
        - listitem:
          - img
          - 'link "Protected: Can your platform handle offer issuance and manage the issuance process? Please explain the workflow and management tools available."'
        - listitem:
          - img
          - link "Life"
        - listitem:
          - img
          - link "What capabilities does your platform offer for tracking and viewing member behaviors at an individual member level?"
        - listitem:
          - img
          - link "Food"
    `);
  });

  test('Verify Single Article Snapshot', async ({ page }) => {
    await expect(page.locator('#content')).toMatchAriaSnapshot(`
      - listitem:
        - img
        - link "Importance of Playing Foosball In Office"
    `);
  });


  
//   test('Click on Foosball Article and Verify Content', async ({ page }) => {
//     await page.locator('li').filter({ hasText: 'Importance of Playing' }).getByRole('img').click();
//     await expect(page.locator('#content')).toMatchAriaSnapshot(`- text: Importance of Playing Foosball In Office`);
//   });

  test('Navigate Using Foosball Link', async ({ page }) => {
    await page.getByRole('link', { name: 'Importance of Playing' }).click();
  });

  test('Click on Promotion Article and Navigate', async ({ page }) => {
    await page.locator('li').filter({ hasText: 'Does your platform include an' }).getByRole('img').click();
    await page.getByRole('link', { name: 'Does your platform include an' }).click();
  });
});








// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://betterdocs.msf.qa378.site/popular-docs/');
//   await page.getByText('Importance of Playing Foosball In Office Does your platform include an').click();
//   await page.getByText('Popular Docs Importance of').click();
//   await expect(page.locator('#content')).toMatchAriaSnapshot(`
//     - list:
//       - listitem:
//         - img
//         - link "Importance of Playing Foosball In Office"
//       - listitem:
//         - img
//         - link "Does your platform include an automatic promotion deployment tool that is triggered by customer actions or life cycle milestones? If so, please describe how this tool functions and the types of triggers that can be used."
//       - listitem:
//         - img
//         - link "Importance of 5 Times Salat"
//       - listitem:
//         - img
//         - link "Asar"
//       - listitem:
//         - img
//         - link "Can your loyalty platform award and track offers or promotions for individual members based on specific criteria such as purchases, spend thresholds, enrollments, or interactions with certain products or actions?"
//       - listitem:
//         - img
//         - 'link "Mercedes GLS450: Here’s why every driveway of upscale Dhaka has one"'
//       - listitem:
//         - img
//         - link /February \\d+/
//       - listitem:
//         - img
//         - link "Season of Europe"
//       - listitem:
//         - img
//         - link "Obayed Mamur – The Story of a Handsome Man"
//       - listitem:
//         - img
//         - link "hi"
//       - listitem:
//         - img
//         - link "WordPress Plugin And It’s Versatility"
//       - listitem:
//         - img
//         - 'link "Protected: Can your platform handle offer issuance and manage the issuance process? Please explain the workflow and management tools available."'
//       - listitem:
//         - img
//         - link "Life"
//       - listitem:
//         - img
//         - link "What capabilities does your platform offer for tracking and viewing member behaviors at an individual member level?"
//       - listitem:
//         - img
//         - link "Food"
//     `);
//   await expect(page.locator('#content')).toMatchAriaSnapshot(`
//     - listitem:
//       - img
//       - link "Importance of Playing Foosball In Office"
//     `);
//   await page.locator('li').filter({ hasText: 'Importance of Playing' }).getByRole('img').click();
//   await expect(page.locator('#content')).toMatchAriaSnapshot(`- text: Importance of Playing Foosball In Office`);
//   await page.getByRole('link', { name: 'Importance of Playing' }).click();
//   await page.goto('https://betterdocs.msf.qa378.site/popular-docs/');
//   await page.locator('li').filter({ hasText: 'Does your platform include an' }).getByRole('img').click();
//   await page.getByRole('link', { name: 'Does your platform include an' }).click();
// });