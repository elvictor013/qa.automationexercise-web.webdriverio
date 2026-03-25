describe('Test Case 12: Adicionar produtos ao carrinho', () => {

    it('deve adicionar dois produtos ao carrinho e verificar preços', async () => {

        await browser.url('https://automationexercise.com/products')

        await $('a[data-product-id="1"].add-to-cart').click()
        await $('button.btn-success.close-modal').click()

        await $('a[data-product-id="2"].add-to-cart').click()
        await $('a[href="/view_cart"] u').waitForClickable({ timeout: 10000 })
        await $('a[href="/view_cart"] u').click()

        const rows = await $$('#cart_info_table tbody tr')
        await expect(rows.length).toEqual(2)

        for (const row of rows) {
            await expect(row.$('.cart_price p')).toBeDisplayed()
            await expect(row.$('.cart_quantity button')).toBeDisplayed()
            await expect(row.$('.cart_total p')).toBeDisplayed()
        }
    })
})