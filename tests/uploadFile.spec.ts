    import { test, expect} from '@playwright/test';
import { TIMEOUT } from 'dns';
    const path=require('path');
    

    test.describe('Upload a file', () => {
    test('Upload a file and verify', async ({ page }) => {
    //open url
    await page.goto('https://practice.sdetunicorns.com/cart/')
    //store test file path
    const filePath = path.join(__dirname,'../data/playwright.png');
    //const filepath = path.join(__dirname, '../data1/playwright.png');
    //upload test file
    await page.setInputFiles('input#upfile_1',filePath)
    //submit button
    await page.locator('#upload_1').click();
    //hardcoded sleep
    // await page.waitForTimeout(10000);
    //conditional wait
    // await page.locator('#wfu_messageblock_header_1_1').waitFor({state:"visible",timeout:10000})

    //assertion timeout
    await expect (page.locator('#wfu_messageblock_header_1_1')).toContainText('uploaded successfully',{timeout:10000})
    //assertion
    // await expect (page.locator('#wfu_messageblock_header_1_1')).toContainText('uploaded successfully')
    })

    })
