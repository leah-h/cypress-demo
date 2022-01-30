/// <reference types="cypress" />

describe('google search test', () => {
    beforeEach(function() {
        cy.visit("https://www.google.com")
        cy.get('.FPdoLc > center > .gNO89b').contains('Google Search')
        cy.get('#gbqfbb').contains("I'm Feeling Lucky")

    })

    it('should be able to enter search term', () => {
        cy.get('.gLFyf.gsfi')
          .type('ice cream {enter}')
         
    })

})
