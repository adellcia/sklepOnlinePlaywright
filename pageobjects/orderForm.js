const { goingToPage } = require('./Navigation')

class OrderFormValidation {
    constructor(page) {
        this.page = page
        this.goToPage = new goingToPage(this.page)
        this.addToCartButton = page.locator('[class="cart"]')
        this.searchField = page.getByPlaceholder("Search Keywords")
        this.searchButton = page.locator('[class="button-in-search"]')
        this.checkoutButton = page.locator('[id="cart_checkout2"]')
        this.checkoutButton2 = page.locator('[title="Checkout"]')
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
        this.submitButton = page.locator('[title="Continue"]')

        const helpBlock = page.locator('[class="help-block"]')
    }
async clearingForm() {
    await this.firstNameField.clear()
    await this.lastNameField.clear()
    await this.emailField.clear()
    await this.adressField.clear()
    await this.cityField.clear()
    await this.zipField.clear()
    }
    async valdationAssert() {
        await expect(helpblock).toBeVisible()
    }  
    async clickSubmitButton() {
        await submitButton.click()
      }
    async checkoutAndFormFilling(field, value) {
        await this.checkoutButton.click()
        await this.guestRadioButton.click()
        await this.continueButton.click()
        await this[field].type(value)
      }
    async clearField(field) {
        await this[field].click({ clickCount: 3 })
        await this[field].press('Backspace')
      }
    async emailValidation(fn, ln, email, adress, city, country, state, zip) {
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
    }  

    async less3Validation(fn, ln, email, adress, city, country, state, zip) {
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
        }  
    async more128Validation(fn, ln, email, adress, city, country, state, zip) {
        if (fn) {await this.firstNameField.type(fn)}
        if (ln) {await this.lastNameField.type(ln)}
        if (email) {await this.emailField.type(email)}
        if (adress) {await this.adressField.type(adress)}
        if (city) {await this.cityField.type(city)}
        if (country) {await this.countryField.selectText(country)}
        if (state) {await this.regionStateField.selectOption(state)}
        if (zip) {await this.zipField.type(zip)}
        await this.continueButton.click()
        } 
    async zipValidation(fn, ln, email, adress, city, country, state, zip) {
        if (fn) {await this.firstNameField.type(fn)}
        if (ln) {await this.lastNameField.type(ln)}
        if (email) {await this.emailField.type(email)}
        if (adress) {await this.adressField.type(adress)}
        if (city) {await this.cityField.type(city)}
        if (country) {await this.countryField.selectText(country)}
        if (state) {await this.regionStateField.selectOption(state)}
        if (zip) {await this.zipField.type(zip)}
        await this.continueButton.click()
        } 
    
}

module.exports = { OrderFormValidation };