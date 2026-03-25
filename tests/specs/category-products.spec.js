describe('Test Case 18: Visualizar produtos por categoria', () => {

    it('deve navegar por categorias femininas e masculinas e verificar os produtos', async () => {

        await browser.url('https://automationexercise.com')

        await expect($('#accordian')).toBeDisplayed()

        await $('a[href="#Women"]').click()
        await $('a[href="/category_products/1"]').click()

        await expect(browser).toHaveUrl(expect.stringContaining('/category_products/1'))
        await expect($('.features_items .title')).toBeDisplayed()

        await $('a[href="#Men"]').click()
        await $('a[href="/category_products/3"]').click()

        await expect(browser).toHaveUrl(expect.stringContaining('/category_products/3'))
        await expect($('.features_items .title')).toBeDisplayed()
    })
})