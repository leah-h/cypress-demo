/// <reference types='Cypress' />

describe('testing features example', () => {
    beforeEach(() => {
        cy.visit('https://automationintesting.online/#/admin')
    })

    it('should successfully login user', function() {

        cy.fixture('login-details').then(data => {
            const { username, password } = data.validCredentials
            cy.get('[data-testid="username"]').type(username)
            cy.get('[data-testid="password"]').type(password)
        })
        
        cy.get('[data-testid="submit"]').click()
        cy.get('h1').invoke('text').should('equal', 'Welcome to Restful Booker Platform')
        cy.get('#frontPageLink').should('be.visible')
    })

    it('should fail when invalid login is used', () => {
        cy.fixture('login-details').then(data => {
            const { username, password } = data.invalidCredentials
            cy.get('[data-testid="username"]').type(username)
            cy.get('[data-testid="password"]').type(password)
        })
        
        cy.get('[data-testid="submit"]').click()
        //cy.get('#frontPageLink').should('not.be.visible')
        cy.get('[data-testid="login-header"]').should('be.visible')
    })
})