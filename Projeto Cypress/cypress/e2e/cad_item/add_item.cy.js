/// <reference types="Cypress" />
import pedido from '../../fixtures/pedidos.json'

describe('Inserção de item ao carrinho', () => {

  beforeEach(() => {
    cy.login()
    cy.visit("/produtos/")
  })
  it.only('Deve inserir item ao carrinho com sucesso', () => {
    cy.addITem(pedido[0].page, pedido[0].produto, pedido[0].quantidade, pedido[0].size, pedido[0].cor)
    cy.removeItem()
  })
})