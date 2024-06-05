//1. testSignIn{(valid username, valid password, true) , (test case, true)}
//2. testSignIn{(valid username, valid password, true) , (test case, false)}
//3. testSignIn{(valid username, invalid password, false) , (test case, false)}
//4. testSignIn{(invalid username, valid password, false) , (test case, false)}
//5. testSignIn{(invalid username, invalid password, false) , (test case, false)}
//6. testSignIn{(invalid username, invalid password, false) , (test case, true)}

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
	cy.visit('https://www.jufsolution3.com/auth/signin?redirect=/')
})

// testSignIn{(valid username, valid password, true) , (test case, true)}
it('Verify successful user authentication with valid username and password', () => {
	cy.Test_Valid_Login_Account(validUsername, validPassword, validUsername)
})

//testSignIn{(valid username, valid password, true) , (test case, false)}
it('Verify unsuccessful user authentication with valid username and password', () => {
    cy.Test_Valid_Login_Account(validUsername, validPassword, invalidUsername)
})

//testSignIn{(valid username, invalid password, false) , (test case, false)}
it('Verify unsuccessful user authentication with valid username and invalid password', () => {
    cy.Test_Valid_Login_Account(validUsername, invalidPassword, validUsername)
})

//testSignIn{(invalid username, valid password, false) , (test case, false)}
it('Verify unsuccessful user authentication with invalid username and valid password', () => {
    cy.Test_Valid_Login_Account(invalidUsername, validPassword, validUsername)
})

//testSignIn{(invalid username, invalid password, false) , (test case, false)}
it('Verify unsuccessful user authentication with invalid username and password', () => {
    cy.Test_Valid_Login_Account(invalidUsername, invalidPassword, validUsername)
})

//testSignIn{(invalid username, invalid password, false) , (test case, true)}
it('Verify unsuccessful user authentication with invalid username and password', () => {
    cy.Test_Login_Account(invalidUsername, invalidPassword)
    cy.Sign_In_Error_message()
})
