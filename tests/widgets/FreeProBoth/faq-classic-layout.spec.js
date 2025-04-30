import { test, expect } from '@playwright/test';

test.describe('Widget-sidebar Layout 5', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.BASE_URL_MSF}/faq-classic-layout-2/`);

    });

test('test1', async ({ page }) => {
  await expect(page.locator('#content')).toMatchAriaSnapshot(`- heading "Have A Nice Day" [level=2]`);
  await page.getByRole('heading', { name: 'Heeloooo thiiisss teeest' }).click();
  await page.locator('.betterdocs-faq-post-icon-group').first().click();

//     });

// test('test2', async ({ page }) => {


  await page.locator('ul').filter({ hasText: 'Cutie pie Thank you bro Cutie' }).getByRole('paragraph').click();
  await page.locator('ul').filter({ hasText: 'Cutie pie Thank you bro Cutie' }).locator('path').first().click();

  await page.locator('ul').filter({ hasText: 'Hello hui Hello hui' }).getByRole('paragraph').click();
  await page.locator('ul').filter({ hasText: 'Hello hui Hello hui' }).getByRole('img').nth(1).click();

    });

  test('test3', async ({ page }) => {


  await page.locator('ul').filter({ hasText: 'Ki boli mon diye sono Alright' }).getByRole('paragraph').click();
  await page.locator('li:nth-child(3) > .betterdocs-faq-group > .betterdocs-faq-post > .betterdocs-faq-post-icon-group').first().click();
  await page.locator('ul:nth-child(12) > li > .betterdocs-faq-group > .betterdocs-faq-post').first().click();
  await page.locator('ul').filter({ hasText: 'What are some key coffee-' }).getByRole('paragraph').click();
  await page.locator('ul:nth-child(12) > li > .betterdocs-faq-group > .betterdocs-faq-post > .betterdocs-faq-post-icon-group').first().click();
  await page.getByText('No, it is not safe to put a').click();
  await page.locator('li').filter({ hasText: 'Can I put a regular plastic' }).getByRole('img').click();
    });

});