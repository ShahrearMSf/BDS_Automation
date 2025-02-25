import { test, expect } from '@playwright/test';

test.describe('BetterDocs Tests', () => {
  let page;

  // Before all tests, navigate to the page
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('https://demo.betterdocs.co/docs/sleek-layout-use-cases/');
  });

  // Test 1: Check sidebar structure
  test('Sidebar structure matches aria snapshot', async () => {
    await expect(page.locator('#betterdocs-full-sidebar-left')).toMatchAriaSnapshot(`
      - img
      - text: Search.. ⌘ K
      - article:
        - heading "Getting Started" [level=2]
        - text: "6"
      - article:
        - heading "Configurations" [level=2]
        - text: "6"
      - article:
        - heading "Installation" [level=2]
        - text: "6"
      - article:
        - heading "Setup Process" [level=2]
        - text: "6"
      - article:
        - heading "Subscription" [level=2]
        - text: "6"
      - article:
        - heading "Payment Process" [level=2]
        - text: "6"
      - article:
        - heading "Integrations" [level=2]
        - text: "6"
      - article:
        - heading "FAQ" [level=2]
        - text: "6"
      - article:
        - img
        - heading "Troubleshooting" [level=2]
        - text: "4"
      - article:
        - img
        - heading "Release Notes" [level=2]
        - text: "4"
      - article:
        - img
        - heading "Use Cases" [level=2]
        - text: "4"
        - list:
          - listitem:
            - link "Sleek Layout Use Cases – Nonprofit Websites"
          - listitem:
            - link "Sleek Layout Use Cases – Educational Websites"
          - listitem:
            - link "Sleek Layout Use Cases – Creative Applications"
          - listitem:
            - link "Sleek Layout Use Cases"
      - article:
        - img
        - heading "Community & Support" [level=2]
        - text: "4"
    `);
  });

  // Test 2: Navigate to and test a breadcrumb link
  test('Navigate via breadcrumb to "Sleek Layout Use Cases"', async () => {
    await page.locator('#betterdocs-breadcrumb').click();
    await page.locator('#betterdocs-breadcrumb').getByText('Sleek Layout Use Cases').click();
    await page.getByRole('heading', { name: 'Sleek Layout Use Cases' }).click();
  });

  // Test 3: Click through body sections and links
  test('Click through body sections and links', async () => {
    await page.getByRole('heading', { name: 'Sleek Layout Use Cases' }).click();
    await page.locator('.elementor-element > div:nth-child(3) > .elementor-widget-container').first().click();
    await page.getByText('< 1 min read').click();
    await page.locator('p').filter({ hasText: '< 1 min read' }).locator('path').click();
    await page.getByText('The Sleek Layout is versatile').click();
    await page.getByRole('heading', { name: 'Corporate Websites' }).getByRole('strong').click();
    await page.getByText('The Sleek Layout is perfect').click();
    await page.getByRole('heading', { name: 'Blogs and Content Platforms' }).getByRole('strong').click();
    await page.getByText('For blogs, the Sleek Layout').click();
    await page.getByRole('heading', { name: 'E-commerce Stores' }).getByRole('strong').click();
    await page.getByText('E-commerce stores benefit').click();
  });

  // Test 4: Table of contents interaction
  test('Navigate through table of contents links', async () => {
    await page.locator('.e-con-inner > div:nth-child(3)').click(); // Click TOC
    await page.getByText('Table of contents Corporate').click();
    await page.getByRole('link', { name: 'Corporate Websites' }).click();
    await page.getByRole('link', { name: 'Blogs and Content Platforms' }).click();
    await page.getByRole('link', { name: 'E-commerce Stores' }).click();
  });


  // Test 5: Feedback interaction
  test('Provide feedback on the article', async () => {
    await page.locator('.layout-3').first().click(); // Rate the article
    await page.getByRole('heading', { name: 'Was it helpful ?' }).click();
    await page.getByRole('link', { name: 'Happy' }).click(); // Provide positive feedback
    await page.getByText('Thanks for your feedback').click(); // Confirmation of feedback
  });

  // // Test 6: Navigate to other docs (will work on it)
  // test('Navigate to other docs', async () => {
  //   const page1Promise = page.waitForEvent('popup');
  //   await page.locator('.docs-navigation').click();
  //   await page.getByRole('link', { name: 'Sleek Layout Use Cases –' }).nth(3).click(); // Navigate to a different doc link
  //   const page1 = await page1Promise; // Wait for the popup to load
  // });

  // Test 7: Share this article 
  test('Share this article', async () => {
    await page.locator('div:nth-child(2) > .elementor-widget-container > .betterdocs-elementor').click();
    await page.getByRole('heading', { name: 'Share This Article :' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Facebook', exact: true }).click(); // Open Facebook link
    const page1 = await page1Promise; // Wait for the popup to load
  });

  

  // After all tests, close the page
  test.afterAll(async () => {
    await page.close();
  });
});







