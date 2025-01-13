import { test, expect } from '@playwright/test';

test.describe('BetterDocs Free Trial Page', () => {
  let page;

  // This will run before all tests to load the page once
  test.beforeAll(async ({ browser }) => {
    // Launch a new page and store it
    page = await browser.newPage();
    await page.goto('https://demo.betterdocs.co/docs/how-to-get-free-trial-for-our-products/');
  });

  // 1. Page Load and ARIA Snapshot
  test('Page Load and ARIA Snapshot', async () => {
    // Take ARIA snapshot of the page structure
    await expect(page.locator('#page')).toMatchAriaSnapshot(`
      - complementary:
        - article:
          - heading "Getting Started" [level=2]
          - text: "6"
          - list:
            - listitem:
              - text: 
              - link "How To Get Free Trial For Our Products?"
            - listitem:
              - text: 
              - link "Do You Accept PayPal Payments"
            - listitem:
              - text: 
              - link "Do You Have Any Refund Or Return Policies?"
            - listitem:
              - text: 
              - link "How To Customize Your Preferences?"
            - listitem:
              - text: 
              - link "How To Purchase Our Subscription?"
            - listitem:
              - text: 
              - link "How To Sign Up For Updates?"
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
          - img "betterdocs-category-icon"
          - heading "Troubleshooting" [level=2]
          - text: "4"
        - article:
          - img "betterdocs-category-icon"
          - heading "Release Notes" [level=2]
          - text: "4"
        - article:
          - img "betterdocs-category-icon"
          - heading "Use Cases" [level=2]
          - text: "4"
        - article:
          - img "betterdocs-category-icon"
          - heading "Community & Support" [level=2]
          - text: "4"
    `);
  });

  // 2. Navigate and Interact with "How to Get Free Trial"
  test('Navigate and Interact with "How to Get Free Trial"', async () => {
    // Click on the "Home Docs Getting Started How" link
    await page.getByText('Home Docs Getting Started How').click();

    // Click on the "How To Get Free Trial For Our" heading
    await page.getByRole('heading', { name: 'How To Get Free Trial For Our' }).click();
    
    // Click the first instruction: "To configure our software"
    await page.getByText('To configure our software').click();

    // Click "Step 1: Download The Software"
    await page.getByRole('heading', { name: 'Step 1: Download The Software' }).click();
    
    // Click the text "To get started you need to"
    await page.getByText('To get started you need to').click();
  });

  // 3. Further Setup Steps and Troubleshooting
  test('Further Setup Steps and Troubleshooting', async () => {
    // Click on the next setup step: "Step 2: Activate Your License"
    await page.getByRole('heading', { name: 'Step 2: Activate Your License' }).click();
    
    // Click the text "Next you have to activate our"
    await page.getByText('Next you have to activate our').click();

    // Click on "Step 3: Run The Setup Wizard"
    await page.getByRole('heading', { name: 'Step 3: Run The Setup Wizard' }).click();
    
    // Click the text "Once the software is"
    await page.getByText('Once the software is').click();
    
    // Click the text "If you face any problems"
    await page.getByText('If you face any problems').click();

    // Interact with the Troubleshooting section
    await page.locator('.elementor-container > div:nth-child(2) > div > section:nth-child(2) > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-element').click();
    await page.locator('.elementor > section:nth-child(2) > div > div:nth-child(2) > div').click();
    await page.locator('div:nth-child(3) > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .betterdocs-elementor').click();
  });

});

//incomplete, will refine it

//following code is the raw code, you can play to understand the basic differences

//import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//     await page.goto('https://demo.betterdocs.co/docs/how-to-get-free-trial-for-our-products/');
//     await expect(page.locator('#page')).toMatchAriaSnapshot(`
//       - complementary:
//         - article:
//           - heading "Getting Started" [level=2]
//           - text: "6"
//           - list:
//             - listitem:
//               - text: 
//               - link "How To Get Free Trial For Our Products?"
//             - listitem:
//               - text: 
//               - link "Do You Accept PayPal Payments"
//             - listitem:
//               - text: 
//               - link "Do You Have Any Refund Or Return Policies?"
//             - listitem:
//               - text: 
//               - link "How To Customize Your Preferences?"
//             - listitem:
//               - text: 
//               - link "How To Purchase Our Subscription?"
//             - listitem:
//               - text: 
//               - link "How To Sign Up For Updates?"
//         - article:
//           - heading "Configurations" [level=2]
//           - text: "6"
//         - article:
//           - heading "Installation" [level=2]
//           - text: "6"
//         - article:
//           - heading "Setup Process" [level=2]
//           - text: "6"
//         - article:
//           - heading "Subscription" [level=2]
//           - text: "6"
//         - article:
//           - heading "Payment Process" [level=2]
//           - text: "6"
//         - article:
//           - heading "Integrations" [level=2]
//           - text: "6"
//         - article:
//           - heading "FAQ" [level=2]
//           - text: "6"
//         - article:
//           - img "betterdocs-category-icon"
//           - heading "Troubleshooting" [level=2]
//           - text: "4"
//         - article:
//           - img "betterdocs-category-icon"
//           - heading "Release Notes" [level=2]
//           - text: "4"
//         - article:
//           - img "betterdocs-category-icon"
//           - heading "Use Cases" [level=2]
//           - text: "4"
//         - article:
//           - img "betterdocs-category-icon"
//           - heading "Community & Support" [level=2]
//           - text: "4"
//       `);
//     await page.getByText('Home Docs Getting Started How').click();
//     await page.getByRole('heading', { name: 'How To Get Free Trial For Our' }).click();
//     await page.getByText('To configure our software').click();
//     await page.getByRole('heading', { name: 'Step 1: Download The Software' }).click();
//     await page.getByText('To get started you need to').click();
//     await page.getByRole('heading', { name: 'Step 2: Activate Your License' }).click();
//     await page.getByText('Next you have to activate our').click();
//     await page.getByRole('heading', { name: 'Step 3: Run The Setup Wizard' }).click();
//     await page.getByText('Once the software is').click();
//     await page.getByText('If you face any problems').click();
//     await page.locator('.elementor-container > div:nth-child(2) > div > section:nth-child(2) > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-element').click();
//     await page.locator('.elementor > section:nth-child(2) > div > div:nth-child(2) > div').click();
//     await page.locator('div:nth-child(3) > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .betterdocs-elementor').click();
//   });