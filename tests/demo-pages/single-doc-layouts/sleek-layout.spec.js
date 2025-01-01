//@ts-check

import { test, expect } from "@playwright/test";

test.describe("Sleek Layout", () => {
  test("sleek layout should load properly @demo", async ({ page }) => {
    await page.goto("https://demo.betterdocs.co/docs/sleek-layout-use-cases/");

    // Left Sidebar
    await expect(page.locator("#betterdocs-full-sidebar-left")).toMatchAriaSnapshot(`
      - img
      - text: Search.. ⌘ K
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
      - article:
        - heading "FAQ" [level=2]
        - text: "6"
      - article:
        - img
        - heading "Troubleshooting" [level=2]
        - text: "4"
      - article:
        - img
        - heading "Release Notes" [level=2]
        - text: "4"
      - article:
        - img
        - heading "Use Cases" [level=2]
        - text: "4"
        - list:
          - listitem:
            - link "Sleek Layout Use Cases – Nonprofit Websites"
          - listitem:
            - link "Sleek Layout Use Cases – Educational Websites"
          - listitem:
            - link "Sleek Layout Use Cases – Creative Applications"
          - listitem:
            - link "Sleek Layout Use Cases"
      - article:
        - img
        - heading "Community & Support" [level=2]
        - text: "4"
      `);

    // Right Sidebar Toc
    await expect(page.locator("#page")).toMatchAriaSnapshot(`
      - text: Table of contents
      - list:
        - listitem:
          - link "Corporate Websites"
        - listitem:
          - link "Blogs and Content Platforms"
        - listitem:
          - link "E-commerce Stores"
      `);

    // Right Sidebar Share

    await expect(page.locator("#page")).toMatchAriaSnapshot(`
      - heading "Share This Article :" [level=5]
      - list:
        - listitem
        - listitem:
          - link "Facebook":
            - img "Facebook"
        - listitem:
          - link "X":
            - img "X"
        - listitem:
          - link "LinkedIn":
            - img "LinkedIn"
        - listitem:
          - link "Pinterest":
            - img "Pinterest"
      `);

    // Right Sidebar Reactions
    await expect(page.locator("#page")).toMatchAriaSnapshot(`
      - heading "Was it helpful ?" [level=5]
      - list:
        - listitem:
          - link "Happy":
            - img
        - listitem:
          - link "Normal":
            - img
        - listitem:
          - link "Sad":
            - img
      `);

    // Breadcrumbs
    await expect(page.locator("#betterdocs-breadcrumb")).toMatchAriaSnapshot(`
      - navigation:
        - list:
          - listitem:
            - link "Home"
          - listitem:
            - img
          - listitem:
            - link "Docs"
          - listitem:
            - img
          - listitem:
            - link "Use Cases"
          - listitem:
            - img
          - listitem: Sleek Layout Use Cases
      `);

    // Main Content
    await expect(page.locator("#page")).toMatchAriaSnapshot(`
      - heading "Sleek Layout Use Cases" [level=1]
      - paragraph:
        - img
        - text: < 1 min read
      - paragraph:
        - text: The
        - strong: Sleek Layout
        - text: is versatile and can be used in a variety of scenarios. Below are some common use cases where the
        - strong: Sleek Layout
        - text: shines.
      - heading "Corporate Websites" [level=2]:
        - strong: Corporate Websites
      - paragraph:
        - text: The
        - strong: Sleek Layout
        - text: is perfect for professional corporate websites due to its clean, modern design and easy customization options.
      - heading "Blogs and Content Platforms" [level=2]:
        - strong: Blogs and Content Platforms
      - paragraph:
        - text: For blogs, the
        - strong: Sleek Layout
        - text: provides a visually appealing, clutter-free design that makes it easy for readers to focus on the content.
      - heading "E-commerce Stores" [level=2]:
        - strong: E-commerce Stores
      - paragraph:
        - text: E-commerce stores benefit from the
        - strong: Sleek Layout’s
        - text: intuitive design, which offers an optimal browsing experience and encourages conversions.
      - text: /Updated on September \\d+, \\d+/
      - img
      - link "Sleek Layout Use Cases – Creative Applications":
        - img
      `);

    // Reaction Test
    await page.getByRole("link", { name: "Happy" }).click();
    await expect(page.getByText("Thanks for your feedback")).toBeVisible();
  });
});
