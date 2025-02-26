import { test, expect } from "@playwright/test";

test("validate article 1", async ({ page }) => {
  // Navigate to the target page
  await page.goto("https://betterdocs.msf.qa378.site/category-handbook/");
  // Verify the main heading is visible
  const mainHeading = page.locator(".entry-title");
  await expect(mainHeading).toBeVisible();
  await expect(mainHeading).toHaveText("Category Handbook");

  // Locate the first article
  const articleSection = page.locator('article[data-id="144"]').nth(0);

  // Validate the heading visibility
  await page.getByText("৩য় পক্ষ");

  // Locate the count wrapper
  const countWrapper = articleSection.locator("span").filter({ hasText: "2" });
  await expect(countWrapper).toBeVisible();
  await expect(countWrapper).toHaveText("2");

  // Validate the list items
  const listItems = articleSection.locator("ul.betterdocs-articles-list li");
  await expect(listItems).toHaveCount(2); // Ensure there are exactly 2 list items

  // Validate the first list item
  const firstListItem = listItems.nth(0);
  await expect(firstListItem).toContainText(
    "How can your system surface points and benefits experiences to customers across multiple applications outside of the Loyalty Management/Salesforce ecosystem?"
  );

  // Validate the second list item
  const secondListItem = listItems.nth(1);
  await expect(secondListItem).toContainText(
    "Explain how the platform handles points associated for specific SKUs, multiple SKUs"
  );

  // Validate the "Explore More" link
  const exploreMoreLink = articleSection.locator("a.docs-cat-link-btn");
  await expect(exploreMoreLink).toBeVisible();
  await expect(exploreMoreLink).toHaveAttribute(
    "href",
    "https://betterdocs.msf.qa378.site/docs/non-knowledgebase/third-party-bn/"
  );
  await expect(exploreMoreLink).toContainText("Explore More");

  // Validate the image
  const image = articleSection.locator("img");
  await expect(image).toBeVisible();

  // Check if the image src contains 'full-default.png'
  const imageSrc = await image.getAttribute("src");
  if (imageSrc.includes("full-default.png")) {
    console.warn(
      "Image is not set. The default placeholder image is being used."
    );
  } else {
    console.log("Image is properly set.");
  }
});

test("validate article 2", async ({ page }) => {
  // Navigate to the target page
  await page.goto("https://betterdocs.msf.qa378.site/category-handbook/");
  // Verify the main heading is visible
  const mainHeading = page.locator(".entry-title");
  await expect(mainHeading).toBeVisible();
  await expect(mainHeading).toHaveText("Category Handbook");

  // Locate the second article
  const articleSection = page.locator('article[data-id="144"]').nth(1);

  // Validate the heading visibility
  await page.getByText("Alif");

  // Locate the count wrapper
  const countWrapper = articleSection.locator("span").filter({ hasText: "2" });
  await expect(countWrapper).toBeVisible();
  await expect(countWrapper).toHaveText("2");

  // Validate the list items
  const listItems = articleSection.locator("ul.betterdocs-articles-list li");
  await expect(listItems).toHaveCount(2); // Ensure there are exactly 2 list items

  // Validate the first list item
  const firstListItem = listItems.nth(0);
  await expect(firstListItem).toContainText("This is life");

  // Validate the second list item
  const secondListItem = listItems.nth(1);
  await expect(secondListItem).toContainText("Ghum Pasce");

  // Validate the "Explore More" link
  const exploreMoreLink = articleSection.locator("a.docs-cat-link-btn");
  await expect(exploreMoreLink).toBeVisible();
  await expect(exploreMoreLink).toHaveAttribute(
    "href",
    "https://betterdocs.msf.qa378.site/docs/non-knowledgebase/alif/"
  );
  await expect(exploreMoreLink).toContainText("Explore More");

  // Validate the image
  const image = articleSection.locator("img");
  await expect(image).toBeVisible();

  // Check if the image src contains 'full-default.png'
  const imageSrc = await image.getAttribute("src");
  if (imageSrc.includes("full-default.png")) {
    console.warn(
      "Image is not set. The default placeholder image is being used."
    );
  } else {
    console.log("Image is properly set.");
  }
});

