const { expect } = require('@playwright/test');

class goingToPage {

    constructor(page) {
        this.page = page
    }
    async mainPage() {
        await this.page.goto('https://automationteststore.com/')
}
    async cartPage() {
        await this.page.goto('https://automationteststore.com/index.php?rt=checkout/cart')
    }

}
module.exports = { goingToPage }