Given('que acesso o portal My Shop', () => {
    cy.visit('/')
})

When('realizo o login no portal', () => {
    cy.acessarLogin()
    cy.realizarLogin()
})