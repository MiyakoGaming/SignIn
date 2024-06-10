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

//Test Submit Withdraw
const withdrawAmountContainer = '.amount-input_amount__MY83h > input'
const withdrawSubmitButton = '.withdraw_submit__Ga6iu > .TT__standard-button'
var withdrawSubmitButtonText = 'Submit'

Cypress.Commands.add('Insert_Withdraw_Amount', withdrawAmount => {
	cy.get(withdrawAmountContainer).click()
	cy.get(withdrawAmountContainer).clear()
	cy.get(withdrawAmountContainer).type(withdrawAmount)
})

Cypress.Commands.add('Select_Withdraw_Bank_Checkbox', checkboxBank => {
	cy.get(checkboxBank).check()
})

Cypress.Commands.add('Click_Withdraw_Submit_Button', () => {
	cy.get(withdrawSubmitButton).should('have.text', withdrawSubmitButtonText)
	cy.get(withdrawSubmitButton).click()
})

//Confirm and Cancel Submit Withdraw Pop Up
const withdrawConfimationPopUp = '.react-confirm-alert'
const cancelSubmitWithdraw = '.buttons_link__UIxx_'
const confirmSubmitWithdraw = '.react-confirm-alert-button__success'
var cancelSubmitWithdrawText = 'Cancel'
var confirmSubmitWithdrawText = 'Withdraw'
Cypress.Commands.add('Cancel_Submit_Withdraw', () => {
	cy.get(withdrawConfimationPopUp)
	cy.get(cancelSubmitWithdraw).should('have.text', cancelSubmitWithdrawText)
	cy.get(cancelSubmitWithdraw).click()
})

Cypress.Commands.add('Confirm_Submit_Withdraw', () => {
	cy.get(withdrawConfimationPopUp)
	cy.get(confirmSubmitWithdraw).should('have.text', confirmSubmitWithdrawText)
	cy.get(confirmSubmitWithdraw).click()
})

//Withdraw & Uncheck Bank Error Message Pop Up
const withdrawErrorPopUp = '.modal_hero__P0JkX'
const uncheckBankErrorPopUp = '.modal_message__hHpBD'
const closeWithdrawErrorPopUpButton = '.modal_action__0o7AY > .TT__standard-button'
var withdrawErrorPopUpText = 'Error occurred!'
var uncheckBankErrorPopUpText = "Please select a bank."
var closeWithdrawErrorPopUpButtonText = 'Okay'

Cypress.Commands.add('Withdraw_Error_Message_Pop_Up', ()=>{
	cy.get(withdrawErrorPopUp).should('have.text', withdrawErrorPopUpText)
	cy.get(closeWithdrawErrorPopUpButton).should('have.text', closeWithdrawErrorPopUpButtonText)
	cy.get(closeWithdrawErrorPopUpButton).click()
})

Cypress.Commands.add('Withdraw_Uncheck_Bank_Error_Message_Pop_Up', ()=>{
	cy.get(uncheckBankErrorPopUp).should('have.text', uncheckBankErrorPopUpText)
	cy.get(closeWithdrawErrorPopUpButton).should('have.text', closeWithdrawErrorPopUpButtonText)
	cy.get(closeWithdrawErrorPopUpButton).click()
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
	cy.visit('https://www.jufsolution3.com/auth/signin?redirect=/')
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