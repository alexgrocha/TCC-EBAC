Cypress.Commands.add('login', () => {
    let username = Cypress.env('user_name')
    cy.session([username], () => {
        cy.visit('/')
        cy.get('.icon-user-unfollow').click();
        cy.get('#username').clear().type(username);
        cy.get('#password').clear().type(Cypress.env('user_password'));
        cy.get('.woocommerce-form > .button').click();
        Cypress.env('loggerIn', true)
    })
})


