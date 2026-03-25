import ContactPage from '../pageobjects/contact.page.js'

describe('Test Case 6: Formulário de Contato', () => {

    it('deve preencher e enviar o formulário de contato e retornar à home com sucesso', async () => {

        const contactData = {
            name: 'Victor Teste',
            email: 'victor@teste.com',
            subject: 'Dúvida sobre pedido',
            message: 'Gostaria de saber o status do meu pedido número 12345.',
        }

        await browser.url('https://automationexercise.com')
        await $('a[href="/contact_us"]').click()

        await expect(ContactPage.headingGetInTouch).toBeDisplayed()

        await ContactPage.fillAndSubmit(contactData)

        await expect(ContactPage.alertSuccess).toBeDisplayed()
        await expect(ContactPage.alertSuccess).toHaveText(
            expect.stringContaining('Success! Your details have been submitted successfully.')
        )

        await ContactPage.btnHome.click()

        await expect(browser).toHaveUrl(expect.stringContaining('automationexercise.com'))
    })
})