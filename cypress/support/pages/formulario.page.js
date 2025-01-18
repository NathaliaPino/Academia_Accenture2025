const MENU_SUSPENSO_MAKE = '#make'


Cypress.Commands.add('acessarMenuSuspensoMake', () => {
    cy.get(MENU_SUSPENSO_MAKE).select('Audi')
})

