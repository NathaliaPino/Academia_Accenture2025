const PRIMEIRO_NOME = '#firstname'
const ULTIMO_NOME = '#lastname'
const ANIVERSARIO = '#birthdate'
const PAIS = '#country'
const ZIPCODE = '#zipcode'
const OCUPACAO = '#occupation'
const PASSATEMPO = 'label.ideal-radiocheck-label:contains("Speeding")'
const BTN_NEXT = '#nextenterinsurantdata'

Cypress.Commands.add('firstName', () => {
    cy.get(PRIMEIRO_NOME).type('Nathalia') 
})

Cypress.Commands.add('lastName', () => {
    cy.get(ULTIMO_NOME).type('Pino')
})

Cypress.Commands.add('dateOfBirth', () => {
    cy.get(ANIVERSARIO).type('01/01/1996')
})

Cypress.Commands.add('country', () => {
    cy.get(PAIS).select('Brazil')
})

Cypress.Commands.add('zipCode', () => {
    cy.get(ZIPCODE).type(Cypress.env('zipCode'))
})

Cypress.Commands.add('occupation', () => {
    cy.get(OCUPACAO).select('Employee')
})

Cypress.Commands.add('hobbies', () => {
    cy.get(PASSATEMPO).click()
})

Cypress.Commands.add('btn_next', () => {
    cy.get(BTN_NEXT).click()
})











