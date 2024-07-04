//1. testChangePassword{(invalid current password, valid new password, valid retype password) , (test case, false)}
//2. testChangePassword{(invalid current password, valid new password, valid retype password) , (test case, true)}
//3. testChangePassword{(invalid length current password (x < 8), valid new password, valid retype password, length validation) , (test case, false)}
//4. testChangePassword{(invalid length current password (x < 8), valid new password, valid retype password) , (test case, true)}
//5. testChangePassword{(invalid length current password (x > 8), valid new password, valid retype password, length validation) , (test case, false)}
//6. testChangePassword{(invalid length current password (x > 8), valid new password, valid retype password) , (test case, true)}
//7. testChangePassword{(valid current password, invalid length new password (x < 8), invalid retype password (same as new password), length validation) , (test case, false)}
//8. testChangePassword{(valid current password, invalid length new password (x < 8), invalid retype password (same as new password)) , (test case, true)}
//9. testChangePassword{(valid current password, invalid length new password (x > 8), invalid retype password (same as new password), length validation) , (test case, false)}
//10. testChangePassword{(valid current password, invalid length new password (x > 8), invalid retype password (same as new password)) , (test case, true)}
//11. testChangePassword{(invalid current password, invalid length new password (x < 8), invalid retype password (same as new password), length validation) , (test case, false)}
//12. testChangePassword{(invalid current password, invalid length new password (x > 8), invalid retype password (same as new password)) , (test case, true)}
//13. testChangePassword{(valid current password, valid new password, invalid retype password (not same as new password)) , (test case, false)}
//14. testChangePassword{(valid current password, valid new password, invalid retype password (not same as new password)) , (test case, true)}
//15. testChangePassword{(valid current password, valid new password, invalid retype password (x < 8)) , (test case, false)}
//16. testChangePassword{(valid current password, valid new password, invalid retype password (x < 8)) , (test case, true)}
//17. testChangePassword{(valid current password, valid new password, invalid retype password (x > 8)) , (test case, false)}
//18. testChangePassword{(valid current password, valid new password, invalid retype password (x > 8)) , (test case, true)}
//19. testChangePassword{(valid current password, valid new password, valid retype password, true) , (test case, true)}
//20. testChangePassword{(empty current password, empty new password, empty retype password, current password show message) , (test case, true)}
//21. testChangePassword{(valid current password, empty new password, empty retype password, new password show message) , (test case, true)}
//22. testChangePassword{(valid current password, valid new password, empty retype password, retype password show message) , (test case, true)}

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
	cy.Click_3Dot_Indicator()
	cy.Click_ChangePassword_In_3Dot()
	cy.ChangePassword_Page_Label()
})

//testChangePassword{(invalid current password, valid new password, valid retype password) , (test case, false)}
it.skip('Verify change password unsuccessful with invalid current password, valid new & retype password', () => {
	cy.Insert_Current_Password_Detail_Without_Validation(currentPassword2)
	cy.Insert_New_Password_Detail_Without_Validation(currentPassword2)
	cy.Insert_Retype_Password_Detail_With_Validation(currentPassword2)
	cy.Submit_Change_Password()
	cy.My_Account_Page_Label()
})

//testChangePassword{(invalid current password, valid new password, valid retype password) , (test case, true)}
it.skip('Verify change password unsuccessful with invalid current password, valid new & retype password', () => {
	cy.Insert_Current_Password_Detail_Without_Validation(currentPassword2)
	cy.Insert_New_Password_Detail_Without_Validation(currentPassword2)
	cy.Insert_Retype_Password_Detail_With_Validation(currentPassword2)
	cy.Submit_Change_Password()
	cy.Current_Password_Error_Message()
})

//testChangePassword{(invalid length current password (x < 8), valid new password, valid retype password, length validation) , (test case, false)}
it.skip('Verify change password unsuccessful with invalid min length current password, valid new & retype password', () => {
	cy.Insert_Current_Password_Detail_With_Validation(minInvalidPassword)
	cy.Insert_New_Password_Detail_With_Validation(currentPassword2)
	cy.Insert_Retype_Password_Detail_With_Validation(currentPassword2)
	cy.Submit_Change_Password()
})

//testChangePassword{(invalid length current password (x < 8), valid new password, valid retype password) , (test case, true)}
it.skip('Verify change password unsuccessful with invalid min length current password, valid new & retype password', () => {
	cy.Insert_Current_Password_Detail_Without_Validation(minInvalidPassword)
	cy.Insert_New_Password_Detail_Without_Validation(currentPassword2)
	cy.Insert_Retype_Password_Detail_Without_Validation(currentPassword2)
	cy.Submit_Change_Password()
	cy.Current_Password_Error_Message()
})

