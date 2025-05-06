import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto(`${process.env.BASE_URL_MSF}/faq-modern-layout/`);
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- heading "Shahrear Was Here" [level=2]`);
  await page.getByRole('heading', { name: 'Heeloooo thiiisss teeest' }).click();
  await page.locator('li').filter({ hasText: 'Cutie pie Thank you bro' }).locator('div').nth(1).click();
  await page.getByText('Thank you bro').click();
//   await page.locator('li').filter({ hasText: 'Cutie pie Thank you bro' }).getByRole('img').locator('circle').click();
  await page.locator('li').filter({ hasText: 'Cutie pie Thank you bro' }).locator('div').nth(1).click();
  await page.getByText('It’s okay').click();
  await page.locator('span').filter({ hasText: 'Leon' }).click();
});