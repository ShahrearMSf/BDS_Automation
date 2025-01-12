import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.betterdocs.co/docs/do-you-have-any-refund-or-return-policies/');
  await expect(page.locator('#page')).toMatchAriaSnapshot(`
    - complementary:
      - article:
        - heading "Getting Started" [level=2]
        - text: "6"
      - article:
        - heading "Configurations" [level=2]
        - text: "6"
      - article:
        - heading "Installation" [level=2]
        - text: "6"
        - list:
          - listitem:
            - text: 
            - link "How To Get Free Trial For Our Products?"
          - listitem:
            - text: 
            - link "Do You Accept PayPal Payments"
          - listitem:
            - text: 
            - link "Do You Have Any Refund Or Return Policies?"
          - listitem:
            - text: 
            - link "How To Customize Your Preferences?"
          - listitem:
            - text: 
            - link "How To Purchase Our Subscription?"
          - listitem:
            - text: 
            - link "How To Sign Up For Updates?"
      - article:
        - heading "Setup Process" [level=2]
        - text: "6"
      - article:
        - heading "Subscription" [level=2]
        - text: "6"
      - article:
        - heading "Payment Process" [level=2]
        - text: "6"
      - article:
        - heading "Integrations" [level=2]
        - text: "6"
      - article:
        - heading "FAQ" [level=2]
        - text: "6"
      - article:
        - img "betterdocs-category-icon"
        - heading "Troubleshooting" [level=2]
        - text: "4"
      - article:
        - img "betterdocs-category-icon"
        - heading "Release Notes" [level=2]
        - text: "4"
      - article:
        - img "betterdocs-category-icon"
        - heading "Use Cases" [level=2]
        - text: "4"
      - article:
        - img "betterdocs-category-icon"
        - heading "Community & Support" [level=2]
        - text: "4"
    `);
  await expect(page.locator('#page')).toMatchAriaSnapshot(`
    - navigation:
      - list:
        - listitem:
          - link "Home"
        - listitem
        - listitem:
          - link "Docs"
        - listitem
        - listitem:
          - link "Installation"
        - listitem
        - listitem: Do You Have Any Refund Or Return Policies?
    - heading "Do You Have Any Refund Or Return Policies?" [level=1]
    - text: /Yes, we provide \\d+% refund on any purchase within \\d+ days, no questions asked\\. If you wish to request a refund, follow these steps\\./
    - 'heading "Step 1: Log In To Your Account" [level=3]'
    - text: To get started you need to log in to your account on our official website.
    - 'heading "Step 2: Click On ‘Purchase History’ Tab" [level=3]'
    - text: Next you have to click on the ‘Purchase History’ tab from your Account dashboard.
    - 'heading "Step 3: Select ‘Request For Refund’ Option" [level=3]'
    - text: /You will find a ‘Request for Refund’ option next to any transactions made within the previous \\d+ days\\. Click on the button to request a refund\\. If more than \\d+ days have passed since your purchase, this option will not be available\\. If you face any problems contact our \\d+\\/7 support team for assistance\\./
    `);
  await expect(page.locator('#page')).toMatchAriaSnapshot(`
    - heading "Is this article helpful? What are your Feelings" [level=5]
    - list:
      - listitem:
        - link:
          - img
      - listitem:
        - link:
          - img
      - listitem:
        - link:
          - img
    `);
  await expect(page.locator('#page')).toMatchAriaSnapshot(`
    - heading "Share This Article :" [level=5]
    - list:
      - listitem:
        - link "Facebook":
          - img "Facebook"
      - listitem:
        - link "X":
          - img "X"
      - listitem:
        - link "LinkedIn":
          - img "LinkedIn"
      - listitem:
        - link "Pinterest":
          - img "Pinterest"
    `);
  await expect(page.locator('#page')).toMatchAriaSnapshot(`
    - text: On This Page
    - list:
      - listitem:
        - 'link "Step 1: Log In To Your Account"'
      - listitem:
        - 'link "Step 2: Click On ‘Purchase History’ Tab"'
      - listitem:
        - 'link "Step 3: Select ‘Request For Refund’ Option"'
    `);
});