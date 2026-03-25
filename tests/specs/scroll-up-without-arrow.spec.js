describe('Test Case 26: Verificar rolagem para cima sem botão de seta', () => {

    it('deve rolar para baixo e depois para cima manualmente e verificar o topo', async () => {

        await browser.url('https://automationexercise.com')

        await $('footer').scrollIntoView()

        await expect($('h2=Subscription')).toBeDisplayed()

        await browser.execute(() => window.scrollTo(0, 0))

        await browser.waitUntil(
            async () => await $('#slider-carousel .carousel-inner .item.active').isDisplayed().catch(() => false),
            { timeout: 10000, timeoutMsg: 'Página não rolou para o topo' }
        )

        await expect($('.item.active h2')).toBeDisplayed()
    })
})