Given('que acesso o portal tricentis', () => {
    cy.visit('/')
})

And('entro na página de formulário para cotação de automovel', () => {
    cy.acessarFormularioAutomovel()
})

When('preencho as informações obrigatórias da aba Enter Vehicle Data com sucesso', () =>{
    cy.Make()
    cy.enginePerformance()
    cy.dateofManufacture()
    cy.numberOfSeats()
    cy.fuelType()
    cy.listPrice()
    cy.annualMileage()
    cy.btn_next()
})

And('preencho as informações obrigatórias da aba Enter Insurant Data com sucesso', () => {
    cy.firstName()
    cy.lastName()
    cy.dateOfBirth()
    cy.country()
    cy.zipCode()
    cy.occupation()
    cy.hobbies()
    cy.btn_next_vd()
})

And('preencho as informações obrigatórias da aba Enter Product Data com sucesso', () => {
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






