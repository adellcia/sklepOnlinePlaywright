const { test, expect } = require('@playwright/test');
const { PageObjectsManager } = require('../pageobjects/pageObjectsManager')
const { goingToPage } = require('../pageobjects/Navigation');
const { OrderFormValidation } = require('../pageobjects/orderForm');

const fn = ('Brad')
const ln = ('Pitt')
const email = ('brad.pitt@wp.pl')
const street = ('Lipowa')
const city = ('Bialystok')
const country = ('United Kingdom')
const state = ('3513')
const zip = ('15-111')
const product = ('lipstick')

test.describe('1 test', () => {
   
    test('Happy shopping', async ({ page }) => {
    
    const pageObjectsManager = new PageObjectsManager(page)

    await pageObjectsManager.goToPage.mainPage()
    await pageObjectsManager.addShoesAndTshirt()
    await pageObjectsManager.searchForCosmetics()
    await pageObjectsManager.checkoutAndFormFilling(fn, ln, email, street, city, country, state, zip) 
})

   test('Order form validation', async ({ page }) => {

    const pageObjectsManager = new PageObjectsManager(page)
    const orderForm = new OrderFormValidation(page)
    const helpBlock = page.locator('.help-block:visible')
    await pageObjectsManager.goToPage.mainPage()
    await pageObjectsManager.searchForCosmetics('lipstick')

    const formFields = [
        { field: 'firstNameField', value: 'Brad' },
        { field: 'lastNameField', value: 'Pitt' },
        { field: 'emailField', value: 'bard.pitt@wp.pl' },
        { field: 'adressField', value: 'Lipowa' },
        { field: 'cityField', value: 'Bialystok' },
        { field: 'countryField', value: 'United Kingdom' },
        { field: 'regionStateField', value: 'Aberdeen' },
        { field: 'zipField', value: '12345' },
      ]

    for (let i = 0; i < formFields.lenght; i++) {
        test(`Validating ${formFields[i].field}`, async () => {
        await orderForm.checkoutAndFormFilling(formFields[i].field, formFields[i].value)
        await orderForm.clickSubmitButton()
        await expect(helpBlock).toBeVisible()
        await orderForm.clearField(formFields[i].field)
    })
}
})

    test.only('Different form validations', async ({ page }) => {
        const pageObjectsManager = new PageObjectsManager(page)
        const orderForm = new OrderFormValidation(page)
        const helpBlock = page.locator('.help-block:visible')
        await pageObjectsManager.goToPage.mainPage()
        await pageObjectsManager.searchForCosmetics(product)

        const formValidationMethods = [
            orderForm.emailValidation(fn, ln, 'bard.pitt.email.com', street, city, country, state, zip),
            orderForm.less3Validation('BR', ln, email, street, city, country, state, '15-111'),
            orderForm.more128Validation('Meditation gentrify fam, yuccie kickstarter brunch vape. Pitchfork freegan biodiesel bicycle rights. Semiotics flexitarian four Frugo.', ln, email, street, city, country, state, zip),
            orderForm.zipValidation(fn, ln, email, street, city, country, state, '1'),
        ]
        console.log(formValidationMethods)
    for (const formValidationMethod of formValidationMethods) {
        await formValidationMethod.call(orderForm)
        await expect(helpBlock).toBeVisible()
        await orderForm.clearingForm()
    }
        
})

}) 


