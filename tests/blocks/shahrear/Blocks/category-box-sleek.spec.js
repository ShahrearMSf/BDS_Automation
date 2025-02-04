import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://betterdocs.msf.shahrear.site/category-box/');
  

  const widgetLocator = page.getByTestId("585b432");
  const categoryBoxes = widgetLocator.locator("div.betterdocs-categories-folder");

  const firstCategory = categoryBoxes.locator("a").nth(0);
  const secondCategory = categoryBoxes.locator("a").nth(1);
  const thirdCategory = categoryBoxes.locator("a").nth(2);
  const fourthCategory = categoryBoxes.locator("a").nth(3);
  const fifthCategory = categoryBoxes.locator("a").nth(4);
  const sixthCategory = categoryBoxes.locator("a").nth(5);
  const seventhCategory = categoryBoxes.locator("a").nth(6);
  const eighthCategory = categoryBoxes.locator("a").nth(7);
  const ninthCategory = categoryBoxes.locator("a").nth(8);
  const tenthCategory = categoryBoxes.locator("a").nth(9);
  const eleventhCategory = categoryBoxes.locator("a").nth(10);
  const twelfthCategory = categoryBoxes.locator("a").nth(11);
  const thirteenthCategory = categoryBoxes.locator("a").nth(12);
  const fourteenthCategory = categoryBoxes.locator("a").nth(13);
  const fifteenthCategory = categoryBoxes.locator("a").nth(14);
  const sixteenthCategory = categoryBoxes.locator("a").nth(15);
  const seventeenthCategory = categoryBoxes.locator("a").nth(16);
  const eighteenthCategory = categoryBoxes.locator("a").nth(17);
  const nineteenthCategory = categoryBoxes.locator("a").nth(18);
  const twentiethCategory = categoryBoxes.locator("a").nth(19);
  const twentyFirstCategory = categoryBoxes.locator("a").nth(20);
  const twentySecondCategory = categoryBoxes.locator("a").nth(21);
  const twentyThirdCategory = categoryBoxes.locator("a").nth(22);
  const twentyFourthCategory = categoryBoxes.locator("a").nth(23);


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