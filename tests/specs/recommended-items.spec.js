describe('Test Case 22: Adicionar ao carrinho a partir dos itens recomendados', () => {

    it('deve adicionar item recomendado ao carrinho e verificar', async () => {

        await browser.url('https://automationexercise.com')

        await $('footer').scrollIntoView()

        await expect($('.recommended_items')).toBeDisplayed()
        await expect($('.recommended_items h2')).toBeDisplayed()

        await $('.recommended_items .add-to-cart').click()

        await expect($('#cartModal')).toBeDisplayed()

        await $('a[href="/view_cart"] u').click()

        await expect(browser).toHaveUrl(expect.stringContaining('/view_cart'))

        const cartItems = await $$('#cart_info_table tbody tr')
        await expect(cartItems.length).toBeGreaterThan(0)
    })
})