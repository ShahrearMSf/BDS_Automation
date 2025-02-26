import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto(`${process.env.BASE_URL_MSF}/archive-list/`);
  await page.getByText('Archive Doc List L1 Updated').click();
  await page.getByRole('link', { name: '1% import duty threatens' }).click();
  await page.getByText('2 3 … 32 ❯').click();
  await page.getByRole('link', { name: '1', exact: true }).click();
  await page.getByRole('link', { name: '2', exact: true }).click();
  await page.getByText('…').click();
  await page.getByRole('link', { name: '32' }).click();
  await page.getByRole('link', { name: '30' }).click();
  await page.getByRole('link', { name: '1', exact: true }).click();
});