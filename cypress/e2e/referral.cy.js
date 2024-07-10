//1. testReferral{(Click Referral tab on Side Menu --> Referral page) , (test case, true)}

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
	cy.Website_Sign_In_Page_URL()
	cy.Test_Login_Account(validUsername, validPassword)
	cy.Profile_Username(validUsername)
})

//testReferral{(Click Referral tab on Side Menu --> Referral page) , (test case, true)}
it('Click Referral tab on Side Menu --> Referral page', ()=>{
	cy.Click_Profile_Username()
	cy.Navigation_Homepage_To_Deposit()
	cy.Navigation_SideMenu_To_Referral()
	cy.Referral_Page_Label()
})