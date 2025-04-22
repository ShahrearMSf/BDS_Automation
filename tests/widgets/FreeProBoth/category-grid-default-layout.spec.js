import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto(`${process.env.BASE_URL_MSF}/category-grid-2/`); 

    const bodyLocator = page.getByTestId("680a016");
    const Body = bodyLocator.locator("div.elementor-element");

    await expect(Body).toBeVisible();

    const gridWrapper = page.locator(".betterdocs-category-grid-wrapper");
    await expect(gridWrapper).toBeVisible();
  
    // Check section count
    const sections = gridWrapper.locator(".betterdocs-single-category-wrapper");
    const sectionCount = await sections.count();
    expect(sectionCount).toBe(8); // Ensure 8 sections exist
  
    // Validate each section
    for (let i = 0; i < sectionCount; i++) {
      const section = sections.nth(i);
  
      // Section icon
      const icon = section.locator(".betterdocs-category-icon img");
      await expect(icon).toBeVisible();
      await expect(icon).toHaveAttribute("src", /.+/);
  
      // Section title
      const title = section.locator(".betterdocs-category-title");
      await expect(title).toBeVisible();
  
             // Each section must have at least 1 article
             const articles = section.locator(".betterdocs-articles-list li");
             const articleCount = await articles.count();
             expect(articleCount).toBeGreaterThanOrEqual(1); // ✅ Ensure at least 1 article
       
             for (let j = 0; j < articleCount; j++) {
                 const article = articles.nth(j);
       
                 // Check article link
                 const articleLink = article.locator("a");
                 await expect(articleLink).toBeVisible();
                 await expect(articleLink).toHaveAttribute("href", /.+/);
             }
     

  
      // Check "View More" button
      const viewMoreButton = section.locator(".betterdocs-category-link-btn");
      await expect(viewMoreButton).toBeVisible();
      await expect(viewMoreButton).toHaveAttribute("href", /.+/);
    }
});
