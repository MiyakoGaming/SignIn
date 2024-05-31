Cypress.on('uncaught:exception', (err, runnable) => {
    // Fail the test
    throw err;
    // Return false to prevent the error from failing the test in an unexpected way
    return false;
  });

  const userQuickViewContainer = ".user-quick-view_container__pFlJe";
  const usernameContainer = ".inputs_textContainer__ksnHm > input";

it('testing',()=>{

cy.visit('https://www.jufsolution3.com/auth/signin?redirect=/')
// const userQuickViewContainer = ".user-quick-view_container__pFlJe";

cy.get(usernameContainer).as('username')
	// testSignIn("miko1001", "password", true)
	// testSignIn("miko1001", "password1", false)

	var username = "mikodemo1002";


	cy.get('@username').click()
	cy.get('@username').type(username)

	// cy.get('.inputs_inputContainer__YQKEw > input').as('password')
	// cy.get('@password').click()
	// cy.get('@password').type('Yes888888')

	// cy.get('form > .TT__standard-button').as('loginButton')
	// cy.get('@loginButton').click()

	// cy.get(
	// 	`:nth-child(1) > ${userQuickViewContainer} > .user-quick-view_user__FkeJ_ > :nth-child(2) > .user-quick-view_playerMainContent__rDEHg > :nth-child(1)`
	// ).as('profileUsername')
	// cy.get('@profileUsername').should('have.text', 'mikodemo1002')
})