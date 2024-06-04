//1. testDeposit{(invalid amount, invalid transaction ID, false) , (test case, true)}
//2. testDeposit{(invalid amount, invalid transaction ID, false) , (test case, false)}
//3. testDeposit{(valid amount, invalid transaction ID, false) , (test case, false)}
//4. testDeposit{(invalid amount, valid transaction ID, false) , (test case, false)}
//5. testDeposit{(valid amount, valid transaction ID, true) , (test case, false)}
//6. testDeposit{(valid amount, valid transaction ID, true) , (test case, true)}

Cypress.on('uncaught:exception', (err, runnable) => {
	// Fail the test
	throw err
	// Return false to prevent the error from failing the test in an unexpected way
	return false
})

//Website Deposit Page class name
const homepageDepositButton = '.index_announcementActions__nhC_d > .user-quick-actions_shortcuts__RVJkw > :nth-child(1)'
const depositSelectionLabel = ':nth-child(1) > .inputs_selectContainer__O9Ic_ > label'
const depositSelectionDropdown = '.inputs_selectContainer__O9Ic_ > select'
const depositAmountContainer = '.amount-input_inputContainer__jUvRT > .inputs_textContainer__ksnHm > input'
const depositTransactionID = '.bank-transfer_transactionId__ziAat > .inputs_textContainer__ksnHm > input'
const depositSubmitButton = '#TT__deposit-submit-banktransfer'
const depositMessagePopUp = '.modal_hero__P0JkX > .modal_title__2_dt7';
const closeDepositErrorPopUp = '.modal_action__0o7AY > .TT__standard-button';

//Text
var signInButtonText = 'Sign In'
var homepageDepositText = 'Deposit'
var depositSubmitText = 'Submit Deposit'
var depositSuccessPopUpText = 'Deposit submitted'
var depositErrorPopUpText = 'Deposit Unsuccessful'
var closeDepositErrorPopUpText = 'Okay'

//Login detail
var validUsername = 'mikodemo1002'
var validPassword = 'Yes888888'


//Bank ID
var prabhuBank ='7'
var mayBank = '11'

// Deposit ID
var validDepId1 = 'banktransfer997'
var validDepId2 = 'banktransfer996'
var invalidDepId1 = 'testspin445'
var invalidDepId2 = 'Test notification 12334'

//Deposit amount (100 < x < 10,000)
var invalidAmount1 = '50'
var invalidAmount2 = '11000'
var validAmount1 = '120'
var validAmount2 = '500'

beforeEach(() => {
	cy.visit('https://www.jufsolution3.com/auth/signin?redirect=/')

	cy.Test_Valid_Login_Account(validUsername, validPassword)

	cy.get(homepageDepositButton).click()
	cy.get(homepageDepositButton).should('have.text', homepageDepositText)
})

//testDeposit{(invalid amount, invalid transaction ID, false) , (test case, true)}
it('Deposit unsuccessfully with invalid amount & transaction ID',() => {

	cy.get(depositSelectionLabel).should('have.text','Deposit to Bank')
	cy.get(depositSelectionDropdown).select(prabhuBank).should('have.value', prabhuBank)

	cy.get(depositAmountContainer).click()
	cy.get(depositAmountContainer).type(invalidAmount1)

	cy.get(depositTransactionID).click()
	cy.get(depositTransactionID).type(invalidDepId1)

	cy.get(depositSubmitButton).should('have.text', depositSubmitText)
	cy.get(depositSubmitButton).click()

	cy.get(depositMessagePopUp).should('have.text', depositErrorPopUpText)

	cy.get(closeDepositErrorPopUp).should('have.text', closeDepositErrorPopUpText)
	cy.get(closeDepositErrorPopUp).click()
})

//testDeposit{(invalid amount, invalid transaction ID, false) , (test case, false)}
it('Deposit unsuccessfully with invalid amount & transaction ID', () => {
	cy.get(depositSelectionLabel).should('have.text','Deposit to Bank')
	cy.get(depositSelectionDropdown).select(prabhuBank).should('have.value', prabhuBank)

	cy.get(depositAmountContainer).click()
	cy.get(depositAmountContainer).type(invalidAmount1)

	cy.get(depositTransactionID).click()
	cy.get(depositTransactionID).type(invalidDepId1)

	cy.get(depositSubmitButton).should('have.text', depositSubmitText)
	cy.get(depositSubmitButton).click()

	cy.get(depositMessagePopUp).should('have.text', depositSuccessPopUpText)
})

//testDeposit{(valid amount, invalid transaction ID, false) , (test case, false)}
it('Deposit unsuccessfully with valid amount & invalid transaction ID', ()=>{
	cy.get(depositSelectionLabel).should('have.text','Deposit to Bank')
	cy.get(depositSelectionDropdown).select(prabhuBank).should('have.value', prabhuBank)

	cy.get(depositAmountContainer).click()
	cy.get(depositAmountContainer).type(validAmount1)

	cy.get(depositTransactionID).click()
	cy.get(depositTransactionID).type(invalidDepId1)

	cy.get(depositSubmitButton).should('have.text', depositSubmitText)
	cy.get(depositSubmitButton).click()

	cy.get(depositMessagePopUp).should('have.text', depositSuccessPopUpText)
})

//testDeposit{(invalid amount, valid transaction ID, false) , (test case, false)}
it('Deposit unsuccessfully with invalid amount & valid transaction ID', ()=>{

})

//testDeposit{(valid amount, valid transaction ID, true) , (test case, false)}
it('Deposit unsuccessfully with invalid amount & valid transaction ID', ()=>{
	
})

//testDeposit{(valid amount, valid transaction ID, true) , (test case, true)}
it('Deposit unsuccessfully with invalid amount & valid transaction ID', ()=>{
	
})