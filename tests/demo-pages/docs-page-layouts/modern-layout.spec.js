import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('https://demo.betterdocs.co/modern-layout/');


  const headingLocator = page.getByTestId("38abdd0");
  const Heading = headingLocator.locator("div.elementor-element");

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

    const bodyLocator = page.getByTestId("9274336");
    const Body = bodyLocator.locator("div.elementor-element");

    await expect(Body).toBeVisible();

    // const bodyoneheading = bodyoneSection.locator("h2");
    // await expect(bodyoneheading).toBeVisible();
    // await expect(bodyoneheading).toHaveText("Getting Started");
  
    // const articleSelectors = [
    //   'li:nth-of-type(1)', 
    //   'li:nth-of-type(2)', 
    //   'li:nth-of-type(3)', 
    //   'li:nth-of-type(4)', 
    //   'li:nth-of-type(5)', 
    //   'li:nth-of-type(6)', 
    //   'li:nth-of-type(7)', 
    //   'li:nth-of-type(8)', 
    // ];
  
  
    // const expectedArticles = [
      
    // "How To Sign Up For Updates?",
    // "How To Customize Your Preferences?",
    // "How To Purchase Our Subscription?",
    // "Do You Have Any Refund Or Return Policies?",
    // ];
  
    // for (let i = 0; i < articleSelectors.length; i++) {
    //   const article = popularDocsSection.locator(articleSelectors[i]);
    //   await expect(article).toBeVisible();
    //   await expect(article).toHaveText(expectedArticles[i]);}
  


});