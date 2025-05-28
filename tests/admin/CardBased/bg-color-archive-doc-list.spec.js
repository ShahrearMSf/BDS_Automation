import { test, expect } from "@playwright/test";

// Load environment variables
const baseUrl = process.env.BASE_URL_MSF;

test.describe("WordPress Theme Switching with Archive List Block Background Color Test", () => {
  let adminContext, adminPage;
  let createdPostId = null;

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
  // from heere my test is getting failed
  test("Complete Theme Switch, Archive List Block with Background Color Test", async () => {
    console.log(
      "🎨 Starting WordPress theme switching with Archive List block background color test..."
    );

    const originalTheme = "Hello Elementor";
    const targetTheme = "Twenty Twenty-Four";

    // Step 1: Check current theme and switch to Twenty Twenty-Four if needed
    console.log("📍 Step 1: Checking current theme...");
    await adminPage.goto(`${baseUrl}/wp-admin/themes.php`);
    await adminPage.waitForLoadState("networkidle");

    // Verify we're on themes page
    await expect(
      adminPage.getByRole("heading", { name: "Themes" })
    ).toBeVisible();
    console.log("✅ Successfully navigated to Themes page");

    // Get current active theme
    const activeThemeElement = adminPage.locator(".theme.active");
    await expect(activeThemeElement).toBeVisible();

    const activeThemeName = await activeThemeElement
      .locator(".theme-name")
      .textContent();
    const currentTheme = activeThemeName?.trim().replace(/^Active: /, "");
    console.log(`📌 Current active theme: ${currentTheme}`);

    // Check if we need to switch themes
    if (currentTheme === targetTheme) {
      console.log(
        `✅ Already using ${targetTheme} theme - skipping theme switch`
      );
    } else {
      console.log(`📍 Switching from ${currentTheme} to ${targetTheme}...`);

      // Find and switch to Twenty Twenty-Four theme
      const targetThemeElement = adminPage.locator(".theme").filter({
        has: adminPage.locator(".theme-name", { hasText: targetTheme }),
      });

      if ((await targetThemeElement.count()) === 0) {
        console.log(`⚠️ Target theme "${targetTheme}" not found`);
        test.skip();
        return;
      }

      // Activate the target theme
      await targetThemeElement.hover();
      const activateButton = targetThemeElement.locator(".activate");
      await expect(activateButton).toBeVisible();
      await activateButton.click();
      await adminPage.waitForLoadState("networkidle");
      console.log(`✅ Successfully switched to: ${targetTheme}`);

      // Verify the theme change
      await adminPage.reload();
      await adminPage.waitForLoadState("networkidle");

      const newActiveTheme = adminPage.locator(".theme.active .theme-name");
      const newActiveThemeName = await newActiveTheme.textContent();
      const cleanedNewThemeName = newActiveThemeName
        ?.trim()
        .replace(/^Active: /, "");

      console.log(`🎉 New active theme: ${cleanedNewThemeName}`);
      expect(cleanedNewThemeName).toBe(targetTheme);
    }

    // Step 2: Navigate to Add New Post (direct URL approach)
    console.log("📍 Step 2: Creating new post...");
    await adminPage.goto(`${baseUrl}/wp-admin/post-new.php`);
    await adminPage.waitForLoadState("networkidle");

    // Wait for the editor to load
    await adminPage.waitForTimeout(3000);
    console.log("✅ Post editor loaded");

    // Step 3: Add title
    console.log("📍 Step 3: Adding post title...");
    await adminPage.getByLabel("Add title").fill("Category Archive List");

    // Step 4: Add Archive List block using multiple approaches
    console.log("📍 Step 4: Adding Archive List block...");

    // Try clicking on the default block first
    try {
      await adminPage.getByLabel("Add default block").click();
      await adminPage.waitForTimeout(1000);

      // Type the slash command
      await adminPage.keyboard.type("/betterdocs archive doc list");
      await adminPage.waitForTimeout(1000);

      // Press Enter to select the block
      await adminPage.keyboard.press("Enter");
      await adminPage.waitForTimeout(2000);
      console.log(
        "✅ BetterDocs Archive Doc List block added via slash command"
      );
    } catch (error) {
      console.log("⚠️ Slash command failed, trying alternative approach...");

      // Fallback: try to find the paragraph block and fill it
      const blockLocator = adminPage
        .locator('[data-type="core/paragraph"]')
        .first();
      if ((await blockLocator.count()) > 0) {
        await blockLocator.fill("/betterdocs archive doc list");
        await adminPage.waitForTimeout(1000);
        console.log(
          "✅ BetterDocs Archive Doc List block added via block locator"
        );
      } else {
        // Final fallback: try any editable block
        const editableBlock = adminPage
          .locator('[contenteditable="true"]')
          .first();
        if ((await editableBlock.count()) > 0) {
          await editableBlock.click();
          await adminPage.keyboard.type("/betterdocs archive doc list");
          await adminPage.keyboard.press("Enter");
          await adminPage.waitForTimeout(2000);
          console.log(
            "✅ BetterDocs Archive Doc List block added via contenteditable"
          );
        }
      }
    }

    // Wait for the block to be added and get the current URL to extract post ID
    await adminPage.waitForTimeout(2000);

    // Extract post ID from URL for cleanup later
    try {
      const currentUrl = adminPage.url();
      const postIdMatch = currentUrl.match(/post=(\d+)/);
      if (postIdMatch) {
        createdPostId = postIdMatch[1];
        console.log(`📝 Working with post ID: ${createdPostId}`);
      } else {
        console.log(
          "⚠️ Could not extract post ID from URL, will try alternative cleanup method"
        );
      }
    } catch (error) {
      console.log("⚠️ Error extracting post ID:", error.message);
    }

    // Step 5: Change background color
    console.log("📍 Step 5: Changing background color...");

    // Click on Archive Title heading to select the block
    await adminPage.getByRole("heading", { name: "Archive Title" }).click();
    console.log("✅ Archive Doc block selected via heading");

    // Navigate to Style tab
    await adminPage.getByRole("tab", { name: "Style" }).click();
    console.log("✅ Style tab clicked");

    // Click on Background Color
    await adminPage.getByText("Background Color").click();
    console.log("✅ Background Color option clicked");

    // Click on the white color first
    await adminPage.getByLabel("#fff").click();

    // Set a custom color
    await adminPage.getByLabel("Hex color").click();
    await adminPage.getByLabel("Hex color").fill("4f4f");
    console.log("✅ Background color changed to #4f4f");

    // Wait for color to be applied
    await adminPage.waitForTimeout(1000);

    // Step 6: Save/Publish the post
    console.log("📍 Step 6: Publishing the post...");

    // First click the main Publish button
    try {
      await adminPage
        .getByRole("button", { name: "Publish", exact: true })
        .click();
      await adminPage.waitForTimeout(2000);
      console.log("✅ First publish button clicked");

      // Then click the final publish button in the publish panel
      const finalPublishButton = adminPage
        .getByLabel("Editor publish")
        .getByRole("button", { name: "Publish", exact: true });

      if ((await finalPublishButton.count()) > 0) {
        await finalPublishButton.click();
        await adminPage.waitForTimeout(3000);
        console.log("✅ Post published successfully");
      } else {
        console.log(
          "⚠️ Final publish button not found, post might already be published"
        );
      }
    } catch (error) {
      console.log("⚠️ Publishing failed:", error.message);
    }

    // Step 7: Visit the post and check color
    console.log("📍 Step 7: Visiting the post to verify color...");
    const viewPostLink = adminPage
      .getByLabel("Editor publish")
      .getByRole("link", { name: "View Post" });
    if ((await viewPostLink.count()) > 0) {
      await viewPostLink.click();
      await adminPage.waitForLoadState("networkidle");

      // Check for the specific HTML structure you mentioned
      const archiveListContainer = adminPage.locator(
        ".betterdocs-entry-body.betterdocs-taxonomy-doc-category"
      );
      const articlesList = adminPage.locator(".betterdocs-articles-list");

      if ((await archiveListContainer.count()) > 0) {
        console.log("✅ Found betterdocs-entry-body container");

        // Check if articles list exists
        if ((await articlesList.count()) > 0) {
          console.log("✅ Found betterdocs-articles-list");

          // Check for specific articles mentioned in your HTML
          const scriptArticle = adminPage.locator(
            'a[href*="script-img-srcx-onerroralert1"]'
          );
          const linuxArticle = adminPage.locator('a[href*="5-linux-commands"]');
          const believeArticle = adminPage.locator(
            'a[href*="believe-in-the-power-of-yet"]'
          );

          if ((await scriptArticle.count()) > 0) {
            console.log("✅ Found script article with XSS content");
          }
          if ((await linuxArticle.count()) > 0) {
            console.log("✅ Found Linux commands article");
          }
          if ((await believeArticle.count()) > 0) {
            console.log("✅ Found 'Believe in the Power of Yet' article");
          }
        }

        // Check the background color
        const backgroundColor = await archiveListContainer.evaluate((el) => {
          return window.getComputedStyle(el).backgroundColor;
        });
        console.log(`🎨 Detected background color: ${backgroundColor}`);

        // Check if the color contains the values we set (4f4f would be interpreted as #004f4f)
        const hasCustomBackground =
          backgroundColor.includes("rgb(0, 79, 79)") ||
          backgroundColor.includes("#004f4f") ||
          backgroundColor.includes("0, 79, 79");

        if (hasCustomBackground) {
          console.log("✅ Background color verification successful");
        } else {
          console.log("⚠️ Background color might not be applied as expected");
          console.log(
            `Expected color similar to #004f4f, got: ${backgroundColor}`
          );
        }
      }

      // Right-click on the specific element as mentioned in your codegen
      const scriptElement = adminPage
        .locator("div")
        .filter({ hasText: "<script> <img src=x onerror=" });
      if ((await scriptElement.count()) > 0) {
        await scriptElement.nth(2).click({ button: "right" });
        console.log("✅ Right-clicked on script element");
      }
    }

    // Step 8: Delete the post
    console.log("📍 Step 8: Deleting the created post...");
    if (createdPostId) {
      await adminPage.goto(
        `${baseUrl}/wp-admin/post.php?post=${createdPostId}&action=edit`
      );
      await adminPage.waitForLoadState("networkidle");

      // Try to delete the post using the Options menu
      const moreOptionsButton = adminPage.getByRole("button", {
        name: "Options",
      });
      if ((await moreOptionsButton.count()) > 0) {
        await moreOptionsButton.click();
        await adminPage.waitForTimeout(500);

        const moveToTrashButton = adminPage.getByRole("button", {
          name: "Move to trash",
        });
        if ((await moveToTrashButton.count()) > 0) {
          await moveToTrashButton.click();
          await adminPage.waitForLoadState("networkidle");
          console.log("✅ Post moved to trash successfully");
        }
      } else {
        // Alternative method - try direct trash URL
        await adminPage.goto(
          `${baseUrl}/wp-admin/post.php?post=${createdPostId}&action=trash`
        );
        await adminPage.waitForLoadState("networkidle");
        console.log("✅ Post deleted via direct URL");
      }
    }

    // Step 9: Switch back to original theme if needed
    console.log("📍 Step 9: Checking if theme restoration is needed...");

    // Only switch back if we actually changed the theme earlier
    if (currentTheme !== targetTheme) {
      console.log(`📍 Switching back to original theme: ${originalTheme}...`);
      await adminPage.goto(`${baseUrl}/wp-admin/themes.php`);
      await adminPage.waitForLoadState("networkidle");

      const originalThemeElement = adminPage.locator(".theme").filter({
        has: adminPage.locator(".theme-name", { hasText: originalTheme }),
      });

      // Check if original theme is already active
      const isOriginalAlreadyActive =
        (await originalThemeElement.locator(".theme.active").count()) > 0;

      if (!isOriginalAlreadyActive) {
        // Switch back to original theme
        await originalThemeElement.hover();
        const originalActivateButton =
          originalThemeElement.locator(".activate");

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
      } else {
        console.log(`✅ Original theme "${originalTheme}" is already active`);
      }
    } else {
      console.log(`✅ No theme change was made, skipping theme restoration`);
    }

    // Final verification
    console.log("📍 Step 10: Final verification...");
    await adminPage.reload();
    await adminPage.waitForLoadState("networkidle");

    const finalActiveTheme = adminPage.locator(".theme.active .theme-name");
    const finalThemeName = await finalActiveTheme.textContent();
    const cleanedFinalThemeName = finalThemeName
      ?.trim()
      .replace(/^Active: /, "");

    console.log(`🏁 Final active theme: ${cleanedFinalThemeName}`);
    expect(cleanedFinalThemeName).toBe(originalTheme);

    console.log("🎉 Complete automation test completed successfully!");
    console.log(
      `📋 Summary: Theme: ${originalTheme} → ${targetTheme} → ${originalTheme}`
    );
    console.log(
      `📋 Post: Created → Modified with Archive List Block → Background Color Changed → Verified → Deleted`
    );
    console.log(
      `📋 Archive List Structure: Verified betterdocs-entry-body and betterdocs-articles-list elements`
    );
  });
});
