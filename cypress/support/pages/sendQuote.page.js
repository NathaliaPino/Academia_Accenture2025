const EMAIL =  '#email'
const USER_NAME = '#username'
const SENHA = '#password' 
const CONFIRMAR_SENHA = '#confirmpassword'
const BTN_SEND = '#sendemail'
const BTN_OK = '.confirm'

Cypress.Commands.add('email', () => {
    cy.get(EMAIL).type('nathalia@teste.com') 
})

Cypress.Commands.add('userName', () => {
    cy.get(USER_NAME).type('Nathalia') 
})

Cypress.Commands.add('password', () => {
    cy.get(SENHA).type(Cypress.env('senhaUsuario')) 
})

Cypress.Commands.add('confirmPassword', () => {
    cy.get(CONFIRMAR_SENHA).type(Cypress.env('senhaUsuario')) 
})

Cypress.Commands.add('btn_send', () => {
    cy.get(BTN_SEND).click()
})

Cypress.Commands.add('mensagemSucesso', () => {
    cy.contains('Sending e-mail success!').should('be.visible')
    cy.get(BTN_OK).should('be.visible')
})



