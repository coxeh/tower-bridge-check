// @ts-check
const { test, expect } = require('@playwright/test');

test('has changed', async ({ page }) => {
  await page.goto('https://www.towerbridge.org.uk/events/behind-scenes-tour');

  await page.waitForSelector('#footer-bottom-outer-wrapper');
  await page.waitForTimeout(5000);

  const cookieCount = await page.locator('#CybotCookiebotDialogBodyButtonAccept').count()
  if(cookieCount === 1){
    await page.locator('#CybotCookiebotDialogBodyButtonAccept').click()
    await page.waitForTimeout(5000);
  }

  await expect(page).toHaveScreenshot({ maxDiffPixels: 100, fullPage: true });

});