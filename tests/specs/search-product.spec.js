describe('Test Case 9: Pesquisar produto', () => {

    it('deve pesquisar produto e exibir resultados relacionados', async () => {

        await browser.url('https://automationexercise.com/products')

        await expect(browser).toHaveUrl(expect.stringContaining('/products'))

        await $('#search_product').setValue('Blue Top')
        await $('#submit_search').click()

        await expect($('h2.title')).toHaveText(expect.stringContaining('SEARCHED PRODUCTS'))
        const products = await $$('.features_items .col-sm-4')
        await expect(products.length).toBeGreaterThan(0)
    })
})