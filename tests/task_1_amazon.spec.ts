import { test } from '@playwright/test';

test('Fetch first shoe item name and price from Amazon', async ({ page }) => {
  await page.goto('https://www.amazon.in');
  await page.fill('#twotabsearchtextbox', 'shoes');
  await page.click('#nav-search-submit-button');
  await page.waitForSelector('//div[@data-component-type="s-search-result"]');
  const firstItemName = await page.locator('(//div[@data-component-type="s-search-result"]//h2//span)[1]').textContent();
  const firstItemPrice = await page.locator('(//div[@data-component-type="s-search-result"]//span[@class="a-price-whole"])[1]').textContent();

  console.log("First Item Name:", firstItemName);
  console.log("First Item Price:", firstItemPrice);

  await page.screenshot({path:"./screenshots/userlogin.png"})

});