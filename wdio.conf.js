export const config = {
    runner: 'local',

    specs: ['./tests/specs/**/*.js'],
    exclude: [],

    suites: {
        register: ['./tests/specs/register.spec.js'],
        login: ['./tests/specs/login.spec.js'],
        loginInvalid: ['./tests/specs/login-invalid.spec.js'],
        logout: ['./tests/specs/logout.spec.js'],
        registerExistingEmail: ['./tests/specs/register-existing-email.spec.js'],
        contactUs: ['./tests/specs/contact-us.spec.js'],
        testCasesPage: ['./tests/specs/test-cases-page.spec.js'],
        products: ['./tests/specs/products.spec.js'],
        searchProduct: ['./tests/specs/search-product.spec.js'],
        subscription: ['./tests/specs/subscription.spec.js'],
        subscriptionCart: ['./tests/specs/subscription-cart.spec.js'],
        addToCart: ['./tests/specs/add-to-cart.spec.js'],
        productQuantity: ['./tests/specs/product-quantity.spec.js'],
        checkoutRegister: ['./tests/specs/checkout-register.spec.js'],
        checkoutBeforeRegister: ['./tests/specs/checkout-before-register.spec.js'],
        checkoutLogin: ['./tests/specs/checkout-login.spec.js'],
        removeFromCart: ['./tests/specs/remove-from-cart.spec.js'],
        categoryProducts: ['./tests/specs/category-products.spec.js'],
        brandProducts: ['./tests/specs/brand-products.spec.js'],
        searchAndCartAfterLogin: ['./tests/specs/search-and-cart-after-login.spec.js'],
        addReview: ['./tests/specs/add-review.spec.js'],
        recommendedItems: ['./tests/specs/recommended-items.spec.js'],
        checkoutAddress: ['./tests/specs/checkout-address.spec.js'],
        downloadInvoice: ['./tests/specs/download-invoice.spec.js'],
        scrollUpArrow: ['./tests/specs/scroll-up-arrow.spec.js'],
        scrollUpWithoutArrow: ['./tests/specs/scroll-up-without-arrow.spec.js'],

    },

    maxInstances: 1,
    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: [
                    '--headless',
                    '--disable-gpu',
                    '--no-sandbox',
                    '--disable-dev-shm-usage',
                    '--window-size=1920,1080',
                    '--lang=en-US',
                    '--disable-translate',
                    '--disable-extensions',
                    '--disable-popup-blocking',
                    '--blink-settings=imagesEnabled=false',
                ],
                prefs: {
                    'translate_whitelists': {},
                    'translate': { 'enabled': false },
                    'profile.default_content_setting_values.notifications': 2,
                    'profile.managed_default_content_settings.javascript': 1,
                },
                excludeSwitches: ['enable-automation'],
            },
        },
    ],

logLevel: 'warn',
    bail: 0,
        baseUrl: 'https://automationexercise.com',
            waitforTimeout: 15000,
                connectionRetryTimeout: 120000,
                    connectionRetryCount: 3,

                        framework: 'mocha',
                            reporters: [
                                'spec',
                                [
                                    'allure',
                                    {
                                        outputDir: 'allure-results',
                                        disableWebdriverStepsReporting: true,
                                        disableWebdriverScreenshotsReporting: false,
                                    },
                                ],
                            ],
                                mochaOpts: {
    ui: 'bdd',
        timeout: 60000,
    },

afterTest: async function (_test, _context, { error }) {
    if (error) {
        await browser.takeScreenshot()
    }
},
}