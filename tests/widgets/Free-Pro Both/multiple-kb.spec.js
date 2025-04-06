import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto(`${process.env.BASE_URL_MSF}/multiple-kb-2/`);
  await page.waitForLoadState("domcontentloaded");
});

test("Multiple KB Box Heading", async ({ page }) => {
  const mainHeading = page.locator(".entry-title");
  await expect(mainHeading).toBeVisible();
  await expect(mainHeading).toHaveText("Multiple KB");
});

test("validate first category box (A)", async ({ page }) => {
  const categoryBoxA = page.locator(".category-box.category-a");

  const categoryIconA = categoryBoxA.locator(".betterdocs-category-icon svg");
  await expect(categoryIconA).toBeVisible();

  const categoryTitleA = categoryBoxA.locator(".betterdocs-category-title");
  await expect(categoryTitleA).toBeVisible();
  await expect(categoryTitleA).toHaveText("A");

  const docCountA = categoryBoxA.locator(
    ".betterdocs-sub-category-items-counts"
  );
  await expect(docCountA).toBeVisible();
  await expect(docCountA).toHaveText(
    /(\d+)\s+(Category|Categories)\s+\|\s+(\d+)\s+articles?/
  );

  await categoryBoxA.click();
  await page.waitForLoadState("domcontentloaded");
  await expect(page).toHaveURL(`${process.env.BASE_URL_MSF}/docs/a/`);
});

test("validate second category box (BCB) and explore its page", async ({
  page,
}) => {
  const categoryBoxBCB = page.locator(".category-box.category-bcb");

  const categoryIconBCB = categoryBoxBCB.locator(
    ".betterdocs-category-folder-img"
  );
  await expect(categoryIconBCB).toBeVisible();
  await expect(categoryIconBCB).toHaveAttribute("alt", "");
  await expect(categoryIconBCB).toHaveAttribute("src", /sunset-150x150\.jpg/);

  const categoryTitleBCB = categoryBoxBCB.locator(".betterdocs-category-title");
  await expect(categoryTitleBCB).toBeVisible();
  await expect(categoryTitleBCB).toHaveText("BCB");

  const docCountBCB = categoryBoxBCB.locator(
    ".betterdocs-sub-category-items-counts"
  );
  await expect(docCountBCB).toBeVisible();
  await expect(docCountBCB).toHaveText(
    /(\d+)\s+(Category|Categories)\s+\|\s+(\d+)\s+articles?/
  );

  await categoryBoxBCB.click();
  await page.waitForLoadState("domcontentloaded");
  await expect(page).toHaveURL(`${process.env.BASE_URL_MSF}/docs/bcb/`);

  const allInAllMSFBox = page.locator(".category-box.category-allinallmsf");
  const allInAllMSFIcon = allInAllMSFBox.locator(
    ".betterdocs-category-folder-img"
  );
  await expect(allInAllMSFIcon).toBeVisible();
  await expect(allInAllMSFIcon).toHaveAttribute(
    "src",
    /download-4-150x150\.jpg/
  );

  const allInAllMSFTitle = allInAllMSFBox.locator(".betterdocs-category-title");
  await expect(allInAllMSFTitle).toBeVisible();
  await expect(allInAllMSFTitle).toHaveText("All In All MSF");

  const allInAllMSFDocCount = allInAllMSFBox.locator(
    ".betterdocs-sub-category-items-counts"
  );
  await expect(allInAllMSFDocCount).toBeVisible();
  await expect(allInAllMSFDocCount).toHaveText(/(\d+)\s+docs?/);

  const allInAllMSFLastUpdated = allInAllMSFBox.locator(
    ".betterdocs-last-update"
  );
  await expect(allInAllMSFLastUpdated).toBeVisible();
  await expect(allInAllMSFLastUpdated).toHaveText(
    /Last Updated:\s(January|February|March|April|May|June|July|August|September|October|November|December)\s([1-9]|[0-2][0-9]|3[0-1]),\s(\d{4})/
  );

  const feb6Box = page.locator(".category-box.category-feb-6");
  const feb6Icon = feb6Box.locator(".toggle-arrow.arrow-right svg");
  await expect(feb6Icon).toBeVisible();

  const feb6Title = feb6Box.locator(".betterdocs-category-title");
  await expect(feb6Title).toBeVisible();
  await expect(feb6Title).toHaveText("Feb 6");

  const feb6DocCount = feb6Box.locator(".betterdocs-sub-category-items-counts");
  await expect(feb6DocCount).toBeVisible();
  await expect(feb6DocCount).toHaveText(/(\d+)\s+docs?/);

  const feb6LastUpdated = feb6Box.locator(".betterdocs-last-update");
  await expect(feb6LastUpdated).toBeVisible();
  await expect(feb6LastUpdated).toHaveText(
    /Last Updated:\s(January|February|March|April|May|June|July|August|September|October|November|December)\s([1-9]|[0-2][0-9]|3[0-1]),\s(\d{4})/
  );
});
