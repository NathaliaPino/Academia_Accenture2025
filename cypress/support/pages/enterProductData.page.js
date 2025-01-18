const INICIO = '#startdate'
const SEGURO = '#insurancesum'
const MERITO = '#meritrating'
const SEGURO_DANOS = '#damageinsurance'
const PROD_OPCIONAIS = 'label.ideal-radiocheck-label:contains("Euro Protection") .ideal-check'
const CARRO_RESERVA = '#courtesycar'
const BTN_NEXT_PD = '#nextselectpriceoption'


Cypress.Commands.add('startDate', () => {
    cy.get(INICIO).type('01/01/2026') 
})

Cypress.Commands.add('insuranceSum', () => {
    cy.get(SEGURO).select('3.000.000,00')
})

Cypress.Commands.add('meritRating', () => {
    cy.get(MERITO).select('Bonus 1')
})

Cypress.Commands.add('damageInsurance', () => {
    cy.get(SEGURO_DANOS).select('No Coverage')
})

Cypress.Commands.add('optionalProducts', () => {
    cy.get(PROD_OPCIONAIS).click()
})

Cypress.Commands.add('courtesyCar', () => {
    cy.get(CARRO_RESERVA).select('No')
})

Cypress.Commands.add('btn_next_pd', () => {
    cy.get(BTN_NEXT_PD).click()
})

