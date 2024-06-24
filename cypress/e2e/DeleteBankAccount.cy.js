//
//

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
	cy.Click_Profile_Username()
	cy.Navigation_AccountPage_To_Withdraw()
	cy.Navigation_SideMenu_To_ManageBanks()
    cy.ManageBank_Page_Label()
})

it('aaa', ()=>{
    
})
