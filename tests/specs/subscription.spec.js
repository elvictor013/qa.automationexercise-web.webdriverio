describe('Test Case 10: Verificar assinatura na página inicial', () => {

    it('deve assinar newsletter com sucesso pelo rodapé da home', async () => {

        await browser.url('https://automationexercise.com')

        await $('footer').scrollIntoView()

        await expect($('h2=Subscription')).toBeDisplayed()

        await $('#susbscribe_email').setValue('victor@teste.com')
        await $('#subscribe').click()

        await expect($('#success-subscribe .alert-success')).toBeDisplayed()
        await expect($('#success-subscribe .alert-success')).toHaveText(
            expect.stringContaining('You have been successfully subscribed!')
        )
    })
})