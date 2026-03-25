import Page from './page.js'

class LoginPage extends Page {

    get inputSignupName() {
        return $('[data-qa="signup-name"]')
    }

    get inputSignupEmail() {
        return $('[data-qa="signup-email"]')
    }

    get btnSignup() {
        return $('[data-qa="signup-button"]')
    }

    get inputLoginEmail() {
        return $('[data-qa="login-email"]')
    }

    get inputLoginPassword() {
        return $('[data-qa="login-password"]')
    }

    get btnLogin() {
        return $('[data-qa="login-button"]')
    }

    get headingLogin() {
        return $('.login-form h2')
    }

    async signup(name, email) {
        await this.inputSignupName.setValue(name)
        await this.inputSignupEmail.setValue(email)
        await this.btnSignup.click()
    }

    async login(email, password) {
        await this.inputLoginEmail.setValue(email)
        await this.inputLoginPassword.setValue(password)
        await this.btnLogin.click()
    }

    async open() {
        await super.open('login')
    }
}

export default new LoginPage()