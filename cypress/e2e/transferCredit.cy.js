//1. testTransfer{(Transfer credit into Provider on Transfer page, min invalid amount) , (test case, true)}
//2. testTransfer{(Transfer credit into Provider on Transfer page, max invalid amount) , (test case, true)}
//3. testTransfer{(Transfer credit into Provider on Transfer page, valid amount) , (test case, true)}
//4. testTransfer{(Transfer credit into main wallet on Transfer page, min invalid amount) , (test case, true)}
//5. testTransfer{(Transfer credit into main wallet on Transfer page, max invalid amount) , (test case, true)}
//6. testTransfer{(Transfer credit into main wallet on Transfer page, valid amount) , (test case, true)}
//7. testTransfer{(Transfer from Homepage Transfer Pop Up, invalid min amount) , (test case, true)}
//8. testTransfer{(Transfer from Homepage Transfer Pop Up, invalid max amount) , (test case, true)}
//9. testTransfer{(Transfer from Homepage Transfer Pop Up, valid amount) , (test case, true)}
//10. testTransfer{(Click Restore Credit, single provider) , (test case, true)}
//11. testTransfer{(Click All in, single provider) , (test case, true)}
//12. testTransfer{(Click Restore All, all providers) , (test case, true)}

Cypress.on('uncaught:exception', (err, runnable) => {
	// Fail the test
	throw err
	// Return false to prevent the error from failing the test in an unexpected way
	return false
})

//Login detail
var validUsername = 'mikodemo1002'
var validPassword = 'Yes888888'

//Game Provider Code
var mainWallet = 'main-wallet'
var joker = 'JK'
var Playtech = 'PZ'

//Transfer amount (0 < x < main wallet / provider wallet)
var invalidMinTransferAmount = '0'
var invalidMaxTransferAmount = '500'
var validTransferAmount = '50'

beforeEach(() => {
	cy.visit('https://www.jufsolution3.com/auth/signin?redirect=/')
	cy.Test_Login_Account(validUsername, validPassword)
	cy.Profile_Username(validUsername)
})

//testTransfer{(Transfer credit into Provider on Transfer page, min invalid amount) , (test case, true)}
it.skip('Verify transfer invalid credit into provider on Transfer Page .skip()', () => {
	cy.Navigation_Homepage_To_Transfer()
})

//testTransfer{(Transfer credit into Provider on Transfer page, max invalid amount) , (test case, true)}
it.skip('Verify transfer invalid credit into provider on Transfer Page .skip()', () => {
	cy.Navigation_Homepage_To_Transfer()
})

//testTransfer{(Transfer credit into Provider on Transfer page, valid amount) , (test case, true)}
it.skip('Verify transfer valid credit into provider on Transfer Page .skip()', () => {
	cy.Navigation_Homepage_To_Transfer()
})

//testTransfer{(Transfer credit into main wallet on Transfer page, min invalid amount) , (test case, true)}
it.skip('Verify transfer invalid credit into main wallet on Transfer Page .skip', () => {
	cy.Navigation_Homepage_To_Transfer()
})

//testTransfer{(Transfer credit into main wallet on Transfer page, max invalid amount) , (test case, true)}
it.skip('Verify transfer invalid credit into main wallet on Transfer Page .skip()', () => {
	cy.Navigation_Homepage_To_Transfer()
})

//testTransfer{(Transfer credit into main wallet on Transfer page, valid amount) , (test case, true)}
it.skip('Verify transfer valid credit into main wallet on Transfer Page .skip()', () => {
	cy.Navigation_Homepage_To_Transfer()
})

//testTransfer{(Transfer from Homepage Transfer Pop Up, min invalid amount) , (test case, true)}
it('Verify transfer valid credit into main wallet on Transfer Page', () => {
	cy.Slots_Category_Tab()
	cy.Game_Sequence_1()
	cy.Open_Transfer_Pop_Up()
	cy.Insert_Transfer_Amount_In_Transfer_Pop_Up(invalidMinTransferAmount)
	cy.Click_Transfer_Button_In_Transfer_Pop_Up()
	cy.Transfer_Amount_Less_Then_1_Error_Pop_Up()
})

//testTransfer{(Transfer from Homepage Transfer Pop Up, max invalid amount) , (test case, true)}
it('Verify transfer valid credit into main walletr on Transfer Page', () => {
	cy.Slots_Category_Tab()
	cy.Game_Sequence_1()
	cy.Open_Transfer_Pop_Up()
	cy.Insert_Transfer_Amount_In_Transfer_Pop_Up(invalidMaxTransferAmount)
	cy.Transfer_Pop_Up_Transfer_Button_Disable()
})

//testTransfer{(Transfer from Homepage Transfer Pop Up, valid amount) , (test case, true)}
it.skip('Verify transfer valid credit into main walletr on Transfer Page .skip()', () => {
	
})

//testTransfer{(Click Restore Credit, single provider) , (test case, true)}

//testTransfer{(Click All in, single provider) , (test case, true)}

//testTransfer{(Click Restore All, all providers) , (test case, true)}
