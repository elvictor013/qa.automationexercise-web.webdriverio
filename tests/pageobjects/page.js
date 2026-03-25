/**
 * Classe base com métodos e funcionalidades compartilhadas
 * entre todos os page objects do projeto.
 */
export default class Page {
    /**
     * Navega para uma sub-rota da aplicação
     * @param {string} path - caminho da página (ex: 'login')
     */
    async open(path) {
        await browser.url(`https://automationexercise.com/${path}`)
    }
}