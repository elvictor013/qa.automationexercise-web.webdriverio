import LoginPage from '../pageobjects/login.page.js'

describe('Test Case 3: Login do usuário com e-mail e senha incorretos', () => {

    it('deve exibir mensagem de erro com credenciais inválidas', async () => {

        await LoginPage.open()

        await LoginPage.login('invalid@email.com', 'wrongpassword')

        await expect($('.login-form p[style="color: red;"]')).toBeDisplayed()
        await expect($('.login-form p[style="color: red;"]')).toHaveText('Your email or password is incorrect!')
    })
})