import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto(`${process.env.BASE_URL_MSF}/category-box-classic-l`);
  await page.waitForLoadState("domcontentloaded");
});

test("Category Box Classic L - Main Heading", async ({ page }) => {
  const mainHeading = page.locator(".entry-title");
  await expect(mainHeading).toBeVisible();
  await expect(mainHeading).toHaveText("Category Box Classic L");
});

test("Card 1 - Alif (Default Icon)", async ({ page }) => {
  const card = page.locator(".betterdocs-single-category-wrapper").nth(0);

  await expect(card).toBeVisible();

  await expect(card).toHaveAttribute(
    "href",
    `${process.env.BASE_URL_MSF}/docs/non-knowledgebase/alif/`
  );

  await expect(card.locator("h2")).toHaveText("Alif");

  await expect(
    card.locator(".betterdocs-category-items-counts span")
  ).toHaveText(/^\s*\d+\s+Docs\s*$/i);

  const icon = card.locator("img.betterdocs-category-icon-img");
  await expect(icon).toBeVisible();
  await expect(icon).toHaveAttribute(
    "src",
    `${process.env.BASE_URL_MSF}/wp-content/plugins/betterdocs/assets/admin/images/betterdocs-cat-icon.svg?v=3.8.13`
  );
});

test("Card 2 - All In All MSF (Custom Icon)", async ({ page }) => {
  const card = page.locator(".betterdocs-single-category-wrapper").nth(1);

  await expect(card).toBeVisible();

  await expect(card).toHaveAttribute(
    "href",
    `${process.env.BASE_URL_MSF}/docs/bcb/allinallmsf/`
  );

  await expect(card.locator("h2")).toHaveText("All In All MSF");

  await expect(card.locator(".betterdocs-category-description")).toHaveText(
    "Here you will find the docs containing related docs, attachments and time perfectly"
  );

  await expect(
    card.locator(".betterdocs-category-items-counts span")
  ).toHaveText(/^\s*\d+\s+Docs\s*$/i);

  const icon = card.locator("img.betterdocs-category-icon-img");
  await expect(icon).toBeVisible();
  await expect(icon).not.toHaveAttribute("src", /betterdocs-cat-icon\.svg/);
  await expect(icon).toHaveAttribute(
    "src",
    `${process.env.BASE_URL_MSF}/wp-content/uploads/2024/06/download-4-150x150.jpg`
  );
});

test("Card 3 - API & Development (Custom Icon)", async ({ page }) => {
  const card = page.locator(".betterdocs-single-category-wrapper").nth(2);

  await expect(card).toBeVisible();

  await expect(card).toHaveAttribute(
    "href",
    `${process.env.BASE_URL_MSF}/docs/bcb/api-development/`
  );

  await expect(card.locator("h2")).toHaveText("API & Development");

  await expect(
    card.locator(".betterdocs-category-items-counts span")
  ).toHaveText(/^\s*\d+\s+Docs\s*$/i);

  const icon = card.locator("img.betterdocs-category-icon-img");
  await expect(icon).toBeVisible();
  await expect(icon).not.toHaveAttribute("src", /betterdocs-cat-icon\.svg/);
  await expect(icon).toHaveAttribute(
    "src",
    `${process.env.BASE_URL_MSF}/wp-content/uploads/2024/06/t4-100x150.png`
  );
});

test("Click on 2nd Card and Verify Title & Count", async ({ page }) => {
  await page.goto(`${process.env.BASE_URL_MSF}/category-box-card-l/`);
  await page.waitForLoadState("domcontentloaded");

  const secondCard = page.locator(".betterdocs-single-category-wrapper").nth(1);
  await secondCard.click();

  await page.waitForLoadState("domcontentloaded");

  const title = page.locator(
    ".betterdocs-content-area .betterdocs-category-title"
  );
  await expect(title).toBeVisible();
  await expect(title).toHaveText("All In All MSF");

  const count = page.locator(".betterdocs-sub-category-items-counts span");
  await expect(count).toBeVisible();
  await expect(count).toHaveText(/^\s*\d+\s+Docs\s*$/i);
});
