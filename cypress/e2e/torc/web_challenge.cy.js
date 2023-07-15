
/// <reference types="cypress" />

const duckUrl = 'https://duckduckgo.com'
const newOrigin = 'https://www.football-data.org/'

describe('torc web challenge', () => {
    beforeEach(() => {
        cy.visit('https://duckduckgo.com')
        cy.log('Current URL', cy.url())
    })

    it('check the first result of The dev-friendly football API on duckduckgo.com', () => {
        cy.get('#searchbox_input').click()
        cy.get('#searchbox_input').type('The dev-friendly football API')
        cy.get('button[type="submit"]').click()
        cy.get('a[data-testid="result-title-a"]').first().click()
        cy.origin(newOrigin, { args: newOrigin}, (newOrigin) => {
            cy.url().should('eq', `${newOrigin}index.php`, `ERROR: The first URL result from the browser is not ${newOrigin}`)
        })     
    })
})

