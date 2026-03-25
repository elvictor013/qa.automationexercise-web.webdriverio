import LoginPage from '../pageobjects/login.page.js'
import RegisterPage from '../pageobjects/register.page.js'
import AccountPage from '../pageobjects/account.page.js'

describe('Test Case 4: Fazer logout do usuário', () => {

    it('deve fazer logout e ser redirecionado para a página de login', async () => {

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

        await LoginPage.open()
        await LoginPage.login(user.email, user.password)
        await expect(AccountPage.loggedInAs).toBeDisplayed()

        await AccountPage.logout()

        await expect(LoginPage.headingLogin).toBeDisplayed()
    })
})