Cypress.on('uncaught:exception', (err, runnable) => {
    // Fail the test
    throw err;
    // Return false to prevent the error from failing the test in an unexpected way
    return false;
  });

it('testing',()=>{

cy.visit('https://www.jufsolution3.com/auth/signin?redirect=/')

cy.get('.inputs_textContainer__ksnHm > input').as('username')
	cy.get('@username').click()
	cy.get('@username').type('mikodemo1002')

	cy.get('.inputs_inputContainer__YQKEw > input').as('password')
	cy.get('@password').click()
	cy.get('@password').type('Yes8888880')

	cy.get('form > .TT__standard-button').as('loginButton')
	cy.get('@loginButton').click()

	cy.get('body').should('exist');

	cy.get(
		':nth-child(1) > .user-quick-view_container__pFlJe > .user-quick-view_user__FkeJ_ > :nth-child(2) > .user-quick-view_playerMainContent__rDEHg > :nth-child(1)'
	).as('profileUsername')
	cy.get('@profileUsername').should('have.text', 'mikodemo1002')
})