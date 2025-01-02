import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.betterdocs.co/classic-layout/');
  


  const widgetLocator = page.getByTestId("0ca8238");
  const categoryBoxes = widgetLocator.locator("div.single-kb");

await expect(categoryBoxes).toBeVisible();

});