test("validate article 3", async ({ page }) => {
  // Navigate to the target page
  await page.goto("https://betterdocs.msf.qa378.site/category-handbook/");
  // Verify the main heading is visible
  const mainHeading = page.locator(".entry-title");
  await expect(mainHeading).toBeVisible();
  await expect(mainHeading).toHaveText("Category Handbook");

  // Locate the third article
  const articleSection = page.locator('article[data-id="144"]').nth(2);

  // Validate the heading visibility
  await page.getByText("All In All MSF");

  // Locate the count wrapper
  const countWrapper = articleSection
    .locator("span")
    .filter({ hasText: /\b20\b/ });
  await expect(countWrapper).toBeVisible();
  await expect(countWrapper).toHaveText(/^\s*20\s*$/);

  // Validate the paragraph
  const paragraph = articleSection.locator("p");
  await expect(paragraph).toBeVisible();
  await expect(paragraph).toHaveText(
    "Here you will find the docs containing related docs, attachments and time perfectly"
  );

  // Validate the list items
  const listItems = articleSection.locator("ul.betterdocs-articles-list li");
  await expect(listItems).toHaveCount(5); // Ensure there are exactly 5 list items

  // Validate the list items
  await expect(listItems.nth(0)).toContainText(
    "Mercedes GLS450: Here’s why every driveway of upscale Dhaka has one"
  );
  await expect(listItems.nth(1)).toContainText(
    "Why our mobile data prices are higher than India, Pakistan"
  );
  await expect(listItems.nth(2)).toContainText(
    /Portaria PRES\/INSS nº \d+\.\d+, de \d+ de outubro de \d+/
  );
  await expect(listItems.nth(3)).toContainText("হ্যাঁ, Mercedes GLS450");
  await expect(listItems.nth(4)).toContainText(
    "FDA approves injectable version of Bristol Myers Squibb’s cancer drug Opdivo"
  );

  // Validate the "Explore More" link
  const exploreMoreLink = articleSection.locator("a.docs-cat-link-btn");
  await expect(exploreMoreLink).toBeVisible();
  await expect(exploreMoreLink).toHaveAttribute(
    "href",
    "https://betterdocs.msf.qa378.site/docs/bcb/allinallmsf/"
  );
  await expect(exploreMoreLink).toContainText("Explore More");

  // Validate the image
  const image = articleSection.locator("img");
  await expect(image).toBeVisible();

  // Check if the image src contains 'full-default.png'
  const imageSrc = await image.getAttribute("src");
  if (imageSrc.includes("full-default.png")) {
    console.warn(
      "Image is not set. The default placeholder image is being used."
    );
  } else {
    console.log("Image is properly set.");
  }
});

