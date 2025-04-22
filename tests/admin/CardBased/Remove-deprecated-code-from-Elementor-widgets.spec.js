//screenshot of passing all tests on April 22, 2025
//if fails someday check that page may have some widget apart from BetterDosc plugin

import { test, expect } from '@playwright/test';

const pageSlugs = [
  '', 'popular-docs-2', 'category-box-sleek-l', 'category-grid-2', 'category-archive-list',
  'encyclopedia-2', 'multiple-kb-2', 'sidebar-2', 'faq-2', 
  'tab-view-list',
];

test.describe('Check .elementor-widget-container absence on pages', () => {
  pageSlugs.forEach((slug, index) => {
    const url = `${process.env.BASE_URL_MSF}/${slug}`;
    test(`Check for .elementor-widget-container on ${slug || 'Home Page'} (${index})`, async ({ page }) => {
      
      await page.goto(url, { waitUntil: 'networkidle' });

      const widgetExists = await page.evaluate(() => 
        !!document.querySelector('.elementor-widget-container')
      );

      console.log(widgetExists 
        ? `❌ .elementor-widget-container found on ${slug || 'Home Page'}` 
        : `✅ .elementor-widget-container NOT found on ${slug || 'Home Page'}`
      );

      expect(widgetExists).toBeFalsy(); 
    });
  });
});
