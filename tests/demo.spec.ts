import { test, expect } from '@playwright/test';
import exp from 'constants';
test.describe('DemoHome', () => {
    test('Open homepage and verify title', async ({ page }) => {
       //open url
       await page.goto('https://practice.sdetunicorns.com/') ;

       //verify title
       await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns')
    })
    test('Open about page & verify title', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/about/');
        await expect(page).toHaveTitle('About – Practice E-Commerce Site');
    })
    test('click on get started option and verify title', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/');
        await page.locator('#get-started').click();
        await expect(page).toHaveURL(/.*#get-started/);
    })
    test('Verify the heading text is visible using text selector', async ({ page }) => {
        //open url
        await page.goto('https://practice.sdetunicorns.com/');
        //find text locator
        const headingText= page.locator('text=Think different. Make different.');
        //verify heading text is visible
        await expect(headingText).toBeVisible();

    })

    test('Verify home button is enable using text and css selector', async ({ page }) => {
        //open url
        await page.goto('https://practice.sdetunicorns.com/');
        //find text locator
        const homeText= page.locator('zak-primary-menu:has-text("Home")');
        //verify home text is enabled
        //await expect(homeText).toBeEnabled();
    })

    test('Verify search icon is visible using xpath', async ({ page }) => {
        //open url
        await page.goto('https://practice.sdetunicorns.com/');

        //find search Icon
        const searchIcon= page.locator('//*[@class="zak-header-actions zak-header-actions--desktop"]//*[@class="zak-header-search__toggle"]');

        //verify search Icon is visible
        await expect(searchIcon).toBeVisible();
    })

    test('Verify text for all navigation link', async ({ page }) => {
        const expectedLinks=[
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"];
        //open url
        await page.goto('https://practice.sdetunicorns.com/');

        //find search navigation links
        const navigationLinks= page.locator('#zak-primary-menu li[id*=item]').nth(4);

        //verify navigation links text
        expect(await navigationLinks.textContent()).toEqual(expectedLinks[4]);
    })

    test('print navigation links text on console', async ({ page }) => {
        const expectedLinks=[
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"];
        //open url
        await page.goto('https://practice.sdetunicorns.com/');

        //find search navigation links
        const navigationLinks= page.locator('#zak-primary-menu li[id*=item]');

        //print navigation links
        for(const element of await navigationLinks.elementHandles()){
            console.log(await element.textContent())  }
        })

    test('fillup contact us and verify', async ({ page }) => {
        //open url
        await page.goto('https://www.demoblaze.com/');
        //click on contact
        await page.locator('xpath=//*[@id="navbarExample"]/ul/li[2]/a').click();
        //fill form
        await page.locator('id=recipient-email').fill('Test@yahoo.com');
        await page.locator('id=recipient-name').fill('Test Name');
        await page.locator('id=message-text').fill('Test Message')
        //click send message
        await page.getByText('Send message').click()

})

test('fill contact us and verify', async ({ page }) => {
    //open url
    await page.goto('https://practice.sdetunicorns.com/');
   //click on contact
   await page.locator('xpath=//*[@id="menu-item-493"]/a').click();
   //fill form
   await page.locator('xpath=//*[@id="evf-277-field_ys0GeZISRs-1"]').fill('Test Name');
   await page.locator('xpath=//*[@id="evf-277-field_LbH5NxasXM-2"]').fill('Testmail@yahoo.com');
   await page.locator('xpath=//*[@id="evf-277-field_66FR384cge-3"]').fill('1234567890');
   await page.locator('xpath=//*[@id="evf-277-field_yhGx3FOwr2-4"]').fill('Test Message');
   
   //    //click submit button
   await page.locator('#evf-submit-277').click();
   //verify success message
   const successMessage= page.locator('div[role="alert"]')
   await expect(successMessage).toHaveText('Thanks for contacting us! We will be in touch with you shortly')
   await expect.soft(page.locator('div[role="alert"]')).toHaveText('Thanks for contacting us! We will be in touch with you shortly')
})

})