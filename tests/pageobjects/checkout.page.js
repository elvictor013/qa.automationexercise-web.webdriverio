import Page from './page.js'

class CheckoutPage extends Page {

    get btnProceedToCheckout() {
        return $('.check_out')
    }

    get btnRegisterLogin() {
        return $('#checkoutModal a[href="/login"]')
    }

    get textareaComment() {
        return $('textarea[name="message"]')
    }

    get btnPlaceOrder() {
        return $('a[href="/payment"]')
    }

    get inputNameOnCard() {
        return $('[data-qa="name-on-card"]')
    }

    get inputCardNumber() {
        return $('[data-qa="card-number"]')
    }

    get inputCvc() {
        return $('[data-qa="cvc"]')
    }

    get inputExpiryMonth() {
        return $('[data-qa="expiry-month"]')
    }

    get inputExpiryYear() {
        return $('[data-qa="expiry-year"]')
    }

    get btnPayAndConfirm() {
        return $('[data-qa="pay-button"]')
    }

    get alertOrderSuccess() {
        return $('#success_message')
    }

    get headingOrderPlaced() {
        return $('[data-qa="order-placed"]')
    }

    async fillPayment({ nameOnCard, cardNumber, cvc, expiryMonth, expiryYear }) {
        await this.inputNameOnCard.setValue(nameOnCard)
        await this.inputCardNumber.setValue(cardNumber)
        await this.inputCvc.setValue(cvc)
        await this.inputExpiryMonth.setValue(expiryMonth)
        await this.inputExpiryYear.setValue(expiryYear)
    }
}

export default new CheckoutPage()