import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('https://demo.betterdocs.co/');


  const headingLocator = page.getByTestId("2146e7f");
  const Heading = headingLocator.locator("div.elementor-element");

  await expect(Heading).toBeVisible();

  const firstCategory = Heading.locator("a").nth(0);
  const secondCategory = Heading.locator("a").nth(1);
  const thirdCategory = Heading.locator("a").nth(2);
  const fourthCategory = Heading.locator("a").nth(3);
  const fifthCategoryCategory = Heading.locator("a").nth(4);
  const sixthCategory = Heading.locator("a").nth(5);
  const seventhCategory = Heading.locator("a").nth(6);
  const eighthCategory = Heading.locator("a").nth(7);


  const icon = firstCategory.locator("div.eael-bd-cb-inner");
  const heading = firstCategory.getByRole("heading", { name: "Getting Started" });
  const count = firstCategory.locator("div.eael-bd-cb-cat-count");

  await expect.soft(icon).toBeVisible();
  await expect.soft(heading).toBeVisible();
  await expect.soft(count).toHaveText(/\d+Articles/);  //no gap between doc number and string

});