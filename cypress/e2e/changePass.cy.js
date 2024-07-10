//1. testChangePassword{(Click Change Password tab on Side Menu --> Change Password page) , (test case, true)}
//2. testChangePassword{(Click Change Password tab on Account Page indicator --> Change Password page) , (test case, true)}
//3. testChangePassword{(invalid current password, valid new password, valid retype password) , (test case, true)}
//4. testChangePassword{(invalid length current password (x < 8), valid new password, valid retype password, length validation) , (test case, true)}
//5. testChangePassword{(invalid length current password (x > 8), valid new password, valid retype password, length validation) , (test case, true)}
//6. testChangePassword{(valid current password, invalid length new password (x < 8), invalid retype password (same as new password), length validation) , (test case, true)}
//7. testChangePassword{(valid current password, invalid length new password (x > 8), invalid retype password (same as new password), length validation) , (test case, true)}
//8. testChangePassword{(invalid current password, invalid length new password (x < 8), invalid retype password (same as new password), length validation) , (test case, true)}
//9. testChangePassword{(invalid current password, invalid length new password (x > 8), invalid retype password (same as new password)) , (test case, true)}
//10. testChangePassword{(valid current password, valid new password, invalid retype password (not same as new password)) , (test case, true)}
//11. testChangePassword{(valid current password, valid new password, invalid retype password (x < 8), length validation) , (test case, true)}
//12. testChangePassword{(valid current password, valid new password, invalid retype password (x > 8), length validation) , (test case, true)}
//13. testChangePassword{(valid current password, valid new password, valid retype password, true) , (test case, true)}
//14. testChangePassword{(empty current password, empty new password, empty retype password, current password show message) , (test case, true)}
//15. testChangePassword{(valid current password, empty new password, empty retype password, new password show message) , (test case, true)}
//16. testChangePassword{(valid current password, valid new password, empty retype password, retype password show message) , (test case, true)}

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
var newPassword1 = 'Apple@678'
var newPassword2 = 'Yes888888'
var minInvalidPassword = 'abc12'
var maxInvalidPassword = '1111122222333334444455555666667777788888999'

beforeEach(() => {
	cy.Website_Sign_In_Page_URL()
	cy.Test_Login_Account(validUsername, validPassword)
	cy.Profile_Username(validUsername)
	cy.Click_Profile_Username()
})

//testChangePassword{(Click Change Password tab on Side Menu --> Change Password page) , (test case, true)}
it('Click Change Password tab on Side Menu --> Change Password page', () => {
	cy.Navigation_Homepage_To_Deposit()
	cy.Navigation_SideMenu_To_ChangePassword()
	cy.ChangePassword_Page_Label()
})

//testChangePassword{(Click Change Password tab on Account Page indicator --> Change Password page) , (test case, true)}
it('Click Change Password tab on Account Page indicator --> Change Password page', () => {
	cy.Click_3Dot_Indicator()
	cy.Click_ChangePassword_In_3Dot()
	cy.ChangePassword_Page_Label()
})

//testChangePassword{(invalid current password, valid new password, valid retype password) , (test case, true)}
it.skip('Verify change password unsuccessful with invalid current password, valid new & retype password', () => {
	cy.Click_3Dot_Indicator()
	cy.Click_ChangePassword_In_3Dot()
	cy.ChangePassword_Page_Label()
	cy.Insert_Current_Password_Detail_Without_Validation(currentPassword2)
	cy.Insert_New_Password_Detail_Without_Validation(currentPassword2)
	cy.Insert_Retype_Password_Detail_With_Validation(currentPassword2)
	cy.Submit_Change_Password()
	cy.Current_Password_Error_Message()
})

//testChangePassword{(invalid length current password (x < 8), valid new password, valid retype password, length validation) , (test case, true)}
it.skip('Verify change password unsuccessful with invalid min length current password, valid new & retype password', () => {
	cy.Click_3Dot_Indicator()
	cy.Click_ChangePassword_In_3Dot()
	cy.ChangePassword_Page_Label()
	cy.Insert_Current_Password_Detail_Without_Validation(minInvalidPassword)
	cy.Insert_New_Password_Detail_Without_Validation(currentPassword2)
	cy.Insert_Retype_Password_Detail_Without_Validation(currentPassword2)
	cy.Submit_Change_Password()
	cy.Current_Password_Error_Message()
})

