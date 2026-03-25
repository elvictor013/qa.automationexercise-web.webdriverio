describe('Test Case 17: Remover produtos do carrinho', () => {

    it('deve remover produto do carrinho com sucesso', async () => {

        await browser.url('https://automationexercise.com/products')

        await $('a[data-product-id="1"].add-to-cart').click()
        await $('button.btn-success.close-modal').click()

        await browser.url('https://automationexercise.com/view_cart')

        await expect(browser).toHaveUrl(expect.stringContaining('/view_cart'))

        await $('.cart_quantity_delete').click()

        await browser.waitUntil(
            async () => {
                const emptyCart = await $('#empty_cart')
                return await emptyCart.isDisplayed()
            },
            { timeout: 10000, timeoutMsg: 'Carrinho não ficou vazio' }
        )

        await expect($('#empty_cart')).toBeDisplayed()
    })
})