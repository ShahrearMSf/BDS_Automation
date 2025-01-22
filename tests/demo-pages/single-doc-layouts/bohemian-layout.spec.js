import { test, expect } from '@playwright/test';

test.describe('BetterDocs Page Tests', () => {
  // Load the page once before each test
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.betterdocs.co/docs/how-to-get-free-trial-for-our-products-7/');
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
    await page.getByText('Home Docs Integrations How To').click();
    await page.locator('#betterdocs-breadcrumb').getByText('How To Get Free Trial For Our').click();
  });

//heading and navigation

  test('Verify Article Content Navigation', async ({ page }) => {
    await page.getByRole('heading', { name: 'How To Get Free Trial For Our' }).click();
    await page.getByText('On This Page Step 1: Download').nth(1).click();
    await page.getByRole('link', { name: 'Step 1: Download The Software' }).click();
    await page.getByRole('link', { name: 'Step 2: Activate Your License' }).click();
    await page.getByRole('link', { name: 'Step 3: Run The Setup Wizard' }).click();
  });

//main content

  test('Verify Step Details', async ({ page }) => {
    await page.getByText('To configure our software').click();
    await page.getByRole('heading', { name: 'Step 1: Download The Software' }).click();
    await page.getByText('To get started you need to').click();
    await page.getByRole('heading', { name: 'Step 2: Activate Your License' }).click();
    await page.getByText('Next you have to activate our').click();
    await page.getByRole('heading', { name: 'Step 3: Run The Setup Wizard' }).click();
    await page.getByText('Once the software is').click();
    await page.getByText('If you face any problems').click();
  });

//feedback reaction

  test('Verify Feedback Interaction', async ({ page }) => {
    await page.locator('.elementor-container > div:nth-child(2) > div > section:nth-child(2) > .elementor-container > .elementor-column > .elementor-widget-wrap > div').first().click();
    await page.getByRole('heading', { name: 'Is this article helpful? What' }).click();
    await page.locator('.betterdocs-feelings').first().click();
    await page.getByText('Thanks for your feedback').click();
  });

//share to social media

  test('Verify Social Share Interaction', async ({ page }) => {
    await page.getByRole('heading', { name: 'Share This Article :' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.locator('div:nth-child(2) > div > section:nth-child(2) > .elementor-container > .elementor-column > .elementor-widget-wrap > div:nth-child(2)').click();
    const page1 = await page1Promise;
    await page1.close();
  });
});



//raw code is given below for comapring


// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://demo.betterdocs.co/docs/how-to-get-free-trial-for-our-products-7/');
//   await expect(page.locator('#page')).toMatchAriaSnapshot(`
//     - complementary:
//       - article:
//         - heading "Getting Started" [level=2]
//         - text: "6"
//       - article:
//         - heading "Configurations" [level=2]
//         - text: "6"
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
//     `);
//   await page.getByText('Home Docs Integrations How To').click();
//   await page.locator('#betterdocs-breadcrumb').getByText('How To Get Free Trial For Our').click();

//   await page.getByRole('heading', { name: 'How To Get Free Trial For Our' }).click();

//   await page.getByText('On This Page Step 1: Download').nth(1).click();
//   await page.getByRole('link', { name: 'Step 1: Download The Software' }).click();
//   await page.getByRole('link', { name: 'Step 2: Activate Your License' }).click();
//   await page.getByRole('link', { name: 'Step 3: Run The Setup Wizard' }).click();

//   await page.getByText('To configure our software').click();
//   await page.getByRole('heading', { name: 'Step 1: Download The Software' }).click();
//   await page.getByText('To get started you need to').click();
//   await page.getByRole('heading', { name: 'Step 2: Activate Your License' }).click();
//   await page.getByText('Next you have to activate our').click();
//   await page.getByRole('heading', { name: 'Step 3: Run The Setup Wizard' }).click();
//   await page.getByText('Once the software is').click();
//   await page.getByText('If you face any problems').click();
  
//   await page.locator('.elementor-container > div:nth-child(2) > div > section:nth-child(2) > .elementor-container > .elementor-column > .elementor-widget-wrap > div').first().click();
//   await page.getByRole('heading', { name: 'Is this article helpful? What' }).click();
//   await page.locator('.betterdocs-feelings').first().click();
//   await page.getByText('Thanks for your feedback').click();

//   await page.getByRole('heading', { name: 'Share This Article :' }).click();
//   const page1Promise = page.waitForEvent('popup');
//   await page.locator('div:nth-child(2) > div > section:nth-child(2) > .elementor-container > .elementor-column > .elementor-widget-wrap > div:nth-child(2)').click();
//   const page1 = await page1Promise;
// });