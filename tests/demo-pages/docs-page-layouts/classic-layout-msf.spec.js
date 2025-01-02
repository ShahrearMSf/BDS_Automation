import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.betterdocs.co/classic-layout/');
  
  const widgetLocator = page.getByTestId("0ca8238");
  const categoryBoxes = widgetLocator.locator("div.single-kb");

await expect(categoryBoxes).toBeVisible();

  const firstCategory = categoryBoxes.locator("a").nth(0);
  const secondCategory = categoryBoxes.locator("a").nth(1);
  const thirdCategory = categoryBoxes.locator("a").nth(2);

  const icon = firstCategory.locator("div.betterdocs-category-icon");
  const heading = firstCategory.getByRole("heading", { name: "Getting Started" });
  const count = firstCategory.locator("div.betterdocs-category-items-counts");

  await expect.soft(icon).toBeVisible();
  await expect.soft(heading).toBeVisible();
  await expect.soft(count).toHaveText(/\d+ articles/);
});