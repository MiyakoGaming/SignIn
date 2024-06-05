Cypress.on('uncaught:exception', (err, runnable) => {
	// Fail the test
	throw err
	// Return false to prevent the error from failing the test in an unexpected way
	return false
})

//Login detail
var validUsername = 'mikodemo1002'
var validPassword = 'Yes888888'

//Bank ID
var prabhuBank ='7'
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
	cy.Test_Valid_Login_Account(validUsername, validPassword, validUsername)
})

//testDeposit{(invalid amount, invalid transaction ID, false) , (test case, true)}
it('Deposit unsuccessfully with invalid amount & transaction ID',() => {
	cy.Test_Submit_Deposit(prabhuBank, invalidMinAmount, invalidDepId)
	cy.Deposit_Error_message()
})

// testDeposit{(invalid amount, invalid transaction ID, false) , (test case, false)}
it('Deposit unsuccessfully with invalid amount & transaction ID', () => {
	cy.Test_Submit_Deposit_Success(prabhuBank, invalidMinAmount, invalidDepId)
})

//testDeposit{(valid amount, invalid transaction ID, false) , (test case, false)}
it('Deposit unsuccessfully with valid amount & invalid transaction ID', ()=>{
	cy.Test_Submit_Deposit_Success(prabhuBank, validAmount, invalidDepId)
})

//testDeposit{(invalid amount, valid transaction ID, false) , (test case, false)}
it('Deposit unsuccessfully with invalid amount & valid transaction ID', ()=>{
	cy.Test_Submit_Deposit_Success(prabhuBank, invalidMaxAmount, validDepId)
})

//testDeposit{(valid amount, valid transaction ID, true) , (test case, false)}
it.skip('Deposit successfully with invalid amount & valid transaction ID .skip()' , ()=>{
	cy.Test_Submit_Deposit(prabhuBank, validAmount, validDepId)
	cy.Deposit_Error_message()
})

//testDeposit{(valid amount, valid transaction ID, true) , (test case, true)}
it.skip('Deposit successfully with invalid amount & valid transaction ID .skip()', ()=>{
	cy.Test_Submit_Deposit_Success(prabhuBank, validAmount, validDepId)
})