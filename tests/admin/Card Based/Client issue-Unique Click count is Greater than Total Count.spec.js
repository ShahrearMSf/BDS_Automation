import { test, expect } from "@playwright/test";

// Load environment variables
const baseUrl = process.env.BASE_URL_MSF;

test.describe("BetterDocs Analytics - Views Validation", () => {
  let adminContext, adminPage;

  test.beforeAll(async ({ browser }) => {
    // Initialize the browser context and open the analytics page
    adminContext = await browser.newContext({ storageState: "playwright/.auth/admin.json" });
    adminPage = await adminContext.newPage();
    await adminPage.goto(`${baseUrl}/wp-admin/admin.php?page=betterdocs-analytics`);
  });

  test("Validate Total Views vs Unique Views", async () => {
    // Extract total views
    await adminPage.getByRole('tab', { name: 'Views' }).click();

    await adminPage.getByRole('heading', { name: 'Total Views' }).click();
    const totalViews = parseInt(await adminPage.getByRole('heading', { name: '477' }).innerText(), 10);

    await adminPage.getByRole('heading', { name: 'Unique Views' }).click();
    const totalUniqueViews = parseInt(await adminPage.getByRole('heading', { name: '446' }).innerText(), 10);

    // Assert that total Views > Unique Views
    expect(totalViews).toBeGreaterThan(totalUniqueViews);
  });

  test("Hover over the graph and check tooltip visibility", async () => {
    const graphPoint = adminPage.locator('foreignobject').first(); // Select first graph point
    await graphPoint.hover();
    await adminPage.waitForTimeout(1000); // Wait for tooltip to appear

    // Ensure tooltip is visible
    const tooltip = adminPage.locator('.apexcharts-tooltip.apexcharts-theme-dark');
    expect(await tooltip.isVisible()).toBeTruthy();
  });



  // test("Validate Views vs Unique Views in Table Data", async () => {
  //   // Scroll down to the Leading Docs table
  //   await adminPage.getByRole('tab', { name: 'Views' }).click();

  //   await adminPage.locator("text=Leading Docs").click();

  //   // Loop through table rows and validate Views > Unique Views
  //   const rows = await adminPage.locator("table tbody tr").elementHandles();

  //   for (const row of rows) {
  //     const viewsText = await row.locator('td:nth-child(4)').innerText(); // Adjust index if needed
  //     const uniqueViewsText = await row.locator('td:nth-child(5)').innerText(); // Adjust index if needed

  //     const views = parseInt(viewsText, 10);
  //     const uniqueViews = parseInt(uniqueViewsText, 10);

  //     // Assert that Views > Unique Views in each row
  //     expect(views).toBeGreaterThan(uniqueViews);
  //   }
  // });

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