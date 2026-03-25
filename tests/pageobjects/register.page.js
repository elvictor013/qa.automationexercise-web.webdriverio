import Page from './page.js'

class RegisterPage extends Page {

    get radioMr() {
        return $('#id_gender1')
    }

    get radioMrs() {
        return $('#id_gender2')
    }

    get inputPassword() {
        return $('[data-qa="password"]')
    }

    get selectDay() {
        return $('[data-qa="days"]')
    }

    get selectMonth() {
        return $('[data-qa="months"]')
    }

    get selectYear() {
        return $('[data-qa="years"]')
    }

    get checkboxNewsletter() {
        return $('#newsletter')
    }

    get checkboxOptin() {
        return $('#optin')
    }

    get inputFirstName() {
        return $('[data-qa="first_name"]')
    }

    get inputLastName() {
        return $('[data-qa="last_name"]')
    }

    get inputCompany() {
        return $('[data-qa="company"]')
    }

    get inputAddress1() {
        return $('[data-qa="address"]')
    }

    get inputAddress2() {
        return $('[data-qa="address2"]')
    }

    get selectCountry() {
        return $('[data-qa="country"]')
    }

    get inputState() {
        return $('[data-qa="state"]')
    }

    get inputCity() {
        return $('[data-qa="city"]')
    }

    get inputZipcode() {
        return $('[data-qa="zipcode"]')
    }

    get inputMobileNumber() {
        return $('[data-qa="mobile_number"]')
    }

    get btnCreateAccount() {
        return $('[data-qa="create-account"]')
    }

    async fillAccountInfo({ title, password, day, month, year }) {
        if (title === 'Mr') {
            await this.radioMr.click()
        } else {
            await this.radioMrs.click()
        }
        await this.inputPassword.setValue(password)
        await this.selectDay.selectByVisibleText(day)
        await this.selectMonth.selectByVisibleText(month)
        await this.selectYear.selectByVisibleText(year)
    }

    async checkSubscriptions() {
        await this.checkboxNewsletter.click()
        await this.checkboxOptin.click()
    }

    async fillAddressInfo({ firstName, lastName, company, address1, address2, country, state, city, zipcode, mobileNumber }) {
        await this.inputFirstName.setValue(firstName)
        await this.inputLastName.setValue(lastName)
        await this.inputCompany.setValue(company)
        await this.inputAddress1.setValue(address1)
        await this.inputAddress2.setValue(address2)
        await this.selectCountry.selectByVisibleText(country)
        await this.inputState.setValue(state)
        await this.inputCity.setValue(city)
        await this.inputZipcode.setValue(zipcode)
        await this.inputMobileNumber.setValue(mobileNumber)
    }

    async submitRegistration() {
        await this.btnCreateAccount.click()
    }
}

export default new RegisterPage()