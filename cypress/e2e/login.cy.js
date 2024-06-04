//1. testSignIn{(valid username, valid password, true) , (test case, true)}
//2. testSignIn{(valid username, valid password, true) , (test case, false)}
//3. testSignIn{(valid username, invalid password, false) , (test case, false)}
//4. testSignIn{(invalid username, valid password, false) , (test case, false)}
//5. testSignIn{(invalid username, invalid password, false) , (test case, false)}
//6. testSignIn{(invalid username, invalid password, false) , (test case, true)}

Cypress.on('uncaught:exception', (err, runnable) => {
	// Fail the test
	throw err
	// Return false to prevent the error from failing the test in an unexpected way
	return false
})

//website html class name
const usernameContainer = '.inputs_textContainer__ksnHm > input'
const passwordContainer = '.inputs_inputContainer__YQKEw > input'
const signInButton = 'form > .TT__standard-button'
const profileUsername =
	':nth-child(1) > .user-quick-view_container__pFlJe > .user-quick-view_user__FkeJ_ > :nth-child(2) > .user-quick-view_playerMainContent__rDEHg > :nth-child(1)'
const signInErrorPopUp = '.modal_hero__P0JkX';
const closeSignInErrorPopUp = '.modal_action__0o7AY > .TT__standard-button';

//Login detail
var validUsername = 'mikodemo1002'
var validPassword = 'Yes888888'
var invalidUsername = 'mickey678'
var invalidPassword = 'yes789631'

//Text
var signInButtonText = 'Sign In'
var signInErrorPopUpText = 'Unable to log in.'
var closeSignInErrorPopUpText = 'Okay'

beforeEach(() => {
	cy.visit('https://www.jufsolution3.com/auth/signin?redirect=/')
})

// testSignIn{(valid username, valid password, true) , (test case, true)}
it('Verify successful user authentication with valid username and password', () => {
	cy.get(usernameContainer).click()
	cy.get(usernameContainer).type(validUsername).should('have.value', validUsername)

	cy.get(passwordContainer).click()
	cy.get(passwordContainer).type(validPassword).should('have.value', validPassword)

	cy.get(signInButton).should('have.text', signInButtonText)
	cy.get(signInButton).click()

	cy.get(profileUsername).should('have.text', validUsername)
})

//testSignIn{(valid username, valid password, true) , (test case, false)}
it('Verify unsuccessful user authentication with valid username and password', () => {
    cy.get(usernameContainer).click()
	cy.get(usernameContainer).type(validUsername).should('have.value', validUsername)

	cy.get(passwordContainer).click()
	cy.get(passwordContainer).type(validPassword).should('have.value', validPassword)

	cy.get(signInButton).should('have.text', signInButtonText)
	cy.get(signInButton).click()

	cy.get(profileUsername).should('have.text', invalidUsername)
})

//testSignIn{(valid username, invalid password, false) , (test case, false)}
it('Verify unsuccessful user authentication with valid username and invalid password', () => {
    cy.get(usernameContainer).click()
	cy.get(usernameContainer).type(validUsername).should('have.value', validUsername)

	cy.get(passwordContainer).click()
	cy.get(passwordContainer).type(invalidPassword).should('have.value', invalidPassword)

	cy.get(signInButton).should('have.text', signInButtonText)
	cy.get(signInButton).click()

    cy.get(profileUsername).should('have.text', validUsername)
})

//testSignIn{(invalid username, valid password, false) , (test case, false)}
it('Verify unsuccessful user authentication with invalid username and valid password', () => {
    cy.get(usernameContainer).click()
	cy.get(usernameContainer).type(invalidUsername).should('have.value', invalidUsername)

	cy.get(passwordContainer).click()
	cy.get(passwordContainer).type(validPassword).should('have.value', validPassword)

	cy.get(signInButton).should('have.text', signInButtonText)
	cy.get(signInButton).click()

    cy.get(profileUsername).should('have.text', validUsername)
})

//testSignIn{(invalid username, invalid password, false) , (test case, false)}
it('Verify unsuccessful user authentication with invalid username and password', () => {
    cy.get(usernameContainer).click()
	cy.get(usernameContainer).type(invalidUsername).should('have.value', invalidUsername)

	cy.get(passwordContainer).click()
	cy.get(passwordContainer).type(invalidPassword).should('have.value', invalidPassword)

	cy.get(signInButton).should('have.text', signInButtonText)
	cy.get(signInButton).click()

    cy.get(profileUsername).should('have.text', validUsername)
})

//testSignIn{(invalid username, invalid password, false) , (test case, true)}
it('Verify unsuccessful user authentication with invalid username and password', () => {
    cy.get(usernameContainer).click()
	cy.get(usernameContainer).type(invalidUsername).should('have.value', invalidUsername)

	cy.get(passwordContainer).click()
	cy.get(passwordContainer).type(invalidPassword).should('have.value', invalidPassword)

	cy.get(signInButton).should('have.text', signInButtonText)
	cy.get(signInButton).click()

    cy.get(signInErrorPopUp).should('be.visible');
    cy.get(signInErrorPopUp).should('have.text', signInErrorPopUpText)

    cy.get(closeSignInErrorPopUp).should('be.visible') .and('have.text', closeSignInErrorPopUpText)
	cy.get(closeSignInErrorPopUp).click()
})
