import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto(`${process.env.BASE_URL_MSF}/faq-tab-l/`);
  await page.waitForLoadState("domcontentloaded");
});

test("validate FAQ Main Heading", async ({ page }) => {
  const mainHeading = page.locator(".betterdocs-faq-section-title");
  await expect(mainHeading).toBeVisible();
  await expect(mainHeading).toHaveText("Frequently Asked Questions");
});

test("Section 1 - Heeloooo thiiisss teeest", async ({ page }) => {
  await page.locator(".betterdocs-faq-tab").nth(0).click();

  await expect(page.locator(".betterdocs-faq-tab").nth(0)).toHaveClass(
    /active/
  );

  const activeContent = page.locator(".betterdocs-faq-list-content.active");
  await expect(activeContent).toBeVisible();

  const groups = activeContent.locator(".betterdocs-faq-group");
  await expect(groups).toHaveCount(2);

  for (let i = 0; i < 2; i++) {
    const group = groups.nth(i);
    const answer = group.locator(".betterdocs-faq-main-content");

    await expect(answer).not.toBeVisible();
    await expect(group).not.toHaveClass(/active/);

    await group.locator(".betterdocs-faq-post").click();
    await expect(answer).toBeVisible();
    await expect(group).toHaveClass(/active/);

    await group.locator(".betterdocs-faq-post").click();
    await expect(answer).not.toBeVisible();
    await expect(group).not.toHaveClass(/active/);
  }
});

test("Section 2 - A f A", async ({ page }) => {
  await page.locator(".betterdocs-faq-tab").nth(1).click();

  await expect(page.locator(".betterdocs-faq-tab").nth(1)).toHaveClass(
    /active/
  );

  const activeContent = page.locator(".betterdocs-faq-list-content.active");
  await expect(activeContent).toBeVisible();

  const groups = activeContent.locator(".betterdocs-faq-group");
  await expect(groups).toHaveCount(2);

  for (let i = 0; i < 2; i++) {
    const group = groups.nth(i);
    const answer = group.locator(".betterdocs-faq-main-content");

    if (i === 1) {
      await expect(answer).toBeVisible();
      await expect(group).toHaveClass(/active/);

      await group.locator(".betterdocs-faq-post").click();
      await expect(answer).not.toBeVisible();
      await expect(group).not.toHaveClass(/active/);

      await group.locator(".betterdocs-faq-post").click();
      await expect(answer).toBeVisible();
      await expect(group).toHaveClass(/active/);
    } else {
      await expect(answer).not.toBeVisible();
      await expect(group).not.toHaveClass(/active/);

      await group.locator(".betterdocs-faq-post").click();
      await expect(answer).toBeVisible();
      await expect(group).toHaveClass(/active/);

      await group.locator(".betterdocs-faq-post").click();
      await expect(answer).not.toBeVisible();
      await expect(group).not.toHaveClass(/active/);
    }
  }
});

test("Section 3 - right then", async ({ page }) => {
  await page.locator(".betterdocs-faq-tab").nth(2).click();

  await expect(page.locator(".betterdocs-faq-tab").nth(2)).toHaveClass(
    /active/
  );

  const activeContent = page.locator(".betterdocs-faq-list-content.active");
  await expect(activeContent).toBeVisible();

  const groups = activeContent.locator(".betterdocs-faq-group");
  await expect(groups).toHaveCount(4);

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
    await expect(group).not.toHaveClass(/active/);
  }

  const activeGroup = groups.nth(2);
  const activeAnswer = activeGroup.locator(".betterdocs-faq-main-content");

  await expect(activeAnswer).toBeVisible();
  await expect(activeGroup).toHaveClass(/active/);

  await activeGroup.locator(".betterdocs-faq-post").click();
  await expect(activeAnswer).not.toBeVisible();
  await expect(activeGroup).not.toHaveClass(/active/);

  await activeGroup.locator(".betterdocs-faq-post").click();
  await expect(activeAnswer).toBeVisible();
  await expect(activeGroup).toHaveClass(/active/);
});

test("Icon Test Visibility - Feb 11, 2025", async ({ page }) => {
  await page.locator(".betterdocs-faq-tab").nth(33).click();

  await expect(page.locator(".betterdocs-faq-tab").nth(33)).toHaveClass(
    /active/
  );

  const img = page.locator(".betterdocs-faq-tab.active img");
  await expect(img).toBeVisible();
  await expect(img).toHaveAttribute("src", /OIF\.jpg/);

  const activeContent = page.locator(".betterdocs-faq-list-content.active");
  await expect(activeContent).toBeVisible();

  const groups = activeContent.locator(".betterdocs-faq-group");
  await expect(groups).toHaveCount(5);

  for (let i = 0; i < 5; i++) {
    const group = groups.nth(i);
    const answer = group.locator(".betterdocs-faq-main-content");

    await expect(answer).not.toBeVisible();
    await expect(group).not.toHaveClass(/active/);

    await group.locator(".betterdocs-faq-post").click();
    await expect(answer).toBeVisible();
    await expect(group).toHaveClass(/active/);

    await group.locator(".betterdocs-faq-post").click();
    await expect(answer).not.toBeVisible();
    await expect(group).not.toHaveClass(/active/);
  }
});
