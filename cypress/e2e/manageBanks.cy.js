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

//Click "Link a bank" tab at My bank account page
const linkABankButton = '.banks_newBank__Ul2Bc'
var linkABankButtonText = 'Link a bank'
Cypress.Commands.add('Click_Link_a_bank_at_My_bank_Account_Page', () => {
	cy.get(linkABankButton).should('have.text', linkABankButtonText)
	cy.get(linkABankButton).click('center')
})

//Select bank from dropdown list
const selectBankFromDropdown = '.inputs_selectContainer__O9Ic_ > select'
Cypress.Commands.add('Select_Bank_From_Dropdown', selectBank => {
	cy.get(selectBankFromDropdown)
		.select(selectBank)
		.should('have.value', selectBank)
})

//Account Number container
const accountNumberContainer = 'form > :nth-child(1) > input'
var accountNumberContainerPlaceholder = '1234567890'
Cypress.Commands.add('Insert_Account_Number_Into_Container', accountNumber => {
	cy.get(accountNumberContainer)
		.invoke('attr', 'placeholder')
		.should('eq', accountNumberContainerPlaceholder)
	cy.get(accountNumberContainer).click()
	cy.get(accountNumberContainer).type(accountNumber)
	cy.get(accountNumberContainer)
		.invoke('val')
		.should('eq', accountNumber)
		.and('have.length.gte', 4)
		.and('have.length.lte', 20)
})

//Click "Link bank account" add bank
const linkBankAccountButton =
	'.bank-inputs_actionContainer__OTY__ > .TT__standard-button'
var linkBankAccountButtonText = 'Link bank account'
Cypress.Commands.add('Click_Link_Bank_Account_Button', () => {
	cy.get(linkBankAccountButton).should('have.text', linkBankAccountButtonText)
	cy.get(linkBankAccountButton).click()
})

//Duplicated account number error pop up
const duplicatedAccountNumberPopUp = '.modal_message__hHpBD'
const closeDuplicatedAccountNumberPopUp =
	'.modal_action__0o7AY > .TT__standard-button'
var duplicatedAccountNumberPopUpText =
	'Seems like you have the same bank account number, please use another bank account'
var closeDuplicatedAccountNumberPopUpText = 'Okay'
Cypress.Commands.add('Error_Message_Show_When_Duplicate_Account_Number', () => {
	cy.get(duplicatedAccountNumberPopUp).should(
		'have.text',
		duplicatedAccountNumberPopUpText
	)
	cy.get(closeDuplicatedAccountNumberPopUp).should(
		'have.text',
		closeDuplicatedAccountNumberPopUpText
	)
	cy.get(closeDuplicatedAccountNumberPopUp).click()
})

//Show error message when reach bank account limit
const reachLimitErrorPanel = '.errorPanel'
var reachLimitErrorPanelText = 'You cannot have more than 5 bank accounts.'
Cypress.Commands.add('Error_Message_Show_When_Reach_Limit', () => {
	cy.get(reachLimitErrorPanel).should('have.text', reachLimitErrorPanelText)
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
