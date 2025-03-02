


import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://betterdocs.msf.qa378.site/archive-doc-list-l3/');
  await expect(page.locator('h1')).toMatchAriaSnapshot(`- heading "Archive Doc List L3" [level=1]`);
  await page.getByText('Archive Doc List L3 1% import').click();
  await page.getByText('% import duty threatens foreign investment in economic zones: Stakeholders Last').click();
  await page.getByRole('heading', { name: '1% import duty threatens' }).getByRole('img').click();
  await page.getByRole('heading', { name: '1% import duty threatens' }).locator('span').click();
  await page.getByRole('heading', { name: '1% import duty threatens' }).click();
  await page.getByRole('link', { name: '1% import duty threatens' }).click();
  await page.getByText('Last Updated: September 9,').first().click();
  await page.getByText('Business leaders and').click();
  await page.locator('div').filter({ hasText: '2 3 … 32 ❯' }).nth(2).click();
  await page.getByRole('link', { name: '❮' }).click();
  await page.getByRole('link', { name: '❮' }).click();
  await page.getByRole('link', { name: '2', exact: true }).click();
  await page.getByRole('link', { name: '❯' }).click();
  await page.getByRole('link', { name: '32' }).click();
  await page.getByRole('link', { name: '30' }).click();
});