// @ts-check
import { test, expect } from "@playwright/test";

test.describe("BetterDocs FAQ Permission Setup @betterdocs", () => {
  test("Admin configures FAQ access and verifies roles @happy", async ({ browser }) => {
    const context = await browser.newContext({ storageState: "playwright/.auth/admin.json" });
    const page = await context.newPage();

    // Step 1: Admin logs in and goes to Dashboard
    await page.goto("/wp-admin/index.php");
    console.log("✅ Admin logged in and reached Dashboard.");

    // Step 2: Navigate to Plugins and Activate if Needed
    console.log("🔍 Checking BetterDocs plugin status...");
    await page.goto("/wp-admin/plugins.php");

    async function activatePlugin(pluginSlug) {
      const pluginRow = `tr[data-plugin="${pluginSlug}"]`;
      const activateButton = `${pluginRow} .activate a`;

      if (await page.isVisible(activateButton)) {
        console.log(`🚀 Activating ${pluginSlug}...`);
        await page.click(activateButton);
        await page.waitForTimeout(3000);
      } else {
        console.log(`✅ ${pluginSlug} is already active.`);
      }
    }

    await activatePlugin("betterdocs/betterdocs.php");
    await activatePlugin("betterdocs-pro/betterdocs-pro.php");

    // Step 3: Go to BetterDocs Settings
    console.log("⚙️ Navigating to BetterDocs Settings...");
    await page.goto("/wp-admin/admin.php?page=betterdocs-settings");

    // Step 4: Navigate to Advanced Settings
    console.log("🔧 Opening Advanced Settings...");
    await page.goto("/wp-admin/admin.php?page=betterdocs-settings#advanced");
    await page.waitForSelector("#faq_permissions");

    // Step 5: Set FAQ Permissions (Admin & Contributor)
    console.log("🔒 Setting FAQ permissions for Admin and Contributor...");
    await page.selectOption("#faq_permissions", ["administrator", "contributor"]);
    await page.click('button[type="submit"]');
    await page.waitForTimeout(3000);

    // Step 6: Verify Contributor Access
    console.log("👤 Checking Contributor Access...");
    const contributorContext = await browser.newContext({ storageState: "playwright/.auth/contributor.json" });
    const contributorPage = await contributorContext.newPage();
    await contributorPage.goto("/wp-admin/admin.php?page=betterdocs-faq");
    const contributorCanAccess = await contributorPage.isVisible(".faq-builder");

    expect(contributorCanAccess).toBeTruthy();
    console.log("✅ Contributor can access FAQ Builder.");

    // Step 7: Verify Subscriber Access
    console.log("👤 Checking Subscriber Access...");
    const subscriberContext = await browser.newContext({ storageState: "playwright/.auth/subscriber.json" });
    const subscriberPage = await subscriberContext.newPage();
    await subscriberPage.goto("/wp-admin/admin.php?page=betterdocs-faq");
    const subscriberCanAccess = await subscriberPage.isVisible(".faq-builder");

    expect(subscriberCanAccess).toBeFalsy();
    console.log("✅ Subscriber CANNOT access FAQ Builder.");

    await page.close();
    await contributorPage.close();
    await subscriberPage.close();
  });
});
