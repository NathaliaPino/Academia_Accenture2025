When('não preencho alguma das informações obrigatórias', () => {
    cy.btn_next_vd()
    cy.btn_next_id()
    cy.btn_next_pd()
})

Then('não conseguirei acessar as informações da aba de Select Price Option', () => {
    cy.SemAcessoApagina()
})