import LoginPage from '../pageobjects/login.page.js'
import RegisterPage from '../pageobjects/register.page.js'
import AccountPage from '../pageobjects/account.page.js'

describe('Test Case 5: Cadastrar usuário com e-mail existente', () => {

    it('deve exibir erro ao tentar cadastrar com e-mail já existente', async () => {

        const email = `victor_${Date.now()}@teste.com`
        const name = 'Victor Teste'

        await LoginPage.open()
        await LoginPage.signup(name, email)
        await RegisterPage.fillAccountInfo({
            title: 'Mr',
            password: 'Senha@123',
            day: '10',
            month: 'May',
            year: '1995',
        })
        await RegisterPage.checkSubscriptions()
        await RegisterPage.fillAddressInfo({
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
        })
        await RegisterPage.submitRegistration()
        await AccountPage.continueAfterCreation()
        await AccountPage.logout()

        await LoginPage.open()
        await LoginPage.signup(name, email)

        await expect($('.signup-form p')).toBeDisplayed()
        await expect($('.signup-form p')).toHaveText('Email Address already exist!')
    })
})