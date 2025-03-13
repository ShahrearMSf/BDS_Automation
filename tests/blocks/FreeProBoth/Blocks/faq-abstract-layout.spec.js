import { test, expect } from '@playwright/test';

test.describe('FAQ Retro Layout Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to the page once before each test
    await page.goto(`${process.env.BASE_URL_MSF}/faq-abstract-l/`, { waitUntil: 'networkidle' });
  });

test('Checking Heading', async ({ page }) => {
  await page.getByRole('heading', { name: 'Frequently Asked Questions' }).click();
  await page.getByText('Frequently Asked Questions Heeloooo thiiisss teeest Cutie pie Thank you bro').click();
  });

test('Checking Closed FAQ', async ({ page }) => {
  await page.getByRole('heading', { name: 'Heeloooo thiiisss teeest' }).click();
  await page.locator('.betterdocs-faq-post').first().click();
  await page.locator('ul').filter({ hasText: 'Cutie pie Thank you bro Cutie' }).getByRole('paragraph').click();
  await page.locator('ul').filter({ hasText: 'Cutie pie Thank you bro Cutie' }).getByRole('img').first().click();
  });


test('Checking Open FAQ', async ({ page }) => {

  await page.getByText('Hello hui').nth(1).click();
  await page.locator('ul').filter({ hasText: 'Hello hui Hello hui' }).getByRole('paragraph').click();
  await page.locator('ul').filter({ hasText: 'Hello hui Hello hui' }).getByRole('img').nth(1).click();
  });

});