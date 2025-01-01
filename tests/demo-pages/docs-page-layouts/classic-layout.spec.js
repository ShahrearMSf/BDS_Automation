//@ts-check

import { test, expect } from "@playwright/test";

test.describe("Classic Layout", () => {
  test("classic layout should load properly @demo", async ({ page }) => {
    await page.goto("https://demo.betterdocs.co/classic-layout/");

    // Head section
    await expect.soft(page.locator("#page")).toMatchAriaSnapshot(`
      - link "Getting Started 6 articles":
        - heading "Getting Started" [level=2]
      - link "Subscription 6 articles":
        - heading "Subscription" [level=2]
      - link "Configurations 6 articles":
        - heading "Configurations" [level=2]
      `);

    // Body
    await expect.soft(page.locator("#page")).toMatchAriaSnapshot(`
      - link "Getting Started 6 articles":
        - heading "Getting Started" [level=2]
      - link "Configurations 6 articles":
        - heading "Configurations" [level=2]
      - link "Installation 6 articles":
        - heading "Installation" [level=2]
      - link "Setup Process 6 articles":
        - heading "Setup Process" [level=2]
      - link "Subscription 6 articles":
        - heading "Subscription" [level=2]
      - link "Payment Process 6 articles":
        - heading "Payment Process" [level=2]
      - link "Integrations 6 articles":
        - heading "Integrations" [level=2]
      - link "FAQ 6 articles":
        - heading "FAQ" [level=2]
      - link "betterdocs-category-icon Troubleshooting 4 articles":
        - img "betterdocs-category-icon"
        - heading "Troubleshooting" [level=2]
      - link "betterdocs-category-icon Release Notes 4 articles":
        - img "betterdocs-category-icon"
        - heading "Release Notes" [level=2]
      - link "betterdocs-category-icon Use Cases 4 articles":
        - img "betterdocs-category-icon"
        - heading "Use Cases" [level=2]
      - link "betterdocs-category-icon Community & Support 4 articles":
        - img "betterdocs-category-icon"
        - heading "Community & Support" [level=2]
      `);

    // Popular Docs Section
    await expect.soft(page.locator("#page")).toMatchAriaSnapshot(`
      - heading "Popular Docs" [level=2]
      - list:
        - listitem:
          - img
          - link "How To Get Free Trial For Our Products?"
        - listitem:
          - img
          - link "How To Sign Up For Updates?"
        - listitem:
          - img
          - link "How To Get Free Trial For Our Products?"
        - listitem:
          - img
          - link "Do You Accept PayPal Payments"
        - listitem:
          - img
          - link "Do You Accept PayPal Payments"
        - listitem:
          - img
          - link "How To Get Free Trial For Our Products?"
        - listitem:
          - img
          - link "How To Get Free Trial For Our Products?"
        - listitem:
          - img
          - link "Do You Have Any Refund Or Return Policies?"
      `);

    // Getting Started Section
    await expect.soft(page.getByRole("article")).toMatchAriaSnapshot(`
      - heading "Getting Started" [level=2]
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
      `);
  });
});
