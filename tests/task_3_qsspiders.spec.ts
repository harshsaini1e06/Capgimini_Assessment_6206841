import {test} from "@playwright/test";

test("task1", async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.locator("//input[@id='name']").fill("Harsh")
    await page.locator("//input[@id='email']").fill("harshsaini@gmail.com")
    await page.locator("//input[@id='password']").fill("Harsh@123")
    await page.locator("//button[@type='submit']").click()
    await page.locator("//input[@id='email']").fill("harshsaini@gmail.com")
    await page.locator("//input[@id='password']").fill("Harsh@123")
    await page.locator("//button[@type='submit']").click()

    await page.screenshot({path:"./screenshots/userlogin.png"})
})