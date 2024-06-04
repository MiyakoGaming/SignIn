Cypress.on('uncaught:exception', (err, runnable) => {
	// Fail the test
	throw err
	// Return false to prevent the error from failing the test in an unexpected way
	return false
})

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

//Login detail
var validUsername = 'mikodemo1002'
var validPassword = 'Yes888888'

//Bank ID
var prabhuBank ='7'
var mayBank = '11'

// Deposit ID
var validDepId1 = 'banktransfer995'
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
	cy.Test_Valid_Login_Account(validUsername, validPassword, validUsername)
})

//testDeposit{(invalid amount, invalid transaction ID, false) , (test case, true)}
it('Deposit unsuccessfully with invalid amount & transaction ID',() => {
	cy.Test_Submit_Deposit(prabhuBank, invalidAmount1, invalidDepId1)
	cy.Deposit_Error_message()
})

// testDeposit{(invalid amount, invalid transaction ID, false) , (test case, false)}
it('Deposit unsuccessfully with invalid amount & transaction ID', () => {
	cy.Test_Submit_Deposit_Success(prabhuBank, invalidAmount1, invalidDepId1)
})

//testDeposit{(valid amount, invalid transaction ID, false) , (test case, false)}
it('Deposit unsuccessfully with valid amount & invalid transaction ID', ()=>{
	cy.Test_Submit_Deposit_Success(prabhuBank, validAmount1, invalidDepId1)
})

//testDeposit{(invalid amount, valid transaction ID, false) , (test case, false)}
it('Deposit unsuccessfully with invalid amount & valid transaction ID', ()=>{
	cy.Test_Submit_Deposit_Success(prabhuBank, invalidAmount2, validDepId2)
})

//testDeposit{(valid amount, valid transaction ID, true) , (test case, false)}
it.skip('Deposit successfully with invalid amount & valid transaction ID .skip()' , ()=>{
	cy.Test_Submit_Deposit(prabhuBank, validAmount1, validDepId1)
	cy.Deposit_Error_message()
})

//testDeposit{(valid amount, valid transaction ID, true) , (test case, true)}
it.skip('Deposit successfully with invalid amount & valid transaction ID .skip()', ()=>{
	cy.Test_Submit_Deposit_Success(prabhuBank, validAmount1, validDepId1)
})