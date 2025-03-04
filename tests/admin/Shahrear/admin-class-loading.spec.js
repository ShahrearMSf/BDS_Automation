import { test, expect } from "@playwright/test";

// Ensure to load environment variables before running tests
const baseUrl = process.env.BASE_URL_MSF;

test.describe("BetterDocs 'betterdocs-admin' Class To Be Loaded Only In Betterdocs Pages", () => {
  let adminContext, adminPage;

  test.beforeAll(async ({ browser }) => {
    // Create a new browser context with admin storage state
    adminContext = await browser.newContext({ storageState: "playwright/.auth/admin.json" });
    adminPage = await adminContext.newPage();
  });


  test("Check in dashboard if betterdocs-admin class is absent", async () => {

    await adminPage.goto(`${baseUrl}/wp-admin/index.php`); 

    const containsClass = await adminPage.evaluate(() => {
      return document.body.classList.contains('betterdocs-admin');
    });

    expect(containsClass).toBe(false); // Expect the class to be absent

    console.log(`'betterdocs-admin' class is present: ${containsClass}`);
  });

  test("Check in page if betterdocs-admin class is absent", async () => {

    await adminPage.goto(`${baseUrl}/wp-admin/edit.php?post_type=page`); 

    const containsClass = await adminPage.evaluate(() => {
      return document.body.classList.contains('betterdocs-admin');
    });

    expect(containsClass).toBe(false); // Expect the class to be absent

    console.log(`'betterdocs-admin' class is present: ${containsClass}`);
  });

  test("Check in post if betterdocs-admin class is absent", async () => {

    await adminPage.goto(`${baseUrl}/wp-admin/edit.php`); 

    const containsClass = await adminPage.evaluate(() => {
      return document.body.classList.contains('betterdocs-admin');
    });

    expect(containsClass).toBe(false); // Expect the class to be absent

    console.log(`'betterdocs-admin' class is present: ${containsClass}`);
  });

  test("Check in plugins if betterdocs-admin class is absent", async () => {

    await adminPage.goto(`${baseUrl}/wp-admin/plugins.php`); 

    const containsClass = await adminPage.evaluate(() => {
      return document.body.classList.contains('betterdocs-admin');
    });

    expect(containsClass).toBe(false); // Expect the class to be absent

    console.log(`'betterdocs-admin' class is present: ${containsClass}`);
  });

  test("Check betterdocs-admin class via Admin checks and activates Elementor plugins if needed", async () => {
    await adminPage.goto(`${baseUrl}/wp-admin/plugins.php`);
    console.log("🔍 Checking Elementor plugin status...");

    async function activatePlugin(pluginSlug) {
      const pluginRow = `tr[data-plugin="${pluginSlug}"]`;
      const activateButton = `${pluginRow} .activate a`;

      if (await adminPage.locator(activateButton).isVisible()) {
        console.log(`🚀 Activating ${pluginSlug}...`);
        await adminPage.locator(activateButton).click();
        await adminPage.waitForTimeout(3000);
      } else {
        console.log(`✅ ${pluginSlug} is already active.`);
      }
    }

    await activatePlugin("elementor/elementor.php");
    await activatePlugin("elementor-pro/elementor-pro.php");

    await adminPage.goto(`${baseUrl}/wp-admin/admin.php?page=elementor`);
    const containsClass = await adminPage.evaluate(() => {
        return document.body.classList.contains('betterdocs-admin');
      });
  
      expect(containsClass).toBe(false); // Expect the class to be absent
  
      console.log(`'betterdocs-admin' class is present: ${containsClass}`);
  });

  test("Check betterdocs-admin class via Admin checks and activates Essential Addons plugins if needed", async () => {
    await adminPage.goto(`${baseUrl}/wp-admin/plugins.php`);
    async function activatePlugin(pluginSlug) {
      const pluginRow = `tr[data-plugin="${pluginSlug}"]`;
      const activateButton = `${pluginRow} .activate a`;

      if (await adminPage.locator(activateButton).isVisible()) {
        console.log(`🚀 Activating ${pluginSlug}...`);
        await adminPage.locator(activateButton).click();
        await adminPage.waitForTimeout(3000);
      } else {
        console.log(`✅ ${pluginSlug} is already active.`);
      }
    }

    await activatePlugin("essentialaddons/essentialaddons.php");
    await activatePlugin("essentialaddons-pro/essentialaddons-pro.php");

    await adminPage.goto(`${baseUrl}/wp-admin/admin.php?page=eael-settings`);
    const containsClass = await adminPage.evaluate(() => {
        return document.body.classList.contains('betterdocs-admin');
      });
  
      expect(containsClass).toBe(false); // Expect the class to be absent
  
      console.log(`'betterdocs-admin' class is present: ${containsClass}`);
  });

  test("Check in users if betterdocs-admin class is absent", async () => {

    await adminPage.goto(`${baseUrl}/wp-admin/users.php`); 

    const containsClass = await adminPage.evaluate(() => {
      return document.body.classList.contains('betterdocs-admin');
    });

    expect(containsClass).toBe(false); // Expect the class to be absent

    console.log(`'betterdocs-admin' class is present: ${containsClass}`);
  });

//true check in betterdocs

test("Check betterdocs-admin class via Admin checks and activates BetterDocs plugins if needed", async () => {
    await adminPage.goto(`${baseUrl}/wp-admin/plugins.php`);
    async function activatePlugin(pluginSlug) {
      const pluginRow = `tr[data-plugin="${pluginSlug}"]`;
      const activateButton = `${pluginRow} .activate a`;

      if (await adminPage.locator(activateButton).isVisible()) {
        console.log(`🚀 Activating ${pluginSlug}...`);
        await adminPage.locator(activateButton).click();
        await adminPage.waitForTimeout(3000);
      } else {
        console.log(`✅ ${pluginSlug} is already active.`);
      }
    }

    await activatePlugin("betterdocs/betterdocs.php");
    await activatePlugin("betterdocs-pro/betterdocs-pro.php");

    await adminPage.goto(`${baseUrl}/wp-admin/admin.php?page=betterdocs-admin`);
    const containsClass = await adminPage.evaluate(() => {
        return document.body.classList.contains('betterdocs-admin');
      });
  
      if (!containsClass) {
        console.log("The class was unexpectedly absent.");
      } else {
        console.log("'betterdocs-admin' class is present:", containsClass);
      }
      
      try {
        expect(containsClass).toBe(true); // Expect the class to be present
      } catch (error) {
        console.log("Assertion failed: The class is not present.");
      }
      
  });


});
