    import { test, expect } from '@playwright/test';
    import exp from 'constants';
    import { describe } from 'node:test';

    test.describe('blog', () => {
    })
    test('verify recent posts count and verify the length of each list item', async ({ page }) => {
        //open url
        await page.goto('https://practice.sdetunicorns.com/blog/');
    //click on blog
    // await page.locator('xpath=//*[@id="menu-item-490"]/a').click();
    //go to recent post elements
    const recentPostList = page.locator('#recent-posts-3 ul li')
    
    //loop through list and assert the char length > 10
    for(const el of await recentPostList.elementHandles()){

        console.log((await el.textContent()));
        
        expect(((await el.textContent()).trim()).length).toBeGreaterThan(10);
    }


    // assert the total length = 5
    expect(await recentPostList.count()).toEqual(5)


    })

    //    await page.locator('xpath=//*[@id="evf-277-field_ys0GeZISRs-1"]').fill('Test Name');
    //    await page.locator('xpath=//*[@id="evf-277-field_LbH5NxasXM-2"]').fill('Testmail@yahoo.com');
    //    await page.locator('xpath=//*[@id="evf-277-field_66FR384cge-3"]').fill('1234567890');
    //    await page.locator('xpath=//*[@id="evf-277-field_yhGx3FOwr2-4"]').fill('Test Message');
    //    //    //click submit button
    //    await page.locator('#evf-submit-277').click();
    //    //verify success message
    //    const successMessage= page.locator('div[role="alert"]')
    //    await expect(successMessage).toHaveText('Thanks for contacting us! We will be in touch with you shortly')




