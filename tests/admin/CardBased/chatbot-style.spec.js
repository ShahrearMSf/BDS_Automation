import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto(`${process.env.BASE_URL_MSF}/docs/`);
  await page.waitForLoadState("domcontentloaded");
});

test("Chatbot launcher style and open check", async ({ page }) => {
  const launcher = "button.betterdocs-ia-launcher";

  // Wait for launcher button
  await page.waitForSelector(launcher);

  // Check initial color
  const color = await page.$eval(
    launcher,
    (el) => window.getComputedStyle(el).color
  );
  expect(color).toBe("rgb(255, 255, 255)"); // #ffffff

  // Hover and check hover color
  await page.hover(launcher);
  const hoverColor = await page.$eval(
    launcher,
    (el) => window.getComputedStyle(el).backgroundColor
  );
  expect(hoverColor).toBe("rgb(140, 34, 38)"); // #8c2222

  // Click and check if chatbot opened
  await page.click(launcher);
  await expect(page.locator(".betterdocs-ia-main-wrapper")).toBeVisible();
});
