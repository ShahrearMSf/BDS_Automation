import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto(`${process.env.BASE_URL_MSF}/category-grid-l2-2`);
    await expect(page.locator('#content')).toMatchAriaSnapshot(`
    - article:
      - text: "2"
      - heading "Alif" [level=2]
      - list:
        - listitem:
          - text: 
          - link "Ghum Pasce"
        - listitem:
          - text: 
          - link "This is life"
      - link "Explore More "
    - article:
      - text: /\\d+/
      - heading "All In All MSF" [level=2]
      - list:
        - listitem:
          - text: 
          - link "Living Expenses in Europe"
        - listitem:
          - text: 
          - link "Life of a QA Member"
        - listitem:
          - text: 
          - link "Life in Dhaka"
        - listitem:
          - text: 
          - link "Summer In Bangladesh"
        - listitem:
          - text: 
          - link "Importance of Playing Foosball In Office"
        - listitem:
          - text: 
          - link "Importance of 5 Times Salat"
      - link "Explore More "
    - article:
      - text: "2"
      - heading "API & Development" [level=2]
      - list:
        - listitem:
          - text: 
          - link "How does the software handle awarding points for transactions that use a “buy now, pay later” service?"
        - listitem:
          - text: 
          - link "Can you describe your API’s capabilities in terms of ensuring quick and accurate responses? Please provide details on the average response time and accuracy rate, as well as any measures in place to maintain these performance standards."
      - link "Explore More "
    - article:
      - text: "4"
      - heading "Architecture & Infastructure" [level=2]
      - list:
        - listitem:
          - text: 
          - link "Ability to scale and have separation of data, programs, rewards and point structures for different regions (US, EU, APAC and by country or state / province)"
        - listitem:
          - text: 
          - link "Does your solution provide an API that supports account creation and management capabilities? If so, please detail the functionalities available through the API for managing accounts."
        - listitem:
          - text: 
          - link "Can scale for growth and program needs"
        - listitem:
          - text: 
          - link "Can scale for growth and program needs"
      - link "Explore More "
    - article:
      - text: "2"
      - heading "Ba" [level=2]
      - list:
        - listitem:
          - text: 
          - link "Obayed Mamur – The Story of a Handsome Man"
        - listitem:
          - text: 
          - link "Explain how your system integrates with and/or generates digital barcodes, QR codes, and dynamic codes for offers."
      - link "Explore More "
    - article:
      - text: /\\d+/
      - heading "Benefit, Reward, Voucher & Promotion Management" [level=2]
      - list:
        - listitem:
          - text: 
          - link "Does your loyalty platform integrate with online, in-app, and all in-store POS systems to award points for transactions involving products and services?"
        - listitem:
          - text: 
          - link "Can your loyalty platform award and track offers or promotions for individual members based on specific criteria such as purchases, spend thresholds, enrollments, or interactions with certain products or actions?"
        - listitem:
          - text: 
          - link "How does your platform track and reward member progress within a loyalty program?"
        - listitem:
          - text: 
          - link "Can your platform handle offer issuance and manage the issuance process? Please explain the workflow and management tools available."
        - listitem:
          - text: 
          - link "How does your system manage multiple expiration dates for offers based on different member statuses?"
        - listitem:
          - text: 
          - link "Does your platform support the purchase, gifting, or transferring of points between members? Please provide details on how these processes are managed."
      - link "Explore More "
    - article:
      - text: "2"
      - heading "C" [level=2]
      - list:
        - listitem:
          - text: 
          - link "Jackfruit"
        - listitem:
          - text: 
          - link "Azan diye dilo"
      - link "Explore More "
    - article:
      - text: "2"
      - heading /Category December \\d+/ [level=2]
      - list:
        - listitem:
          - text: 
          - link "Traditional Wedding in Bd"
        - listitem:
          - text: 
          - 'link "Protected: বৃদ্ধি এবং প্রোগ্রামের প্রয়োজনের জন্য স্কেল করতে পারেন"'
      - link "Explore More "
    `);
  await page.goto('https://betterdocs.msf.qa378.site/category-grid-l2-2/');
  await expect(page.locator('#el-betterdocs-cat-grid-29fa742')).toMatchAriaSnapshot(`- text: /\\d+/`);
  await page.getByText('21').click();
  await page.getByRole('heading', { name: 'All In All MSF' }).click();
  await page.locator('#el-betterdocs-cat-grid-29fa742 div').filter({ hasText: 'Living Expenses in Europe' }).nth(2).click();
  await page.locator('article:nth-child(2) > .betterdocs-single-category-inner > .betterdocs-footer').click();
  await page.locator('li').filter({ hasText: 'Living Expenses in Europe' }).locator('i').click();
  await page.getByRole('link', { name: 'Living Expenses in Europe' }).click();
  await page.getByRole('heading', { name: 'Living Expenses in Europe' }).click();
  await page.goto(`${process.env.BASE_URL_MSF}/category-grid-l2-2/`);
  await page.locator('article:nth-child(2) > .betterdocs-single-category-inner > .betterdocs-footer > .docs-cat-link-btn').click();
  await page.locator('#main div').filter({ hasText: 'All In All MSF 17 docs' }).nth(1).click();
});