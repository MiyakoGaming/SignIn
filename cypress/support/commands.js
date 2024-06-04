// Test Login 
const usernameContainer = '.inputs_textContainer__ksnHm > input'
const passwordContainer = '.inputs_inputContainer__YQKEw > input'
const signInButton = 'form > .TT__standard-button'
const profileUsername =
	':nth-child(1) > .user-quick-view_container__pFlJe > .user-quick-view_user__FkeJ_ > :nth-child(2) > .user-quick-view_playerMainContent__rDEHg > :nth-child(1)'
const signInErrorPopUp = '.modal_hero__P0JkX';
const closeSignInErrorPopUp = '.modal_action__0o7AY > .TT__standard-button';

var signInButtonText = 'Sign In'
var signInErrorPopUpText = 'Unable to log in.'
var closeSignInErrorPopUpText = 'Okay'

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

//Deposit