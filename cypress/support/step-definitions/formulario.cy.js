Given('que acesso o portal tricentis', () => {
    cy.visit('/')
})

And('entro na página de formulário para cotação de automovel', () => {
    cy.acessarFormularioAutomovel()
})


