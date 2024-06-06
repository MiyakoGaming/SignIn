//1. navigation{(Homepage --> Deposit Page) , (test case, true)}
//2. navigation{(Homepage --> Transfer Page) , (test case, true)}
//3. navigation{(Homepage --> Withdraw Page) , (test case, true)}
//4. navigation{(Account Page --> Deposit Page) , (test case, true)}
//5. navigation{(Account Page --> Transfer Page) , (test case, true)}
//6. navigation{(Account Page --> Withdraw Page) , (test case, true)}
//7. navigation{(Side Menu --> Deposit Page) , (test case, true)}
//8. navigation{(Side Menu --> Transfer Page) , (test case, true)}
//9. navigation{(Side Menu --> Withdraw Page) , (test case, true)}

Cypress.on('uncaught:exception', (err, runnable) => {
	// Fail the test
	throw err
	// Return false to prevent the error from failing the test in an unexpected way
	return false
})

//Login detail
var validUsername = 'mikodemo1002'
var validPassword = 'Yes888888'

beforeEach(() => {
	cy.visit('https://www.jufsolution3.com/auth/signin?redirect=/')
	cy.Test_Login_Account(validUsername, validPassword)
	cy.Profile_Username(validUsername)
})