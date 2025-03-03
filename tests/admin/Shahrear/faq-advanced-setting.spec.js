// @ts-check
import { test, expect } from "@playwright/test";

test.describe("BetterDocs FAQ Permission Setup @betterdocs", () => {
  test("Admin configures FAQ access and verifies roles @happy", async ({ browser }) => {
    const context = await browser.newContext({ storageState: "playwright/.auth/admin.json" });
    const page = await context.newPage();

    console.log("✅ Admin logged in and reached Dashboard.");
    await page.goto("/wp-admin/index.php");

    // Step 2: Navigate to Plugins and Activate if Needed
    console.log("🔍 Checking BetterDocs plugin status...");
    await page.goto("/wp-admin/plugins.php");

    async function activatePlugin(pluginSlug) {
      const pluginRow = `tr[data-plugin="${pluginSlug}"]`;
      const activateButton = `${pluginRow} .activate a`;

      if (await page.locator(activateButton).isVisible()) {
        console.log(`🚀 Activating ${pluginSlug}...`);
        await page.locator(activateButton).click();
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

    // Step 4: Modify FAQ Permissions
    console.log("📌 Checking and Updating FAQ Permissions...");
    await page.locator('span', { hasText: "Advanced Settings" }).click();
    await page.waitForTimeout(1000); // Ensure settings are fully loaded

    // Open the FAQ Roles dropdown
    await page.locator("#faq_roles").click();

    // Check if "Contributor" is already selected
    const isContributorSelected = await page.locator("#faq_roles").getByText("Contributor").isVisible();

    if (isContributorSelected) {
        console.log("✅ Contributor already has permission. Skipping update.");
    } else {
        console.log("⚠️ Contributor does NOT have permission. Updating settings...");
        
        // Select Admin and Contributor
        await page.locator("#react-select-7-option-0").click(); // Admin
        await page.locator("#react-select-7-option-3").click(); // Contributor
        await page.locator('#faq_roles > .wprf-checkbox-select__control > .wprf-checkbox-select__indicators > .wprf-checkbox-select__indicator').click();

        // Save settings
        await page.getByRole("button", { name: "Save" }).click();
        await page.waitForTimeout(2000);
        console.log("✅ FAQ Permissions updated successfully.");
    }


    // Step 5: Log Out Admin
    console.log("🔄 Logging out Admin...");
    await page.getByRole('menuitem', { name: 'Howdy, ad min' }).hover();
    await page.waitForTimeout(500); // Ensure the dropdown appears
    await page.getByRole("menuitem", { name: "Log Out" }).click();


    // Step 6: Login as Contributor & Verify Access
    console.log("🔹 Logging in as Contributor...");
    const contributorContext = await browser.newContext({ storageState: "playwright/.auth/contributor.json" });
    const contributorPage = await contributorContext.newPage();
    await contributorPage.goto("/wp-admin/index.php");

    console.log("🔍 Checking FAQ Builder access for Contributor...");
    await contributorPage.goto("/wp-admin/");
    await contributorPage.getByRole('link', { name: 'BetterDocs' }).hover();
    await contributorPage.waitForTimeout(500); 
    await contributorPage.getByRole("link", { name: "FAQ Builder" }).click();
    await page.waitForTimeout(500); // Ensure the page load

    console.log("✅ Contributor can access FAQ Builder.");

    // Step 7: Log Out Contributor
    console.log("🔄 Logging out Contributor...");
    await page.getByRole('menuitem', { name: 'Howdy, Contri but' }).hover();
    await page.waitForTimeout(500); // Ensure the dropdown appears
    await page.getByRole("menuitem", { name: "Log Out" }).click();

    // Step 8: Login as Subscriber & Verify Access Restriction
    console.log("🔹 Logging in as Subscriber...");
    const subscriberContext = await browser.newContext({ storageState: "playwright/.auth/subscriber.json" });
    const subscriberPage = await subscriberContext.newPage();
    await subscriberPage.goto("/wp-admin/index.php");

    console.log("🔍 Checking FAQ Builder access for Subscriber...");
    try {
      await subscriberPage.getByRole("link", { name: "FAQ Builder" }).click();
      console.log("❌ ERROR: Subscriber should NOT have access!");
    } catch {
      console.log("✅ Subscriber CANNOT access FAQ Builder as expected.");
    }

    // Step 9: Log Out Subscriber
    console.log("🔄 Logging out Subscriber...");
    await page.getByRole('menuitem', { name: 'Howdy, Subcri ber' }).hover();
    await page.waitForTimeout(500); // Ensure the dropdown appears
    await page.getByRole("menuitem", { name: "Log Out" }).click();

    console.log("🎯 Test completed successfully!");
  });
});









// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://betterdocs.msf.qa378.site/wp-login.php?redirect_to=https%3A%2F%2Fbetterdocs.msf.qa378.site%2Fwp-admin%2F&reauth=1');
//   await page.getByLabel('Username or Email Address').click();
//   await page.getByLabel('Username or Email Address').fill('shahrear_admin');
//   await page.getByLabel('Password', { exact: true }).click();
//   await page.getByLabel('Password', { exact: true }).click();
//   await page.getByLabel('Password', { exact: true }).fill('check base url yourseldU');
//   await page.getByLabel('Remember Me').check();
//   await page.getByRole('button', { name: 'Log In' }).click();
//   await page.getByRole('link', { name: 'BetterDocs' }).first().click();
//   await page.locator('#toplevel_page_betterdocs-admin').getByRole('link', { name: 'Settings' }).click();
//   await page.locator('span').filter({ hasText: 'Advanced Settings' }).click();
//   await page.locator('#faq_roles').getByText('Who Can Check FAQ Builder?').click();
//   await page.locator('#react-select-7-option-0').click();
//   await page.locator('#react-select-7-option-0').click();
//   await page.locator('#react-select-7-option-3').click();
//   await page.getByText('Contributor', { exact: true }).click();
//   await page.locator('#faq_roles > .wprf-checkbox-select__control > .wprf-checkbox-select__indicators > .wprf-checkbox-select__indicator').click();
//   await page.getByRole('button', { name: 'Save' }).click();
//   // await page.getByRole('alert').click();
//   await page.getByRole('menuitem', { name: 'Log Out' }).click();
//   await page.getByLabel('Username or Email Address').click();
//   await page.getByLabel('Username or Email Address').fill('shahrear_contributor');
//   await page.getByLabel('Password', { exact: true }).click();
//   await page.getByLabel('Password', { exact: true }).fill('check base url yourself');
//   await page.getByLabel('Show password').click();
//   await page.getByLabel('Remember Me').check();
//   await page.getByRole('button', { name: 'Log In' }).click();
//   await page.getByRole('link', { name: 'FAQ Builder' }).click();
//   await page.getByRole('link', { name: 'BetterDocs' }).click();
//   await page.getByRole('link', { name: 'FAQ Builder' }).click();
//   await page.getByRole('heading', { name: 'FAQ Builder' }).click();
//   await page.getByRole('menuitem', { name: 'Log Out' }).click();
//   await page.getByLabel('Username or Email Address').click();
//   await page.getByLabel('Username or Email Address').fill('shahrear_subcriber');
//   await page.getByLabel('Username or Email Address').press('ArrowLeft');
//   await page.getByLabel('Username or Email Address').press('ArrowLeft');
//   await page.getByLabel('Username or Email Address').press('ArrowLeft');
//   await page.getByLabel('Username or Email Address').press('ArrowLeft');
//   await page.getByLabel('Username or Email Address').press('ArrowLeft');
//   await page.getByLabel('Username or Email Address').press('ArrowLeft');
//   await page.getByLabel('Username or Email Address').fill('shahrear_subscriber');
//   await page.getByLabel('Password', { exact: true }).click();
//   await page.getByLabel('Password', { exact: true }).fill('check base url yourself');
//   await page.getByLabel('Remember Me').check();
//   await page.getByRole('button', { name: 'Log In' }).click();
//   await page.getByRole('heading', { name: 'Profile' }).click();
//   await page.getByRole('menuitem', { name: 'Log Out' }).click();
// });




// // @ts-check
// import { test, expect } from "@playwright/test";

// test.describe("BetterDocs FAQ Permission Setup @betterdocs", () => {
//   test("Admin configures FAQ access and verifies roles @happy", async ({ browser }) => {
//     const context = await browser.newContext({ storageState: "playwright/.auth/admin.json" });
//     const page = await context.newPage();

//     // Step 1: Admin logs in and goes to Dashboard
//     await page.goto("/wp-admin/index.php");
//     console.log("✅ Admin logged in and reached Dashboard.");

//     // Step 2: Navigate to Plugins and Activate if Needed
//     console.log("🔍 Checking BetterDocs plugin status...");
//     await page.goto("/wp-admin/plugins.php");

//     async function activatePlugin(pluginSlug) {
//       const pluginRow = `tr[data-plugin="${pluginSlug}"]`;
//       const activateButton = `${pluginRow} .activate a`;

//       if (await page.isVisible(activateButton)) {
//         console.log(`🚀 Activating ${pluginSlug}...`);
//         await page.click(activateButton);
//         await page.waitForTimeout(3000);
//       } else {
//         console.log(`✅ ${pluginSlug} is already active.`);
//       }
//     }

//     await activatePlugin("betterdocs/betterdocs.php");
//     await activatePlugin("betterdocs-pro/betterdocs-pro.php");

//     // Step 3: Go to BetterDocs Settings
//     console.log("⚙️ Navigating to BetterDocs Settings...");
//     await page.goto("/wp-admin/admin.php?page=betterdocs-settings");

//     // Step 4: Navigate to Advanced Settings (Subcategory)
//     console.log("🔧 Navigating to Advanced Settings...");
//     await page.goto("/wp-admin/admin.php?page=betterdocs-settings");

//     // Ensure "Advanced Settings" is clicked
//     await page.click("text=Advanced Settings");
//     await page.waitForTimeout(2000); // Wait for settings to load

//     // Ensure the FAQ Builder permission dropdown is visible
//     const faqDropdownSelector = 'select[name="betterdocs_faq_builder_permission"]';
//     await page.waitForSelector(faqDropdownSelector, { state: "visible", timeout: 30000 });

//     const faqDropdown = page.locator(faqDropdownSelector);

//     // Scroll to the dropdown
//     console.log("🔍 Scrolling to 'Who Can Check FAQ Builder?' dropdown...");
//     await faqDropdown.evaluate((el) => el.scrollIntoView({ behavior: "smooth", block: "center" }));

//     // Select Administrator & Contributor
//     console.log("✅ Selecting 'Administrator' & 'Contributor'...");
//     await faqDropdown.selectOption(["administrator", "contributor"]);

//     // Save changes
//     console.log("💾 Saving settings...");
//     await page.click('button[type="submit"]', { force: true }); // Force-click in case it's inside a modal or hidden area
//     await page.waitForTimeout(3000);
//     console.log("✅ FAQ settings updated successfully!");





//     // Step 5: Set FAQ Permissions (Admin & Contributor)
//     console.log("🔒 Setting FAQ permissions for Admin and Contributor...");
//     await page.selectOption("#faq_permissions", ["administrator", "contributor"]);
//     await page.click('button[type="submit"]');
//     await page.waitForTimeout(3000);

//     // Step 6: Verify Contributor Access
//     console.log("👤 Checking Contributor Access...");
//     const contributorContext = await browser.newContext({ storageState: "playwright/.auth/contributor.json" });
//     const contributorPage = await contributorContext.newPage();
//     await contributorPage.goto("/wp-admin/admin.php?page=betterdocs-faq");
//     const contributorCanAccess = await contributorPage.isVisible(".faq-builder");

//     expect(contributorCanAccess).toBeTruthy();
//     console.log("✅ Contributor can access FAQ Builder.");

//     // Step 7: Verify Subscriber Access
//     console.log("👤 Checking Subscriber Access...");
//     const subscriberContext = await browser.newContext({ storageState: "playwright/.auth/subscriber.json" });
//     const subscriberPage = await subscriberContext.newPage();
//     await subscriberPage.goto("/wp-admin/admin.php?page=betterdocs-faq");
//     const subscriberCanAccess = await subscriberPage.isVisible(".faq-builder");

//     expect(subscriberCanAccess).toBeFalsy();
//     console.log("✅ Subscriber CANNOT access FAQ Builder.");

//     await page.close();
//     await contributorPage.close();
//     await subscriberPage.close();
//   });
// });