//testChangePassword{(invalid length current password (x > 8), valid new password, valid retype password, length validation) , (test case, true)}
it.skip('Verify change password unsuccessful with invalid max length current password, valid new & retype password', () => {
	cy.Click_3Dot_Indicator()
	cy.Click_ChangePassword_In_3Dot()
	cy.ChangePassword_Page_Label()
	cy.Insert_Current_Password_Detail_Without_Validation(maxInvalidPassword)
	cy.Insert_New_Password_Detail_Without_Validation(currentPassword2)
	cy.Insert_Retype_Password_Detail_Without_Validation(currentPassword2)
	cy.Submit_Change_Password()
	cy.Current_Password_Error_Message()
})

//testChangePassword{(valid current password, invalid length new password (x < 8), invalid retype password (same as new password), length validation) , (test case, true)}
it.skip('Verify change password unsuccessful with valid current password, invalid min length new & retype password', () => {
	cy.Click_3Dot_Indicator()
	cy.Click_ChangePassword_In_3Dot()
	cy.ChangePassword_Page_Label()
	cy.Insert_Current_Password_Detail_With_Validation(currentPassword1)
	cy.Insert_New_Password_Detail_Without_Validation(minInvalidPassword)
	cy.Insert_Retype_Password_Detail_Without_Validation(minInvalidPassword)
	cy.Submit_Change_Password()
	cy.New_Password_Error_Message()
})

//testChangePassword{(valid current password, invalid length new password (x > 8), invalid retype password (same as new password), length validation) , (test case, true)}
it.skip('Verify change password unsuccessful with valid current password, invalid max length new & retype password', () => {
	cy.Click_3Dot_Indicator()
	cy.Click_ChangePassword_In_3Dot()
	cy.ChangePassword_Page_Label()
	cy.Insert_Current_Password_Detail_With_Validation(currentPassword1)
	cy.Insert_New_Password_Detail_Without_Validation(maxInvalidPassword)
	cy.Insert_Retype_Password_Detail_Without_Validation(maxInvalidPassword)
	cy.Submit_Change_Password()
	cy.New_Password_Error_Message()
})

//testChangePassword{(invalid current password, invalid length new password (x < 8), invalid retype password (same as new password), length validation) , (test case, true)}
it.skip('Verify change password unsuccessful with invalid current password, invalid max length new & retype password', () => {
	cy.Click_3Dot_Indicator()
	cy.Click_ChangePassword_In_3Dot()
	cy.ChangePassword_Page_Label()
	cy.Insert_Current_Password_Detail_Without_Validation(currentPassword2)
	cy.Insert_New_Password_Detail_Without_Validation(minInvalidPassword)
	cy.Insert_Retype_Password_Detail_Without_Validation(minInvalidPassword)
	cy.Submit_Change_Password()
	cy.New_Password_Error_Message()
})

//testChangePassword{(invalid current password, invalid length new password (x > 8), invalid retype password (same as new password), length validation) , (test case, true)}
it.skip('Verify change password unsuccessful with invalid current password, invalid max length new & retype password', () => {
	cy.Click_3Dot_Indicator()
	cy.Click_ChangePassword_In_3Dot()
	cy.ChangePassword_Page_Label()
	cy.Insert_Current_Password_Detail_Without_Validation(currentPassword2)
	cy.Insert_New_Password_Detail_Without_Validation(maxInvalidPassword)
	cy.Insert_Retype_Password_Detail_Without_Validation(maxInvalidPassword)
	cy.Submit_Change_Password()
	cy.New_Password_Error_Message()
})

