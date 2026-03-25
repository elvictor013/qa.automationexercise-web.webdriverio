describe('Test Case 21: Adicionar avaliação ao produto', () => {

    it('deve adicionar uma avaliação ao produto com sucesso', async () => {

        await browser.url('https://automationexercise.com/product_details/1')

        await browser.execute(() => document.getElementById('button-review').click())

        await expect($('#review-form')).toBeDisplayed()

        await $('#name').setValue('Victor Teste')
        await $('#email').setValue('victor@teste.com')
        await $('#review').setValue('Ótimo produto, recomendo!')
        await $('#button-review').click()

        await expect($('#review-section .alert-success span')).toBeDisplayed()
        await expect($('#review-section .alert-success span')).toHaveText(
            expect.stringContaining('Thank you for your review')
        )
    })
})