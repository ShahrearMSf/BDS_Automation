import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto(`${process.env.BASE_URL_MSF}/popular-docs-2`);
  await page.waitForLoadState("domcontentloaded");
});

test("Popular Docs - Main Heading", async ({ page }) => {
  const mainHeading = page.locator(".entry-title");
  await expect(mainHeading).toBeVisible();
  await expect(mainHeading).toHaveText("Popular Docs");
});

test("BetterDocs Articles List - Comprehensive Test", async ({ page }) => {
  // Locate the articles list
  const articlesList = page.locator("ul.betterdocs-articles-list");

  // 1. Check if the list exists and is visible
  await expect(articlesList).toBeVisible();

  // 2. Verify total number of list items (should be 8)
  const listItems = articlesList.locator("li");
  await expect(listItems).toHaveCount(8);

  // 3. Define expected texts and URLs
  const expectedItems = [
    {
      text: "Mercedes GLS450: Here’s why every driveway of upscale Dhaka has one",
      href: `${process.env.BASE_URL_MSF}/docs/allinallmsf/mercedes-gls450-heres-why-every-driveway-of-upscale-dhaka-has-one/`,
    },
    {
      text: "How Moments Shape Our Lives?",
      href: `${process.env.BASE_URL_MSF}/docs/configurations-bn/why-time-is-important/`,
    },
    {
      text: "Protected: বৃদ্ধি এবং প্রোগ্রামের প্রয়োজনের জন্য স্কেল করতে পারেন",
      href: `${process.env.BASE_URL_MSF}/docs/category-december-15/%e0%a6%ac%e0%a7%83%e0%a6%a6%e0%a7%8d%e0%a6%a7%e0%a6%bf-%e0%a6%8f%e0%a6%ac%e0%a6%82-%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a7%8b%e0%a6%97%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%ae%e0%a7%87%e0%a6%b0-%e0%a6%aa-2/`,
    },
    {
      text: "কিভাবে মুহূর্তগুলি আমাদের জীবন গঠন করে?",
      href: `${process.env.BASE_URL_MSF}/docs/configurations-bn/%e0%a6%95%e0%a6%bf%e0%a6%ad%e0%a6%be%e0%a6%ac%e0%a7%87-%e0%a6%ae%e0%a7%81%e0%a6%b9%e0%a7%82%e0%a6%b0%e0%a7%8d%e0%a6%a4%e0%a6%97%e0%a7%81%e0%a6%b2%e0%a6%bf-%e0%a6%86%e0%a6%ae%e0%a6%be%e0%a6%a6%e0%a7%87/`,
    },
    {
      text: "Protected: কীভাবে ইবিএল বিসিসিআইয়ের ছাই থেকে উঠে একটি শীর্ষ ব্যাঙ্কে পরিণত হয়েছিল",
      href: `${process.env.BASE_URL_MSF}/docs/setup-process-bn/%e0%a6%95%e0%a7%80%e0%a6%ad%e0%a6%be%e0%a6%ac%e0%a7%87-%e0%a6%87%e0%a6%ac%e0%a6%bf%e0%a6%8f%e0%a6%b2-%e0%a6%ac%e0%a6%bf%e0%a6%b8%e0%a6%bf%e0%a6%b8%e0%a6%bf%e0%a6%86%e0%a6%87%e0%a6%af%e0%a6%bc%e0%a7%87/`,
    },
    {
      text: "প্রোগ্রামের নিয়ম ও শর্তাবলীর স্বতন্ত্র আনুগত্য সদস্যের গ্রহণযোগ্যতা কীভাবে সিস্টেম বজায় রাখতে পারে তা বর্ণনা করুন। অনুগ্রহ করে অন্তর্ভুক্ত করুন কিভাবে এটি T&C এর ওয়ান্ড ট্র্যাকিং এর সংস্করণ পরিচালনা করে কোন সদস্য কোন সংস্করণটি গ্রহণ করেছে?",
      href: `${process.env.BASE_URL_MSF}/docs/december-29-2024/%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a7%8b%e0%a6%97%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%ae%e0%a7%87%e0%a6%b0-%e0%a6%a8%e0%a6%bf%e0%a6%af%e0%a6%bc%e0%a6%ae-%e0%a6%93-%e0%a6%b6%e0%a6%b0%e0%a7%8d%e0%a6%a4/`,
    },
    {
      text: "আশঙ্কাজনক হারে বাড়ছে পথেঘাটে নারীদের হয়রানির ঘটনা",
      href: `${process.env.BASE_URL_MSF}/docs/getting-started-bn/%e0%a6%86%e0%a6%b6%e0%a6%99%e0%a7%8d%e0%a6%95%e0%a6%be%e0%a6%9c%e0%a6%a8%e0%a6%95-%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a7%87-%e0%a6%ac%e0%a6%be%e0%a6%a1%e0%a6%bc%e0%a6%9b%e0%a7%87-%e0%a6%aa%e0%a6%a5/`,
    },
    {
      text: "How Can SEO Strategies Adapt to Changing User Behaviors and Preferences? hp",
      href: `${process.env.BASE_URL_MSF}/docs/users-administration-bn/why-seo-is-important/`,
    },
  ];

  // 4. Check each list item's components
  for (let i = 0; i < expectedItems.length; i++) {
    const item = listItems.nth(i);

    // Check visibility of list item
    await expect(item).toBeVisible();

    // Check image
    const image = item.locator("img");
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute(
      "src",
      `${process.env.BASE_URL_MSF}/wp-content/uploads/2024/07/Check.svg`
    );
    await expect(image).toHaveAttribute("decoding", "async");

    // Check link
    const link = item.locator("a");
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute("href", expectedItems[i].href);

    // Check text
    const textSpan = item.locator("span");
    await expect(textSpan).toBeVisible();
    await expect(textSpan).toHaveText(expectedItems[i].text);
  }

  // 5. Check basic accessibility
  await expect(articlesList).toHaveAttribute(
    "class",
    "betterdocs-articles-list"
  );

  // 6. Verify all links are clickable
  const allLinks = articlesList.locator("a");
  for (let i = 0; i < (await allLinks.count()); i++) {
    await expect(allLinks.nth(i)).toBeEnabled();
  }
});
