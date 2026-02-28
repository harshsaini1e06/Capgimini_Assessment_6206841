import {test} from '@playwright/test';
test('Validating xpath flipkart',async({page})=>{
  await page.goto('https://www.flipkart.com/');
  await page.locator('(//input[@class="nw1UBF v1zwn25" ])[1]').fill('phones');
  await page.locator('(//button[@class="XFwMiH"])[1]').click();
  await page.locator('(//text()[.="Apple"])[1]').click();
  let  thirdItem=page.locator('(//div[@class="hZ3P6w DeU9vF"])[3]');
  console.log(`Third item name: ${thirdItem.textContent()}`);

  await page.screenshot({path:"./screenshots/userlogin.png"})
})