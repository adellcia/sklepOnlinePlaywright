const { goingToPage } = require('./Navigation')

const FN = ('Brad')
const LN = ('Pitt')
const EMAIL = ('brad.pitt@wp.pl')
const ADRESS = ('Lipowa')
const CITY = ('Bialystok')
const ZIP = ('15-111') 

//const COUNTRY = ('Poland')
//const STATE = ('[value="3513"]')

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

async validationLoop() {
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
    await this.firstNameField.clear()
    await this.continueButton.click()
    }  
    
    async clickSubmitButton() {
        const submitButton = page.locator('[title="Continue"]')
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

    async emailValidation() {
    await this.checkoutButton.click()
    await this.guestRadioButton.click()
    await this.continueButton.click()
    await this.firstNameField.type(FN)
    await this.lastNameField.type(LN)
    await this.emailField.type('brad.pitt.email.com')
    await this.adressField.type(ADRESS)
    await this.cityField.type(CITY)
    await this.countryField.selectText('United Kingdom')
    await this.regionStateField.selectOption('3513')
    await this.zipField.type(ZIP)
    await this.continueButton.click()
    }  

    async less3Validation() {
        await this.checkoutButton.click()
        await this.guestRadioButton.click()
        await this.continueButton.click()
        await this.firstNameField.type('BR')
        await this.lastNameField.type(LN)
        await this.emailField.type(EMAIL)
        await this.adressField.type(ADRESS)
        await this.cityField.type(CITY)
        await this.countryField.selectText('United Kingdom')
        await this.regionStateField.selectOption('3513')
        await this.zipField.type(ZIP)
        await this.continueButton.click()
        }  
    async more128Validation() {
        await this.firstNameField.type('Meditation gentrify fam, yuccie kickstarter brunch vape. Pitchfork freegan biodiesel bicycle rights. Semiotics flexitarian four Frugo.')
        await this.lastNameField.type(LN)    
        await this.emailField.type(EMAIL)
        await this.adressField.type(ADRESS)
        await this.cityField.type(CITY)
        await this.countryField.selectText('United Kingdom')
        await this.regionStateField.selectOption('3513')
        await this.zipField.type(ZIP)
        await this.continueButton.click()
        } 
    async zipValidation() {
        await this.firstNameField.type(FN)
        await this.lastNameField.type(LN)
        await this.emailField.type(EMAIL)
        await this.adressField.type(ADRESS)
        await this.cityField.type(CITY)
        await this.countryField.selectText('United Kingdom')
        await this.regionStateField.selectOption('3513')
        await this.zipField.type('0')
        await this.continueButton.click()
        } 
    
}

module.exports = { OrderFormValidation };