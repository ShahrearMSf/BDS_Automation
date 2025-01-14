import { test, expect } from '@playwright/test';

test.describe('BetterDocs Preferences Page', () => {
  let page;

  // Load the page once before all tests
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('https://demo.betterdocs.co/docs/how-to-customize-your-preferences/');
  });

  // Close the page after all tests
  test.afterAll(async () => {
    await page.close();
  });

  // Test 1: Verify Sidebar Structure
  test('Verify Sidebar Structure', async () => {
    await expect(page.locator('#betterdocs-sidebar-left')).toMatchAriaSnapshot(`
      - article:
        - heading "Getting Started" [level=2]
      - article:
        - heading "Configurations" [level=2]
      - article:
        - heading "Installation" [level=2]
      - article:
        - heading "Setup Process" [level=2]
      - article:
        - heading "Subscription" [level=2]
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

  // Test 2: Interact with Steps to Customize Preferences
  test('Interact with Steps to Customize Preferences', async () => {
    await page.getByText('Home Docs Subscription How To').click();
    await page.getByRole('heading', { name: 'How To Customize Your' }).click();
    await page.getByText('To customize your preferences, follow these steps given below.').click();
    await page.getByRole('heading', { name: 'Step 1: Log In To Your Account' }).click();
    await page.getByText('To get started you need to').click();
    await page.getByRole('heading', { name: 'Step 2: Click On ‘Preferences' }).click();
    await page.getByText('Next you have to click on the').click();
    await page.getByRole('heading', { name: 'Step 3: Customize Your' }).click();
    await page.getByText('Now you can customize your').click();
    await page.getByText('If you face any problems').click();
  });

  // Test 3: Interact with ToC
  test('Interact with ToC', async () => {
    await page.locator('.elementor > section:nth-child(2) > div > div:nth-child(3) > .elementor-widget-wrap').click();
    await page.getByText('On This Page Step 1: Log In').click();
    await page.getByRole('link', { name: 'Step 1: Log In To Your Account' }).click();
    await page.getByRole('link', { name: 'Step 2: Click On ‘Preferences' }).click();
    await page.getByRole('link', { name: 'Step 3: Customize Your' }).click();

  });

  // Test 4: Share and Provide Feedback
  test('Share and Provide Feedback', async () => {
    await page.getByRole('heading', { name: 'Is this article helpful? What' }).click();
    await page.locator('.elementor > section:nth-child(2) > div > div:nth-child(2) > div > div').first().click();
    await page.locator('.betterdocs-feelings').first().click();


    await page.getByRole('heading', { name: 'Share This Article :' }).click();
    await page.locator('div:nth-child(2) > div > div:nth-child(3)').first().click();
    const page1Promise = page.waitForEvent('popup');
    const page1 = await page1Promise;
    await page1.close(); // Close the popup if necessary
  });
});










//raw code below. run both to find out differences

// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://demo.betterdocs.co/docs/how-to-customize-your-preferences/');
//   await expect(page.locator('#betterdocs-sidebar-left')).toMatchAriaSnapshot(`
//     - article:
//       - heading "Getting Started" [level=2]
//     - article:
//       - heading "Configurations" [level=2]
//     - article:
//       - heading "Installation" [level=2]
//     - article:
//       - heading "Setup Process" [level=2]
//     - article:
//       - heading "Subscription" [level=2]
//       - list:
//         - listitem:
//           - text: 
//           - link "How To Get Free Trial For Our Products?"
//         - listitem:
//           - text: 
//           - link "Do You Accept PayPal Payments"
//         - listitem:
//           - text: 
//           - link "Do You Have Any Refund Or Return Policies?"
//         - listitem:
//           - text: 
//           - link "How To Customize Your Preferences?"
//         - listitem:
//           - text: 
//           - link "How To Purchase Our Subscription?"
//         - listitem:
//           - text: 
//           - link "How To Sign Up For Updates?"
//     - article:
//       - heading "Payment Process" [level=2]
//     - article:
//       - heading "Integrations" [level=2]
//     - article:
//       - heading "FAQ" [level=2]
//     - article:
//       - heading "Troubleshooting" [level=2]
//     - article:
//       - heading "Release Notes" [level=2]
//     - article:
//       - heading "Use Cases" [level=2]
//     - article:
//       - heading "Community & Support" [level=2]
//     `);

//   await page.getByText('Home Docs Subscription How To').click();
//   await page.getByRole('heading', { name: 'How To Customize Your' }).click();
//   await page.getByText('To customize your preferences, follow these steps given below.').click();
//   await page.getByRole('heading', { name: 'Step 1: Log In To Your Account' }).click();
//   await page.getByText('To get started you need to').click();
//   await page.getByRole('heading', { name: 'Step 2: Click On ‘Preferences' }).click();
//   await page.getByText('Next you have to click on the').click();
//   await page.getByRole('heading', { name: 'Step 3: Customize Your' }).click();
//   await page.getByText('Now you can customize your').click();
//   await page.getByText('If you face any problems').click();
//   await page.getByRole('heading', { name: 'Is this article helpful? What' }).click();

//   await page.locator('section:nth-child(2) > div > div:nth-child(2) > div > div > .elementor-widget-container > div').first().click();

//   await page.getByText('On This Page Step 1: Log In').click();
//   await page.locator('.elementor > section:nth-child(2) > div > div:nth-child(3) > .elementor-widget-wrap > .elementor-element > .elementor-widget-container').click();
//   await page.getByRole('link', { name: 'Step 2: Click On ‘Preferences' }).click();
//   await page.getByRole('link', { name: 'Step 3: Customize Your' }).click();

//   await page.getByRole('heading', { name: 'Share This Article :' }).click();
//   const page1Promise = page.waitForEvent('popup');
//   await page.locator('div:nth-child(2) > div > div:nth-child(3)').first().click();
//   const page1 = await page1Promise;

//   await page.locator('.elementor > section:nth-child(2) > div > div:nth-child(2) > div > div').first().click();
//   await page.locator('.betterdocs-feelings').first().click();
// });