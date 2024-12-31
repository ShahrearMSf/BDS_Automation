//@ts-check

import { test as setup, expect } from "@playwright/test";

const loginUrl = `${process.env.BASE_URL}/wp-login.php`;

const adminFile = "playwright/.auth/admin.json";
const editorFile = "playwright/.auth/editor.json";
const authorFile = "playwright/.auth/author.json";
const contributorFile = "playwright/.auth/contributor.json";
const subscriberFile = "playwright/.auth/subscriber.json";
const unauthFile = "playwright/.auth/unauth.json";

setup("authenticate as admin", async ({ page }) => {
  await page.goto(loginUrl);

  await page.getByLabel('Username or Email Address').fill(`${process.env.ADMIN_USER}`);
  await page.getByLabel('Password', { exact: true }).fill(`${process.env.PASS}`);
  await page.getByLabel('Remember Me').check();
  await page.getByRole('button', { name: 'Log In' }).click();
  
  await page.waitForURL(`${process.env.BASE_URL}/wp-admin/`);
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

  await page.context().storageState({ path: adminFile });
});

setup("authenticate as editor", async ({ page }) => {
  await page.goto(loginUrl);

  await page.getByLabel("Username or Email Address").fill(`${process.env.EDITOR_USER}`);
  await page.getByLabel("Password", { exact: true }).fill(`${process.env.PASS}`);
  await page.getByLabel("Remember Me").check();
  await page.getByRole("button", { name: "Log In" }).click();

  await page.waitForURL(`${process.env.BASE_URL}/wp-admin/`);
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();

  await page.context().storageState({ path: editorFile });
});

setup("authenticate as author", async ({ page }) => {
  await page.goto(loginUrl);

  await page.getByLabel("Username or Email Address").fill(`${process.env.AUTHOR_USER}`);
  await page.getByLabel("Password", { exact: true }).fill(`${process.env.PASS}`);
  await page.getByLabel("Remember Me").check();
  await page.getByRole("button", { name: "Log In" }).click();

  await page.waitForURL(`${process.env.BASE_URL}/wp-admin/`);
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();

  await page.context().storageState({ path: authorFile });
});

setup("authenticate as contributor", async ({ page }) => {
  await page.goto(loginUrl);

  await page.getByLabel("Username or Email Address").fill(`${process.env.CONTRIBUTOR_USER}`);
  await page.getByLabel("Password", { exact: true }).fill(`${process.env.PASS}`);
  await page.getByLabel("Remember Me").check();
  await page.getByRole("button", { name: "Log In" }).click();

  await page.waitForURL(`${process.env.BASE_URL}/wp-admin/`);
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();

  await page.context().storageState({ path: contributorFile });
});

setup("authenticate as subscriber", async ({ page }) => {
  await page.goto(loginUrl);

  await page.getByLabel("Username or Email Address").fill(`${process.env.SUBSCRIBER_USER}`);
  await page.getByLabel("Password", { exact: true }).fill(`${process.env.PASS}`);
  await page.getByLabel("Remember Me").check();
  await page.getByRole("button", { name: "Log In" }).click();

  await page.waitForURL(/wp-admin/);
  await expect(page.getByRole("heading", { name: "Profile" })).toBeVisible();

  await page.context().storageState({ path: subscriberFile });
});
