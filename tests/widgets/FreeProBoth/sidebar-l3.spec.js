import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto(`${process.env.BASE_URL_MSF}/sidebar-l-3/`);
  await page.waitForLoadState("domcontentloaded");
});

test("Sidebar Heading", async ({ page }) => {
  const mainHeading = page.locator(".entry-title");
  await expect(mainHeading).toBeVisible();
  await expect(mainHeading).toHaveText("Sidebar L 3");
});

test("Sidebar Content Exists", async ({ page }) => {
  // Check if sidebar exists
  const sidebar = page.locator(".betterdocs-sidebar-content");
  await expect(sidebar).toBeVisible();
});

test("First Category Check", async ({ page }) => {
  const sidebar = page.locator(".betterdocs-sidebar-content");

  // Get first category using nth(0)
  const firstCategory = sidebar
    .locator(".betterdocs-single-category-wrapper")
    .nth(0);
  await expect(firstCategory).toBeVisible();

  // Check icon and its attributes
  const icon = firstCategory.locator(".betterdocs-category-icon-img");
  await expect(icon).toBeVisible();
  await expect(icon).toHaveAttribute("alt", "betterdocs-category-icon");
  const iconSrc = await icon.getAttribute("src");
  expect(iconSrc).toContain("betterdocs-cat-icon.svg");

  // Check title
  const title = firstCategory.locator(".betterdocs-category-title");
  await expect(title).toBeVisible();
  await expect(title).toHaveText("January 20");

  // Check count
  const countWrapper = firstCategory.locator(
    ".betterdocs-category-items-counts"
  );
  await expect(countWrapper).toBeVisible();
  await expect(countWrapper).toHaveAttribute("data-count", "2");
  const countSpan = countWrapper.locator("span");
  await expect(countSpan).toHaveText(/2/);

  // Click to expand and check articles
  await firstCategory.click();
  const articlesList = firstCategory.locator(".betterdocs-articles-list");
  await expect(articlesList).toBeVisible();

  // Check if we have exactly 2 articles
  const articles = articlesList.locator("li");
  await expect(articles).toHaveCount(2);

  // Click again to close
  await title.click();
});

// Test Hold for 2nd category for the private doc count
