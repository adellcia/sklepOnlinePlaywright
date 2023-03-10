const { goingToPage } = require('./Navigation')
const FN = ('Brad')
const LN = ('Pitt')
const EMAIL = ('brad.pitt@wp.pl')
const ADRESS = ('Lipowa')
const CITY = ('Bialystok')
const ZIP = ('15-111') 
//const COUNTRY = ('Poland')
//const STATE = ('[value="3513"]')

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
async searchForCosmetics() {
    await this.searchField.type('lipstick')
    await this.searchButton.click()
    await this.addToCartButton.click()

}
async checkoutAndFormFilling() {
    await this.checkoutButton.click()
    await this.guestRadioButton.click()
    await this.continueButton.click()
    await this.firstNameField.type(FN)
    await this.lastNameField.type(LN)
    await this.emailField.type(EMAIL)
    await this.adressField.type(ADRESS)
    await this.cityField.type(CITY)
    await this.countryField.selectText('United Kingdom')
    await this.regionStateField.selectOption('3513')
    await this.zipField.type(ZIP)
    await this.continueButton.click()
    await this.confirmationButton.click()
    const finalAssertion = page.locator('class="fa fa-thumbs-up"')
    await expect(finalAssertion).toBeVisible()
}

}


    module.exports = { PageObjectsManager };