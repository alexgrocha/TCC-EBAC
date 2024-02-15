Cypress.Commands.add('addITem', (page, produto, quantidade, tamanho, cor) => {
    cy.get(`:nth-child(${page}) > .page-numbers`).click()
    cy.get('[class="product-block grid"]')
        .contains(produto)
        .click()
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-' + cor).click()
    cy.get('.input-text')
        .clear()
        .type(quantidade)
    cy.get('.single_add_to_cart_button').click()
})

Cypress.Commands.add('removeItem', () => {
    cy.get('.dropdown-toggle > .text-skin > .icon-basket').click();
    cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .cart_list > #mcitem-c3a3ed2ed083e347da88677a36b87a67\\ mini_cart_item > .product-details > .remove').click();
    cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .cart_empty > :nth-child(1)').should('have.text', 'You have no items in your shopping cart');
})

