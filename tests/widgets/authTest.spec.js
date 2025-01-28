const { test, expect } = require("@playwright/test");
require("dotenv").config();

const loginUrl = `${process.env.BASE_URL}/wp-login.php`;

/**
 * Function to authenticate a user and save their session state.
 * @param {object} page - Playwright page object
 * @param {string} username - Username for login
 * @param {string} password - Password for login
 * @param {string} storageFile - Path to save the session storage state
 * @param {string} role - User role for logging purposes
 */
async function authenticateUser(page, username, password, storageFile, role) {
  console.log(`Authenticating as ${role}...`);

  // Go to the login page
  await page.goto(loginUrl);

  // Fill in the login form
  await page.getByLabel("Username or Email Address").fill(username);
  await page.getByLabel("Password", { exact: true }).fill(password);
  await page.getByLabel("Remember Me").check();
  await page.getByRole("button", { name: "Log In" }).click();

  // Wait for URL to ensure the page has loaded (with timeout increase)
  try {
    await page.waitForURL(`${process.env.BASE_URL}/wp-admin/`, {
      timeout: 60000,
    });
    console.log(`Navigated to URL for ${role}:`, page.url());
  } catch (error) {
    console.warn(
      `URL wait failed for ${role}. Falling back to "Howdy" menu item validation.`
    );
  }

  // Wait for the "Howdy" text to ensure the page has loaded properly
  await page.waitForSelector(`a.ab-item >> text=Howdy, ${role}`, {
    timeout: 60000,
  });

  console.log(`✅ Successfully authenticated as ${role}.`);
  // Add a small delay to ensure the state is saved
  await page.waitForTimeout(1000);
  await page.context().storageState({ path: storageFile });
  console.log(`Auth state saved for ${role} in ${storageFile}.`);
}

// Define all roles
const roles = [
  {
    role: "admin",
    username: process.env.ADMIN_USER,
    password: process.env.PASS,
    storageFile: "auth/adminStorage.json",
  },
  {
    role: "editor",
    username: process.env.EDITOR_USER,
    password: process.env.PASS,
    storageFile: "auth/editorStorage.json",
  },
  {
    role: "author",
    username: process.env.AUTHOR_USER,
    password: process.env.PASS,
    storageFile: "auth/authorStorage.json",
  },
  {
    role: "contributor",
    username: process.env.CONTRIBUTOR_USER,
    password: process.env.PASS,
    storageFile: "auth/contributorStorage.json",
  },
  // {
  //   role: "subscriber",
  //   username: process.env.SUBSCRIBER_USER,
  //   password: process.env.PASS,
  //   storageFile: "auth/subscriberStorage.json",
  // },
];

test.describe("Authentication Tests for All Roles", () => {
  for (const { role, username, password, storageFile } of roles) {
    test(`${role} authentication test`, async ({ page }) => {
      console.log(`Starting ${role} authentication test...`);
      await authenticateUser(page, username, password, storageFile, role);

      // Validate successful login by checking the "Howdy" menu
      try {
        await expect(
          page.locator(`a.ab-item >> text=Howdy, ${role}`)
        ).toBeVisible();
        console.log(`✅ ${role} login successful.`);
      } catch (error) {
        console.error(`❌ ${role} login failed.`, error);
      }
    });
  }
});
