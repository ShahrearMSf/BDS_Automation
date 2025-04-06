import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto(`${process.env.BASE_URL_MSF}/category-archive-list`);
  await page.waitForLoadState("domcontentloaded");
});

test("Category Archive List - Main Heading", async ({ page }) => {
  const mainHeading = page.locator(".entry-title");
  await expect(mainHeading).toBeVisible();
  await expect(mainHeading).toHaveText("Category Archive List");
});

test("Category Archive List - Updated Date", async ({ page }) => {
  const updatedDate = page.locator(".betterdocs-updated-date-wrapper");
  await expect(updatedDate).toBeVisible();
  await expect(updatedDate).toHaveText("Updated on September 26, 2024");
});

test("Category Archive List - Breadcrumb Navigation", async ({ page }) => {
  const breadcrumbList = page.locator(".betterdocs-breadcrumb-list");

  await expect(breadcrumbList).toBeVisible();

  const homeLink = breadcrumbList.locator(".item-home a");
  await expect(homeLink).toBeVisible();
  await expect(homeLink).toHaveAttribute("href", `${process.env.BASE_URL_MSF}`);
  await expect(homeLink).toHaveText("Home");

  const delimiterIcon = breadcrumbList.locator(".breadcrumb-delimiter svg");
  await expect(delimiterIcon).toBeVisible();

  const docsLink = breadcrumbList.locator(
    ".item-cat.item-custom-post-type-docs a"
  );
  await expect(docsLink).toBeVisible();
  await expect(docsLink).toHaveAttribute(
    "href",
    `${process.env.BASE_URL_MSF}/docs/`
  );
  await expect(docsLink).toHaveText("Docs");
});

test("Category Archive List - Article List", async ({ page }) => {
  const articleList = page.locator(".betterdocs-articles-list li");

  await expect(articleList.first()).toBeVisible();

  const articles = [
    {
      icon: "far fa-file-alt",
      text: "1% import duty threatens foreign investment in economic zones: Stakeholders",
      url: `${process.env.BASE_URL_MSF}/docs/client/1-import-duty-threatens-foreign-investment-in-economic-zones-stakeholders/`,
    },
    {
      icon: "far fa-file-alt",
      text: "12-Party alliance urges government to announce election roadmap",
      url: `${process.env.BASE_URL_MSF}/docs/allinallmsf/12-party-alliance-urges-government-to-announce-election-roadmap/`,
    },
    {
      icon: "far fa-file-alt",
      text: "65541",
      url: `${process.env.BASE_URL_MSF}/docs/uncategorized/__trashed/`,
    },
    {
      icon: "far fa-file-alt",
      text: "70% of Bangladesh’s outward FDI went to India in 2023",
      url: `${process.env.BASE_URL_MSF}/docs/shahrear/70-of-bangladeshs-outward-fdi-went-to-india-in-2023/`,
    },
    {
      icon: "far fa-file-alt",
      text: "Ability to scale and have separation of data, programs, rewards and point structures for different regions (US, EU, APAC and by country or state / province)",
      url: `${process.env.BASE_URL_MSF}/docs/configurations/ability-to-scale-and-have-separation-of-data-programs-rewards-and-point-structures-for-different-regions-us-eu-apac-and-by-country-or-state-province/`,
    },
  ];

  for (let i = 0; i < articles.length; i++) {
    const article = articleList.nth(i);
    const icon = article.locator("i");
    const link = article.locator("a");

    await expect(icon).toHaveClass(articles[i].icon);

    await expect(link).toHaveText(articles[i].text);

    await expect(link).toHaveAttribute("href", articles[i].url);
  }
});

test("Category Archive List - Social Share Buttons", async ({ page }) => {
  const socialShareLinks = page.locator(".betterdocs-social-share-links li a");

  await expect(socialShareLinks.first()).toBeVisible();

  const socialButtons = [
    {
      platform: "Facebook",
      url: "https://www.facebook.com/sharer/sharer.php?u=https://betterdocs.msf.qa378.site/category-archive-list/",
      iconAlt: "Facebook",
    },
    {
      platform: "X",
      url: "https://twitter.com/intent/tweet?url=https://betterdocs.msf.qa378.site/category-archive-list/",
      iconAlt: "X",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/shareArticle?mini=true&url=https://betterdocs.msf.qa378.site/category-archive-list/",
      iconAlt: "LinkedIn",
    },
    {
      platform: "Pinterest",
      url: "https://pinterest.com/pin/create/button/?url=https://betterdocs.msf.qa378.site/category-archive-list/",
      iconAlt: "Pinterest",
    },
  ];

  for (let i = 0; i < socialButtons.length; i++) {
    const button = socialShareLinks.nth(i);
    const icon = button.locator("img");

    await expect(icon).toHaveAttribute("alt", socialButtons[i].iconAlt);

    await expect(button).toHaveAttribute("href", socialButtons[i].url);

    await expect(button).toHaveAttribute("target", "_blank");
  }
});