//   // Test 5: Fill in search and navigate to "How To Get Free Trial" will work on search on other section
//   test('Fill in search and click "How To Get Free Trial"', async () => {
//     await page.getByPlaceholder('Search..', { exact: true }).fill('how to get free');
//     await page.getByText('How To Get Free Trial For Our Products?Getting Started').click();
//     await page.locator('div').filter({ hasText: /^DocsFAQ$/ }).locator('div').nth(1).click();
//     await page.locator('#betterdocs-search-modal').getByRole('img').nth(4).click();
//     await page.locator('#betterdocs-search-modal').getByRole('img').nth(2).click();
//   });

//   // Test 6: Show More button interaction
//   test('Show More button interaction', async () => {
//     await page.getByText('Why does the Sleek Layout look different on my mobile device?Ensure that the').click();
//     await page.getByText('Show More').click();
//     await page.getByText('Popular Keywordshowhow totestpaypalfreeDocsFAQWhy does the Sleek Layout look').click();
//   });

// // Test 10: Handle no results found scenario
// test('Handle no results found scenario', async () => {
//   await page.locator('div').filter({ hasText: /^Docs$/ }).click();
//   await page.locator('div').filter({ hasText: /^DocsFAQNo Docs found for "why does"$/ }).getByRole('img').nth(2).click();
// });


// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://demo.betterdocs.co/docs/sleek-layout-use-cases/');
//   await expect(page.locator('#betterdocs-full-sidebar-left')).toMatchAriaSnapshot(`
//     - img
//     - text: Search.. ⌘ K
//     - article:
//       - heading "Getting Started" [level=2]
//       - text: "6"
//     - article:
//       - heading "Configurations" [level=2]
//       - text: "6"
//     - article:
//       - heading "Installation" [level=2]
//       - text: "6"
//     - article:
//       - heading "Setup Process" [level=2]
//       - text: "6"
//     - article:
//       - heading "Subscription" [level=2]
//       - text: "6"
//     - article:
//       - heading "Payment Process" [level=2]
//       - text: "6"
//     - article:
//       - heading "Integrations" [level=2]
//       - text: "6"
//     - article:
//       - heading "FAQ" [level=2]
//       - text: "6"
//     - article:
//       - img
//       - heading "Troubleshooting" [level=2]
//       - text: "4"
//     - article:
//       - img
//       - heading "Release Notes" [level=2]
//       - text: "4"
//     - article:
//       - img
//       - heading "Use Cases" [level=2]
//       - text: "4"
//       - list:
//         - listitem:
//           - link "Sleek Layout Use Cases – Nonprofit Websites"
//         - listitem:
//           - link "Sleek Layout Use Cases – Educational Websites"
//         - listitem:
//           - link "Sleek Layout Use Cases – Creative Applications"
//         - listitem:
//           - link "Sleek Layout Use Cases"
//     - article:
//       - img
//       - heading "Community & Support" [level=2]
//       - text: "4"
//     `);


//   await page.locator('#betterdocs-breadcrumb').click();
//   await page.locator('#betterdocs-breadcrumb').getByText('Sleek Layout Use Cases').click();


