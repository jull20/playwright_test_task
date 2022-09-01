import { test, expect} from '@playwright/test';



test ('Log In', async ({page}) =>{
  await page.goto('https://demoqa.com/books');
  await page.locator('#login').click();
  await page.locator('#userName').fill('HelWat');
  await page.locator('#password').fill('12HelWat12+@');
  await page.screenshot({ path: 'login.png', fullPage: true });
})

test ('Search bar', async ({page}) => {
  await page.goto('https://demoqa.com/books');
  await page.locator('#searchBox').type('ing j');
  await page.screenshot({ path: 'Search.png', fullPage: true });
})

test ('Drop-down list',async ({page}) => {
  await page.goto('https://demoqa.com/books');
  await page.locator('[aria-label="rows per page"]').selectOption('5');
  await page.screenshot({ path: 'drop-down.png', fullPage: true });
  await page.locator('.-next').click();
  await page.screenshot({ path: 'next_but.png', fullPage: true });
  await page.locator('.-previous').click();
  await page.screenshot({ path: 'previous_but.png', fullPage: true });
})

