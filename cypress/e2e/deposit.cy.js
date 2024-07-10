//1. testDeposit{(invalid amount, invalid transaction ID, false) , (test case, true)}
//2. testDeposit{(invalid amount, invalid transaction ID, false) , (test case, false)}
//3. testDeposit{(valid amount, invalid transaction ID, false) , (test case, false)}
//4. testDeposit{(invalid amount, valid transaction ID, false) , (test case, false)}
//5. testDeposit{(valid amount, valid transaction ID, true) , (test case, false)}
//6. testDeposit{(valid amount, valid transaction ID, true) , (test case, true)}


//***************************************************************** */

//1. testDeposit{(Click deposit icon in Homepage --> Deposit page) , (test case, true)}
//2. testDeposit{(Click deposit icon in Account page --> Deposit page) , (test case, true)}
//3. testDeposit{(Click deposit tab on Side Menu --> Deposit page) , (test case, true)}
//4. testDeposit{(Click deposit button in profile pop up --> Deposit page) , (test case, true)}
//5. testDeposit{(empty deposit amount (default = 0), show error message) , (test case, true)}
//6. testDeposit{(valid deposit amount, empty transaction ID, show error message) , (test case, true)}
//7. testDeposit{(invalid min deposit amount, empty transaction ID, show message below container --> Submit > show error pop up) , (test case, true)}
//8. testDeposit{(invalid max deposit amount, empty transaction ID, show message below container --> Submit > show error pop up) , (test case, true)}
//9. testDeposit{(valid deposit amount, duplicate transaction ID) , (test case, true)}
//10. testDeposit{(valid deposit amount, valid transaction ID) , (test case, true)}

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
	cy.Website_Sign_In_Page_URL()
	cy.Test_Login_Account(validUsername, validPassword)
	cy.Profile_Username(validUsername)
	// cy.Navigation_Homepage_To_Deposit()
	// cy.Deposit_Page_Label()

})

//testDeposit{(Click deposit icon in Homepage --> Deposit page) , (test case, true)}
it('Click deposit icon in Homepage --> Deposit page', ()=>{
	cy.Navigation_Homepage_To_Deposit()
	cy.Deposit_Page_Label()
})

//testDeposit{(Click deposit icon in Account page --> Deposit page) , (test case, true)}
it('Click deposit icon in Account page --> Deposit page', ()=>{
	cy.Click_Profile_Username()
	cy.My_Account_Page_Label()
	cy.Navigation_AccountPage_To_Deposit()
	cy.Deposit_Page_Label()
})

//testDeposit{(Click deposit icon on Side Menu --> Deposit page) , (test case, true)}
it('Click deposit icon on Side Menu --> Deposit page', ()=>{
	cy.Click_Profile_Username()
	cy.Navigation_Homepage_To_Withdraw()
	cy.Navigation_SideMenu_To_Deposit()
	cy.Deposit_Page_Label()
})

//testDeposit{(Click deposit button in profile pop up --> Deposit page) , (test case, true)}
it.skip('Click deposit button in profile pop up --> Deposit page', ()=>{
	
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
