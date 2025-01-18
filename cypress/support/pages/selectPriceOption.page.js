const SELC_GOLD = 'tr > .group > :nth-child(2) > .ideal-radio'
const BTN_NEXT_SPO = '#nextsendquote'

Cypress.Commands.add('selecionar_plano', () => {
    cy.get(SELC_GOLD).click()
})

Cypress.Commands.add('btn_nxt_spo', () => {
    cy.get(BTN_NEXT_SPO).click()
})