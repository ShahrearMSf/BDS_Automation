import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.betterdocs.co/category-sleek-layout/');
  

  const widgetLocator = page.getByTestId("585b432");
  const categoryBoxes = widgetLocator.locator("div.betterdocs-categories-folder");

  const firstCategory = categoryBoxes.locator("a").nth(0);
  const secondCategory = categoryBoxes.locator("a").nth(1);
  const thirdCategory = categoryBoxes.locator("a").nth(2);
  const fourthCategory = categoryBoxes.locator("a").nth(3);

  const icon = firstCategory.locator("span.betterdocs-folder-icon > svg");
  const heading = firstCategory.getByRole("heading", { name: "Community & Support" });
  const count = firstCategory.locator("div.betterdocs-sub-category-items-counts");
  const lastUpdated = firstCategory.locator("p.betterdocs-last-update");

  await expect.soft(icon).toBeVisible();
  await expect.soft(heading).toBeVisible();
  await expect.soft(count).toHaveText(/\d+ Docs/);
  await expect.soft(lastUpdated).toHaveText(/Last Updated: \s*\w+ \d+, \d+/);


  await expect.soft(secondCategory.getByRole("heading", { name: "Release Notes" })).toBeVisible();
  await expect.soft(thirdCategory.getByRole("heading", { name: "Troubleshooting" })).toBeVisible();
  await expect.soft(fourthCategory.getByRole("heading", { name: "Use Cases" })).toBeVisible();
});