//testChangePassword{(invalid length current password (x > 8), valid new password, valid retype password, length validation) , (test case, false)}
it.skip('Verify change password unsuccessful with invalid max length current password, valid new & retype password', () => {
	cy.Insert_Current_Password_Detail_With_Validation(maxInvalidPassword)
	cy.Insert_New_Password_Detail_With_Validation(currentPassword2)
	cy.Insert_Retype_Password_Detail_With_Validation(currentPassword2)
	cy.Submit_Change_Password()
})

//testChangePassword{(invalid length current password (x > 8), valid new password, valid retype password) , (test case, true)}
it.skip('Verify change password unsuccessful with invalid max length current password, valid new & retype password', () => {
	cy.Insert_Current_Password_Detail_Without_Validation(maxInvalidPassword)
	cy.Insert_New_Password_Detail_Without_Validation(currentPassword2)
	cy.Insert_Retype_Password_Detail_Without_Validation(currentPassword2)
	cy.Submit_Change_Password()
	cy.Current_Password_Error_Message()
})

//testChangePassword{(valid current password, invalid length new password (x < 8), invalid retype password (same as new password), length validation) , (test case, false)}
it.skip('Verify change password unsuccessful with valid current password, invalid min length new & retype password', () => {
	cy.Insert_Current_Password_Detail_With_Validation(currentPassword1)
	cy.Insert_New_Password_Detail_With_Validation(minInvalidPassword)
	cy.Insert_Retype_Password_Detail_With_Validation(minInvalidPassword)
	cy.Submit_Change_Password()
	cy.My_Account_Page_Label()
})

//testChangePassword{(valid current password, invalid length new password (x < 8), invalid retype password (same as new password)) , (test case, true)}
it.skip('Verify change password unsuccessful with valid current password, invalid min length new & retype password', () => {
	cy.Insert_Current_Password_Detail_With_Validation(currentPassword1)
	cy.Insert_New_Password_Detail_Without_Validation(minInvalidPassword)
	cy.Insert_Retype_Password_Detail_Without_Validation(minInvalidPassword)
	cy.Submit_Change_Password()
	cy.New_Password_Error_Message()
})

//testChangePassword{(valid current password, invalid length new password (x > 8), invalid retype password (same as new password), length validation) , (test case, false)}
it.skip('Verify change password unsuccessful with valid current password, invalid max length new & retype password', () => {
	cy.Insert_Current_Password_Detail_With_Validation(currentPassword1)
	cy.Insert_New_Password_Detail_With_Validation(maxInvalidPassword)
	cy.Insert_Retype_Password_Detail_With_Validation(maxInvalidPassword)
	cy.Submit_Change_Password()
	cy.My_Account_Page_Label()
})

//testChangePassword{(valid current password, invalid length new password (x > 8), invalid retype password (same as new password)) , (test case, true)}
it.skip('Verify change password unsuccessful with valid current password, invalid max length new & retype password', () => {
	cy.Insert_Current_Password_Detail_With_Validation(currentPassword1)
	cy.Insert_New_Password_Detail_Without_Validation(maxInvalidPassword)
	cy.Insert_Retype_Password_Detail_Without_Validation(maxInvalidPassword)
	cy.Submit_Change_Password()
	cy.New_Password_Error_Message()
})

//testChangePassword{(invalid current password, invalid length new password (x > 8), invalid retype password (same as new password), length validation) , (test case, false)}
it.skip('Verify change password unsuccessful with invalid current password, invalid min length new & retype password', () => {
	cy.Insert_Current_Password_Detail_With_Validation(currentPassword2)
	cy.Insert_New_Password_Detail_With_Validation(minInvalidPassword)
	cy.Insert_Retype_Password_Detail_With_Validation(minInvalidPassword)
	cy.Submit_Change_Password()
	cy.My_Account_Page_Label()
})

//testChangePassword{(invalid current password, invalid length new password (x < 8), invalid retype password (same as new password)) , (test case, true)}
it.skip('Verify change password unsuccessful with invalid current password, invalid max length new & retype password', () => {
	cy.Insert_Current_Password_Detail_Without_Validation(currentPassword2)
	cy.Insert_New_Password_Detail_Without_Validation(maxInvalidPassword)
	cy.Insert_Retype_Password_Detail_Without_Validation(maxInvalidPassword)
	cy.Submit_Change_Password()
	cy.New_Password_Error_Message()
})

//testChangePassword{(valid current password, valid new password, invalid retype password (not same as new password)) , (test case, false)}
it.skip('Verify change password unsuccessful with valid current password & new password, invalid retype password', () => {
	cy.Insert_Current_Password_Detail_Without_Validation(currentPassword1)
	cy.Insert_New_Password_Detail_Without_Validation(currentPassword2)
	cy.Insert_Retype_Password_Detail_Without_Validation(currentPassword1)
	cy.Submit_Change_Password()
	cy.My_Account_Page_Label()
})

