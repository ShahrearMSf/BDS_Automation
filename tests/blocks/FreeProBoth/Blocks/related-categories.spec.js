import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://betterdocs.msf.qa378.site/related-categories-b/');
  await page.getByRole('heading', { name: 'Related Categories of MSF' }).click();
  await expect(page.locator('#content')).toMatchAriaSnapshot(`
    - img "betterdocs-category-image"
    - heading "৩য় পক্ষ" [level=2]:
      - link "৩য় পক্ষ"
    - text: "2"
    - img "betterdocs-category-image"
    - heading "Alif" [level=2]:
      - link "Alif"
    - text: "2"
    - heading "All In All MSF" [level=2]:
      - link "All In All MSF"
    - text: /\\d+/
    - paragraph: Here you will find the docs containing related docs, attachments…
    - heading "API & Development" [level=2]:
      - link "API & Development"
    - text: "2"
    `);
  await page.locator('div').filter({ hasText: 'All In All MSF 20 Here you' }).nth(3).click();
  await expect(page.locator('#content')).toMatchAriaSnapshot(`
    - heading "All In All MSF" [level=2]:
      - link "All In All MSF"
    - text: /\\d+/
    `);
  await page.getByText('Here you will find the docs').click();
  await page.locator('div:nth-child(3) > .betterdocs-single-related-category-inner > .betterdocs-category-header > .betterdocs-category-items-counts').click();
  await page.getByText('20').click();
  await page.getByText('All In All MSF 20').click();
  await page.getByRole('link', { name: 'All In All MSF' }).click();
});