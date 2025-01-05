import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('https://demo.betterdocs.co/classic-layout/');

  const headingLocator = page.getByTestId("0ca8238");
  const Heading = headingLocator.locator("div.single-kb");

  await expect(Heading).toBeVisible();

  const firstCategory = Heading.locator("a").nth(0);
  const secondCategory = Heading.locator("a").nth(1);
  const thirdCategory = Heading.locator("a").nth(2);

  const icon = firstCategory.locator("div.betterdocs-category-icon");
  const heading = firstCategory.getByRole("heading", { name: "Getting Started" });
  const count = firstCategory.locator("div.betterdocs-category-items-counts");

  await expect.soft(icon).toBeVisible();
  await expect.soft(heading).toBeVisible();
  await expect.soft(count).toHaveText(/\d+ articles/);

  const bodyLocator = page.getByTestId("ab39bd5");
  const Body = bodyLocator.locator("div.elementor-element "); 

  await expect(Body).toBeVisible();

  const fourthCategory = Body.locator("a").nth(0);
  const fifthCategory = Body.locator("a").nth(1);
  const sixthCategory = Body.locator("a").nth(2);
  const seventhCategory = Body.locator("a").nth(3);
  const eightCategory = Body.locator("a").nth(4);
  const nineCategory = Body.locator("a").nth(5);


  const bodyicon = fourthCategory.locator("div.betterdocs-category-icon");
  const bodyheading = fourthCategory.getByRole("heading", { name: "Getting Started" });
  const bodycount = fourthCategory.locator("div.betterdocs-category-items-counts");

  await expect.soft(bodyicon).toBeVisible();
  await expect.soft(bodyheading).toBeVisible();
  await expect.soft(bodycount).toHaveText(/\d+ articles/);


  const sidebarLocator = page.getByTestId("dcb65eb");
  const Sidebar = sidebarLocator.locator("div.elementor-widget"); 


});