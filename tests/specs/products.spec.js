describe('Test Case 8: Verificar todos os produtos e a página de detalhes do produto', () => {

    it('deve navegar para produtos e verificar detalhes do primeiro produto', async () => {

        await browser.url('https://automationexercise.com/products')

        await expect($('.features_items')).toBeDisplayed()

        await browser.url('https://automationexercise.com/product_details/1')

        await expect($('.product-information h2')).toBeDisplayed()
        await expect($('.product-information p')).toBeDisplayed()
        await expect($('.product-information span span')).toBeDisplayed()
        await expect($('.product-information p:nth-child(6)')).toHaveText(expect.stringContaining('Availability'))
        await expect($('.product-information p:nth-child(7)')).toHaveText(expect.stringContaining('Condition'))
        await expect($('.product-information p:nth-child(8)')).toHaveText(expect.stringContaining('Brand'))
    })
})