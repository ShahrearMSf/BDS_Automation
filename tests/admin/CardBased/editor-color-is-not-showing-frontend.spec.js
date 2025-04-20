//Arafat

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
    await adminPage.goto(`${baseUrl}/wp-admin/`);
  });

  test.afterAll(async () => {
    // Close the browser context after all tests are done
    await adminContext.close();
  });

  test("Create, Publish, and Validate Docs", async () => {
    // Navigate to the BetterDocs editor page
    await adminPage.goto(`${baseUrl}/wp-admin/post-new.php?post_type=docs`);

    // Wait for the page to load
    await adminPage.waitForTimeout(2000);

    // Add a title to the document
    await adminPage.getByLabel("Add title").click();
    await adminPage.getByLabel("Add title").fill("Header Docs");

    // Add a heading block
    await adminPage.getByLabel("Add block").click();
    await adminPage.getByPlaceholder("Search").click();
    await adminPage.getByPlaceholder("Search").fill("head");
    await adminPage
      .getByRole("option", { name: "Heading", exact: true })
      .click();
    await adminPage.getByLabel("Block: Heading").fill("Heading-01");

    // Open the text style options

    await adminPage.getByRole("button", { name: "Text", exact: true }).click();
    await adminPage.getByLabel("Vivid green cyan").click();
  });
});