//testChangePassword{(valid current password, valid new password, invalid retype password (not same as new password)) , (test case, true)}
it.skip('Verify change password unsuccessful with valid current password & new password, invalid retype password', () => {
	cy.Insert_Current_Password_Detail_Without_Validation(currentPassword1)
	cy.Insert_New_Password_Detail_Without_Validation(currentPassword2)
	cy.Insert_Retype_Password_Detail_Without_Validation(currentPassword1)
	cy.Submit_Change_Password()
	cy.Retype_Password_Error_Message()
})

//testChangePassword{(valid current password, valid new password, invalid retype password (x < 8), length validation) , (test case, false)}
it.skip('Verify change password unsuccessful with valid current password & new password, invalid min length retype password', () => {
	cy.Insert_Current_Password_Detail_With_Validation(currentPassword1)
	cy.Insert_New_Password_Detail_With_Validation(currentPassword2)
	cy.Insert_Retype_Password_Detail_With_Validation(minInvalidPassword)
	cy.Submit_Change_Password()
	cy.My_Account_Page_Label()
})

//testChangePassword{(valid current password, valid new password, invalid retype password (x < 8)) , (test case, true)}
it.skip('Verify change password unsuccessful with valid current password & new password, invalid min length retype password', () => {
	cy.Insert_Current_Password_Detail_Without_Validation(currentPassword1)
	cy.Insert_New_Password_Detail_Without_Validation(currentPassword2)
	cy.Insert_Retype_Password_Detail_Without_Validation(minInvalidPassword)
	cy.Submit_Change_Password()
	cy.Retype_Password_Error_Message()
})

//testChangePassword{(valid current password, valid new password, invalid retype password (x > 8), length validation) , (test case, false)}
it.skip('Verify change password unsuccessful with valid current password & new password, invalid max length retype password', () => {
	cy.Insert_Current_Password_Detail_With_Validation(currentPassword1)
	cy.Insert_New_Password_Detail_With_Validation(currentPassword2)
	cy.Insert_Retype_Password_Detail_With_Validation(maxInvalidPassword)
	cy.Submit_Change_Password()
	cy.My_Account_Page_Label()
})

//testChangePassword{(valid current password, valid new password, invalid retype password (x > 8)) , (test case, true)}
it.skip('Verify change password unsuccessful with valid current password & new password, invalid max length retype password', () => {
	cy.Insert_Current_Password_Detail_Without_Validation(currentPassword1)
	cy.Insert_New_Password_Detail_Without_Validation(currentPassword2)
	cy.Insert_Retype_Password_Detail_Without_Validation(maxInvalidPassword)
	cy.Submit_Change_Password()
	cy.Retype_Password_Error_Message()
})

//testChangePassword{(valid current password, valid new password, valid retype password, true) , (test case, true)}
it.skip('Verify change password unsuccessful with valid current password, new password, retype password', () => {
	cy.Insert_Current_Password_Detail_With_Validation(currentPassword2)
	cy.Insert_New_Password_Detail_With_Validation(currentPassword1)
	cy.Insert_Retype_Password_Detail_With_Validation(currentPassword1)
	cy.Submit_Change_Password()
	cy.My_Account_Page_Label(validUsername)
})

//testChangePassword{(empty current password, empty new password, empty retype password, current password show message) , (test case, true)}
it.skip('Verify change password unsuccessful with empty current password, valid new & retype password', () => {
	cy.Insert_New_Password_Detail_With_Validation(currentPassword2)
	cy.Insert_Retype_Password_Detail_With_Validation(currentPassword2)
	cy.Submit_Change_Password()
	cy.Current_Password_Validation_Message()
})

//testChangePassword{(valid current password, empty new password, empty retype password, new password show message) , (test case, true)}
it.skip('Verify change password unsuccessful with valid current & retype password, empty new password', () => {
	cy.Insert_Current_Password_Detail_With_Validation(currentPassword1)
	cy.Insert_Retype_Password_Detail_With_Validation(currentPassword2)
	cy.Submit_Change_Password()
	cy.New_Password_Validation_Message()
})

//testChangePassword{(valid current password, valid new password, empty retype password, retype password show message) , (test case, true)}
it('Verify change password unsuccessful with valid current password, new password, retype password', () => {
	cy.Insert_Current_Password_Detail_With_Validation(currentPassword1)
	cy.Insert_New_Password_Detail_With_Validation(currentPassword2)
	cy.Submit_Change_Password()
	cy.Retype_Password_Validation_Message()
})