const { goingToPage } = require('./Navigation')
const { expect } = require('@playwright/test');

class PageObjectsManager {
    constructor(page) {
        this.page = page
        this.goToPage = new goingToPage(this.page)
        this.aaTabButton = page.locator('[href="https://automationteststore.com/index.php?rt=product/category&path=68"]')
        this.shoesButton = page.locator('[class="col-md-2 col-sm-2 col-xs-6 align_center"]').first()
        this.sandalsButton = page.locator('[title="Womens high heel point toe stiletto sandals ankle strap court shoes"]')
        this.addToCartButton = page.locator('[class="cart"]')
        this.TshirtButton = page.locator('[class="col-md-2 col-sm-2 col-xs-6 align_center"]').nth(1)
        this.elegantTshirt = page.locator('[title="Designer Men Casual Formal Double Cuffs Grandad Band Collar Shirt Elegant Tie"]')
        this.searchField = page.getByPlaceholder("Search Keywords")
        this.searchButton = page.locator('[class="button-in-search"]')
        this.checkoutButton = page.locator('[id="cart_checkout2"]')
        this.guestRadioButton = page.locator('[value="guest"]')
        this.continueButton = page.locator('[title="Continue"]')
        this.firstNameField = page.locator('[id="guestFrm_firstname"]')
        this.lastNameField = page.locator('[id="guestFrm_lastname"]')
        this.emailField =page.locator('[id="guestFrm_email"]')
        this.adressField = page.locator('[id="guestFrm_address_1"]')
        this.cityField = page.locator('[id="guestFrm_city"]')
        this.regionStateField = page.locator('[id="guestFrm_zone_id"]')
        this.zipField = page.locator('[id="guestFrm_postcode"]')
        this.countryField = page.locator('[id="guestFrm_country_id"]')
        this.confirmationButton = page.locator('[title="Confirm Order"]')
        this.thumbsUp = page.locator('[class="fa fa-thumbs-up"]') 
    }
async addShoesAndTshirt() {
   await this.aaTabButton.click()
   await this.shoesButton.click()
   await this.sandalsButton.click()
   await this.addToCartButton.click()
   await this.aaTabButton.click()
   await this.TshirtButton.click()
   await this.elegantTshirt.click()
   await this.addToCartButton.click()
}
async searchForCosmetics(product) {
    if (product) {await this.searchField.type(product)}
    await this.searchButton.click()
    await this.addToCartButton.click()
}
async checkoutAndFormFilling(fn, ln, email, adress, city, country, state, zip ) {
    await this.checkoutButton.click()
    await this.guestRadioButton.click()
    await this.continueButton.click()
    if (fn) {await this.firstNameField.type(fn)}
    if (ln) {await this.lastNameField.type(ln)}
    if (email) {await this.emailField.type(email)}
    if (adress) {await this.adressField.type(adress)}
    if (city) {await this.cityField.type(city)}
    if (country) {await this.countryField.selectText(country)}
    if (state) {await this.regionStateField.selectOption(state)}
    if (zip) {await this.zipField.type(zip)}
    await this.continueButton.click()
    await this.confirmationButton.click()
    await expect(this.thumbsUp).toBeVisible()
}

}


    module.exports = { PageObjectsManager };