// Arafat
import { test, expect } from "@playwright/test";

const baseUrl = process.env.BASE_URL_MSF;

test.describe("Goto WP-Admin Load", () => {
  let adminContext, adminPage;

  test.beforeAll(async ({ browser }) => {
    adminContext = await browser.newContext({
      storageState: "playwright/.auth/admin.json",
    });
    adminPage = await adminContext.newPage();
    await adminPage.goto(`${baseUrl}/wp-admin/`);
  });

  test.afterAll(async () => {
    await adminContext.close();
  });

  test("Create, Publish, and Validate Docs", async () => {
    await adminPage.goto(`${baseUrl}/wp-admin/post-new.php?post_type=docs`);

    await adminPage.getByLabel("Add title").click();
    await adminPage.getByLabel("Add title").fill("Header Docs");

    await adminPage.getByLabel("Add block").click();
    await adminPage.getByPlaceholder("Search").fill("head");
    await adminPage
      .getByRole("option", { name: "Heading", exact: true })
      .click();
    await adminPage.getByLabel("Block: Heading").fill("Heading-01");

    await adminPage.getByRole("button", { name: "Text", exact: true }).click();
    await adminPage.getByLabel("Vivid green cyan").click();

    await adminPage.waitForTimeout(3000);

    await adminPage
      .getByRole("button", { name: "Publish", exact: true })
      .click();
    await adminPage
      .getByLabel("Editor publish")
      .getByRole("button", { name: "Publish", exact: true })
      .click();

    await Promise.all([
      adminPage.waitForNavigation(),
      adminPage
        .locator('[data-testid="snackbar"]')
        .getByRole("link", { name: "View Docs" })
        .click(),
    ]);
    await adminPage.waitForLoadState();

    await expect(
      adminPage.locator("#betterdocs-single-content").getByText("Heading-01")
    ).toBeVisible();
    //also check this heading has this color #00d084
    const headingColor = await adminPage.evaluate(() => {
      const headingElement = document.querySelector(
        "#betterdocs-single-content h2"
      );
      return window.getComputedStyle(headingElement).color;
    });
    expect(headingColor).toBe("rgb(0, 208, 132)"); // Check if the color is #00d084

    await adminPage.getByRole("menuitem", { name: "Edit Docs" }).click();
    await adminPage.getByRole("button", { name: "Move to trash" }).click();
    await adminPage.getByText("Are you sure you want to move").click();
    await adminPage.getByRole("button", { name: "Move to trash" }).click();
  });
});
