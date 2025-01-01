//@ts-check

import { test, expect } from "@playwright/test";

test.describe("Handbook Layout", () => {
  test("handbook layout should load properly @demo", async ({ page }) => {
    await page.goto("https://demo.betterdocs.co/handbook-layout/");

    // Top section
    await expect.soft(page.getByRole("link", { name: "Getting Started 6 articles" })).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "Subscription 6 articles" })).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "Configurations 6 articles" })).toBeVisible();

    // First category snapshot test
    await expect.soft(page.locator("#page")).toMatchAriaSnapshot(`
          - heading "Getting Started" [level=2]
          - text: "6"
          - list:
            - listitem:
              - link "How To Get Free Trial For Our Products?":
                - img
            - listitem:
              - link "Do You Accept PayPal Payments":
                - img
            - listitem:
              - link "Do You Have Any Refund Or Return Policies?":
                - img
            - listitem:
              - link "How To Customize Your Preferences?":
                - img
            - listitem:
              - link "How To Purchase Our Subscription?":
                - img
          - link "Explore More":
            - img
        `);

    // Other category titles
    await expect
      .soft(page.locator("article").filter({ hasText: "Configurations 6 How To Get" }).getByRole("heading"))
      .toBeVisible();
    await expect.soft(page.getByRole("heading", { name: "Installation" })).toBeVisible();
    await expect.soft(page.getByRole("heading", { name: "Setup Process" })).toBeVisible();
    await expect
      .soft(page.locator("article").filter({ hasText: "Subscription 6 How To Get" }).getByRole("heading"))
      .toBeVisible();
    await expect.soft(page.getByRole("heading", { name: "Payment Process" })).toBeVisible();
    await expect.soft(page.getByRole("heading", { name: "Integrations" })).toBeVisible();
    await expect.soft(page.getByRole("heading", { name: "FAQ" })).toBeVisible();
    await expect.soft(page.getByRole("heading", { name: "Troubleshooting" })).toBeVisible();
    await expect.soft(page.getByRole("heading", { name: "Release Notes" })).toBeVisible();
    await expect.soft(page.getByRole("heading", { name: "Use Cases" })).toBeVisible();
    await expect.soft(page.getByRole("heading", { name: "Community & Support" })).toBeVisible();
  });
});
