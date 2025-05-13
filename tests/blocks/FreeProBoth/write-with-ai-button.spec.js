import { test, expect } from "@playwright/test";

// Ensure to load environment variables before running tests
const baseUrl = process.env.BASE_URL_MSF;

if (!baseUrl) {
  throw new Error("BASE_URL_MSF environment variable is not defined");
}

test.describe("BetterDocs 'betterdocs-admin' Class To Be Loaded Only In Betterdocs Pages", () => {
  let adminContext;
  let adminPage;

  test.beforeAll(async ({ browser }) => {
    // Create a new browser context with admin storage state
    adminContext = await browser.newContext({
      storageState: "playwright/.auth/admin.json",
    });
    adminPage = await adminContext.newPage();

    // Navigate to the specific admin page
    await adminPage.goto(`${baseUrl}/wp-admin/post-new.php?post_type=docs`);

    // Wait for the Write with AI button to be visible
    await adminPage.waitForSelector(".betterdocs-ai-button");
  });

  test("Verify Write with AI Button", async () => {
    const button = adminPage.locator(".betterdocs-ai-button");

    await expect(button).toBeVisible();

    // CSS Attribute Verification
    await expect(button).toHaveCSS("background-color", "rgb(0, 184, 132)");
    await expect(button).toHaveCSS("font-size", "12px");
    await expect(button).toHaveCSS("margin-right", "8px");
    await expect(button).toHaveCSS("padding", "0px 15px");
    await expect(button).toHaveCSS("border-radius", "3px");
    await expect(button).toHaveCSS("height", "38px");
    await expect(button).toHaveCSS("display", "flex");
    await expect(button).toHaveCSS("align-items", "center");
    await expect(button).toHaveCSS("justify-content", "space-between");
    await expect(button).toHaveCSS("gap", "10px");
    await expect(button).toHaveCSS("width", "135px");
  });
});
