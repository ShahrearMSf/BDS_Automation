import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto(`${process.env.BASE_URL_MSF}/sidebar-2/`);
  await page.waitForLoadState("domcontentloaded");
});

test("Sidebar Heading", async ({ page }) => {
  const mainHeading = page.locator(".betterdocs-category-title").first();
  await expect(mainHeading).toBeVisible();
  await expect(mainHeading).toHaveText("January 20");
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

test("Second Category (Parent) and Nested Categories", async ({ page }) => {
  const sidebar = page.locator(".betterdocs-sidebar-content");
  const secondCategory = sidebar
    .locator(".betterdocs-single-category-wrapper")
    .nth(1);

  // 1. Basic category checks
  await expect(secondCategory).toBeVisible();

  // Check icon
  const icon = secondCategory.locator(".betterdocs-category-icon-img");
  await expect(icon).toBeVisible();
  await expect(icon).toHaveAttribute("src", /\.jpg$/);

  // Check title
  const title = secondCategory.locator(".betterdocs-category-title");
  await expect(title).toBeVisible();
  await expect(title).toHaveText("Parent");

  // Check count is 8
  const countWrapper = secondCategory.locator(
    ".betterdocs-category-items-counts"
  );
  await expect(countWrapper).toBeVisible();
  await expect(countWrapper).toHaveAttribute("data-count", "8");
  await expect(countWrapper.locator("span")).toHaveText("8");

  // 2. Check direct articles
  await secondCategory.click();
  const articlesList = secondCategory.locator(".betterdocs-articles-list");
  await expect(articlesList).toBeVisible();

  const directArticles = articlesList.locator(
    "> li:not(.betterdocs-nested-category-wrapper)"
  );
  await expect(directArticles).toHaveCount(2);

  // 3. Check Child 1
  const child1 = articlesList.locator(
    ".betterdocs-nested-category-title:has-text('Child 1')"
  );
  await child1.click();
  const child1Articles = articlesList
    .locator("li.betterdocs-nested-category-wrapper")
    .first()
    .locator(".betterdocs-nested-category-list > li");
  await expect(child1Articles).toHaveCount(3);

  // 4. Check Child 2
  const child2 = articlesList.locator(
    ".betterdocs-nested-category-title:has-text('Child 2')"
  );
  await child2.click();
  const child2Articles = articlesList
    .locator("li.betterdocs-nested-category-wrapper")
    .nth(1)
    .locator(".betterdocs-nested-category-list > li");
  await expect(child2Articles).toHaveCount(3);
});