//   await page.getByRole('heading', { name: 'Sleek Layout Use Cases' }).click();
//   await page.locator('.elementor-element > div:nth-child(3) > .elementor-widget-container').first().click();
//   await page.getByText('< 1 min read').click();
//   await page.locator('p').filter({ hasText: '< 1 min read' }).locator('path').click();
//   await page.getByText('The Sleek Layout is versatile').click();
//   await page.getByRole('heading', { name: 'Corporate Websites' }).getByRole('strong').click();
//   await page.getByText('The Sleek Layout is perfect').click();
//   await page.getByRole('heading', { name: 'Blogs and Content Platforms' }).getByRole('strong').click();
//   await page.getByText('For blogs, the Sleek Layout').click();
//   await page.getByRole('heading', { name: 'E-commerce Stores' }).getByRole('strong').click();
//   await page.getByText('E-commerce stores benefit').click();


//   await page.getByText('Updated on September 26,').click();


//   await page.locator('.e-con-inner > div:nth-child(3)').click();
//   await page.getByText('Table of contents Corporate').click();
//   await page.getByRole('link', { name: 'Corporate Websites' }).click();
//   await page.getByRole('link', { name: 'Blogs and Content Platforms' }).click();
//   await page.getByRole('link', { name: 'E-commerce Stores' }).click();


//   await page.locator('div:nth-child(2) > .elementor-widget-container > .betterdocs-elementor').click();
//   await page.getByRole('heading', { name: 'Share This Article :' }).click();
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByRole('link', { name: 'Facebook', exact: true }).click();


//   await page.locator('.layout-3').first().click();
//   await page.getByRole('heading', { name: 'Was it helpful ?' }).click();
//   await page.getByRole('link', { name: 'Happy' }).click();
//   await page.getByText('Thanks for your feedback').click();
  
//   const page1 = await page1Promise;
//   await page.locator('.docs-navigation').click();
//   await page.getByRole('link', { name: 'Sleek Layout Use Cases –' }).nth(3).click();


//   await page.getByText('Search..⌘ K').click();
//   await page.getByText('ESCAll Categories').click();
//   await page.locator('div').filter({ hasText: /^ESCAll Categories$/ }).getByRole('img').locator('path').click();
//   await page.locator('.css-19bb58m').click();
//   await page.getByRole('option', { name: 'Community &amp; Support' }).click();
//   await page.locator('#bd-select-option svg').first().click();
//   await page.locator('#bd-select-option svg').click();
//   await page.getByText('Popular Keywordshowhow').click();
//   await page.getByText('DocsFAQ').click();
//   await page.locator('div').filter({ hasText: /^Docs$/ }).getByRole('img').click();
//   await page.locator('#betterdocs-search-modal').getByText('Docs').click();
//   await page.locator('div').filter({ hasText: /^FAQ$/ }).getByRole('img').click();
//   await page.locator('#betterdocs-search-modal').getByText('FAQ').click();
//   await page.locator('div').filter({ hasText: /^Docs$/ }).click();
//   await page.getByPlaceholder('Search..', { exact: true }).click();
//   await page.getByPlaceholder('Search..', { exact: true }).fill('how to get free');
//   await page.getByText('How To Get Free Trial For Our Products?Getting Started').click();
//   await page.locator('div').filter({ hasText: /^DocsFAQ$/ }).locator('div').nth(1).click();
//   await page.locator('#betterdocs-search-modal').getByRole('img').nth(4).click();
//   await page.locator('#betterdocs-search-modal').getByRole('img').nth(2).click();
//   await page.getByPlaceholder('Search..', { exact: true }).fill('why does');
//   await page.getByText('Why does the Sleek Layout look different on my mobile device?Ensure that the').click();
//   await page.getByText('Show More').click();
//   await page.getByText('Popular Keywordshowhow totestpaypalfreeDocsFAQWhy does the Sleek Layout look').click();
//   await page.locator('div').filter({ hasText: /^Docs$/ }).click();
//   await page.locator('div').filter({ hasText: /^DocsFAQNo Docs found for "why does"$/ }).getByRole('img').nth(2).click();


// });