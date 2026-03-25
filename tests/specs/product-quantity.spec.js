describe('Test Case 13: Verificar a quantidade de produtos no carrinho', () => {

    it('deve adicionar produto com quantidade 4 e verificar no carrinho', async () => {

        await browser.url('https://automationexercise.com/product_details/1')

        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('product_details/1'),
            { timeout: 15000, timeoutMsg: 'URL não contém product_details/1' }
        )

        const quantity = await $('#quantity')
        await quantity.clearValue()
        await quantity.setValue('4')

        await $('button.cart').click()

        await $('a[href="/view_cart"] u').waitForClickable({ timeout: 10000 })
        await $('a[href="/view_cart"] u').click()

        const cartQuantity = await $('.cart_quantity button')
        await expect(cartQuantity).toHaveText('4')
    })
})