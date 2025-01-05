//@ts-check

import { test, expect } from "@playwright/test";

const base_url = `${process.env.BASE_URL}` || "https://bd.wp1.site";

const restricted_pages = {
  docs_page: `${base_url}/articles/`,
  category_archive: `${base_url}/articles/bd250102-internal-kb/`,
  docs_archive: `${base_url}/articles/bd250102-internal-kb/bd250102-internal-category-one/`,
  single_doc_1: `${base_url}/articles/single-article-internal-250102-two/`,
  single_doc_2: `${base_url}/articles/single-article-internal-250102-four/`,
  tag_archive: `${base_url}/articles-tag/bd250102-internal-tag/`,
};

const open_pages = {
  docs_page: `${base_url}/articles/`,
  category_archive: `${base_url}/articles/one-regular-kb/`,
  docs_archive: `${base_url}/articles/one-regular-kb/rg250105-category-ten/`,
  single_doc_1: `${base_url}/articles/the-role-of-trade-in-shaping-ancient-and-modern-societies/`,
  single_doc_2: `${base_url}/articles/know-about-river/`,
  tag_archive: `${base_url}/articles-tag/regularah/`,
};

const all_users = ["admin", "editor", "author", "contributor", "subscriber", "unauth"];
const users_with_access = ["admin", "author", "subscriber"];
const restricted_users = ["editor", "contributor", "unauth"];

