# qa.automationexercise-web.webdriverio
# QA Automation - AutomationExercise

Projeto de automação de testes end-to-end para o site [AutomationExercise](https://automationexercise.com), desenvolvido com WebdriverIO, seguindo o padrão Page Object Model e estrutura de testes Triple A (Arrange, Act, Assert).

## Tecnologias

- [Node.js](https://nodejs.org/) v18+
- [WebdriverIO](https://webdriver.io/) v9
- [Mocha](https://mochajs.org/)
- [Allure Reports](https://docs.qameta.io/allure/)
- [GitHub Actions](https://docs.github.com/en/actions)

## Estrutura do projeto
```
├── .github/
│   └── workflows/
│       └── ci.yml
├── tests/
│   ├── pageobjects/
│   │   ├── page.js
│   │   ├── account.page.js
│   │   ├── checkout.page.js
│   │   ├── contact.page.js
│   │   ├── login.page.js
│   │   ├── register.page.js
│   │   └── secure.page.js
│   └── specs/
│       ├── add-review.spec.js
│       ├── add-to-cart.spec.js
│       ├── brand-products.spec.js
│       ├── category-products.spec.js
│       ├── checkout-address.spec.js
│       ├── checkout-before-register.spec.js
│       ├── checkout-login.spec.js
│       ├── checkout-register.spec.js
│       ├── contact-us.spec.js
│       ├── download-invoice.spec.js
│       ├── login-invalid.spec.js
│       ├── login.spec.js
│       ├── logout.spec.js
│       ├── product-quantity.spec.js
│       ├── products.spec.js
│       ├── recommended-items.spec.js
│       ├── register-exixting-email.spec.js
│       ├── register.spec.js
│       ├── remove-from-cart.spec.js
│       ├── scroll-up-arrow.spec.js
│       ├── scroll-up-without-arrow.spec.js
│       ├── search-and-cart-after-login.spec.js
│       ├── search-product.spec.js
│       ├── subscription-cart.spec.js
│       ├── subscription.spec.js
│       └── test-cases-page.spec.js
├── allure-results/
├── .gitignore
├── package.json
├── wdio.conf.js
└── README.md
```

## Pré-requisitos

- Node.js v18 ou superior
- Google Chrome instalado
- npm v9 ou superior

## Instalação

Clone o repositório:
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

Instale as dependências:
```bash
npm install
```

> O projeto foi inicializado com `npm init wdio@latest .` — caso queira recriar do zero, execute esse comando e siga o assistente de configuração do WebdriverIO.

## Executar os testes

Todos os testes:
```bash
npm run wdio
```

Por suíte específica:
```bash
npx wdio --suite register
npx wdio --suite login
npx wdio --suite loginInvalid
npx wdio --suite logout
npx wdio --suite registerExistingEmail
npx wdio --suite contactUs
npx wdio --suite testCasesPage
npx wdio --suite products
npx wdio --suite searchProduct
npx wdio --suite subscriptionHome
npx wdio --suite subscriptionCart
npx wdio --suite addToCart
npx wdio --suite productQuantity
npx wdio --suite checkoutRegister
npx wdio --suite checkoutBeforeRegister
npx wdio --suite checkoutLogin
npx wdio --suite removeFromCart
npx wdio --suite categoryProducts
npx wdio --suite brandProducts
npx wdio --suite searchAndCartAfterLogin
npx wdio --suite addReview
npx wdio --suite recommendedItems
npx wdio --suite downloadInvoice
npx wdio --suite scrollUpArrow
npx wdio --suite scrollUpWithoutArrow
npx wdio --suite checkoutAddress
```

## Relatório Allure

Gerar e abrir o relatório após a execução:
```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

## Pipeline CI

O projeto possui pipeline configurada no GitHub Actions que executa automaticamente todos os testes a cada `push` ou `pull request` na branch `main`. O relatório Allure é gerado e disponibilizado como artefato ao final de cada execução.

## Padrões adotados

- **Page Object Model** — separação entre mapeamento de elementos e lógica de teste
- **Triple A** — cada teste segue as etapas Arrange, Act e Assert
- **Headless** — testes executados em modo headless por padrão