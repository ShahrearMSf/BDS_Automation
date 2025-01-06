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
  const ninethCategory = Body.locator("a").nth(5);
  const tenthCategory = Body.locator("a").nth(6);
  const twelvethCategory = Body.locator("a").nth(7);
  const thirteenththCategory = Body.locator("a").nth(8);
  const fourteenththCategory = Body.locator("a").nth(9);
  const fifteenthCategory = Body.locator("a").nth(10);
  const sixteenthCategory = Body.locator("a").nth(11);


  const bodyicon = fourthCategory.locator("div.betterdocs-category-icon");
  const bodyheading = fourthCategory.getByRole("heading", { name: "Getting Started" });
  const bodycount = fourthCategory.locator("div.betterdocs-category-items-counts");

  await expect.soft(bodyicon).toBeVisible();
  await expect.soft(bodyheading).toBeVisible();
  await expect.soft(bodycount).toHaveText(/\d+ articles/);

  const popularLocator = page.getByTestId("dcb65eb");
  const popularDocsSection = page.locator("div.elementor-widget-betterdocs-popular-view");
  await expect(popularDocsSection).toBeVisible();


  const popularheading = popularDocsSection.locator("h2");
  await expect(popularheading).toBeVisible();
  await expect(popularheading).toHaveText("Popular Docs");

  const articleSelectors = [
    'li:nth-of-type(1)', 
    'li:nth-of-type(2)', 
    'li:nth-of-type(3)', 
    'li:nth-of-type(4)', 
    'li:nth-of-type(5)', 
    'li:nth-of-type(6)', 
    'li:nth-of-type(7)', 
    'li:nth-of-type(8)', 
  ];


  const expectedArticles = [
    "How To Get Free Trial For Our Products?",
    "How To Sign Up For Updates?",
    "How To Get Free Trial For Our Products?",
    "Do You Accept PayPal Payments",
    "Do You Accept PayPal Payments",
    "How To Get Free Trial For Our Products?",
    "How To Get Free Trial For Our Products?",
    "Do You Have Any Refund Or Return Policies?",

  ];

  for (let i = 0; i < articleSelectors.length; i++) {
    const article = popularDocsSection.locator(articleSelectors[i]);
    await expect(article).toBeVisible();
    await expect(article).toHaveText(expectedArticles[i]);}




  const gettingstartedLocator = page.getByTestId("0263ffa");
  const gettingStartedSection = page.locator("div.elementor-element-0263ffa");
  await expect(gettingStartedSection).toBeVisible();


  const gettingstartedheading = gettingStartedSection.locator("h2");
  await expect(gettingstartedheading).toBeVisible();
  await expect(gettingstartedheading).toHaveText("Getting Started");

  const gettingstartedSelectors = [
    'li:nth-of-type(1)', 
    'li:nth-of-type(2)', 
    'li:nth-of-type(3)', 
    'li:nth-of-type(4)', 
  ];


  const expectedGettingstarted = [
    "How To Get Free Trial For Our Products?",
    "Do You Accept PayPal Payments",
    "Do You Have Any Refund Or Return Policies?",
    "How To Customize Your Preferences?",
  ];

  for (let i = 0; i < gettingstartedSelectors.length; i++) {
    const article = gettingStartedSection.locator(gettingstartedSelectors[i]);
    await expect(article).toBeVisible();
    await expect(article).toHaveText(expectedGettingstarted[i]);
    console.log(`Verified visibility and text for article: ${expectedGettingstarted[i]}`);}



  
  

});