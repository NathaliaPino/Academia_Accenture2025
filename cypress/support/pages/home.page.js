const BTN_AUTOMOVEL = '#nav_automobile'


Cypress.Commands.add('acessarFormularioAutomovel', () => {
    cy.get(BTN_AUTOMOVEL).click()
})
