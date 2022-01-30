/// <reference types='Cypress' />

describe('Checkbox test', () => {
    beforeEach(function () {
        cy.visit('https://the-internet.herokuapp.com/checkboxes')
        cy.get('h3').invoke('text').as('headingText')
        cy.get('#checkboxes > :nth-child(1)').as('firstCheckbox')
    })

    it('should click first checkbox', function (){
        cy.get('.example>h3').contains('Checkboxes')
        expect(this.headingText).to.equal('Checkboxes')
        cy.get('@firstCheckbox').click()
    })

    
})