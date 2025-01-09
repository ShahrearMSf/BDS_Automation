import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('https://demo.betterdocs.co/grid-layout/');

    const bodyLocator = page.getByTestId("9c47247");
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
      expect(articleCount).toBe(6); // Ensure exactly 4 articles per section
  
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
  //not completed, will work on demo
});