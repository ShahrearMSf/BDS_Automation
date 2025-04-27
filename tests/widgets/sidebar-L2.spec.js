import { test, expect } from '@playwright/test';

test.describe('Encyclopedia Retro - Basic Interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.BASE_URL_MSF}/sidebar-l2/`);
  });


test('test', async ({ page }) => {
  await page.locator('#betterdocs-sidebar-left').click();
  await expect(page.locator('#betterdocs-sidebar-left')).toMatchAriaSnapshot(`- heading /January \\d+/ [level=2]`);
  await page.getByRole('heading', { name: 'Parent' }).click();
  await page.getByRole('heading', { name: 'Program Management' }).click();
  await page.getByRole('heading', { name: 'January' }).click();
  await page.locator('article').filter({ hasText: 'January 20 Explain how the' }).getByRole('link').click();
  await page.getByRole('heading', { name: 'Explain how the system can' }).click();
 
});

});