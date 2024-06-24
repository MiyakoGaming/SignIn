//1. testWithdraw{(invalid amount, uncheck bank, false) , (test case, false)}
//2. testWithdraw{(invalid amount, uncheck bank, false) , (test case, true)}
//3. testWithdraw{(invalid amount, check bank, false) , (test case, false)}
//4. testWithdraw{(invalid amount, check bank, false) , (test case, true)}
//5. testWithdraw{(valid amount, uncheck bank, false) , (test case, false)}
//6. testWithdraw{(valid amount, uncheck bank, false) , (test case, true)}
//7. testWithdraw{(valid amount, check bank, true) , (test case, false)}
//8. testWithdraw{(valid amount, check bank, true, cancel) , (test case, true)}
//9. testWithdraw{(valid amount, check bank, true, confirm) , (test case, true)}

Cypress.on('uncaught:exception', (err, runnable) => {
	// Fail the test
	throw err
	// Return false to prevent the error from failing the test in an unexpected way
	return false
})

//Login detail
var validUsername = 'mikodemo1002'
var validPassword = 'Yes888888'

//Withdraw amount (10 < x < main wallet amount)
var invalidMinAmount = '500' //MYR 5
var invalidMaxAmount = '8000000' //MYR 80,000
var validAmount = '6000' //MYR 60

//Withdraw Bank Checkbox
const checkboxBank1 = '#bank__396'
const checkboxBank2 = '#bank__399'

beforeEach(() => {
	cy.Website_Sign_In_Page_URL()
	cy.Test_Login_Account(validUsername, validPassword)
	cy.Profile_Username(validUsername)
	cy.Navigation_Homepage_To_Withdraw()
	cy.Withdraw_Page_Label()
})

//testWithdraw{(invalid amount, uncheck bank, false) , (test case, false)}
it('Withdraw unsuccessfully with invalid amount & uncheck bank', ()=>{
	cy.Insert_Withdraw_Amount(invalidMinAmount)
	cy.Click_Withdraw_Submit_Button()
	cy.Cancel_Submit_Withdraw()
})

//testWithdraw{(invalid amount, uncheck bank, false) , (test case, true)}
it('Withdraw unsuccessfully with invalid amount & uncheck bank', ()=>{
	cy.Insert_Withdraw_Amount(invalidMinAmount)
	cy.Click_Withdraw_Submit_Button()
	cy.Withdraw_Error_Message_Pop_Up()
})

//testWithdraw{(invalid amount, check bank, false) , (test case, false)}
it('Withdraw unsuccessfully with invalid amount & check bank', ()=>{
	cy.Insert_Withdraw_Amount(invalidMinAmount)
	cy.Select_Withdraw_Bank_Checkbox(checkboxBank1)
	cy.Click_Withdraw_Submit_Button()
	cy.Cancel_Submit_Withdraw()
})

//testWithdraw{(invalid amount, check bank, false) , (test case, true)}
it('Withdraw unsuccessfully with invalid amount & check bank', ()=>{
	cy.Insert_Withdraw_Amount(invalidMinAmount)
	cy.Select_Withdraw_Bank_Checkbox(checkboxBank1)
	cy.Click_Withdraw_Submit_Button()
	cy.Withdraw_Error_Message_Pop_Up()
})

//testWithdraw{(valid amount, uncheck bank, false) , (test case, false)}
it('Withdraw unsuccessfully with valid amount & uncheck bank', ()=>{
	cy.Insert_Withdraw_Amount(validAmount)
	cy.Click_Withdraw_Submit_Button()
	cy.Cancel_Submit_Withdraw()
})

//testWithdraw{(valid amount, uncheck bank, false) , (test case, true)}
it('Withdraw unsuccessfully with valid amount & uncheck bank', ()=>{
	cy.Insert_Withdraw_Amount(validAmount)
	cy.Click_Withdraw_Submit_Button()
	cy.Withdraw_Uncheck_Bank_Error_Message_Pop_Up()
})

//testWithdraw{(valid amount, check bank, true) , (test case, false)}
it('Withdraw unsuccessfully with valid amount & check bank' , ()=>{
	cy.Insert_Withdraw_Amount(validAmount)
	cy.Select_Withdraw_Bank_Checkbox(checkboxBank1)
	cy.Click_Withdraw_Submit_Button()
	cy.Withdraw_Error_Message_Pop_Up()
})

//testWithdraw{(valid amount, check bank, true, cancel) , (test case, true)}
it('Withdraw unsuccessfully with valid amount & check bank' , ()=>{
	cy.Insert_Withdraw_Amount(validAmount)
	cy.Select_Withdraw_Bank_Checkbox(checkboxBank1)
	cy.Click_Withdraw_Submit_Button()
	cy.Cancel_Submit_Withdraw()
})

//testWithdraw{(valid amount, check bank, true, confirm) , (test case, true)}
it('Withdraw unsuccessfully with valid amount & check bank' , ()=>{
	cy.Insert_Withdraw_Amount(validAmount)
	cy.Select_Withdraw_Bank_Checkbox(checkboxBank1)
	cy.Click_Withdraw_Submit_Button()
	cy.Confirm_Submit_Withdraw()
})