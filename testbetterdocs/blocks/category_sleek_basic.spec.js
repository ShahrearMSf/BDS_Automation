import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://betterdocs.msf.shahrear.site/category-box/');
  await page.getByRole('link', { name: '৩য় পক্ষ 2 Docs Last Updated:' }).click({
    button: 'right'
  });
  await page.getByRole('link', { name: 'Alif 1 Sub Category | 1 Doc' }).click({
    button: 'right'
  });
  await page.getByRole('link', { name: 'All In All MSF 11 Docs Last' }).click({
    button: 'right'
  });
  await page.getByRole('link', { name: 'API & Development 2 Docs Last' }).click({
    button: 'right'
  });
});