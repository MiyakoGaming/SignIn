//1. testAddBanks{(invalid length account number, no duplicate account number) , (test case, false)}
//2. testAddBanks{(valid length account number, duplicate account number) , (test case, false)}
//3. testAddBanks{(valid length account number, duplicate account number) , (test case, true)}
//4. testAddBanks{(valid length account number, no dupliacte account number) , (test case, false)}
//5. testAddBanks{(valid length account number, no dupliacte account number) , (test case, true)}
//6. testAddBanks{(valid length account number, account more than 5) , (test case, false)}
//7. testAddBanks{(valid length account number, account more than 5) , (test case, true)}

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
var invalidMinAmount = '5'
var invalidMaxAmount = '80000'
var validAmount = '60'

//Select banks
var mayBank = 'MBBE'
var nepalBank = 'NEBL'
var everestBank = 'EVBL'

//Account number (5 < x < 20)
var invalidMinAccountNumber = '1234'
var invalidMaxAccountNumber = 'AABBCC112233ddee&&($%)012'
var invalidDuplicateAccountNumber = '10799881423'
var validAccountNumber1 = '104687GGAA%^&'
var validAccountNumber2 = '1049AABB123456'

beforeEach(() => {
	cy.visit('https://www.jufsolution3.com/auth/signin?redirect=/')
	cy.Test_Login_Account(validUsername, validPassword)
	cy.Profile_Username(validUsername)
	cy.Navigation_Homepage_To_Withdraw()
	cy.Withdraw_Page_Label()
})

//testAddBanks{(invalid length account number, no duplicate account number) , (test case, false)}
it('Add new banks unsuccessfully with invalid account number & no duplicate account number ', () => {
	cy.Click_Add_New_banks_Link_To_ManageBanks()
	cy.Click_Link_a_bank_at_My_bank_Account_Page()
	cy.Select_Bank_From_Dropdown(mayBank)
	cy.Insert_Account_Number_Into_Container(invalidMaxAccountNumber)
})

//testAddBanks{(valid length account number, duplicate account number) , (test case, false)}
it('Add new banks unsuccessfully with valid length account number & duplicate account number', () => {
	cy.Click_Add_New_banks_Link_To_ManageBanks()
	cy.Click_Link_a_bank_at_My_bank_Account_Page()
	cy.Select_Bank_From_Dropdown(mayBank)
	cy.Insert_Account_Number_Into_Container(invalidDuplicateAccountNumber)
	cy.Click_Link_Bank_Account_Button()
	cy.ManageBank_Page_Label()
})

//testAddBanks{(valid length account number, duplicate account number) , (test case, true)}
it('Add new banks unsuccessfully with valid length account number & duplicate account number', () => {
	cy.Click_Add_New_banks_Link_To_ManageBanks()
	cy.Click_Link_a_bank_at_My_bank_Account_Page()
	cy.Select_Bank_From_Dropdown(mayBank)
	cy.Insert_Account_Number_Into_Container(invalidDuplicateAccountNumber)
	cy.Click_Link_Bank_Account_Button()
	cy.Error_Message_Show_When_Duplicate_Account_Number()
})

//testAddBanks{(valid length account number, no dupliacte account number) , (test case, false)}
it('Add new banks unsuccessfully with valid length account number & no duplicate account number', ()=>{
	cy.Click_Add_New_banks_Link_To_ManageBanks()
	cy.Click_Link_a_bank_at_My_bank_Account_Page()
	cy.Select_Bank_From_Dropdown(nepalBank)
	cy.Insert_Account_Number_Into_Container(validAccountNumber1)
	cy.Click_Link_Bank_Account_Button()
	cy.Error_Message_Show_When_Reach_Limit()
})

//testAddBanks{(valid length account number, no dupliacte account number) , (test case, true)}
it('Add new banks unsuccessfully with valid length account number & no duplicate account number', ()=>{
	cy.Click_Add_New_banks_Link_To_ManageBanks()
	cy.Click_Link_a_bank_at_My_bank_Account_Page()
	cy.Select_Bank_From_Dropdown(nepalBank)
	cy.Insert_Account_Number_Into_Container(validAccountNumber2)
	cy.Click_Link_Bank_Account_Button()
})

//testAddBanks{(valid length account number, account more than 5) , (test case, false)}
it('Add new banks unsuccessfully with valid length account number & no duplicate account number', ()=>{
	cy.Click_Add_New_banks_Link_To_ManageBanks()
	cy.Click_Link_a_bank_at_My_bank_Account_Page()
	cy.Select_Bank_From_Dropdown(nepalBank)
	cy.Insert_Account_Number_Into_Container(validAccountNumber2)
	cy.Error_Message_Show_When_Reach_Limit()
})

//testAddBanks{(valid length account number, account more than 5) , (test case, true)}
it('Add new banks unsuccessfully with valid length account number & no duplicate account number', ()=>{
	cy.Click_Add_New_banks_Link_To_ManageBanks()
	cy.Click_Link_a_bank_at_My_bank_Account_Page()
	cy.Error_Message_Show_When_Reach_Limit()
})
