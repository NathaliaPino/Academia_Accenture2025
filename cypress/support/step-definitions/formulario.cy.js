Given('que acesso o portal tricentis', () => {
    cy.visit('/')
})

And('entro na página de formulário para cotação de automóvel', () => {
    cy.acessarFormularioAutomovel()
})

When('preencho as informações obrigatórias da aba Enter Vehicle Data', () =>{
    cy.Make()
    cy.enginePerformance()
    cy.dateofManufacture()
    cy.numberOfSeats()
    cy.fuelType()
    cy.listPrice()
    cy.annualMileage()
    cy.btn_next_vd()
})

And('preencho as informações obrigatórias da aba Enter Insurant Data', () => {
    cy.firstName()
    cy.lastName()
    cy.dateOfBirth()
    cy.country()
    cy.zipCode()
    cy.occupation()
    cy.hobbies()
    cy.btn_next_id()
})

And('preencho as informações obrigatórias da aba Enter Product Data', () => {
    cy.startDate()
    cy.insuranceSum()
    cy.meritRating()
    cy.damageInsurance()
    cy.optionalProducts()
    cy.courtesyCar()
    cy.btn_next_pd()
})

And('seleciono um plano na aba Select Price Option', () => {
    cy.selecionar_plano()
    cy.btn_nxt_spo()
})

And('preencho as informações obrigatórias da aba Send Quote', () => {
    cy.email()
    cy.userName()
    cy.password()
    cy.confirmPassword()
    cy.btn_send()
})

Then('quando clico em enviar na ultima aba, uma mensagem de sucesso aparece', () => {
    cy.mensagemSucesso()
})






