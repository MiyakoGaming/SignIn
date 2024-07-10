//1. testSignIn{(valid username, valid password, true) , (test case, true)}
//2. testSignIn{(valid username, invalid password, false) , (test case, true)}
//3. testSignIn{(invalid username, valid password, false) , (test case, true)}
//4. testSignIn{(invalid username, invalid password, false) , (test case, true}
//5. testSignIn{(invalid username, invalid password, false) , (test case, false}

Cypress.on('uncaught:exception', (err, runnable) => {
	// Fail the test
	throw err
	// Return false to prevent the error from failing the test in an unexpected way
	return false
})

//Login detail
var validUsername = 'mikodemo1002'
var validPassword = 'Yes888888'
var invalidUsername = 'mickey678'
var invalidPassword = 'yes789631'

beforeEach(() => {
	cy.Website_Homepage_URL()
	cy.Click_Homepage_Sign_In_Button()
})

// testSignIn{(valid username, valid password, true) , (test case, true)}
it('Verify successful user authentication with valid username and password', () => {
	cy.Test_Login_Account(validUsername, validPassword)
	cy.Profile_Username(validUsername)
})

//testSignIn{(valid username, invalid password, false) , (test case, true)}
it('Verify unsuccessful user authentication with valid username and invalid password', () => {
	cy.Test_Login_Account(validUsername, invalidPassword)
	cy.Sign_In_Error_message()
})

//testSignIn{(invalid username, valid password, false) , (test case, true)}
it('Verify unsuccessful user authentication with invalid username and valid password', () => {
	cy.Test_Login_Account(invalidUsername, validPassword)
	cy.Sign_In_Error_message()
})

//testSignIn{(invalid username, invalid password, false) , (test case, true}
it('Verify unsuccessful user authentication with invalid username and password', () => {
	cy.Test_Login_Account(invalidUsername, invalidPassword)
	cy.Sign_In_Error_message()
})

//testSignIn{(invalid username, invalid password, false) , (test case, false}
it('Verify unsuccessful user authentication with invalid username and password', () => {
	cy.Test_Login_Account(invalidUsername, invalidPassword)
	cy.Profile_Username(validUsername)
})
