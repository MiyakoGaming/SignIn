//1. testChangePassword{(invalid current password, valid new password, valid retype password, false) , (test case, false)}
//2. testChangePassword{(valid current password, invalid new password, invalid retype password, false) , (test case, false)}
//3. testChangePassword{(valid current password, valid new password, invalid retype password) , (test case, false)}
//4. testChangePassword{(valid current password, invalid new password, valid retype password) , (test case, false)}
//5. testChangePassword{(valid current password, valid new password, valid retype password, true) , (test case, true)}

Cypress.on('uncaught:exception', (err, runnable) => {
	// Fail the test
	throw err
	// Return false to prevent the error from failing the test in an unexpected way
	return false
})

//Login detail
var validUsername = 'mikodemo1002'
var validPassword = 'Yes888888'

//Current Password
var currentPassword1 = 'Yes888888'
var currentPassword2 = 'Apple@678'

//New Password
var newPassword1 = "Apple@678"
var newPassword2 = "Yes888888"

//Invalid Password 5 < x < 20
var invalidCurrentPassword = "miko@5566"
var invalidNewPassword = "miko@5566"
var invalidRetypePassword = "miko@5566"
var minInvalidPassword = "abc12"
var maxInvalidPassword = '1111122222333334444455'


beforeEach(() => {
	cy.visit('https://www.jufsolution3.com/auth/signin?redirect=/')
	cy.Test_Login_Account(validUsername, validPassword)
	cy.Profile_Username(validUsername)
	cy.Click_Profile_Username()
	cy.Click_3Dot_Indicator()
	cy.Click_ChangePassword_In_3Dot()
	cy.ChangePassword_Page_Label()
})

//testChangePassword{(invalid current password, valid new password, valid retype password, false) , (test case, false)}
it.skip('Verify change password unsuccessful with invalid current password, valid new & retype password .skip()', () => {
	cy.Change_Password_Details(invalidCurrentPassword, newPassword2, newPassword2)
	cy.My_Account_Page_Label()
})

//testChangePassword{(valid current password, invalid new password, invalid retype password, false) , (test case, false)}
it.skip('Verify change password unsuccessful with valid current password, invalid new & retype password .skip()', ()=>{
	cy.Change_Password_Details(currentPassword1, minInvalidPassword, minInvalidPassword)
	cy.My_Account_Page_Label()
})

//testChangePassword{(valid current password, valid new password, invalid retype password) , (test case, false)}
it.skip('Verify change password unsuccessful with valid current & new password, invalid retype password .skip()', ()=>{
	cy.Change_Password_Details(currentPassword1, newPassword2, invalidRetypePassword)
	cy.My_Account_Page_Label()
})

//testChangePassword{(valid current password, invalid new password, valid retype password) , (test case, false)}
it.skip('Verify change password unsuccessful with valid current & retype password, invalid new password .skip()', ()=>{
	cy.Change_Password_Details(currentPassword1, invalidNewPassword, newPassword1)
	cy.My_Account_Page_Label()
})

//testChangePassword{(valid current password, valid new password, valid retype password, true) , (test case, true)}
it('Verify change password successful with valid current & new & retype password', ()=>{
	cy.Change_Password_Details(currentPassword1, newPassword1, newPassword1)
	cy.My_Account_Page_Label()
})
