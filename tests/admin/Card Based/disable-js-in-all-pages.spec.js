import { test, expect } from '@playwright/test';

const pageSlugs = [
  '', 'popular-docs', 'category-box', 'category-grid', 'related-categories-b',
  'archive-list', 'category-handbook', 'multiple-kb', 'multiple-kb-tab', 'abc',
  'faq-modern-l', 'category-box-2', 'category-grid-2', 'category-archive-list',
  'encyclopedia-2', 'multiple-kb-2', 'popular-docs-2', 'sidebar-2', 'faq-2', 
  'tab-view-list', 'category-box-2-sc', 'category-box-sc', 'category-grid-2-2',
  'category-list-sc', 'category-grid-sc', 'faq-list-classic-sc', 
  'faq-list-modern-sc', 'feedback-form-sc', 'mk-list-sc', 'multiple-kb-2-2',
  'kb-tab-grid-sc', 'multiple-kb-sc', 'popular-articles-sc', 'search-form'
];

test.describe('Check extend-search-modal.js in whole site', () => {
  
  pageSlugs.forEach((slug, index) => {
    const url = `${process.env.BASE_URL_MSF}/${slug}`;
    test(`Check extend-search-modal.js on ${slug || 'Home Page'} (${index})`, async ({ page }) => {
      
      // Navigate to the page
      await page.goto(url, { waitUntil: 'networkidle' });

      // Check if the script does not exist
      const scriptExists = await page.evaluate(() => 
        !!document.querySelector('script[src*="extend-search-modal.js"]')
      );

      // Log the result in the console
      console.log(scriptExists 
        ? `❌ Modal exists on ${slug || 'Home Page'}` 
        : `✅ Modal not found on ${slug || 'Home Page'}`
      );

      // Ensure assertion for test validation
      expect(scriptExists).toBeFalsy(); // Expecting script to not exist
    });
  });

});
