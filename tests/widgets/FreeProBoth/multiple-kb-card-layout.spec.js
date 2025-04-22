import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto(`${process.env.BASE_URL_MSF}/multiple-kb-card-l/`);
  await page.waitForLoadState("domcontentloaded");
});

test("Multiple KB Box Heading", async ({ page }) => {
  const mainHeading = page.locator(".entry-title");
  await expect(mainHeading).toBeVisible();
  await expect(mainHeading).toHaveText("Multiple KB Card L");
});

test("validate first category box (A)", async ({ page }) => {
  const categoryBoxA = page.locator(".category-box").nth(0);

  const categoryIconA = categoryBoxA.locator(".betterdocs-category-icon-img");
  await expect(categoryIconA).toBeVisible();

  const categoryTitleA = categoryBoxA.locator(".betterdocs-category-title");
  await expect(categoryTitleA).toBeVisible();
  await expect(categoryTitleA).toHaveText("A");

  const docCountA = categoryBoxA.locator(".betterdocs-category-items-counts");
  await expect(docCountA).toBeVisible();
  await expect(docCountA).toHaveText(/(\d+)\s+/);

  // await categoryBoxA.click();
  // await page.waitForLoadState("domcontentloaded");
  // await expect(page).toHaveURL(`${process.env.BASE_URL_MSF}/docs/a/`);
});

test("validate second category box (BCB) and explore its page", async ({
  page,
}) => {
  const categoryBoxBCB = page.locator(".category-box").nth(2);

  const categoryIconBCB = categoryBoxBCB.locator(
    ".betterdocs-category-icon-img"
  );
  await expect(categoryIconBCB).toBeVisible();
  await expect(categoryIconBCB).toHaveAttribute("alt", "");
  await expect(categoryIconBCB).toHaveAttribute("src", /sunset-150x150\.jpg/);

  const categoryTitleBCB = categoryBoxBCB.locator(".betterdocs-category-title");
  await expect(categoryTitleBCB).toBeVisible();
  await expect(categoryTitleBCB).toHaveText("BCB");

  const docCountBCB = categoryBoxBCB.locator(
    ".betterdocs-category-items-counts"
  );
  await expect(docCountBCB).toBeVisible();
  await expect(docCountBCB).toHaveText(/(\d+)\s+/);
});
