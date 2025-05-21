import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto(`${process.env.BASE_URL_MSF}/tab-view-list/`);
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- link "BCB"`);
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- link "BCB"`);
  await page.getByRole('link', { name: 'BCB' }).click();
  await page.getByRole('heading', { name: 'All In All MSF' }).click();
  // await page.getByRole('article').locator('img').click();
  await page.locator('li').filter({ hasText: 'হ্যাঁ, Mercedes GLS450' }).locator('i').click();
  await page.getByRole('link', { name: 'হ্যাঁ, Mercedes GLS450' }).click();
  await page.getByRole('heading', { name: 'হ্যাঁ, Mercedes GLS450' }).click();
  await page.getByText('What are your Feelings Happy').click();
  await page.getByRole('heading', { name: 'Share This Article :' }).click();
  await page.locator('#betterdocs-single-main').getByRole('list').nth(2).click();
  await page.locator('#betterdocs-single-main div').filter({ hasText: 'A Rainy Day in Germany' }).nth(1).click();
  await page.locator('#betterdocs-single-main').getByRole('link', { name: 'A Rainy Day in Germany' }).click();
  await page.getByRole('heading', { name: 'A Rainy Day in Germany' }).click();
});