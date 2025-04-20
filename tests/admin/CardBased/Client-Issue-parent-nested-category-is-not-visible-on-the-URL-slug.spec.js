//https://github.com/WPDevelopers/betterdocs/tree/card-74419
//https://projects.startise.com/fbs-74419

require('dotenv').config(); // Load environment variables
const { test, expect } = require('@playwright/test');

test('Verify parent nested category is present in URL slug', async ({ page }) => {
    // Read BASE_URL from .env
    const BASE_URL = process.env.BASE_URL_MSF; 

    // Expected URL path
    const expectedPath = '/docs/alif/ba/obayed-mamur';

    // Navigate to the expected URL
    await page.goto(`${BASE_URL}${expectedPath}`);

    // Extract the current URL
    const currentURL = page.url();

    // Check if the expected slug exists in the URL and log the result
    if (currentURL.includes(expectedPath)) {
        console.log('✅ Test Passed: Parent nested category is visible in the URL slug.');
    } else {
        console.log('❌ Test Failed: Slug is not functioning properly.');
    }

    // Assertion to ensure test fails if incorrect
    expect(currentURL).toContain(expectedPath);
});
