//will work in this in future

import { test, expect } from "@playwright/test";

// Load environment variables
const baseUrl = process.env.BASE_URL_MSF;

test.describe("BetterDocs Analytics - Views Validation", () => {
  let adminContext, adminPage;

  test.beforeAll(async ({ browser }) => {
    // Initialize the browser context and open the analytics page
    adminContext = await browser.newContext({
      storageState: "playwright/.auth/admin.json",
    });
    adminPage = await adminContext.newPage();
    await adminPage.goto(
      `${baseUrl}/wp-admin/admin.php?page=betterdocs-analytics`
    );
  });

  test("Hover over the graph and check tooltip visibility", async () => {
    const graphPoint = adminPage.locator("foreignobject").first(); // Select first graph point
    await graphPoint.hover();
    await adminPage.waitForTimeout(1000); // Wait for tooltip to appear

    // Ensure tooltip is visible
    const tooltip = adminPage.locator(
      ".apexcharts-tooltip.apexcharts-theme-dark"
    );
    expect(await tooltip.isVisible()).toBeTruthy();
  });

  test("Validate Total Views vs Unique Views", async () => {
    // Navigate to the Views tab
    await adminPage.getByRole("tab", { name: "Views" }).click();

    // Extract Total Views
    const totalViewsElement = adminPage
      .locator("h3.btd-chart-counter-count")
      .nth(0);
    const totalViews = parseInt(await totalViewsElement.innerText(), 10);

    // Extract Unique Views
    const uniqueViewsElement = adminPage
      .locator("h3.btd-chart-counter-count")
      .nth(1);
    const totalUniqueViews = parseInt(await uniqueViewsElement.innerText(), 10);

    // Assert that Total Views > Unique Views
    expect(totalViews).toBeGreaterThan(totalUniqueViews);
  });

  // test("Check if views in the table are valid (Total Views > Unique Views)", async () => {
  //   // Extract data from the table
  //   const rows = await adminPage.$$eval('table tbody tr', rows => {
  //     return rows.map(row => {
  //       const viewsText = row.querySelector('td:nth-child(4)')?.innerText.trim() || '';
  //       const uniqueViewsText = row.querySelector('td:nth-child(5)')?.innerText.trim() || '';

  //       // Log the raw data for debugging
  //       console.log(`Raw data for row: ViewsText = "${viewsText}", UniqueViewsText = "${uniqueViewsText}"`);

  //       // Convert to numbers
  //       const views = parseInt(viewsText, 10);
  //       const uniqueViews = parseInt(uniqueViewsText, 10);

  //       // Return values, or NaN if they are invalid
  //       return { views, uniqueViews, viewsText, uniqueViewsText };
  //     });
  //   });

  //   // Validate that Total Views > Unique Views for each row
  //   rows.forEach((row, index) => {
  //     if (isNaN(row.views) || isNaN(row.uniqueViews)) {
  //       console.log(`Row ${index + 1}: Invalid data. Views or Unique Views are not numbers.`);
  //       console.log(`Row ${index + 1}: Views = ${row.views}, Unique Views = ${row.uniqueViews}`);
  //     } else {
  //       console.log(`Row ${index + 1}: Total Views (${row.views}) > Unique Views (${row.uniqueViews})`);
  //       expect(row.views).toBeGreaterThan(row.uniqueViews);
  //     }
  //   });
  // });

  test("Validate Views >= Unique Views for each table row", async () => {
    // Navigate to the analytics page
    await adminPage.goto(
      `${baseUrl}/wp-admin/admin.php?page=betterdocs-analytics`
    );

    // Locate all table rows in the tbody
    const rows = adminPage.locator(".BtdDataTable tbody tr");
    const rowCount = await rows.count();

    for (let i = 0; i < rowCount; i++) {
      const row = rows.nth(i);

      // Get Views value
      const viewsText = await row.locator("td:nth-child(4) p").innerText();
      const views = parseInt(viewsText, 10);

      // Get Unique Views value
      const uniqueViewsText = await row
        .locator("td:nth-child(5) p")
        .innerText();
      const uniqueViews = parseInt(uniqueViewsText, 10);

      // Assert Views >= Unique Views
      expect(views).toBeGreaterThanOrEqual(uniqueViews);
    }
  });

  test.afterAll(async () => {
    await adminContext.close();
  });
});

// import { test, expect } from "@playwright/test";

// // Ensure to load environment variables before running tests
// const baseUrl = process.env.BASE_URL_MSF;

// test.describe("BetterDocs 'betterdocs-admin' Class To Be Loaded Only In Betterdocs Pages", () => {
//   let adminContext, adminPage;

//   test.beforeAll(async ({ browser }) => {
//     // Create a new browser context with admin storage state
//     adminContext = await browser.newContext({ storageState: "playwright/.auth/admin.json" });
//     adminPage = await adminContext.newPage();
//   });

//   test(" View should be greater than Unique View", async () => {

//   await adminPage.goto(`${baseUrl}/wp-admin/admin.php?page=betterdocs-analytics`);
//   await page.getByRole('tab', { name: 'Views' }).click();

// need to hover here

//   await page.locator('foreignobject').click();
//   await page.getByRole('cell', { name: 'Views', exact: true }).click();
//   await page.getByRole('cell', { name: 'Unique Views' }).click();
//   await page.getByRole('cell', { name: '66' }).first().click();
//   await page.getByRole('cell', { name: '66' }).nth(1).click();
//   await page.getByRole('cell', { name: '31' }).click();
//   await page.getByRole('cell', { name: '26' }).click();
//   await page.getByLabel('This list shows the leading Docs based on most Views.Leading Docs').getByText('22').click();
//   await page.getByLabel('This list shows the leading Docs based on most Views.Leading Docs').getByText('4').first().click();
//   await page.getByLabel('This list shows the leading Docs based on most Views.Leading Docs').getByText('16').click();
//   await page.getByLabel('This list shows the leading Docs based on most Views.Leading Docs').getByText('15').click();
//   await page.getByText('66', { exact: true }).first().click();
//   await page.getByText('66', { exact: true }).nth(1).click();
//   await page.getByLabel('This list shows the leading Docs based on most Views.Leading Docs').getByText('31').click();
//   await page.getByLabel('This list shows the leading Docs based on most Views.Leading Docs').getByText('26').click();
//   await page.getByRole('listitem', { name: 'Next Page' }).getByLabel('next page').click();
//   await page.getByRole('row', { name: 'Explain how the system can' }).getByRole('paragraph').nth(3).click();
//   await page.getByRole('row', { name: 'Explain how the system can' }).getByRole('paragraph').nth(4).click();
// });

// });
