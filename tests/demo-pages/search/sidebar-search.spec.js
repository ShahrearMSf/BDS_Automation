

// //raw code given below

// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://demo.betterdocs.co/docs/troubleshooting-sleek-layout-responsiveness-issues/');
//   await page.getByText('Search..⌘ K').click();
//   await page.locator('div').filter({ hasText: /^ESC$/ }).first().click();
//   await page.locator('.betterdocs-search-header > .doc-search-icon').click();
//   await page.getByPlaceholder('Search..', { exact: true }).click();
//   await page.getByText('ESC', { exact: true }).click();

//   await page.getByText('DocsFAQ').click();
//   await page.getByText('ESCDocsFAQHow To Get Free').click();

//   await page.getByText('How To Get Free Trial For Our Products?Getting Started').click();
//   await page.getByText('How To Get Free Trial For Our Products?Configurations').click();
//   await page.getByText('How To Sign Up For Updates?Getting Started').click();
//   await page.getByText('Do You Accept PayPal PaymentsGetting Started').click();

//   await page.locator('div').filter({ hasText: /^Docs$/ }).locator('path').click();
//   await page.locator('#betterdocs-full-sidebar-left').getByText('Docs').click();

//   await page.locator('div').filter({ hasText: /^FAQ$/ }).locator('path').click();
//   await page.locator('#betterdocs-full-sidebar-left').getByText('FAQ').click();

//   await page.getByText('Why does the Sleek Layout look different on my mobile device?Ensure that the').click();
//   await page.getByText('How can I improve the loading speed of the Sleek Layout?To enhance performance').click();
//   await page.getByText('How can I reset the Sleek Layout if nothing else works?If you have tried the').click();
//   await page.getByText('ESC', { exact: true }).click();
//   await page.getByText('Show More').first().click();
//   await page.getByText('Show Less').click();

//   await page.getByPlaceholder('Search..', { exact: true }).click();
//   await page.getByPlaceholder('Search..', { exact: true }).fill('Why does the');
//   await page.getByPlaceholder('Search..', { exact: true }).press('Enter');
//   await page.getByRole('heading', { name: 'Why does the Sleek Layout' }).click();
//   await page.locator('div').filter({ hasText: /^Docs$/ }).click();
//   await page.locator('div').filter({ hasText: /^DocsFAQNo Docs found for "Why does the"$/ }).nth(3).click();
//   await page.locator('#betterdocs-full-sidebar-left').getByText('Docs', { exact: true }).click();

//   await page.getByPlaceholder('Search..', { exact: true }).click();
//   await page.getByPlaceholder('Search..', { exact: true }).press('ControlOrMeta+a');
//   await page.getByPlaceholder('Search..', { exact: true }).fill('How to purchase');
//   await page.getByText('How To Purchase Our Subscription?Setup Process').click();
//   await page.locator('div').filter({ hasText: /^FAQ$/ }).first().click();
//   await page.getByPlaceholder('Search..', { exact: true }).click();
//   await page.getByPlaceholder('Search..', { exact: true }).press('Enter');
//   await page.getByPlaceholder('Search..', { exact: true }).fill('How to purchase somehting');
//   await page.locator('div').filter({ hasText: /^DocsNo FAQ found for "How to purchase somehting"$/ }).nth(3).click();
// });



//loading the search field for all test


import { test, expect } from '@playwright/test';

test.describe('BetterDocs Tests', () => {
  let page;

  // Before all tests, navigate to the page and open the search bar
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('https://demo.betterdocs.co/docs/troubleshooting-sleek-layout-responsiveness-issues/');
    // Open the search bar
    await page.getByText('Search..⌘ K').click();
    await page.locator('div').filter({ hasText: /^ESC$/ }).first().click();
    await page.locator('.betterdocs-search-header > .doc-search-icon').click();
    await page.getByPlaceholder('Search..', { exact: true }).click();
    await page.getByText('ESC', { exact: true }).click();
  });

  // After all tests, close the page
  test.afterAll(async () => {
    await page.close();
  });

  // Test 1: Navigation through Docs and FAQ
  test('Navigate through Docs and FAQ', async () => {
    await page.getByText('DocsFAQ').click();
    await page.getByText('ESCDocsFAQHow To Get Free').click();
    await page.getByText('How To Get Free Trial For Our Products?Getting Started').click();
    await page.getByText('How To Get Free Trial For Our Products?Configurations').click();
    await page.getByText('How To Sign Up For Updates?Getting Started').click();
    await page.getByText('Do You Accept PayPal PaymentsGetting Started').click();
  });

  // Test 2: Sidebar navigation
  test('Navigate using the sidebar', async () => {
    await page.locator('div').filter({ hasText: /^Docs$/ }).locator('path').click();
    await page.locator('#betterdocs-full-sidebar-left').getByText('Docs').click();

    await page.locator('div').filter({ hasText: /^FAQ$/ }).locator('path').click();
    await page.locator('#betterdocs-full-sidebar-left').getByText('FAQ').click();
  });

  // Test 3: Interaction with FAQ questions
  test('Interact with FAQ questions', async () => {
    await page.getByText('Why does the Sleek Layout look different on my mobile device?Ensure that the').click();
    await page.getByText('How can I improve the loading speed of the Sleek Layout?To enhance performance').click();
    await page.getByText('How can I reset the Sleek Layout if nothing else works?If you have tried the').click();
    await page.getByText('ESC', { exact: true }).click();
    await page.getByText('Show More').first().click();
    await page.getByText('Show Less').click();
  });

  // Test 4: Search for "Why does the" and handle results
  test('Search for "Why does the"', async () => {
    await page.getByPlaceholder('Search..', { exact: true }).click();
    await page.getByPlaceholder('Search..', { exact: true }).fill('Why does the');
    await page.getByPlaceholder('Search..', { exact: true }).press('Enter');
    await page.getByRole('heading', { name: 'Why does the Sleek Layout' }).click();
    await page.locator('div').filter({ hasText: /^Docs$/ }).click();
    await page.locator('div').filter({ hasText: /^DocsFAQNo Docs found for "Why does the"$/ }).nth(3).click();
    await page.locator('#betterdocs-full-sidebar-left').getByText('Docs', { exact: true }).click();
  });

  // Test 5: Search for "How to purchase" and handle results
  test('Search for "How to purchase"', async () => {
    await page.getByPlaceholder('Search..', { exact: true }).click();
    await page.getByPlaceholder('Search..', { exact: true }).press('ControlOrMeta+a');
    await page.getByPlaceholder('Search..', { exact: true }).fill('How to purchase');
    await page.getByText('How To Purchase Our Subscription?Setup Process').click();
    await page.locator('div').filter({ hasText: /^FAQ$/ }).first().click();
    await page.getByPlaceholder('Search..', { exact: true }).click();
    await page.getByPlaceholder('Search..', { exact: true }).press('Enter');
    await page.getByPlaceholder('Search..', { exact: true }).fill('How to purchase somehting');
    await page.locator('div').filter({ hasText: /^DocsNo FAQ found for "How to purchase somehting"$/ }).nth(3).click();
  });
});
