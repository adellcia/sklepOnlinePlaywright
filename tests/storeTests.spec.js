const { test, expect } = require('@playwright/test');
const { PageObjectsManager } = require('../pageobjects/pageObjectsManager')
const { goingToPage } = require('../pageobjects/Navigation');
const { OrderFormValidation } = require('../pageobjects/orderForm');


test.describe('1 test', () => {
   
    test('Happy shopping', async ({ page }) => {
    
    const pageObjectsManager = new PageObjectsManager(page)

    await pageObjectsManager.goToPage.mainPage()
    await pageObjectsManager.addShoesAndTshirt()
    await pageObjectsManager.searchForCosmetics()
    await pageObjectsManager.checkoutAndFormFilling()
    
})

   test('Order form validation', async ({ page }) => {

    const pageObjectsManager = new PageObjectsManager(page)
    const orderForm = new OrderFormValidation(page)
    const helpBlock = page.locator('.help-block:visible')
    await pageObjectsManager.goToPage.mainPage()
    await pageObjectsManager.searchForCosmetics()

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
        await pageObjectsManager.searchForCosmetics()

        const formValidationMethods = [
            orderForm.less3Validation,
            orderForm.more128Validation,
            orderForm.zipValidation,
        ]
        console.log(formValidationMethods)
    for (const formValidationMethod of formValidationMethods) {
        await formValidationMethod.call(orderForm)
        await expect(helpBlock).toBeVisible()
        await orderForm.clearingForm()
    }
        
})

}) 


