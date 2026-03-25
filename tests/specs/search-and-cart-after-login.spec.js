import LoginPage from '../pageobjects/login.page.js'
import RegisterPage from '../pageobjects/register.page.js'
import AccountPage from '../pageobjects/account.page.js'

describe('Test Case 20: Pesquisar produtos e verificar carrinho após login', () => {

    it('deve pesquisar produtos, adicionar ao carrinho e verificar após login', async () => {

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
        await AccountPage.continueAfterCreation()
        await AccountPage.logout()

        await browser.url('https://automationexercise.com/products')

        await $('#search_product').setValue('Top')
        await $('#submit_search').click()

        await expect($('.features_items .title')).toHaveText(expect.stringContaining('SEARCHED PRODUCTS'))

        const addToCartButtons = await $$('.features_items a.add-to-cart')
        for (const btn of addToCartButtons) {
            await btn.scrollIntoView()
            await browser.execute((el) => el.click(), btn)
            await $('button.btn-success.close-modal').click()
        }

        await browser.url('https://automationexercise.com/view_cart')
        const cartItems = await $$('#cart_info_table tbody tr')
        await expect(cartItems.length).toBeGreaterThan(0)

        await LoginPage.open()
        await LoginPage.login(user.email, user.password)

        await browser.url('https://automationexercise.com/view_cart')
        const cartItemsAfterLogin = await $$('#cart_info_table tbody tr')
        await expect(cartItemsAfterLogin.length).toBeGreaterThan(0)

        await AccountPage.deleteAccount()
        await expect(AccountPage.headingAccountDeleted).toBeDisplayed()
    })
})