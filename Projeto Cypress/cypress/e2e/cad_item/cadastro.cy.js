/// <reference types="Cypress" />

describe('Atualização de dados cadastrais', () => {

    beforeEach(() => {
        cy.login()
        cy.visit("/minha-conta/edit-address/")
    })
    it('Deve atualizar o endereço com sucesso', () => {
        cy.myAddress()
    })
})