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

//Test Submit Deposit
const depositSelectionLabel =
	':nth-child(1) > .inputs_selectContainer__O9Ic_ > label'
const depositSelectionDropdown = '.inputs_selectContainer__O9Ic_ > select'
const depositAmountContainer =
	'.amount-input_inputContainer__jUvRT > .inputs_textContainer__ksnHm > input'
const depositTransactionID =
	'.bank-transfer_transactionId__ziAat > .inputs_textContainer__ksnHm > input'
const depositSubmitButton = '#TT__deposit-submit-banktransfer'
var signInButtonText = 'Sign In'
var depositSubmitText = 'Submit Deposit'
Cypress.Commands.add('Test_Submit_Deposit', (bank, amount, transactionID) => {
	cy.get(depositSelectionLabel).should('have.text', 'Deposit to Bank')
	cy.get(depositSelectionDropdown).select(bank).should('have.value', bank)

	cy.get(depositAmountContainer).click()
	cy.get(depositAmountContainer).type(amount)

	cy.get(depositTransactionID).click()
	cy.get(depositTransactionID).type(transactionID)

	cy.get(depositSubmitButton).should('have.text', depositSubmitText)
	cy.get(depositSubmitButton).click()
})

//Deposit Success & Error message Pop Up
const depositMessagePopUp = '.modal_hero__P0JkX > .modal_title__2_dt7'
const closeDepositErrorPopUp = '.modal_action__0o7AY > .TT__standard-button'
var depositSuccessPopUpText = 'Deposit submitted'
var depositErrorPopUpText = 'Deposit Unsuccessful'
var closeDepositErrorPopUpText = 'Okay'
Cypress.Commands.add('Deposit_success_message', () => {
	cy.get(depositMessagePopUp).should('have.text', depositSuccessPopUpText)
})

Cypress.Commands.add('Deposit_Error_message', () => {
	cy.get(depositMessagePopUp).should('have.text', depositErrorPopUpText)

	cy.get(closeDepositErrorPopUp).should('have.text', closeDepositErrorPopUpText)
	cy.get(closeDepositErrorPopUp).click()
})

//Login detail
var validUsername = 'mikodemo1002'
var validPassword = 'Yes888888'

//Bank ID
var prabhuBank = '7'
var mayBank = '11'

// Deposit ID
var validDepId = 'banktransfer996'
var invalidDepId = 'testspin445'

//Deposit amount (100 < x < 10,000)
var invalidMinAmount = '50'
var invalidMaxAmount = '11000'
var validAmount = '120'

beforeEach(() => {
	cy.visit('https://www.jufsolution3.com/auth/signin?redirect=/')
	cy.Test_Login_Account(validUsername, validPassword)
	cy.Profile_Username(validUsername)
	cy.Navigation_Homepage_To_Deposit()
	cy.Deposit_Page_Label()
})

//testDeposit{(invalid amount, invalid transaction ID, false) , (test case, true)}
it('Deposit unsuccessfully with invalid amount & transaction ID', () => {
	cy.Test_Submit_Deposit(prabhuBank, invalidMinAmount, invalidDepId)
	cy.Deposit_Error_message()
})

// testDeposit{(invalid amount, invalid transaction ID, false) , (test case, false)}
it('Deposit unsuccessfully with invalid amount & transaction ID', () => {
	cy.Test_Submit_Deposit(prabhuBank, invalidMinAmount, invalidDepId)
	cy.Deposit_success_message()
})

//testDeposit{(valid amount, invalid transaction ID, false) , (test case, false)}
it('Deposit unsuccessfully with valid amount & invalid transaction ID', () => {
	cy.Test_Submit_Deposit(prabhuBank, validAmount, invalidDepId)
	cy.Deposit_success_message()
})

//testDeposit{(invalid amount, valid transaction ID, false) , (test case, false)}
it('Deposit unsuccessfully with invalid amount & valid transaction ID', () => {
	cy.Test_Submit_Deposit(prabhuBank, invalidMaxAmount, validDepId)
	cy.Deposit_success_message()
})

//testDeposit{(valid amount, valid transaction ID, true) , (test case, false)}
it.skip('Deposit successfully with invalid amount & valid transaction ID .skip()', () => {
	cy.Test_Submit_Deposit(prabhuBank, validAmount, validDepId)
	cy.Deposit_Error_message()
})

//testDeposit{(valid amount, valid transaction ID, true) , (test case, true)}
it.skip('Deposit successfully with invalid amount & valid transaction ID .skip()', () => {
	cy.Test_Submit_Deposit(prabhuBank, validAmount, validDepId)
	cy.Deposit_success_message()
})
