import { Page, Locator, chromium, firefox } from "@playwright/test";
class swaglabs {
page: Page;
    usernamefield: Locator;
    password: Locator;
    loginbtn: Locator;
    bagpackcart: Locator;
    cartbtn: Locator;
    checkoutbtn: Locator;
    firstnameInfo: Locator;
    lastNameInfo: Locator;
    zipCodeInfo: Locator;
    checkoutContinue: Locator;
    finishOverview: Locator;
    orderVerification: Locator;
    menubtn: Locator;
    logoutbtn: Locator;
    
    
constructor(page:Page){
    this.page=page;
    this.usernamefield=page.locator('#user-name');
    this.password=page.locator('#password');
    this.loginbtn=page.locator('#login-button');
    this.bagpackcart=page.locator('#add-to-cart-sauce-labs-backpack');
    this.cartbtn=page.locator('.shopping_cart_link');
    this.checkoutbtn=page.locator('#checkout');
    this.firstnameInfo=page.locator('#first-name');
    this.lastNameInfo=page.locator('#last-name');
    this.zipCodeInfo=page.locator('#postal-code');
    this.checkoutContinue=page.locator('#continue');
    this.finishOverview=page.locator('#finish');
    this.orderVerification=page.locator('.complete-header');
    this.menubtn=page.locator('#react-burger-menu-btn');
    this.logoutbtn=page.locator('#logout_sidebar_link');
    
}
async navigate(){
    await this.page.goto('https://www.saucedemo.com/');
}
}
export default swaglabs;