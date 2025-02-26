import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://betterdocs.msf.qa378.site/archive-list/');
  await page.getByText('Archive Doc List L1 Updated').click();
  await page.getByRole('heading', { name: 'Archive Doc List L1' }).click();
  await page.getByText('Updated on February 26,').click();
  await page.getByText('% import duty threatens foreign investment in economic zones: Stakeholders 12-').click();
  await page.goto('https://betterdocs.msf.qa378.site/archive-list/');
  await page.locator('li').filter({ hasText: '1% import duty threatens' }).locator('i').click();
  await page.getByRole('link', { name: '1% import duty threatens' }).click();
  await page.getByText('2 3 … 32 ❯').click();
  await page.getByRole('link', { name: '1', exact: true }).click();
  await page.getByRole('link', { name: '2', exact: true }).click();
  await page.getByText('…').click();
  await page.getByRole('link', { name: '32' }).click();
  await page.getByRole('link', { name: '30' }).click();
  await page.getByRole('link', { name: '1', exact: true }).click();
});