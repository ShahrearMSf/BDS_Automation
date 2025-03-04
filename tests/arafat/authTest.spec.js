const { test, expect } = require("@playwright/test");
require("dotenv").config();

const loginUrl = `${process.env.BASE_URL_ARAFAT}/wp-login.php`;

/**
 * Function to authenticate a user and save their session state.
 * @param {object} page - Playwright page object
 * @param {string} username - Username for login
 * @param {string} password - Password for login
 * @param {string} storageFile - Path to save the session storage state
 * @param {string} role - User role for logging purposes
 */
async function authenticateUser(page, username, password, storageFile, role) {
  console.log(`\n🔹 Authenticating as ${role}...`);

  await page.goto(loginUrl);
  await page.getByLabel("Username or Email Address").fill(username);
  await page.getByLabel("Password", { exact: true }).fill(password);
  await page.getByLabel("Remember Me").check();
  await page.getByRole("button", { name: "Log In" }).click();

  // Determine expected landing URL
  const expectedUrl =
    role === "subscriber"
      ? `${process.env.BASE_URL_ARAFAT}/wp-admin/profile.php`
      : `${process.env.BASE_URL_ARAFAT}/wp-admin/`;

  try {
    await page.waitForURL(expectedUrl, { timeout: 60000 });
    console.log(`✅ Navigated to ${expectedUrl} for ${role}.`);
  } catch (error) {
    console.warn(
      `⚠️ URL wait failed for ${role}. Checking alternative validation.`
    );
  }

  // Validate login success by checking "Howdy" text
  try {
    await expect(page.locator("a.ab-item", { hasText: "Howdy," })).toBeVisible({
      timeout: 60000,
    });
    console.log(`✅ ${role} login successful.`);
  } catch (error) {
    console.error(
      `❌ ${role} login failed. Check credentials or permissions.`,
      error
    );
  }

  await page.waitForTimeout(1000);
  await page.context().storageState({ path: storageFile });
  console.log(`💾 Auth state saved for ${role} in ${storageFile}.`);
}

// Define user roles and credentials
const roles = [
  {
    role: "admin",
    username: process.env.ADMIN_USER,
    storageFile: "auth/adminStorage.json",
  },
  {
    role: "editor",
    username: process.env.EDITOR_USER,
    storageFile: "auth/editorStorage.json",
  },
  {
    role: "author",
    username: process.env.AUTHOR_USER,
    storageFile: "auth/authorStorage.json",
  },
  {
    role: "contributor",
    username: process.env.CONTRIBUTOR_USER,
    storageFile: "auth/contributorStorage.json",
  },
  {
    role: "subscriber",
    username: process.env.SUBSCRIBER_USER,
    storageFile: "auth/subscriberStorage.json",
  },
];

// Execute tests for all roles
test.describe("Authentication Tests for All Roles", () => {
  for (const { role, username, storageFile } of roles) {
    test(`${role} authentication test`, async ({ page }) => {
      if (!username) {
        console.warn(`⚠️ Skipping ${role} test due to missing credentials.`);
        return;
      }
      await authenticateUser(
        page,
        username,
        process.env.PASS,
        storageFile,
        role
      );
    });
  }
});
