describe('Test Case 7: Página de verificação de casos de teste', () => {

    it('deve navegar para a página de casos de teste com sucesso', async () => {

        await browser.url('https://automationexercise.com/test_cases')

        await expect(browser).toHaveUrl(expect.stringContaining('test_cases'))
    })
})