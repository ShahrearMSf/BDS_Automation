import { test, expect } from '@playwright/test';

test.describe('Troubleshooting Sleek Layout Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Load the page once before each test
    await page.goto('https://demo.betterdocs.co/docs/troubleshooting-sleek-layout-responsiveness-issues/');
  });

//sidebar with the search but workon the search in a different section

  test('Verify Sidebar Snapshot', async ({ page }) => {
    await expect(page.locator('#page')).toMatchAriaSnapshot(`
      - complementary:
        - img
        - text: Search.. ⌘ K
        - article:
          - img
          - heading "Troubleshooting" [level=2]
          - text: "4"
          - list:
            - listitem:
              - link "Troubleshooting Sleek Layout Responsiveness Issues"
            - listitem:
              - link "Troubleshooting Sleek Layout Display Issues"
            - listitem:
              - link "Troubleshooting Sleek Layout Performance Issues"
            - listitem:
              - link "Troubleshooting Sleek Layout"
        - article:
          - img
          - heading "Release Notes" [level=2]
          - text: "4"
        - article:
          - img
          - heading "Use Cases" [level=2]
          - text: "4"
        - article:
          - img
          - heading "Community & Support" [level=2]
          - text: "4"
    `);
  });

//checking whether we can access this separatey in sidebar apart from the whole sidebar

  test('Verify Full Sidebar Snapshot', async ({ page }) => {
    await expect(page.locator('#betterdocs-full-sidebar-left')).toMatchAriaSnapshot(`
      - img
      - text: Search.. ⌘ K
    `);
  });

//checking whether we can able to search or not and getting the search

  test('Perform Search Actions', async ({ page }) => {
    await page.getByText('Search..', { exact: true }).click();
    await page.getByPlaceholder('Search..', { exact: true }).fill('troubl');
    await page.getByText('Troubleshooting Sleek LayoutTroubleshooting').click();
    await page.getByPlaceholder('Search..', { exact: true }).fill('troubleshooting');
    await page.getByPlaceholder('Search..', { exact: true }).dblclick();
    await page.getByText('Troubleshooting Sleek LayoutTroubleshooting').click();
  });

//checking breadcrumb with the title of the doc

  test('Verify Breadcrumb Navigation', async ({ page }) => {
    await page.locator('#betterdocs-breadcrumb').getByText('Troubleshooting Sleek Layout').click();
    await page.getByRole('heading', { name: 'Troubleshooting Sleek Layout' }).click();
  });


//checking the body section

  test('Verify Body Section Interactions', async ({ page }) => {
  
    // Navigate through the content of the body
    await page.getByText('If your Sleek Layout is not').click();
    await page.getByRole('heading', { name: 'Step 1: Ensure Responsive' }).getByRole('strong').click();
    await page.getByText('Check that the Sleek Layout’s').click();
    await page.getByRole('heading', { name: 'Step 2: Test on Different' }).getByRole('strong').click();
    await page.getByText('Manually test the Sleek').click();
    await page.getByRole('heading', { name: 'Step 3: Review Media Queries' }).getByRole('strong').click();
    await page.getByText('The Sleek Layout uses media').click();
    await page.getByRole('heading', { name: 'Step 4: Check for Conflicting' }).getByRole('strong').click();
    await page.getByText('Some third-party plugins').click();
    await page.getByRole('heading', { name: 'Step 5: Adjust Margins and' }).getByRole('strong').click();
    await page.getByText('Large margins or padding').click();
  });
  
  //checking the toc

  test('Verify Steps Content Navigation', async ({ page }) => {
    await page.getByText('On This Page Step 1: Ensure').click();
    await page.getByRole('link', { name: 'Step 1: Ensure Responsive' }).click();
    await page.getByRole('link', { name: 'Step 2: Test on Different' }).click();
    await page.getByRole('link', { name: 'Step 3: Review Media Queries' }).click();
    await page.getByRole('link', { name: 'Step 4: Check for Conflicting' }).click();
    await page.getByRole('link', { name: 'Step 5: Adjust Margins and' }).click();
  });

//checking the feedback interaction

  test('Verify Feedback Section', async ({ page }) => {
    await page.getByRole('heading', { name: 'Was this helpful?' }).click();
    await page.locator('div:nth-child(2) > div > section:nth-child(2) > .elementor-container > .elementor-column > .elementor-widget-wrap > div:nth-child(2)').click();
    await page.locator('div:nth-child(2) > .elementor-widget-container > div').click();
    await page.getByRole('heading', { name: 'Your feedback matters!' }).click();
    await page.locator('.betterdocs-feelings').first().click();
    await page.getByText('Thanks for your feedback').click();
  });

//checking the social share

  test('Verify Social Sharing', async ({ page }) => {
    await page.getByRole('heading', { name: 'Share this Document' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Facebook', exact: true }).click();
    const page1 = await page1Promise;
    await page1.close();
  });
});









//raw code is given below, for finding the difference run it in your local

// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://demo.betterdocs.co/docs/troubleshooting-sleek-layout-responsiveness-issues/');
  
