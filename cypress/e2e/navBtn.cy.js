



//7. navigation{(Account Page --> History Page) , (test case, true)}

//11. navigation{(Side Menu --> History Page) , (test case, true)}
//12. navigation{(Side Menu --> My Account Page) , (test case, true)}
//13. navigation{(Side Menu --> Manage Banks Page) , (test case, true)}

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




//Navigation{(Account Page --> History Page) , (test case, true)}
it('Go to History page from Account Page', ()=>{
	cy.Click_Profile_Username()
	cy.My_Account_Page_Label()
	cy.Navigation_AccountPage_To_History()
})


// navigation{(Side Menu --> History Page) , (test case, true)}
it('Go to History page from side menu', ()=>{
	cy.Click_Profile_Username()
	cy.Navigation_Homepage_To_Deposit()
})

// navigation{(Side Menu --> My Account Page) , (test case, true)}
it('Go to Account Page from side menu', ()=>{
	cy.Click_Profile_Username()
	cy.Navigation_Homepage_To_Deposit()
	cy.Navigation_SideMenu_To_MyAccount()
	cy.My_Account_Page_Label()
})

// navigation{(Side Menu --> Manage Banks Page) , (test case, true)}
it('Go to Manage Banks Page from side menu', ()=>{
	cy.Click_Profile_Username()
	cy.Navigation_Homepage_To_Deposit()
	cy.Navigation_SideMenu_To_ManageBanks()
	cy.ManageBank_Page_Label()
})