test.describe("Internal KB @internalkb", () => {
  all_users.forEach((user) => {
    test(`open pages should be visible to ${user} users`, async ({ browser }) => {
      const context = await browser.newContext({ storageState: `playwright/.auth/${user}.json` });
      const page = await context.newPage();
      await page.goto(`${base_url}`);

      await page.goto(open_pages.docs_page);
      await expect.soft(page.getByRole("heading", { name: "One Regular KB" })).toBeVisible();

      await page.goto(open_pages.category_archive);
      await expect.soft(page.getByRole("heading", { name: "RG250105 Category Ten" })).toBeVisible();

      await page.goto(open_pages.docs_archive);
      await expect.soft(page.getByRole("heading", { name: "RG250105 Category Ten" }).first()).toBeVisible();
      await expect
        .soft(page.getByRole("heading", { name: "The Role of Trade in Shaping Ancient and Modern Societies" }))
        .toBeVisible();

      await page.goto(open_pages.single_doc_1);
      await expect
        .soft(page.getByRole("heading", { name: "The Role of Trade in Shaping Ancient and Modern Societies" }))
        .toBeVisible();

      await page.goto(open_pages.single_doc_2);
      await expect
        .soft(page.getByRole("heading", { name: "Why Are Rivers Vital Ecosystems for Biodiversity?" }))
        .toBeVisible();

      await page.goto(open_pages.tag_archive);
      await expect.soft(page.getByRole("heading", { name: "RegularAH" }).first()).toBeVisible();
      await expect
        .soft(page.getByRole("link", { name: "Why Are Rivers Vital Ecosystems for Biodiversity?" }).first())
        .toBeVisible();

      // Search Test
      await page.goto(open_pages.docs_page);
      await page.getByText("SearchAH...").click();
      await page.getByPlaceholder("SearchAH...").fill("The Role of Trade in Shaping Ancient and Modern Societies");
      await expect(
        page.getByText("The Role of Trade in Shaping Ancient and Modern SocietiesRG250105 Category Ten")
      ).toBeVisible();
      await page.locator(".clear-icon").click();
      await page.getByPlaceholder("SearchAH...").press("Escape");

      await context.close();
    });
  });

  users_with_access.forEach((user) => {
    test(`restricted pages should be visible to ${user} users`, async ({ browser }) => {
      const context = await browser.newContext({ storageState: `playwright/.auth/${user}.json` });
      const page = await context.newPage();
      await page.goto(`${base_url}`);

      await page.goto(restricted_pages.docs_page);
      await expect.soft(page.getByRole("heading", { name: "BD250102 Internal KB" })).toBeVisible();

      await page.goto(restricted_pages.category_archive);
      await expect.soft(page.getByRole("heading", { name: "BD250102 Internal Category One" })).toBeVisible();

      await page.goto(restricted_pages.docs_archive);
      await expect.soft(page.getByRole("heading", { name: "BD250102 Internal Category One" }).first()).toBeVisible();
      await expect
        .soft(page.getByRole("heading", { name: "Single Article Internal 250102 One" }).first())
        .toBeVisible();

      await page.goto(restricted_pages.single_doc_1);
      await expect
        .soft(page.getByRole("heading", { name: "Single Article Internal 250102 Two" }).first())
        .toBeVisible();
      await expect
        .soft(page.getByRole("heading", { name: "Member server in an Active Directory domain " }).first())
        .toBeVisible();

      await page.goto(restricted_pages.single_doc_2);
      await expect
        .soft(page.getByRole("heading", { name: "Single Article Internal 250102 Four" }).first())
        .toBeVisible();
      await expect.soft(page.getByRole("heading", { name: "Set up Samba as a file server" }).first()).toBeVisible();

      await page.goto(restricted_pages.tag_archive);
      await expect.soft(page.getByRole("heading", { name: "BD250102 Internal Tag" })).toBeVisible();
      await expect.soft(page.getByRole("link", { name: "Single Article Internal 250102 Two" }).first()).toBeVisible();
      await expect
        .soft(page.getByRole("link", { name: "The Role of Trade in Shaping Ancient and Modern Societies" }).first())
        .toBeVisible();

      // Search Test
      await page.goto(open_pages.docs_page);
      await page.getByText("SearchAH...").click();
      await page.getByPlaceholder("SearchAH...").fill("Member server in an Active Directory domain");
      await expect(page.getByText("Single Article Internal 250102 TwoBD250102 Internal Category One")).toBeVisible();
      await expect(page.getByText("Single Article Internal 250102 FiveBD250102 Internal Category Two")).toBeVisible();
      await page.locator(".clear-icon").click();
      await page.getByPlaceholder("SearchAH...").press("Escape");

      await context.close();
    });
  });

  restricted_users.forEach((user) => {
    test(`restricted pages should NOT be visible to ${user} users`, async ({ browser }) => {
      const context = await browser.newContext({ storageState: `playwright/.auth/${user}.json` });
      const page = await context.newPage();
      await page.goto(`${base_url}`);

      await page.goto(restricted_pages.docs_page);
      await expect.soft(page.getByRole("heading", { name: "BD250102 Internal KB" })).not.toBeVisible();

      await page.goto(restricted_pages.category_archive);
      await expect.soft(page.getByRole("heading", { name: "BD250102 Internal Category One" })).not.toBeVisible();

      await page.goto(restricted_pages.docs_archive);
      await expect
        .soft(page.getByRole("heading", { name: "BD250102 Internal Category One" }).first())
        .not.toBeVisible();
      await expect
        .soft(page.getByRole("heading", { name: "Single Article Internal 250102 One" }).first())
        .not.toBeVisible();

      await page.goto(restricted_pages.single_doc_1);
      await expect
        .soft(page.getByRole("heading", { name: "Single Article Internal 250102 Two" }).first())
        .not.toBeVisible();
      await expect
        .soft(page.getByRole("heading", { name: "Member server in an Active Directory domain " }).first())
        .not.toBeVisible();

      await page.goto(restricted_pages.single_doc_2);
      await expect
        .soft(page.getByRole("heading", { name: "Single Article Internal 250102 Four" }).first())
        .not.toBeVisible();
      await expect.soft(page.getByRole("heading", { name: "Set up Samba as a file server" }).first()).not.toBeVisible();

      await page.goto(restricted_pages.tag_archive);
      await expect.soft(page.getByRole("heading", { name: "BD250102 Internal Tag" })).toBeVisible();
      await expect
        .soft(page.getByRole("link", { name: "Single Article Internal 250102 Two" }).first())
        .not.toBeVisible();
      await expect
        .soft(page.getByRole("link", { name: "The Role of Trade in Shaping Ancient and Modern Societies" }).first())
        .toBeVisible();

      // Search Test
      await page.goto(open_pages.docs_page);
      await page.getByText("SearchAH...").click();
      await page.getByPlaceholder("SearchAH...").fill("Member server in an Active Directory domain");
      await expect(page.getByRole("heading", { name: 'No Docs found for "Member' })).toBeVisible();
      await expect(
        page.getByText("Single Article Internal 250102 TwoBD250102 Internal Category One")
      ).not.toBeVisible();
      await expect(
        page.getByText("Single Article Internal 250102 FiveBD250102 Internal Category Two")
      ).not.toBeVisible();
      await page.locator(".clear-icon").click();
      await page.getByPlaceholder("SearchAH...").press("Escape");

      await context.close();
    });
  });
});
