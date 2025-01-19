const SELC_PLATINUM = ':nth-child(3) > .ideal-radio'
const BTN_NEXT_SPO = '#nextsendquote'

Cypress.Commands.add('selecionar_plano', () => {
    cy.get(SELC_PLATINUM).click()
})

Cypress.Commands.add('btn_nxt_spo', () => {
    cy.get(BTN_NEXT_SPO).click()
})

Cypress.Commands.add('SemAcessoApagina', () => {
    cy.contains('Please, complete the first three steps to see the price table.').should('be.visible')
})