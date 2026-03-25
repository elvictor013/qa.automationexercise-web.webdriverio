describe('Test Case 19: Visualizar e adicionar produtos da marca ao carrinho', () => {

    it('deve navegar por duas marcas diferentes e verificar os produtos exibidos', async () => {

        await browser.url('https://automationexercise.com/products')

        await expect($('.brands-name')).toBeDisplayed()

        await $('a[href="/brand_products/Polo"]').click()

        await expect(browser).toHaveUrl(expect.stringContaining('brand_products/Polo'))
        await expect($('.features_items .title')).toBeDisplayed()
        await expect($('.features_items .product-image-wrapper')).toBeDisplayed()

        await $('a[href="/brand_products/H&M"]').click()

        await expect(browser).toHaveUrl(expect.stringContaining('brand_products/H'))
        await expect($('.features_items .title')).toBeDisplayed()
        await expect($('.features_items .product-image-wrapper')).toBeDisplayed()
    })
})