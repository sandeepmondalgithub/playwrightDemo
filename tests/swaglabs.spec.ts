import { test, expect } from '@playwright/test';
import swaglabs from '../pages/swaglabs.page'
import { faker } from '@faker-js/faker';
test.describe('end to end swaglabs', () => {
    let swagLabs:swaglabs;
    test.beforeEach(async ({ page }) => {
        
        swagLabs=new swaglabs(page)

        //open url
        await swagLabs.navigate();
        //login to the website
    await swagLabs.usernamefield.fill('standard_user');
    await swagLabs.password.fill('secret_sauce');
    await swagLabs.loginbtn.click();

        
    })
    

    test('swaglabs end to end', async ({ page }) => {


        //add to cart an item
        await swagLabs.bagpackcart.click();

        //clcik cart button
        await swagLabs.cartbtn.click();

        //checkout product
        await swagLabs.checkoutbtn.click();

        //fill customer details
        await swagLabs.firstnameInfo.fill(faker.person.firstName());
        // await swagLabs.lastNameInfo.waitFor({state:"visible",timeout:10000});
        await swagLabs.lastNameInfo.fill(faker.person.lastName());
        // await swagLabs.zipCodeInfo.waitFor({state:"visible",timeout:10000});
        await swagLabs.zipCodeInfo.fill(faker.location.zipCode());
        await swagLabs.checkoutContinue.click();

        //check order overview
        await swagLabs.finishOverview.click();

        //verify after order product
        // const OrderVerfication= await swagLabs.orderVerification;
        expect(await swagLabs.orderVerification.textContent()).toEqual('Thank you for your order!')
        // await swagLabs.orderVerification.isVisible();
        // await swagLabs.orderVerification.toHaveText('Thank you for your order!');

        //go to menu and log out
        await swagLabs.menubtn.click();
        await swagLabs.logoutbtn.click();

       
        
    })
    
    
})
