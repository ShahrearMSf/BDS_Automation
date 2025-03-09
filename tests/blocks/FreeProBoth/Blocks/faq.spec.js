import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto(`${process.env.BASE_URL_MSF}/faq/`);
  await page.waitForLoadState("domcontentloaded");
});

test("validate FAQ Main Heading", async ({ page }) => {
  const mainHeading = page.locator(
    ".betterdocs-faq-layout-1.betterdocs-faq-section-title"
  );
  await expect(mainHeading).toBeVisible();
  await expect(mainHeading).toHaveText("Frequently Asked Questions");
});

// Section 1: Heeloooo thiiisss teeest
test("Section 1 - Heeloooo thiiisss teeest", async ({ page }) => {
  const section = page.locator(".betterdocs-faq-inner-wrapper").filter({
    has: page.getByText("Heeloooo thiiisss teeest"),
  });

  // Verify section title
  await expect(
    section.getByRole("heading", { name: "Heeloooo thiiisss teeest" })
  ).toBeVisible();

  // Verify group count

  const groups = section
    .locator(".betterdocs-faq-list")
    .nth(0)
    .locator(".betterdocs-faq-group");
  await expect(groups).toHaveCount(2);

  // Test both groups
  for (let i = 0; i < 2; i++) {
    const group = groups.nth(i);
    const answer = group.locator(".betterdocs-faq-main-content");

    // Initial state
    await expect(answer).not.toBeVisible();
    await expect(group).not.toHaveClass(/active/);

    // Click to expand
    await group.locator(".betterdocs-faq-post").click();
    await expect(answer).toBeVisible();
    await expect(group).toHaveClass(/active/);

    // Click to collapse
    await group.locator(".betterdocs-faq-post").click();
    await expect(answer).not.toBeVisible();
    await expect(group).not.toHaveClass(/active/);
  }
});

// Section 2: A f A
test("Section 2 - A f A", async ({ page }) => {
  const section = page.locator(".betterdocs-faq-inner-wrapper").filter({
    has: page.getByText("A f A"),
  });

  // Verify section title
  await expect(section.getByRole("heading", { name: "A f A" })).toBeVisible();

  // Verify group count
  const groups = section
    .locator(".betterdocs-faq-list")
    .nth(1)
    .locator(".betterdocs-faq-group");
  await expect(groups).toHaveCount(2);
  await expect(groups).toHaveCount(2);

  // Test first group
  const group0 = groups.nth(0);
  const answer0 = group0.locator(".betterdocs-faq-main-content");
  await expect(answer0).not.toBeVisible();
  await expect(group0).not.toHaveClass(/active/);
  await group0.locator(".betterdocs-faq-post").click();
  await expect(answer0).toBeVisible();
  await expect(group0).toHaveClass(/active/);
  await group0.locator(".betterdocs-faq-post").click();
  await expect(answer0).not.toBeVisible();

  // Test second group (initially active)
  const group1 = groups.nth(1);
  const answer1 = group1.locator(".betterdocs-faq-main-content");
  await expect(answer1).toBeVisible();
  await expect(group1).toHaveClass(/active/);
  await group1.locator(".betterdocs-faq-post").click();
  await expect(answer1).not.toBeVisible();
  await expect(group1).not.toHaveClass(/active/);
  await group1.locator(".betterdocs-faq-post").click();
  await expect(answer1).toBeVisible();
});

// Section 3: right then
test("Section 3 - right then", async ({ page }) => {
  const section = page.locator(".betterdocs-faq-inner-wrapper").filter({
    has: page.getByText("right then"),
  });

  await expect(
    section.getByRole("heading", { name: "right then" })
  ).toBeVisible();

  const groups = section
    .locator(".betterdocs-faq-list")
    .nth(2)
    .locator(".betterdocs-faq-group");
  await expect(groups).toHaveCount(4);

  // Test non-active groups (indices 0, 1, 3)
  for (const i of [0, 1, 3]) {
    const group = groups.nth(i);
    const answer = group.locator(".betterdocs-faq-main-content");

    await expect(answer).not.toBeVisible();
    await expect(group).not.toHaveClass(/active/);

    await group.locator(".betterdocs-faq-post").click();
    await expect(answer).toBeVisible();
    await expect(group).toHaveClass(/active/);

    await group.locator(".betterdocs-faq-post").click();
    await expect(answer).not.toBeVisible();
  }

  // Test active group (index 2)
  const activeGroup = groups.nth(2);
  const activeAnswer = activeGroup.locator(".betterdocs-faq-main-content");

  await expect(activeAnswer).toBeVisible();
  await expect(activeGroup).toHaveClass(/active/);

  await activeGroup.locator(".betterdocs-faq-post").click();
  await expect(activeAnswer).not.toBeVisible();
  await expect(activeGroup).not.toHaveClass(/active/);

  await activeGroup.locator(".betterdocs-faq-post").click();
  await expect(activeAnswer).toBeVisible();
});