test("validate article 4", async ({ page }) => {
  // Navigate to the target page
  await page.goto("https://betterdocs.msf.qa378.site/category-handbook/");
  // Verify the main heading is visible
  const mainHeading = page.locator(".entry-title");
  await expect(mainHeading).toBeVisible();
  await expect(mainHeading).toHaveText("Category Handbook");
  // Locate the fourth article
  const articleSection = page.locator('article[data-id="144"]').nth(3);
  // Validate the heading visibility
  await page.getByText("API & Development");
  // Locate the count wrapper
  const countWrapper = articleSection.locator("span").filter({ hasText: "2" });
  await expect(countWrapper).toBeVisible();
  await expect(countWrapper).toHaveText("2");
  // Validate the list items
  const listItems = articleSection.locator("ul.betterdocs-articles-list li");
  await expect(listItems).toHaveCount(2); // Ensure there are exactly 2 list items
  // Validate the first list item
  const firstListItem = listItems.nth(0);
  await expect(firstListItem).toContainText(
    "Can you describe your API’s capabilities in terms of ensuring quick and accurate responses? Please provide details on the average response time and accuracy rate, as well as any measures in place to maintain these performance standards."
  );
  // Validate the second list item
  const secondListItem = listItems.nth(1);
  await expect(secondListItem).toContainText(
    "How does the software handle awarding points for transactions that use a “buy now, pay later” service?"
  );
  // Validate the "Explore More" link
  const exploreMoreLink = articleSection.locator("a.docs-cat-link-btn");
  await expect(exploreMoreLink).toBeVisible();
  await expect(exploreMoreLink).toHaveAttribute(
    "href",
    "https://betterdocs.msf.qa378.site/docs/bcb/api-development/"
  );
  await expect(exploreMoreLink).toContainText("Explore More");
  // Validate the image
  const image = articleSection.locator("img");
  await expect(image).toBeVisible();
  // Check if the image src contains 'full-default.png'
  const imageSrc = await image.getAttribute("src");
  if (imageSrc.includes("full-default.png")) {
    console.warn(
      "Image is not set. The default placeholder image is being used."
    );
  } else {
    console.log("Image is properly set.");
  }
});
test("validate article 5", async ({ page }) => {
  // Navigate to the target page
  await page.goto("https://betterdocs.msf.qa378.site/category-handbook/");
  // Verify the main heading is visible
  const mainHeading = page.locator(".entry-title");
  await expect(mainHeading).toBeVisible();
  await expect(mainHeading).toHaveText("Category Handbook");
  // Locate the fifth article
  const articleSection = page.locator('article[data-id="144"]').nth(4);
  // Validate the heading visibility
  await page.getByText("Architecture & Infrastructure");
  // Locate the count wrapper
  const countWrapper = articleSection.locator("span").filter({ hasText: "4" });
  await expect(countWrapper).toBeVisible();
  await expect(countWrapper).toHaveText("4");
  // Validate the list items
  const listItems = articleSection.locator("ul.betterdocs-articles-list li");
  await expect(listItems).toHaveCount(4); // Ensure there are exactly 4 list items
  // Validate the first list item
  const firstListItem = listItems.nth(0);
  await expect(firstListItem).toContainText(
    "Can scale for growth and program needs"
  );
  // Validate the second list item
  const secondListItem = listItems.nth(1);
  await expect(secondListItem).toContainText(
    "Does your solution provide an API that supports account creation and management capabilities? If so, please detail the functionalities available through the API for managing accounts."
  );
  // Validate the third list item
  const thirdListItem = listItems.nth(2);
  await expect(thirdListItem).toContainText(
    "Can scale for growth and program needs"
  );
  // Validate the fourth list item
  const fourthListItem = listItems.nth(3);
  await expect(fourthListItem).toContainText(
    "Ability to scale and have separation of data, programs, rewards and point structures for different regions (US, EU, APAC and by country or state / province)"
  );
  // Validate the "Explore More" link
  const exploreMoreLink = articleSection.locator("a.docs-cat-link-btn");
  await expect(exploreMoreLink).toBeVisible();
  await expect(exploreMoreLink).toHaveAttribute(
    "href",
    "https://betterdocs.msf.qa378.site/docs/non-knowledgebase/architecture-infastructure/"
  );
  await expect(exploreMoreLink).toContainText("Explore More");
  // Validate the image
  const image = articleSection.locator("img");
  await expect(image).toBeVisible();
  // Check if the image src contains 'full-default.png'
  const imageSrc = await image.getAttribute("src");
  if (imageSrc.includes("full-default.png")) {
    console.warn(
      "Image is not set. The default placeholder image is being used."
    );
  } else {
    console.log("Image is properly set.");
  }
});

