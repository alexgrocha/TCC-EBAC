const dadosUser = require('../fixtures/geraDados');
import { faker } from '@faker-js/faker';

Cypress.Commands.add('myAddress', () => {
    cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
    cy.get(':nth-child(1) > .title > .edit').click()
    cy.get('#billing_first_name').clear().type(faker.company.name())
    cy.get('#billing_last_name').clear().type(faker.company.name())
    cy.get('#billing_company').clear().type(faker.company.name())
    cy.get('#select2-billing_country-container').click().type("Brasil").get('[aria-selected="true"]').click()
    cy.get('#billing_address_1').clear().type('9')
    cy.get('#billing_address_2').clear().type(faker.string.numeric(5))
    cy.get('#billing_city').clear().type('São Paulo')
    cy.get('#select2-billing_state-container').click().type('Rio de Janeiro' + '{enter}')
    cy.get('#billing_postcode').clear().type('99999-9999')
    cy.get('#billing_phone').clear().type(faker.phone.number('99 99 99999 99999'))
    cy.get(':nth-child(2) > .button').click()
})

Cypress.Commands.add('cadastrarUsuario', (nome, email, password) => {
    cy.request({
        method: 'POST',
        url: 'usuarios',
        failOnStatusCode: false,
        body: {
            "nome": nome,
            "email": email,
            "password": password,
            "administrador": 'true'
        }
    })
})

Cypress.Commands.add('editarUsuario', (id, nome, email, password) => {
    cy.request({
        method: 'PUT',
        url: `usuarios/${id}`,
        body: {
            "nome": nome,
            "email": email,
            "password": password,
            "administrador": 'true'
        }

    })
})

Cypress.Commands.add('buscarUsuario', (id) => {
    cy.request(`usuarios/${id}`)
})

Cypress.Commands.add('deletarUsuario', (id) => {
    cy.request({
        method: 'DELETE',
        url: `usuarios/${id}`
    })
})