//testChangePassword{(valid current password, valid new password, invalid retype password (not same as new password)) , (test case, true)}
it.skip('Verify change password unsuccessful with valid current password & new password, invalid retype password', () => {
	cy.Click_3Dot_Indicator()
	cy.Click_ChangePassword_In_3Dot()
	cy.ChangePassword_Page_Label()
	cy.Insert_Current_Password_Detail_Without_Validation(currentPassword1)
	cy.Insert_New_Password_Detail_Without_Validation(currentPassword2)
	cy.Insert_Retype_Password_Detail_Without_Validation(currentPassword1)
	cy.Submit_Change_Password()
	cy.Retype_Password_Error_Message()
})

//testChangePassword{(valid current password, valid new password, invalid retype password (x < 8), length validation) , (test case, true)}
it.skip('Verify change password unsuccessful with valid current password & new password, invalid min length retype password', () => {
	cy.Click_3Dot_Indicator()
	cy.Click_ChangePassword_In_3Dot()
	cy.ChangePassword_Page_Label()
	cy.Insert_Current_Password_Detail_Without_Validation(currentPassword1)
	cy.Insert_New_Password_Detail_Without_Validation(currentPassword2)
	cy.Insert_Retype_Password_Detail_Without_Validation(minInvalidPassword)
	cy.Submit_Change_Password()
	cy.Retype_Password_Error_Message()
})

//testChangePassword{(valid current password, valid new password, invalid retype password (x > 8), length validation) , (test case, true)}
it.skip('Verify change password unsuccessful with valid current password & new password, invalid max length retype password', () => {
	cy.Click_3Dot_Indicator()
	cy.Click_ChangePassword_In_3Dot()
	cy.ChangePassword_Page_Label()
	cy.Insert_Current_Password_Detail_Without_Validation(currentPassword1)
	cy.Insert_New_Password_Detail_Without_Validation(currentPassword2)
	cy.Insert_Retype_Password_Detail_Without_Validation(maxInvalidPassword)
	cy.Submit_Change_Password()
	cy.Retype_Password_Error_Message()
})

//testChangePassword{(valid current password, valid new password, valid retype password, true) , (test case, true)}
it.skip('Verify change password unsuccessful with valid current password, new password, retype password', () => {
	cy.Click_3Dot_Indicator()
	cy.Click_ChangePassword_In_3Dot()
	cy.ChangePassword_Page_Label()
	cy.Insert_Current_Password_Detail_With_Validation(currentPassword2)
	cy.Insert_New_Password_Detail_With_Validation(currentPassword1)
	cy.Insert_Retype_Password_Detail_With_Validation(currentPassword1)
	cy.Submit_Change_Password()
	cy.My_Account_Page_Label(validUsername)
})

//testChangePassword{(empty current password, empty new password, empty retype password, current password show message) , (test case, true)}
it.skip('Verify change password unsuccessful with empty current password, valid new & retype password', () => {
	cy.Click_3Dot_Indicator()
	cy.Click_ChangePassword_In_3Dot()
	cy.ChangePassword_Page_Label()
	cy.Insert_New_Password_Detail_With_Validation(currentPassword2)
	cy.Insert_Retype_Password_Detail_With_Validation(currentPassword2)
	cy.Submit_Change_Password()
	cy.Current_Password_Validation_Message()
})

//testChangePassword{(valid current password, empty new password, empty retype password, new password show message) , (test case, true)}
it.skip('Verify change password unsuccessful with valid current & retype password, empty new password', () => {
	cy.Click_3Dot_Indicator()
	cy.Click_ChangePassword_In_3Dot()
	cy.ChangePassword_Page_Label()
	cy.Insert_Current_Password_Detail_With_Validation(currentPassword1)
	cy.Insert_Retype_Password_Detail_With_Validation(currentPassword2)
	cy.Submit_Change_Password()
	cy.New_Password_Validation_Message()
})

//testChangePassword{(valid current password, valid new password, empty retype password, retype password show message) , (test case, true)}
it('Verify change password unsuccessful with valid current password, new password, retype password', () => {
	cy.Click_3Dot_Indicator()
	cy.Click_ChangePassword_In_3Dot()
	cy.ChangePassword_Page_Label()
	cy.Insert_Current_Password_Detail_With_Validation(currentPassword1)
	cy.Insert_New_Password_Detail_With_Validation(currentPassword2)
	cy.Submit_Change_Password()
	cy.Retype_Password_Validation_Message()
})
