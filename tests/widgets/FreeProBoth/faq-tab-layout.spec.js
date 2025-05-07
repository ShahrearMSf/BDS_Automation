import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto(`${process.env.BASE_URL_MSF}/faq-tab-layout/`);
  await page.waitForLoadState("domcontentloaded");
});

test("FAQ - Main Heading", async ({ page }) => {
  const mainHeading = page.locator(".betterdocs-faq-section-title");
  await expect(mainHeading).toBeVisible();
  await expect(mainHeading).toHaveText("We are QA");
});

test("Section 1 - Heeloooo thiiisss teeest", async ({ page }) => {
  // Click first tab and verify active states
  const firstTab = page.locator(".betterdocs-faq-tab").nth(0);
  await firstTab.click();
  await expect(firstTab).toHaveClass(/active/);

  // Get the first FAQ section content
  const faqContent = page.locator(
    '.betterdocs-faq-list-content[data-term-id="143"]'
  );
  await expect(faqContent).toBeVisible();
  await expect(faqContent).toHaveClass(/active/);

  // Get all FAQ items in the list
  const faqItems = faqContent.locator(".betterdocs-faq-list li");
  await expect(faqItems).toHaveCount(2);

  // Test each FAQ item
  for (let i = 0; i < 2; i++) {
    const faqItem = faqItems.nth(i);

    // Get elements using simple class names
    const faqGroup = faqItem.locator(".betterdocs-faq-group");
    const faqPost = faqItem.locator(".betterdocs-faq-post");
    const title = faqPost.locator(".betterdocs-faq-post-name");
    const plusIcon = faqPost.locator(".betterdocs-faq-iconplus");
    const minusIcon = faqPost.locator(".betterdocs-faq-iconminus");
    const content = faqItem.locator(".betterdocs-faq-main-content");
    const paragraph = content.locator("p");

    // Verify initial state
    await expect(faqGroup).toBeVisible();
    await expect(title).toBeVisible();
    await expect(title).toHaveText("Cutie pie");
    await expect(plusIcon).toBeVisible();
    await expect(minusIcon).toHaveCSS("display", "none");
    await expect(content).not.toBeVisible();

    // Click to expand
    await faqPost.click();

    // Verify expanded state
    await expect(plusIcon).toHaveCSS("display", "none");
    await expect(minusIcon).toBeVisible();
    await expect(content).toBeVisible();
    await expect(paragraph).toHaveText("Thank you bro");

    // Click to collapse
    await faqPost.click();

    // Verify collapsed state
    await expect(plusIcon).toBeVisible();
    await expect(minusIcon).toHaveCSS("display", "none");
    await expect(content).not.toBeVisible();

    // Verify SVG icons properties
    for (const icon of [plusIcon, minusIcon]) {
      await expect(icon).toHaveAttribute("width", "21");
      await expect(icon).toHaveAttribute("height", "20");
      await expect(icon).toHaveAttribute("viewBox", "0 0 21 20");
      await expect(icon).toHaveAttribute("fill", "none");
    }
  }
});

//Test On Hold until arrow issue fixed

// test("Section 2 - A f A", async ({ page }) => {
//   // Click second tab and verify active states
//   const secondTab = page.locator(".betterdocs-faq-tab").nth(1);
//   await secondTab.click();
//   await expect(secondTab).toHaveClass(/active/);

//   // Get the second FAQ section content
//   const faqContent = page.locator(
//     '.betterdocs-faq-list-content[data-term-id="142"]'
//   );
//   await expect(faqContent).toBeVisible();
//   await expect(faqContent).toHaveClass(/active/);

//   // Get all FAQ items in the list
//   const faqItems = faqContent.locator(".betterdocs-faq-list li");
//   await expect(faqItems).toHaveCount(2);

//   // Test each FAQ item
//   for (let i = 0; i < 2; i++) {
//     const faqItem = faqItems.nth(i);

//     // Get elements using simple class names
//     const faqGroup = faqItem.locator(".betterdocs-faq-group");
//     const faqPost = faqItem.locator(".betterdocs-faq-post");
//     const title = faqPost.locator(".betterdocs-faq-post-name");
//     const plusIcon = faqPost.locator(".betterdocs-faq-iconplus");
//     const minusIcon = faqPost.locator(".betterdocs-faq-iconminus");
//     const content = faqItem.locator(".betterdocs-faq-main-content");
//     const paragraph = content.locator("p");

//     // Verify title for all items
//     await expect(title).toBeVisible();
//     await expect(title).toHaveText("Hello");

//     if (i === 1) {
//       // Second item starts expanded
//       await expect(faqGroup).toHaveClass(/active/);
//       await expect(content).toBeVisible();
//       await expect(content).toHaveCSS("display", "block");
//       await expect(paragraph).toHaveText("hui");
//       await expect(plusIcon).toHaveCSS("display", "");
//       await expect(minusIcon).toHaveCSS("display", "none");

//       // Click to collapse
//       await faqPost.click();
//       await expect(faqGroup).not.toHaveClass(/active/);
//       await expect(content).not.toBeVisible();
//       await expect(plusIcon).toHaveCSS("display", "");
//       await expect(minusIcon).toHaveCSS("display", "none");

//       // Click to expand again
//       await faqPost.click();
//       await expect(faqGroup).toHaveClass(/active/);
//       await expect(content).toBeVisible();
//       await expect(plusIcon).toHaveCSS("display", "none");
//       await expect(minusIcon).toHaveCSS("display", "");
//     } else {
//       // First item starts collapsed
//       await expect(faqGroup).not.toHaveClass(/active/);
//       await expect(content).not.toBeVisible();
//       await expect(plusIcon).toHaveCSS("display", "");
//       await expect(minusIcon).toHaveCSS("display", "none");

//       // Click to expand
//       await faqPost.click();
//       await expect(faqGroup).toHaveClass(/active/);
//       await expect(content).toBeVisible();
//       await expect(paragraph).toHaveText("hui");
//       await expect(plusIcon).toHaveCSS("display", "none");
//       await expect(minusIcon).toHaveCSS("display", "");

//       // Click to collapse
//       await faqPost.click();
//       await expect(faqGroup).not.toHaveClass(/active/);
//       await expect(content).not.toBeVisible();
//       await expect(plusIcon).toHaveCSS("display", "");
//       await expect(minusIcon).toHaveCSS("display", "none");
//     }

//     // Verify SVG icons properties
//     for (const icon of [plusIcon, minusIcon]) {
//       await expect(icon).toHaveAttribute("width", "21");
//       await expect(icon).toHaveAttribute("height", "20");
//       await expect(icon).toHaveAttribute("viewBox", "0 0 21 20");
//       await expect(icon).toHaveAttribute("fill", "none");
//     }
//   }
// });
