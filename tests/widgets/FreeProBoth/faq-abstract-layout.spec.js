import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto(`${process.env.BASE_URL_MSF}/faq-2/`);
  await page.waitForLoadState("domcontentloaded");
});

test("FAQ - Heading", async ({ page }) => {
  const mainHeading = page.locator(".entry-title");
  await expect(mainHeading).toBeVisible();
  await expect(mainHeading).toHaveText("FAQ");
});

test("FAQ Section - Header", async ({ page }) => {
  const header = page.locator(".betterdocs-faq-section-title");
  await expect(header).toBeVisible();
  await expect(header).toHaveText(" Frequently Asked Questions ");
});

test("First FAQ Section - Content", async ({ page }) => {
  // Check the first FAQ section title
  const firstSectionTitle = page.locator(".betterdocs-faq-title h2").first();
  await expect(firstSectionTitle).toBeVisible();
  await expect(firstSectionTitle).toHaveText("Heeloooo thiiisss teeest");

  // Check the first FAQ item
  const firstFaqItem = page
    .locator(".betterdocs-faq-list")
    .first()
    .locator("li")
    .first();
  const firstFaqTitle = firstFaqItem.locator(".betterdocs-faq-post-name");
  const firstFaqContent = firstFaqItem.locator(
    ".betterdocs-faq-main-content p"
  );
  const faqPost = firstFaqItem.locator(".betterdocs-faq-post");
  const plusIcon = faqPost.locator(".betterdocs-faq-iconplus");
  const minusIcon = faqPost.locator(".betterdocs-faq-iconminus");
  const content = firstFaqItem.locator(".betterdocs-faq-main-content");

  // Check initial state
  await expect(firstFaqTitle).toBeVisible();
  await expect(firstFaqTitle).toHaveText("Cutie pie");
  await expect(plusIcon).toBeVisible();
  await expect(minusIcon).not.toBeVisible();
  await expect(content).not.toBeVisible();

  // Click to open FAQ
  await faqPost.click();

  // Check state after opening
  await expect(plusIcon).not.toBeVisible();
  await expect(minusIcon).toBeVisible();
  await expect(content).toBeVisible();
  await expect(firstFaqContent).toHaveText("Thank you bro");

  // Click to close FAQ
  await faqPost.click();

  // Verify it returns to initial state
  await expect(plusIcon).toBeVisible();
  await expect(minusIcon).not.toBeVisible();
  await expect(content).not.toBeVisible();

  // Check that there are exactly 2 identical FAQ items in the first section
  const faqItemsInFirstSection = page
    .locator(".betterdocs-faq-list")
    .first()
    .locator("li");
  await expect(faqItemsInFirstSection).toHaveCount(2);

  // Verify both items have the same content
  const secondFaqTitle = faqItemsInFirstSection
    .nth(1)
    .locator(".betterdocs-faq-post-name");
  const secondFaqContent = faqItemsInFirstSection
    .nth(1)
    .locator(".betterdocs-faq-main-content p");

  await expect(secondFaqTitle).toHaveText("Cutie pie");
  await expect(secondFaqContent).toHaveText("Thank you bro");
});

test("Second FAQ Section - A f A Content", async ({ page }) => {
  // Check the section title
  const sectionTitles = page.locator(".betterdocs-faq-title h2");
  const secondSectionTitle = sectionTitles.nth(1);
  await expect(secondSectionTitle).toBeVisible();
  await expect(secondSectionTitle).toHaveText("A f A");

  // Get the second FAQ list
  const secondFaqList = page.locator(".betterdocs-faq-list").nth(1);

  // Check first FAQ item (initially closed)
  const firstFaqItem = secondFaqList.locator("li").first();
  const firstFaqTitle = firstFaqItem.locator(".betterdocs-faq-post-name");
  const firstFaqContent = firstFaqItem.locator(
    ".betterdocs-faq-main-content p"
  );
  const firstPlusIcon = firstFaqItem.locator(".betterdocs-faq-iconplus");
  const firstMinusIcon = firstFaqItem.locator(".betterdocs-faq-iconminus");

  // Check initial state of first item
  await expect(firstFaqTitle).toBeVisible();
  await expect(firstFaqTitle).toHaveText("Hello");
  await expect(firstPlusIcon).toBeVisible();
  await expect(firstMinusIcon).not.toBeVisible();
  await expect(firstFaqContent).not.toBeVisible();

  // Check second FAQ item (pre-opened)
  const secondFaqItem = secondFaqList.locator("li").nth(1);
  const secondFaqGroup = secondFaqItem.locator(".betterdocs-faq-group");
  const secondFaqTitle = secondFaqItem.locator(".betterdocs-faq-post-name");
  const secondFaqContent = secondFaqItem.locator(
    ".betterdocs-faq-main-content p"
  );
  const secondPlusIcon = secondFaqItem.locator(".betterdocs-faq-iconplus");
  const secondMinusIcon = secondFaqItem.locator(".betterdocs-faq-iconminus");

  // Verify the pre-opened state
  await expect(secondFaqGroup).toHaveClass(/active/);
  await expect(secondFaqTitle).toBeVisible();
  await expect(secondFaqTitle).toHaveText("Hello");
  await expect(secondPlusIcon).not.toBeVisible();
  await expect(secondMinusIcon).toBeVisible();
  await expect(secondFaqContent).toBeVisible();
  await expect(secondFaqContent).toHaveText("hui");

  // Click to close the pre-opened item
  await secondFaqItem.locator(".betterdocs-faq-post").click();

  // Verify it closes
  await expect(secondPlusIcon).toBeVisible();
  await expect(secondMinusIcon).not.toBeVisible();
  await expect(secondFaqContent).not.toBeVisible();
  await expect(secondFaqGroup).not.toHaveClass(/active/);

  // Click to open it again
  await secondFaqItem.locator(".betterdocs-faq-post").click();

  // Verify it opens again
  await expect(secondPlusIcon).not.toBeVisible();
  await expect(secondMinusIcon).toBeVisible();
  await expect(secondFaqContent).toBeVisible();
  await expect(secondFaqGroup).toHaveClass(/active/);
});