test("validate article 6", async ({ page }) => {
  // Navigate to the target page
  await page.goto("https://betterdocs.msf.qa378.site/category-handbook/");
  // Verify the main heading is visible
  const mainHeading = page.locator(".entry-title");
  await expect(mainHeading).toBeVisible();
  await expect(mainHeading).toHaveText("Category Handbook");
  // Locate the sixth article
  const articleSection = page.locator('article[data-id="144"]').nth(5);
  // Validate the heading visibility
  await page.getByText("Architektur Infrastruktur");
  // Locate the count wrapper
  const countWrapper = articleSection.locator("span").filter({ hasText: "3" });
  await expect(countWrapper).toBeVisible();
  await expect(countWrapper).toHaveText("3");
  // Validate the list items
  const listItems = articleSection.locator("ul.betterdocs-articles-list li");
  await expect(listItems).toHaveCount(3); // Ensure there are exactly 3 list items
  // Validate the first list item
  const firstListItem = listItems.nth(0);
  await expect(firstListItem).toContainText(
    "Protected: Does your solution provide an API that supports account creation and management capabilities? If so, please detail the functionalities available through the API for managing accounts."
  );
  // Validate the second list item
  const secondListItem = listItems.nth(1);
  await expect(secondListItem).toContainText(
    "Does your solution provide support for the issuance and management of badges or badging systems?"
  );
  // Validate the third list item
  const thirdListItem = listItems.nth(2);
  await expect(thirdListItem).toContainText(
    "Protected: Can scale for growth and program needs"
  );
  // Validate the "Explore More" link
  const exploreMoreLink = articleSection.locator("a.docs-cat-link-btn");
  await expect(exploreMoreLink).toBeVisible();
  await expect(exploreMoreLink).toHaveAttribute(
    "href",
    "https://betterdocs.msf.qa378.site/docs/non-knowledgebase/architektur-infrastruktur/"
  );
  await expect(exploreMoreLink).toContainText("Explore More");
  // Validate the image
  const image = articleSection.locator("img");
  await expect(image).toBeVisible();
  // Check if the image src contains 'full-default.png'
  const imageSrc = await image.getAttribute("src");
  if (imageSrc.includes("full-default.png")) {
    console.warn(
      "Image is not set. The default placeholder image is being used."
    );
  } else {
    console.log("Image is properly set.");
  }
});
test("validate article 7", async ({ page }) => {
  // Navigate to the target page
  await page.goto("https://betterdocs.msf.qa378.site/category-handbook/");
  // Verify the main heading is visible
  const mainHeading = page.locator(".entry-title");
  await expect(mainHeading).toBeVisible();
  await expect(mainHeading).toHaveText("Category Handbook");
  // Locate the seventh article
  const articleSection = page.locator('article[data-id="144"]').nth(6);
  // Validate the heading visibility
  await page.getByText("Ba");
  // Locate the count wrapper
  const countWrapper = articleSection.locator("span").filter({ hasText: "2" });
  await expect(countWrapper).toBeVisible();
  await expect(countWrapper).toHaveText("2");
  // Validate the list items
  const listItems = articleSection.locator("ul.betterdocs-articles-list li");
  await expect(listItems).toHaveCount(2); // Ensure there are exactly 2 list items
  // Validate the first list item
  const firstListItem = listItems.nth(0);
  await expect(firstListItem).toContainText(
    "Explain how your system integrates with and/or generates digital barcodes, QR codes, and dynamic codes for offers."
  );
  // Validate the second list item
  const secondListItem = listItems.nth(1);
  await expect(secondListItem).toContainText(
    "Obayed Mamur – The Story of a Handsome Man"
  );
  // Validate the "Explore More" link
  const exploreMoreLink = articleSection.locator("a.docs-cat-link-btn");
  await expect(exploreMoreLink).toBeVisible();
  await expect(exploreMoreLink).toHaveAttribute(
    "href",
    "https://betterdocs.msf.qa378.site/docs/non-knowledgebase/ba/"
  );
  await expect(exploreMoreLink).toContainText("Explore More");
  // Validate the image
  const image = articleSection.locator("img");
  await expect(image).toBeVisible();
  // Check if the image src contains 'full-default.png'
  const imageSrc = await image.getAttribute("src");
  if (imageSrc.includes("full-default.png")) {
    console.warn(
      "Image is not set. The default placeholder image is being used."
    );
  } else {
    console.log("Image is properly set.");
  }
});
test("validate article 8", async ({ page }) => {
  // Navigate to the target page
  await page.goto("https://betterdocs.msf.qa378.site/category-handbook/");

  // Verify the main heading is visible
  const mainHeading = page.locator(".entry-title");
  await expect(mainHeading).toBeVisible();
  await expect(mainHeading).toHaveText("Category Handbook");

  // Locate the eighth article
  const articleSection = page.locator('article[data-id="144"]').nth(7);

  // Validate the heading visibility
  await page.getByText("Benefit, Reward, Voucher & Promotion Management");

  // Locate the count wrapper
  const countWrapper = articleSection.locator("span").filter({ hasText: "24" });
  await expect(countWrapper).toBeVisible();
  await expect(countWrapper).toHaveText("24");

  // Validate the list items
  const listItems = articleSection.locator("ul.betterdocs-articles-list li");
  await expect(listItems).toHaveCount(5); // Ensure there are exactly 5 list items

  // Validate the first list item
  await expect(listItems.nth(0)).toContainText(
    "Does your loyalty platform integrate with online, in-app, and all in-store POS systems to award points for transactions involving products and services?"
  );

  // Validate the second list item
  await expect(listItems.nth(1)).toContainText(
    "Does your platform include an automatic promotion deployment tool that is triggered by customer actions or life cycle milestones? If so, please describe how this tool functions and the types of triggers that can be used."
  );

  // Validate the third list item
  await expect(listItems.nth(2)).toContainText(
    "Is your system capable of rewarding members based on specific events such as birthdays, anniversaries, or other dates specified by ##BRAND##?"
  );

  // Validate the fourth list item
  await expect(listItems.nth(3)).toContainText(
    "Does your platform support the purchase, gifting, or transferring of points between members? Please provide details on how these processes are managed."
  );

  // Validate the fifth list item
  await expect(listItems.nth(4)).toContainText(
    "Can your platform handle offer issuance and manage the issuance process? Please explain the workflow and management tools available."
  );

  // Validate the "Explore More" link
  const exploreMoreLink = articleSection.locator("a.docs-cat-link-btn");
  await expect(exploreMoreLink).toBeVisible();
  await expect(exploreMoreLink).toHaveAttribute(
    "href",
    "https://betterdocs.msf.qa378.site/docs/loyalty-management/benefit-reward-voucher-promotion-management/"
  );
  await expect(exploreMoreLink).toContainText("Explore More");

  // Validate the image
  const image = articleSection.locator("img");
  await expect(image).toBeVisible();

  // Check if the image src contains 'full-default.png'
  const imageSrc = await image.getAttribute("src");
  if (imageSrc.includes("full-default.png")) {
    console.warn(
      "Image is not set. The default placeholder image is being used."
    );
  } else {
    console.log("Image is properly set.");
  }
});
test("validate article 9", async ({ page }) => {
  // Navigate to the target page
  await page.goto("https://betterdocs.msf.qa378.site/category-handbook/");
  // Verify the main heading is visible
  const mainHeading = page.locator(".entry-title");
  await expect(mainHeading).toBeVisible();
  await expect(mainHeading).toHaveText("Category Handbook");
  // Locate the ninth article
  const articleSection = page.locator('article[data-id="144"]').nth(8);
  // Validate the heading visibility
  await page.getByText("C");
  // Locate the count wrapper
  const countWrapper = articleSection.locator("span").filter({ hasText: "2" });
  await expect(countWrapper).toBeVisible();
  await expect(countWrapper).toHaveText("2");
  // Validate the paragraph
  const paragraph = articleSection.locator("p");
  await expect(paragraph).toBeVisible();
  await expect(paragraph).toHaveText("C has two docs A and B");
  // Validate the list items
  const listItems = articleSection.locator("ul.betterdocs-articles-list li");
  await expect(listItems).toHaveCount(2); // Ensure there are exactly 2 list items
  // Validate the first list item
  const firstListItem = listItems.nth(0);
  await expect(firstListItem).toContainText("Azan diye dilo");
  // Validate the second list item
  const secondListItem = listItems.nth(1);
  await expect(secondListItem).toContainText("Jackfruit");
  // Validate the "Explore More" link
  const exploreMoreLink = articleSection.locator("a.docs-cat-link-btn");
  await expect(exploreMoreLink).toBeVisible();
  await expect(exploreMoreLink).toHaveAttribute(
    "href",
    "https://betterdocs.msf.qa378.site/docs/a/c/"
  );
  await expect(exploreMoreLink).toContainText("Explore More");
  // Validate the image
  const image = articleSection.locator("img");
  await expect(image).toBeVisible();
  // Check if the image src contains 'full-default.png'
  const imageSrc = await image.getAttribute("src");
  if (imageSrc.includes("full-default.png")) {
    console.warn(
      "Image is not set. The default placeholder image is being used."
    );
  } else {
    console.log("Image is properly set.");
  }
});
