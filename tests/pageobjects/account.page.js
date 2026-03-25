import Page from './page.js'

class AccountPage extends Page {

    get headingAccountCreated() {
        return $('[data-qa="account-created"]')
    }

    get btnContinueAfterCreation() {
        return $('[data-qa="continue-button"]')
    }

    get headingAccountDeleted() {
        return $('[data-qa="account-deleted"]')
    }

    get btnContinueAfterDeletion() {
        return $('[data-qa="continue-button"]')
    }

    get loggedInAs() {
        return $('.navbar-nav a b')
    }

    async continueAfterCreation() {
        await this.btnContinueAfterCreation.click()
    }

    async deleteAccount() {
        await browser.url('https://automationexercise.com/delete_account')
    }

    async continueAfterDeletion() {
        await this.btnContinueAfterDeletion.click()
    }

    async logout() {
        await browser.url('https://automationexercise.com/logout')
    }
}

export default new AccountPage()