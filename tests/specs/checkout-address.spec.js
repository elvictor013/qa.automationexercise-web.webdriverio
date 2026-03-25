import LoginPage from '../pageobjects/login.page.js'
import RegisterPage from '../pageobjects/register.page.js'
import AccountPage from '../pageobjects/account.page.js'
import CheckoutPage from '../pageobjects/checkout.page.js'

describe('Test Case 23: Verificar endereço na página de checkout', () => {

    it('deve verificar se o endereço de entrega e cobrança correspondem ao cadastro', async () => {

        const user = {
            name: `victor_${Date.now()}`,
            email: `victor_${Date.now()}@teste.com`,
            password: 'Senha@123',
            title: 'Mr',
            day: '10',
            month: 'May',
            year: '1995',
            firstName: 'Victor',
            lastName: 'Teste',
            company: 'QA Corp',
            address1: 'Rua das Flores, 123',
            address2: 'Apto 45',
            country: 'India',
            state: 'Amapá',
            city: 'Macapá',
            zipcode: '68900000',
            mobileNumber: '96999999999',
        }

        await LoginPage.open()
        await LoginPage.signup(user.name, user.email)
        await RegisterPage.fillAccountInfo({
            title: user.title,
            password: user.password,
            day: user.day,
            month: user.month,
            year: user.year,
        })
        await RegisterPage.checkSubscriptions()
        await RegisterPage.fillAddressInfo({
            firstName: user.firstName,
            lastName: user.lastName,
            company: user.company,
            address1: user.address1,
            address2: user.address2,
            country: user.country,
            state: user.state,
            city: user.city,
            zipcode: user.zipcode,
            mobileNumber: user.mobileNumber,
        })
        await RegisterPage.submitRegistration()
        await expect(AccountPage.headingAccountCreated).toBeDisplayed()
        await AccountPage.continueAfterCreation()
        await expect(AccountPage.loggedInAs).toBeDisplayed()

        await browser.url('https://automationexercise.com/products')
        await $('a[data-product-id="1"].add-to-cart').click()
        await $('button.btn-success.close-modal').click()

        await browser.url('https://automationexercise.com/view_cart')
        await expect(browser).toHaveUrl(expect.stringContaining('/view_cart'))

        await CheckoutPage.btnProceedToCheckout.click()

        await expect($('#address_delivery .address_firstname')).toHaveText(expect.stringContaining(user.firstName))
        await expect($('#address_delivery .address_city')).toHaveText(expect.stringContaining(user.city))
        await expect($('#address_delivery .address_country_name')).toHaveText(expect.stringContaining(user.country))
        await expect($('#address_delivery .address_phone')).toHaveText(expect.stringContaining(user.mobileNumber))

        await expect($('#address_invoice .address_firstname')).toHaveText(expect.stringContaining(user.firstName))
        await expect($('#address_invoice .address_city')).toHaveText(expect.stringContaining(user.city))
        await expect($('#address_invoice .address_country_name')).toHaveText(expect.stringContaining(user.country))
        await expect($('#address_invoice .address_phone')).toHaveText(expect.stringContaining(user.mobileNumber))

        await AccountPage.deleteAccount()
        await expect(AccountPage.headingAccountDeleted).toBeDisplayed()
    })
})