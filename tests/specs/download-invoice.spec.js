import LoginPage from '../pageobjects/login.page.js'
import RegisterPage from '../pageobjects/register.page.js'
import AccountPage from '../pageobjects/account.page.js'
import CheckoutPage from '../pageobjects/checkout.page.js'

describe('Test Case 24: Baixar fatura após a ordem de compra', () => {

    it('deve realizar pedido, baixar fatura e deletar conta', async () => {

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

        await browser.url('https://automationexercise.com/products')
        await $('a[data-product-id="1"].add-to-cart').click()
        await $('button.btn-success.close-modal').click()

        await browser.url('https://automationexercise.com/view_cart')
        await expect(browser).toHaveUrl(expect.stringContaining('/view_cart'))

        await CheckoutPage.btnProceedToCheckout.click()
        await CheckoutPage.btnRegisterLogin.click()

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

        await browser.url('https://automationexercise.com/view_cart')
        await CheckoutPage.btnProceedToCheckout.click()

        await CheckoutPage.textareaComment.setValue('Pedido de teste automatizado')
        await CheckoutPage.btnPlaceOrder.click()

        await CheckoutPage.fillPayment({
            nameOnCard: 'Victor Teste',
            cardNumber: '4111111111111111',
            cvc: '123',
            expiryMonth: '12',
            expiryYear: '2027',
        })
        await CheckoutPage.btnPayAndConfirm.click()

        await expect(CheckoutPage.headingOrderPlaced).toBeDisplayed()

        await expect($('a.btn.check_out')).toBeDisplayed()
        await $('a.btn.check_out').click()

        await $('[data-qa="continue-button"]').click()

        await AccountPage.deleteAccount()
        await expect(AccountPage.headingAccountDeleted).toBeDisplayed()
    })
})