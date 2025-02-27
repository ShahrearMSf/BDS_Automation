import { test, expect } from '@playwright/test';

test.describe('Archive List Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.BASE_URL_MSF}/archive-list/`);
  });

  test('Click on "Archive Doc List L1 Updated"', async ({ page }) => {
    await page.getByText('Archive Doc List L1 Updated').click();
  });

  test('Open "1% import duty threatens" Article', async ({ page }) => {
    await page.getByRole('link', { name: '1% import duty threatens' }).click();
  });

  test('Click on Pagination Controls', async ({ page }) => {
    await page.getByText('2 3 … 32 ❯').click();
  });

  test('Navigate to Page 1', async ({ page }) => {
    await page.getByRole('link', { name: '1', exact: true }).click();
  });

  test('Navigate to Page 2', async ({ page }) => {
    await page.getByRole('link', { name: '2', exact: true }).click();
  });

  test('Click on Ellipsis (...) in Pagination', async ({ page }) => {
    await page.getByText('…').click();
  });

  test('Navigate to Last Page (32)', async ({ page }) => {
    await page.getByRole('link', { name: '32' }).click();
  });

  test('Navigate to Page 30', async ({ page }) => {
    await page.getByRole('link', { name: '32' }).click();
    await page.getByRole('link', { name: '30' }).click();
  });

  test('Return to Page 1', async ({ page }) => {
    await page.getByRole('link', { name: '1', exact: true }).click();
  });
});




