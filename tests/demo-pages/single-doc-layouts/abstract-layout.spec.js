import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.betterdocs.co/docs/how-to-purchase-our-subscription/');
  await expect(page.locator('#page')).toMatchAriaSnapshot(`
    - complementary:
      - article:
        - heading "Getting Started" [level=2]
      - article:
        - heading "Configurations" [level=2]
      - article:
        - heading "Installation" [level=2]
      - article:
        - heading "Setup Process" [level=2]
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
        - heading "Subscription" [level=2]
      - article:
        - heading "Payment Process" [level=2]
      - article:
        - heading "Integrations" [level=2]
      - article:
        - heading "FAQ" [level=2]
      - article:
        - heading "Troubleshooting" [level=2]
      - article:
        - heading "Release Notes" [level=2]
      - article:
        - heading "Use Cases" [level=2]
      - article:
        - heading "Community & Support" [level=2]
    `);
  await page.getByText('Home Docs Setup Process How').click();
  await page.getByRole('heading', { name: 'How To Purchase Our' }).click();
  await page.getByText('To purchase any of our').click();
  await page.getByRole('heading', { name: 'Step 1: Click On The ‘' }).click();
  await page.getByText('To get started you need to').click();
  await page.getByRole('heading', { name: 'Step 2: Enter Billing Details' }).click();
  await page.getByText('Next you have to enter your').click();
  await page.getByRole('heading', { name: 'Step 3: Select A Payment' }).click();
  await page.locator('#betterdocs-single-content section div').filter({ hasText: 'Finally select your preferred' }).nth(3).click();
  await page.getByText('If you face any problems').click();
  await page.locator('div:nth-child(4) > .elementor-widget-container > div').click();
  await page.getByText('On This Page Step 1: Click On').click();
  await page.getByRole('heading', { name: 'Share This Article :' }).click();
  await page.locator('div:nth-child(5) > .elementor-widget-container > .betterdocs-elementor').click();
});