import Page from './page.js'

class ContactPage extends Page {

    get headingGetInTouch() {
        return $('.contact-form h2.title')
    }

    get inputName() {
        return $('[data-qa="name"]')
    }

    get inputEmail() {
        return $('[data-qa="email"]')
    }

    get inputSubject() {
        return $('[data-qa="subject"]')
    }

    get inputMessage() {
        return $('[data-qa="message"]')
    }

    get inputFile() {
        return $('input[name="upload_file"]')
    }

    get btnSubmit() {
        return $('[data-qa="submit-button"]')
    }

    get alertSuccess() {
        return $('.status.alert-success')
    }

    get btnHome() {
        return $('.contact-form a.btn')
    }

    async fillAndSubmit({ name, email, subject, message, filePath = null }) {
        await this.inputName.setValue(name)
        await this.inputEmail.setValue(email)
        await this.inputSubject.setValue(subject)
        await this.inputMessage.setValue(message)

        if (filePath) {
            const remoteFilePath = await browser.uploadFile(filePath)
            await this.inputFile.setValue(remoteFilePath)
        }

        await this.btnSubmit.click()

        try {
            await browser.acceptAlert()
        } catch {
        }
    }

    async open() {
        await super.open('contact_us')
    }
}

export default new ContactPage()