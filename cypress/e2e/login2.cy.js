Cypress.on('uncaught:exception', (err, runnable) => {
	// Fail the test
	throw err
	// Return false to prevent the error from failing the test in an unexpected way
	return false
})

const usernameContainer = '.inputs_textContainer__ksnHm > input'
const passwordContainer = '.inputs_inputContainer__YQKEw > input'
const signInButton = 'form > .TT__standard-button'
const profileUsername =':nth-child(1) > .user-quick-view_container__pFlJe > .user-quick-view_user__FkeJ_ > :nth-child(2) > .user-quick-view_playerMainContent__rDEHg > :nth-child(1)'
const signInErrorPopUp = '.modal_hero__P0JkX';
const closeSignInErrorPopUp = '.modal_action__0o7AY > .TT__standard-button';

var signInButtonText = 'Sign In'
var signInErrorPopUpText = 'Unable to log in.'
var closeSignInErrorPopUpText = 'Okay'

//Login detail
var validUsername = 'mikodemo1002'
var validPassword = 'Yes888888'
var invalidUsername = 'mickey678'
var invalidPassword = 'yes789631'

Cypress.Commands.add('Test_Login_Account', (username, password)=>{
    cy.get(usernameContainer).click()
	cy.get(usernameContainer).type(username).should('have.value', username)

    cy.get(passwordContainer).click()
	cy.get(passwordContainer).type(password).should('have.value', password)

    cy.get(signInButton).should('have.text', signInButtonText)
	cy.get(signInButton).click()
})

Cypress.Commands.add('Test_Valid_Login_Account', (username, password, profile_Username)=>{
    cy.get(usernameContainer).click()
	cy.get(usernameContainer).type(username).should('have.value', username)

    cy.get(passwordContainer).click()
	cy.get(passwordContainer).type(password).should('have.value', password)

    cy.get(signInButton).should('have.text', signInButtonText)
	cy.get(signInButton).click()

    cy.get(profileUsername).should('have.text', profile_Username)
})

Cypress.Commands.add('Sign_In_Error_message', ()=>{
    cy.get(signInErrorPopUp).should('be.visible');
    cy.get(signInErrorPopUp).should('have.text', signInErrorPopUpText)

    cy.get(closeSignInErrorPopUp).should('be.visible') .and('have.text', closeSignInErrorPopUpText)
	cy.get(closeSignInErrorPopUp).click()
})

beforeEach(() => {
	cy.visit('https://www.jufsolution3.com/auth/signin?redirect=/')
})

// testSignIn{(valid username, valid password, true) , (test case, true)}
it('Verify successful user authentication with valid username and password', () => {
	cy.Test_Valid_Login_Account(validUsername, validPassword, validUsername)
})

//testSignIn{(valid username, valid password, true) , (test case, false)}
it('Verify unsuccessful user authentication with valid username and password', () => {
    cy.Test_Valid_Login_Account(validUsername, validPassword, invalidUsername)
})

//testSignIn{(valid username, invalid password, false) , (test case, false)}
it('Verify unsuccessful user authentication with valid username and invalid password', () => {
    cy.Test_Valid_Login_Account(validUsername, invalidPassword, validUsername)
})

//testSignIn{(invalid username, valid password, false) , (test case, false)}
it('Verify unsuccessful user authentication with invalid username and valid password', () => {
    cy.Test_Valid_Login_Account(invalidUsername, validPassword, validUsername)
})

//testSignIn{(invalid username, invalid password, false) , (test case, false)}
it('Verify unsuccessful user authentication with invalid username and password', () => {
    cy.Test_Valid_Login_Account(invalidUsername, invalidPassword, validUsername)
})

//testSignIn{(invalid username, invalid password, false) , (test case, true)}
it('Verify unsuccessful user authentication with invalid username and password', () => {
    cy.Test_Login_Account(invalidUsername, invalidPassword)
    cy.Sign_In_Error_message()
})