import { test, expect } from "@playwright/test";

// Load environment variables
const baseUrl = process.env.BASE_URL_MSF;

test.describe("WordPress Theme Switching Automation", () => {
  let adminContext, adminPage;

  test.beforeAll(async ({ browser }) => {
    // Initialize the browser context and open the WordPress admin
    adminContext = await browser.newContext({
      storageState: "playwright/.auth/admin.json",
    });
    adminPage = await adminContext.newPage();
  });

  test.afterAll(async () => {
    // Clean up: Close the browser context
    if (adminContext) {
      await adminContext.close();
      console.log("🧹 Browser context closed");
    }
  });

  test("Switch Theme to Twenty Twenty-Four and Back to Hello Elementor", async () => {
    console.log("🎨 Starting WordPress theme switching automation...");

    const originalTheme = "Hello Elementor";
    const targetTheme = "Twenty Twenty-Four";

    // Step 1: Navigate to themes page
    console.log("📍 Step 1: Navigating to Themes page...");
    await adminPage.goto(`${baseUrl}/wp-admin/themes.php`);
    await adminPage.waitForLoadState("networkidle");

    // Verify we're on themes page
    await expect(
      adminPage.getByRole("heading", { name: "Themes" })
    ).toBeVisible();
    console.log("✅ Successfully navigated to Themes page");

    // Step 2: Get current active theme
    console.log("📍 Step 2: Identifying current active theme...");
    const activeThemeElement = adminPage.locator(".theme.active");
    await expect(activeThemeElement).toBeVisible();

    const activeThemeName = await activeThemeElement
      .locator(".theme-name")
      .textContent();
    const currentTheme = activeThemeName?.trim().replace(/^Active: /, "");
    console.log(`📌 Current active theme: ${currentTheme}`);
    expect(currentTheme).toBe(originalTheme);

    // Step 3: Find and switch to Twenty Twenty-Four theme
    console.log(`📍 Step 3: Finding target theme: ${targetTheme}...`);
    const targetThemeElement = adminPage.locator(".theme").filter({
      has: adminPage.locator(".theme-name", { hasText: targetTheme }),
    });

    if ((await targetThemeElement.count()) === 0) {
      console.log(`⚠️ Target theme "${targetTheme}" not found`);
      test.skip();
      return;
    }

    // Check if target theme is already active
    const isTargetActive =
      (await targetThemeElement.locator(".theme.active").count()) > 0;
    if (isTargetActive) {
      console.log(`⚠️ Target theme "${targetTheme}" is already active`);
      test.skip();
      return;
    }

    // Activate the target theme
    console.log(`📍 Step 4: Switching to target theme: ${targetTheme}...`);
    await targetThemeElement.hover();
    const activateButton = targetThemeElement.locator(".activate");
    await expect(activateButton).toBeVisible();
    await activateButton.click();
    await adminPage.waitForLoadState("networkidle");
    console.log(`✅ Successfully switched to: ${targetTheme}`);

    // Step 4: Verify the theme change
    console.log("📍 Step 5: Verifying theme change...");
    await adminPage.reload();
    await adminPage.waitForLoadState("networkidle");

    const newActiveTheme = adminPage.locator(".theme.active .theme-name");
    const newActiveThemeName = await newActiveTheme.textContent();
    const cleanedNewThemeName = newActiveThemeName
      ?.trim()
      .replace(/^Active: /, "");

    console.log(`🎉 New active theme: ${cleanedNewThemeName}`);
    expect(cleanedNewThemeName).toBe(targetTheme);
    expect(cleanedNewThemeName).not.toBe(originalTheme);
    console.log("✅ Theme change verified successfully!");

    // Step 5: Switch back to original theme (Hello Elementor)
    console.log(
      `📍 Step 6: Switching back to original theme: ${originalTheme}...`
    );
    const originalThemeElement = adminPage.locator(".theme").filter({
      has: adminPage.locator(".theme-name", { hasText: originalTheme }),
    });

    // Check if original theme is already active (shouldn't be)
    const isAlreadyActive =
      (await originalThemeElement.locator(".theme.active").count()) > 0;

    if (isAlreadyActive) {
      console.log(
        `⚠️ Original theme "${originalTheme}" is unexpectedly already active`
      );
    } else {
      // Switch back to original theme
      await originalThemeElement.hover();
      const originalActivateButton = originalThemeElement.locator(".activate");

      if ((await originalActivateButton.count()) > 0) {
        await originalActivateButton.click();
        await adminPage.waitForLoadState("networkidle");
        console.log(
          `✅ Successfully switched back to original theme: ${originalTheme}`
        );
      } else {
        console.log(
          `⚠️ Could not find activate button for original theme: ${originalTheme}`
        );
      }
    }

    // Step 6: Final verification
    console.log("📍 Step 7: Final verification...");
    await adminPage.reload();
    await adminPage.waitForLoadState("networkidle");

    const finalActiveTheme = adminPage.locator(".theme.active .theme-name");
    const finalThemeName = await finalActiveTheme.textContent();
    const cleanedFinalThemeName = finalThemeName
      ?.trim()
      .replace(/^Active: /, "");

    console.log(`🏁 Final active theme: ${cleanedFinalThemeName}`);
    expect(cleanedFinalThemeName).toBe(originalTheme);

    console.log("🎉 Theme switching automation completed successfully!");
    console.log(
      `📋 Summary: ${originalTheme} → ${targetTheme} → ${originalTheme}`
    );
  });
});
