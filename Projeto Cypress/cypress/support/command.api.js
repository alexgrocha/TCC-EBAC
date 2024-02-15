import contrato from '../e2e/contracts/produto.contract'

Cypress.Commands.add('listCupons', () => {
    cy.request({
        method: 'GET',
        url: 'wp-json/wc/v3/coupons',
        body: {
            "page": 1,
            "per_page": 1
        },
        headers: { authorization: Cypress.env('user_token') },
        failOnStatusCode: false
    }).then(response => {
        return contrato.validateAsync(response.body)
    })
})

Cypress.Commands.add('listProduct', () => {
    cy.request({
        method: 'GET',
        url: 'wp-json/wc/v3/products',
        body: {
            "page": 1
        },
        headers: { authorization: Cypress.env('user_token') },
        failOnStatusCode: false
    }).then(response => {
        expect(response.status).to.equal(200)
    })
})

