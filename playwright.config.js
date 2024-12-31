// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { config } from 'dotenv';

config();

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,

  expect: {
    timeout: 5_000,
    toMatchSnapshot: { maxDiffPixelRatio: 0.03 },
    toHaveScreenshot: { maxDiffPixelRatio: 0.03 },
  },

  reporter: "html",

  use: {
    baseURL: process.env.BASE_URL,
    testIdAttribute: "data-id",

    screenshot: "on",
    trace: "on-first-retry",
    video: "on-first-retry",

    ignoreHTTPSErrors: true,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});

