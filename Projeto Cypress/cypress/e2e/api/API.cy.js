/// <reference types="Cypress" />
import contrato from '../contracts/produto.contract'

describe('Atualização de dados cadastrais', () => {


    it('Deve validar o contrato de Cupons', () => {
        cy.listCupons()
    });

    it('Deve validar requisição da listagem de produtos', () => {
        cy.listProduct()
    })
});

