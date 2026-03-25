describe('Test Case 11: Verificar assinatura na página do carrinho', () => {

    it('deve assinar newsletter com sucesso pelo rodapé da página do carrinho', async () => {

        await browser.url('https://automationexercise.com')

        await $('a[href="/view_cart"]').click()

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