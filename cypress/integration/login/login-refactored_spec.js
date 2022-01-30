/// <reference types='Cypress' />

describe('testing features example', () => {
    beforeEach(() => {
        cy.visit('https://automationintesting.online/#/admin')
        cy.fixture('login-details').as('data')
    })

    afterEach(() => {
        //cy.get('delete').click({multiple: true})
    })

    it('should successfully login user', function() {
        const { username, password } = this.data.validCredentials
        cy.login(username, password)
        cy.get('h1').invoke('text').should('equal', 'Welcome to Restful Booker Platform')
        cy.get('#frontPageLink').should('be.visible')
    })

    it('should fail when invalid login is used', function(){
        const { username, password } = this.data.invalidCredentials
        cy.login(username, password)
    
        //cy.get('#frontPageLink').should('not.be.visible')
        cy.get('[data-testid="login-header"]').should('be.visible')
    })

})