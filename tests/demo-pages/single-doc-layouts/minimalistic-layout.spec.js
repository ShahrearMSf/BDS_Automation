import { test, expect } from '@playwright/test';

test.describe('BetterDocs Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.betterdocs.co/docs/do-you-accept-paypal-payments/');
  });

//sidebar

  test('Verify Sidebar Snapshot', async ({ page }) => {
    await expect(page.locator('#page')).toMatchAriaSnapshot(`
      - complementary:
        - article:
          - heading "Getting Started" [level=2]
          - text: "6"
        - article:
          - heading "Configurations" [level=2]
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

//breadcrumb

test('Verify Breadcrumb Navigation', async ({ page }) => {
    await page.getByText('Home Docs Configurations Do').click();
    await page.locator('#betterdocs-breadcrumb').getByText('Do You Accept PayPal Payments').click();
  });


//heading

  test('Interact with Main Article', async ({ page }) => {
    await page.locator('.elementor-container > div:nth-child(2) > div > section > div > div > div > div').first().click();
    await page.getByRole('heading', { name: 'Do You Accept PayPal Payments' }).click();
    await page.getByText('Yes we accept Paypal payments').click();
  });

  //steps

  test('Interact with Steps', async ({ page }) => {
    await page.getByRole('heading', { name: 'Step 1: Click On The ‘' }).dblclick();
    await page.getByText('To get started you need to').click();
    await page.getByRole('heading', { name: 'Step 2: Enter Billing Details' }).click();
    await page.getByText('Next you have to enter your').click();
    await page.getByRole('heading', { name: 'Step 3: Add Your PayPal' }).click();
    await page.getByText('After adding all the').click();
    await page.getByText('If you face any problems').click();
  });


//feedback reaction

  test('Feedback Interaction', async ({ page }) => {
    await page.locator('.elementor > section:nth-child(2) > div > div:nth-child(2) > div > div').first().click();
    await page.getByRole('heading', { name: 'Is this article helpful? What' }).click();
    await page.locator('.betterdocs-feelings').first().click();
    await page.getByText('Thanks for your feedback').click();
  });

//ToC

  test('Verify Navigation Links', async ({ page }) => {
    await page.getByText('On This Page Step 1: Click On').nth(1).click();
    await page.getByRole('link', { name: 'Step 1: Click On The ‘' }).click();
    await page.getByRole('link', { name: 'Step 2: Enter Billing Details' }).click();
    await page.getByRole('link', { name: 'Step 3: Add Your PayPal' }).click();
  });


//social share

  test('Social Share Interaction', async ({ page }) => {
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Facebook', exact: true }).click();
    const page1 = await page1Promise;
    await page1.close();
  });
});


//incomplete, will refine

//raw code is given below, run and compare to find the difference you want to know thanks

// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://demo.betterdocs.co/docs/do-you-accept-paypal-payments/');
//   await expect(page.locator('#page')).toMatchAriaSnapshot(
//     - complementary:
//       - article:
//         - heading "Getting Started" [level=2]
//         - text: "6"
//       - article:
//         - heading "Configurations" [level=2]
//         - text: "6"
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
//         - heading "Installation" [level=2]
//         - text: "6"
//       - article:
//         - heading "Setup Process" [level=2]
//         - text: "6"
//       - article:
//         - heading "Subscription" [level=2]
//         - text: "6"
//       - article:
//         - heading "Payment Process" [level=2]
//         - text: "6"
//       - article:
//         - heading "Integrations" [level=2]
//         - text: "6"
//       - article:
//         - heading "FAQ" [level=2]
//         - text: "6"
//       - article:
//         - img "betterdocs-category-icon"
//         - heading "Troubleshooting" [level=2]
//         - text: "4"
//       - article:
//         - img "betterdocs-category-icon"
//         - heading "Release Notes" [level=2]
//         - text: "4"
//       - article:
//         - img "betterdocs-category-icon"
//         - heading "Use Cases" [level=2]
//         - text: "4"
//       - article:
//         - img "betterdocs-category-icon"
//         - heading "Community & Support" [level=2]
//         - text: "4"
//     );
//   await page.locator('.elementor-container > div:nth-child(2) > div > section > div > div > div > div').first().click();
//   await page.getByRole('heading', { name: 'Do You Accept PayPal Payments' }).click();
//   await page.getByText('Yes we accept Paypal payments').click();
//   await page.getByRole('heading', { name: 'Step 1: Click On The ‘' }).dblclick();
//   await page.getByText('To get started you need to').click();
//   await page.getByRole('heading', { name: 'Step 2: Enter Billing Details' }).click();
//   await page.getByText('Next you have to enter your').click();
//   await page.getByRole('heading', { name: 'Step 3: Add Your PayPal' }).click();
//   await page.getByText('After adding all the').click();
//   await page.getByText('If you face any problems').click();
//   await page.locator('.elementor > section:nth-child(2) > div > div:nth-child(2) > div > div').first().click();
//   await page.getByRole('heading', { name: 'Is this article helpful? What' }).click();
//   await page.locator('.betterdocs-feelings').first().click();
//   await page.getByText('Thanks for your feedback').click();
//   await page.locator('.elementor > section:nth-child(2) > div > div:nth-child(3) > .elementor-widget-wrap').click();
//   await page.getByText('On This Page Step 1: Click On').nth(1).click();
//   await page.getByRole('link', { name: 'Step 1: Click On The ‘' }).click();
//   await page.getByRole('link', { name: 'Step 2: Enter Billing Details' }).click();
//   await page.getByRole('link', { name: 'Step 3: Add Your PayPal' }).click();
//   await page.locator('div:nth-child(2) > div > div:nth-child(3)').first().click();
//   await page.getByRole('heading', { name: 'Share This Article :' }).click();
//   await page.locator('.betterdocs-social-share-heading').click();
//   await page.locator('div:nth-child(2) > div > div:nth-child(3)').first().click();
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByRole('link', { name: 'Facebook', exact: true }).click();
//   const page1 = await page1Promise;
// });
