import { test, expect } from '@playwright/test';

test.describe('BetterDocs Subscription Page', () => {
  let page;

  // Run before all tests to open the page once
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('https://demo.betterdocs.co/docs/how-to-purchase-our-subscription/');
  });

  // Test 1: Page Load and ARIA Snapshot
  test('Page Load and ARIA Snapshot', async () => {
    await expect(page.locator('#page')).toMatchAriaSnapshot(`
      - complementary:
        - article:
          - heading "Getting Started" [level=2]
        - article:
          - heading "Configurations" [level=2]
        - article:
          - heading "Installation" [level=2]
        - article:
          - heading "Setup Process" [level=2]
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
          - heading "Subscription" [level=2]
        - article:
          - heading "Payment Process" [level=2]
        - article:
          - heading "Integrations" [level=2]
        - article:
          - heading "FAQ" [level=2]
        - article:
          - heading "Troubleshooting" [level=2]
        - article:
          - heading "Release Notes" [level=2]
        - article:
          - heading "Use Cases" [level=2]
        - article:
          - heading "Community & Support" [level=2]
    `);
  });

  // Test 2: Navigate and Interact with "How to Purchase"
  test('Navigate and Interact with "How to Purchase"', async () => {
    await page.getByText('Home Docs Setup Process How').click();
    await page.getByRole('heading', { name: 'How To Purchase Our' }).click();
    await page.getByText('To purchase any of our').click();
    await page.getByRole('heading', { name: 'Step 1: Click On The ‘' }).click();
    await page.getByText('To get started you need to').click();
  });

  // Test 3: Billing and Payment Steps
  test('Billing and Payment Steps', async () => {
    await page.getByRole('heading', { name: 'Step 2: Enter Billing Details' }).click();
    await page.getByText('Next you have to enter your').click();
    await page.getByRole('heading', { name: 'Step 3: Select A Payment' }).click();
    await page.locator('#betterdocs-single-content section div').filter({ hasText: 'Finally select your preferred' }).nth(3).click();
    await page.getByText('If you face any problems').click();
  });

  // Test 4: Feedback Icon Interaction
  test('Feedback Icon Interaction', async () => {
    await page.locator('div:nth-child(4) > .elementor-widget-container > div').click();
  });

  // Test 5: Interact with Share and Popup
  test('Interact with Share and Popup', async () => {
    await page.getByText('On This Page Step 1: Click On').click();
    await page.getByRole('heading', { name: 'Share This Article :' }).click();
    const page4Promise = page.waitForEvent('popup');
    await page.locator('div:nth-child(5) > .elementor-widget-container > .betterdocs-elementor').click();
    const page4 = await page4Promise;
  });

  // Closing this page, not necessary
  test.afterAll(async () => {
    await page.close();
  });
});



//raw code below. run to explore the difference yourself

// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://demo.betterdocs.co/docs/how-to-purchase-our-subscription/');
//   await expect(page.locator('#page')).toMatchAriaSnapshot(`
//     - complementary:
//       - article:
//         - heading "Getting Started" [level=2]
//       - article:
//         - heading "Configurations" [level=2]
//       - article:
//         - heading "Installation" [level=2]
//       - article:
//         - heading "Setup Process" [level=2]
//         - list:
//           - listitem:
//             - text: 
//             - link "How To Get Free Trial For Our Products?"
//           - listitem:
//             - text: 
//             - link "Do You Accept PayPal Payments"
//           - listitem:
//             - text: 
//             - link "Do You Have Any Refund Or Return Policies?"
//           - listitem:
//             - text: 
//             - link "How To Customize Your Preferences?"
//           - listitem:
//             - text: 
//             - link "How To Purchase Our Subscription?"
//           - listitem:
//             - text: 
//             - link "How To Sign Up For Updates?"
//       - article:
//         - heading "Subscription" [level=2]
//       - article:
//         - heading "Payment Process" [level=2]
//       - article:
//         - heading "Integrations" [level=2]
//       - article:
//         - heading "FAQ" [level=2]
//       - article:
//         - heading "Troubleshooting" [level=2]
//       - article:
//         - heading "Release Notes" [level=2]
//       - article:
//         - heading "Use Cases" [level=2]
//       - article:
//         - heading "Community & Support" [level=2]
//     `);
//   await page.getByText('Home Docs Setup Process How').click();
//   await page.getByRole('heading', { name: 'How To Purchase Our' }).click();
//   await page.getByText('To purchase any of our').click();
//   await page.getByRole('heading', { name: 'Step 1: Click On The ‘' }).click();
//   await page.getByText('To get started you need to').click();
//   await page.getByRole('heading', { name: 'Step 2: Enter Billing Details' }).click();
//   await page.getByText('Next you have to enter your').click();
//   await page.getByRole('heading', { name: 'Step 3: Select A Payment' }).click();
//   await page.locator('#betterdocs-single-content section div').filter({ hasText: 'Finally select your preferred' }).nth(3).click();
//   await page.getByText('If you face any problems').click();
//   await page.locator('div:nth-child(4) > .elementor-widget-container > div').click();
//   await page.getByText('On This Page Step 1: Click On').click();
//   await page.getByRole('heading', { name: 'Share This Article :' }).click();
//   await page.locator('div:nth-child(5) > .elementor-widget-container > .betterdocs-elementor').click();
// });