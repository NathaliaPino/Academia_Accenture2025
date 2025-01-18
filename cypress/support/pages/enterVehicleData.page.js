const MENU_SUSPENSO_MAKE = '#make'
const PERFORMANCE = '#engineperformance'
const DATA = '#dateofmanufacture'
const ASSENTOS = '#numberofseats'
const COMBUSTIVEL = '#fuel'
const PRECO = '#listprice'
const QUILOMETRAGEM_ANUAL = '#annualmileage'
const BTN_NEXT_VD = '#nextenterproductdata'


Cypress.Commands.add('Make', () => {
    cy.get(MENU_SUSPENSO_MAKE).select('Audi')
})

Cypress.Commands.add('enginePerformance', () => {
    cy.get(PERFORMANCE).type('200') 
})

Cypress.Commands.add('dateofManufacture', () => {
    cy.get(DATA).type('12/01/2024') 
})

Cypress.Commands.add('numberOfSeats', () => {
    cy.get(ASSENTOS).select('5')
})

Cypress.Commands.add('fuelType', () => {
    cy.get(COMBUSTIVEL).select('Petrol')
})

Cypress.Commands.add('listPrice', () => {
    cy.get(PRECO).type('45000') 
})

Cypress.Commands.add('annualMileage', () => {
    cy.get(QUILOMETRAGEM_ANUAL).type('15000') 
})

Cypress.Commands.add('btn_next_vd', () => {
    cy.get(BTN_NEXT_VD).click()
})


