//   await expect(page.locator('#page')).toMatchAriaSnapshot(`
//     - complementary:
//       - img
//       - text: Search.. ⌘ K
//       - article:
//         - img
//         - heading "Troubleshooting" [level=2]
//         - text: "4"
//         - list:
//           - listitem:
//             - link "Troubleshooting Sleek Layout Responsiveness Issues"
//           - listitem:
//             - link "Troubleshooting Sleek Layout Display Issues"
//           - listitem:
//             - link "Troubleshooting Sleek Layout Performance Issues"
//           - listitem:
//             - link "Troubleshooting Sleek Layout"
//       - article:
//         - img
//         - heading "Release Notes" [level=2]
//         - text: "4"
//       - article:
//         - img
//         - heading "Use Cases" [level=2]
//         - text: "4"
//       - article:
//         - img
//         - heading "Community & Support" [level=2]
//         - text: "4"
//     `);


//   await expect(page.locator('#betterdocs-full-sidebar-left')).toMatchAriaSnapshot(`
//     - img
//     - text: Search.. ⌘ K
//     `);
//   await page.getByText('Search..', { exact: true }).click();
//   await page.getByPlaceholder('Search..', { exact: true }).fill('troubl');
//   await page.getByText('Troubleshooting Sleek LayoutTroubleshooting').click();
//   await page.getByPlaceholder('Search..', { exact: true }).click();
//   await page.getByPlaceholder('Search..', { exact: true }).fill('troubleshooting');
//   await page.getByPlaceholder('Search..', { exact: true }).dblclick();
//   await page.getByText('Troubleshooting Sleek LayoutTroubleshooting').click();
//   await page.locator('.tab-icon > svg > g > g > path').click();
//   await page.locator('#betterdocs-full-sidebar-left').getByText('Docs').click();
//   await page.locator('div').filter({ hasText: /^Docs$/ }).nth(1).click();
//   await page.locator('.betterdocs-search-header').click();
//   await page.getByPlaceholder('Search..', { exact: true }).click();
//   await page.locator('.clear-icon > g > path').click();
//   await page.locator('.betterdocs-search-header > .doc-search-icon').click();
//   await page.getByPlaceholder('Search..', { exact: true }).click();
//   await page.getByText('ESC', { exact: true }).click();
//   await page.locator('body').press('Escape');

//   await page.locator('.elementor-container > div:nth-child(2) > div > section > .elementor-container > .elementor-column > .elementor-widget-wrap > div > .elementor-widget-container').first().click();
//   await page.locator('#betterdocs-breadcrumb').getByText('Troubleshooting Sleek Layout').click();
//   await page.getByRole('heading', { name: 'Troubleshooting Sleek Layout' }).click();

//   await page.locator('.reading-time').click();
//   await page.locator('p').filter({ hasText: '< 1 min read' }).locator('path').click();
//   await page.getByText('< 1 min read').click();

//   await page.getByText('If your Sleek Layout is not').click();
//   await page.getByRole('heading', { name: 'Step 1: Ensure Responsive' }).getByRole('strong').click();
//   await page.getByText('Check that the Sleek Layout’s').click();
//   await page.getByRole('heading', { name: 'Step 2: Test on Different' }).getByRole('strong').click();
//   await page.getByText('Manually test the Sleek').click();
//   await page.getByRole('heading', { name: 'Step 3: Review Media Queries' }).getByRole('strong').click();
//   await page.getByText('The Sleek Layout uses media').click();
//   await page.getByRole('heading', { name: 'Step 4: Check for Conflicting' }).getByRole('strong').click();
//   await page.getByText('Some third-party plugins').click();
//   await page.getByRole('heading', { name: 'Step 5: Adjust Margins and' }).getByRole('strong').click();
//   await page.getByText('Large margins or padding').click();

//   await page.getByRole('heading', { name: 'Was this helpful?' }).click();
//   await page.locator('div:nth-child(2) > div > section:nth-child(2) > .elementor-container > .elementor-column > .elementor-widget-wrap > div:nth-child(2)').click();
//   await page.locator('div:nth-child(2) > .elementor-widget-container > div').click();
//   await page.getByRole('heading', { name: 'Your feedback matters!' }).click();
//   await page.locator('.betterdocs-feelings').first().click();
//   await page.getByText('Thanks for your feedback').click();

//   await page.locator('section:nth-child(2) > .elementor-container > .elementor-column > .elementor-widget-wrap > div:nth-child(3)').click();
//   await page.getByRole('heading', { name: 'Share this Document' }).click();
//   await page.locator('section').filter({ hasText: 'Search..⌘ K Troubleshooting 4' }).getByRole('list').nth(2).click();
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByRole('link', { name: 'Facebook', exact: true }).click();
//   const page1 = await page1Promise;

//   await page.locator('.elementor > section:nth-child(2) > div > div:nth-child(3) > .elementor-widget-wrap').click();
//   await page.getByText('On This Page Step 1: Ensure').click();
//   await page.getByRole('link', { name: 'Step 1: Ensure Responsive' }).click();
//   await page.getByRole('link', { name: 'Step 2: Test on Different' }).click();
//   await page.getByRole('link', { name: 'Step 3: Review Media Queries' }).click();
//   await page.getByRole('link', { name: 'Step 4: Check for Conflicting' }).click();
//   await page.getByRole('link', { name: 'Step 5: Adjust Margins and' }).click();
// });

