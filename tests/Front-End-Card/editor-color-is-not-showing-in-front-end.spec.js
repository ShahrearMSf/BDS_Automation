import { test, expect } from '@playwright/test';

test.describe('Category Archive List L1 Tests - Heading Color Checks', () => {
  test.beforeEach(async ({ page }) => {
    // Load the page once before all the tests
    await page.goto(`${process.env.BASE_URL_MSF}/docs/allinallmsf/life-of-a-qa-member/`);
  });

  const headingTests = [
    { text: 'Role Overview', color: 'rgb(0, 208, 132)' }, // vivid green cyan
    { text: 'Collision with Developer', color: 'rgb(6, 147, 227)' }, // vivid cyan blue
  ];

  for (const { text, color } of headingTests) {
    test(`should have correct color for heading "${text}"`, async ({ page }) => {
      // Locate the heading element
      const heading = page.locator(`h2:has-text("${text}")`);

      // Wait for the heading to be visible (increased timeout)
      await heading.waitFor({ state: 'visible', timeout: 5000 });

      // Get computed color style of the heading element
      const computedColor = await heading.evaluate((el) => {
        return getComputedStyle(el).color;
      });

      // Print computed color for each heading
      console.log(`Heading: "${text}", Computed color: ${computedColor}, Expected: ${color}`);

      // Check if the computed color matches the expected color
      await expect(computedColor).toBe(color);
    });
  }
});
