//Sign In
const usernameContainer = '.inputs_textContainer__ksnHm > input'
const passwordContainer = '.inputs_inputContainer__YQKEw > input'
const signInButton = 'form > .TT__standard-button'
const profileUsername =':nth-child(1) > .user-quick-view_container__pFlJe > .user-quick-view_user__FkeJ_ > :nth-child(2) > .user-quick-view_playerMainContent__rDEHg > :nth-child(1)'
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
const homepageDepositButton = '.index_announcementActions__nhC_d > .user-quick-actions_shortcuts__RVJkw > :nth-child(1)'
const depositSelectionLabel = ':nth-child(1) > .inputs_selectContainer__O9Ic_ > label'
const depositSelectionDropdown = '.inputs_selectContainer__O9Ic_ > select'
const depositAmountContainer = '.amount-input_inputContainer__jUvRT > .inputs_textContainer__ksnHm > input'
const depositTransactionID = '.bank-transfer_transactionId__ziAat > .inputs_textContainer__ksnHm > input'
const depositSubmitButton = '#TT__deposit-submit-banktransfer'
const depositMessagePopUp = '.modal_hero__P0JkX > .modal_title__2_dt7';
const closeDepositErrorPopUp = '.modal_action__0o7AY > .TT__standard-button';

var signInButtonText = 'Sign In'
var homepageDepositText = 'Deposit'
var depositSubmitText = 'Submit Deposit'
var depositSuccessPopUpText = 'Deposit submitted'
var depositErrorPopUpText = 'Deposit Unsuccessful'
var closeDepositErrorPopUpText = 'Okay'

Cypress.Commands.add('Test_Submit_Deposit_Success',(bank, amount, transactionID)=>{
    cy.get(homepageDepositButton).click()
	cy.get(homepageDepositButton).should('have.text', homepageDepositText)

    cy.get(depositSelectionLabel).should('have.text','Deposit to Bank')
	cy.get(depositSelectionDropdown).select(bank).should('have.value', bank)

	cy.get(depositAmountContainer).click()
	cy.get(depositAmountContainer).type(amount)

	cy.get(depositTransactionID).click()
	cy.get(depositTransactionID).type(transactionID)

	cy.get(depositSubmitButton).should('have.text', depositSubmitText)
	cy.get(depositSubmitButton).click()

    cy.get(depositMessagePopUp).should('have.text', depositSuccessPopUpText)
})

Cypress.Commands.add('Test_Submit_Deposit',(bank, amount, transactionID)=>{
    cy.get(homepageDepositButton).click()
	cy.get(homepageDepositButton).should('have.text', homepageDepositText)

    cy.get(depositSelectionLabel).should('have.text','Deposit to Bank')
	cy.get(depositSelectionDropdown).select(bank).should('have.value', bank)

	cy.get(depositAmountContainer).click()
	cy.get(depositAmountContainer).type(amount)

	cy.get(depositTransactionID).click()
	cy.get(depositTransactionID).type(transactionID)

	cy.get(depositSubmitButton).should('have.text', depositSubmitText)
	cy.get(depositSubmitButton).click()
})

Cypress.Commands.add('Deposit_Error_message',()=>{
    cy.get(depositMessagePopUp).should('have.text', depositErrorPopUpText)

	cy.get(closeDepositErrorPopUp).should('have.text', closeDepositErrorPopUpText)
	cy.get(closeDepositErrorPopUp).click()
})

//Withdraw




// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })