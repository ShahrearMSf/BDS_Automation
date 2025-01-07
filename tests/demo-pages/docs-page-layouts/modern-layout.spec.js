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

    const gridWrapper = page.locator(".betterdocs-category-grid-inner-wrapper");
    await expect(gridWrapper).toBeVisible();
  
    // 8 sections
    const sections = gridWrapper.locator(".betterdocs-single-category-wrapper");
    const sectionCount = await sections.count();
  
    // count the 8 sections bro
    expect(sectionCount).toBe(8);
  
    // each section
    for (let i = 0; i < sectionCount; i++) {
      const section = sections.nth(i);
  
      // section icon
      const icon = section.locator(".betterdocs-category-icon img");
      await expect(icon).toBeVisible();
      await expect(icon).toHaveAttribute("src", /.+/);
  
      // section title
      const title = section.locator(".betterdocs-category-title");
      await expect(title).toBeVisible();
  
      // each section has 4 article
      const articles = section.locator(".betterdocs-articles-list li");
      const articleCount = await articles.count();
      expect(articleCount).toBe(4); // Ensure exactly 4 articles per section
  
      for (let j = 0; j < articleCount; j++) {
        const article = articles.nth(j);
  
        // articles' link and title
        const articleLink = article.locator("a");
        await expect(articleLink).toBeVisible();
        await expect(articleLink).toHaveAttribute("href", /.+/);
      }
  
      // "View More" button for all the 8 sections
      const viewMoreButton = section.locator(".betterdocs-category-link-btn");
      await expect(viewMoreButton).toBeVisible();
      await expect(viewMoreButton).toHaveAttribute("href", /.+/);
    }
  
});