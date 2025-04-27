import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto(`${process.env.BASE_URL_MSF}/sidebar-2/`);
  await page.waitForLoadState("domcontentloaded");
});

test("Sidebar Heading", async ({ page }) => {
  const mainHeading = page.locator(".entry-title");
  await expect(mainHeading).toBeVisible();
  await expect(mainHeading).toHaveText("Sidebar");
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
  await expect(title).toHaveText("৩য় পক্ষ");

  // Check count
  const countWrapper = firstCategory.locator(
    ".betterdocs-category-items-counts"
  );
  await expect(countWrapper).toBeVisible();
  await expect(countWrapper).toHaveAttribute("data-count", "3");
  const countSpan = countWrapper.locator("span");
  await expect(countSpan).toHaveText(/3/);

  // Click to expand and check articles
  await firstCategory.click();
  const articlesList = firstCategory.locator(".betterdocs-articles-list");
  await expect(articlesList).toBeVisible();

  // Check if we have exactly 3 articles
  const articles = articlesList.locator("li");
  await expect(articles).toHaveCount(3);

  // Click again to close
  await title.click();
});

test("Third Category Check", async ({ page }) => {
  const sidebar = page.locator(".betterdocs-sidebar-content");

  // Get third category using nth(2)
  const thirdCategory = sidebar
    .locator(".betterdocs-single-category-wrapper")
    .nth(2);
  await expect(thirdCategory).toBeVisible();

  // Check icon
  const icon = thirdCategory.locator(".betterdocs-category-icon-img");
  await expect(icon).toBeVisible();
  const iconSrc = await icon.getAttribute("src");
  expect(iconSrc).toContain(".jpg");

  // Check title
  const title = thirdCategory.locator(".betterdocs-category-title");
  await expect(title).toBeVisible();
  await expect(title).toHaveText("All In All MSF");

  // Check item count
  const countWrapper = thirdCategory.locator(
    ".betterdocs-category-items-counts"
  );
  await expect(countWrapper).toBeVisible();
  await expect(countWrapper).toHaveAttribute("data-count", "23");
  const countSpan = countWrapper.locator("span");
  await expect(countSpan).toHaveText(/23/);

  // Expand and check article list
  await thirdCategory.click();
  const articlesList = thirdCategory.locator(".betterdocs-articles-list");
  await expect(articlesList).toBeVisible();

  const articles = articlesList.locator("li");
  await expect(articles).toHaveCount(23);

  // Collapse
  await title.click();
});
