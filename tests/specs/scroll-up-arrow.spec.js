describe('Test Case 25: Verificar rolagem para cima usando botão de seta', () => {

    it('deve rolar para baixo, clicar na seta e verificar o topo da página', async () => {

        await browser.url('https://automationexercise.com')

        await $('footer').scrollIntoView()

        await expect($('h2=Subscription')).toBeDisplayed()

        await $('#scrollUp').click()

        await browser.waitUntil(
            async () => await $('#slider-carousel .carousel-inner .item.active').isDisplayed().catch(() => false),
            { timeout: 10000, timeoutMsg: 'Página não rolou para o topo' }
        )

        await expect($('.item.active h2')).toBeDisplayed()
    })
})