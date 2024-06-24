//1. navigation{(Homepage --> Deposit Page) , (test case, true)}
//2. navigation{(Homepage --> Transfer Page) , (test case, true)}
//3. navigation{(Homepage --> Withdraw Page) , (test case, true)}
//4. navigation{(Account Page --> Deposit Page) , (test case, true)}
//5. navigation{(Account Page --> Transfer Page) , (test case, true)}
//6. navigation{(Account Page --> Withdraw Page) , (test case, true)}
//7. navigation{(Account Page --> History Page) , (test case, true)}
//8. navigation{(Side Menu --> Deposit Page) , (test case, true)}
//9. navigation{(Side Menu --> Transfer Page) , (test case, true)}
//10. navigation{(Side Menu --> Withdraw Page) , (test case, true)}
//11. navigation{(Side Menu --> History Page) , (test case, true)}
//12. navigation{(Side Menu --> My Account Page) , (test case, true)}
//13. navigation{(Side Menu --> Manage Banks Page) , (test case, true)}
//14. navigation{(Side Menu --> Referral Page) , (test case, true)}
//15. navigation{(Side Menu --> Change Password Page) , (test case, true)}

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

// navigation{(Homepage --> Deposit Page) , (test case, true)}
it('Go to Deposit page from Homepage', () => {
	cy.Navigation_Homepage_To_Deposit()
	cy.Deposit_Page_Label()
})

// navigation{(Homepage --> Transfer Page) , (test case, true)}
it('Go to Transfer page from Homepage', () => {
	cy.Navigation_Homepage_To_Transfer()
	cy.Transfer_Page_Label()
})

// navigation{(Homepage --> Withdraw Page) , (test case, true)}
it('Go to Withdraw page from Homepage', ()=>{
	cy.Navigation_Homepage_To_Withdraw()
	cy.Withdraw_Page_Label()
})

// navigation{(Account Page --> Deposit Page) , (test case, true)}
it('Go to Deposit page from Account Page', ()=>{
	cy.Click_Profile_Username()
	cy.My_Account_Page_Label()
	cy.Navigation_AccountPage_To_Deposit()
	cy.Deposit_Page_Label()
})

// navigation{(Account Page --> Transfer Page) , (test case, true)}
it('Go to Transfer page from Account Page',()=>{
	cy.Click_Profile_Username()
	cy.My_Account_Page_Label()
	cy.Navigation_AccountPage_To_Transfer()
	cy.Transfer_Page_Label()
})

// navigation{(Account Page --> Withdraw Page) , (test case, true)}
it('Go to Withdraw page from Account Page', ()=>{
	cy.Click_Profile_Username()
	cy.My_Account_Page_Label()
	cy.Navigation_AccountPage_To_Withdraw()
	cy.Withdraw_Page_Label()
})

//Navigation{(Account Page --> History Page) , (test case, true)}
it('Go to History page from Account Page', ()=>{
	cy.Click_Profile_Username()
	cy.My_Account_Page_Label()
	cy.Navigation_AccountPage_To_History()
})

// navigation{(Side Menu --> Deposit Page) , (test case, true)}
it('Go to Deposit page from Side Menu', ()=>{
	cy.Click_Profile_Username()
	cy.Navigation_Homepage_To_Withdraw()
	cy.Navigation_SideMenu_To_Deposit()
	cy.Deposit_Page_Label()
})

// navigation{(Side Menu --> Transfer Page) , (test case, true)}
it('Go to Transfer page from Side Menu', ()=>{
	cy.Click_Profile_Username()
	cy.Navigation_Homepage_To_Deposit()
	cy.Navigation_SideMenu_To_Transfer()
	cy.Transfer_Page_Label()
})

// navigation{(Side Menu --> Withdraw Page) , (test case, true)}
it('Go to Withdraw page from Side Menu', ()=>{
	cy.Click_Profile_Username()
	cy.Navigation_Homepage_To_Deposit()
	cy.Navigation_SideMenu_To_Withdraw()
	cy.Withdraw_Page_Label()
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

// navigation{(Side Menu --> Referral Page) , (test case, true)}
it('Go to Referral Page from side menu', ()=>{
	cy.Click_Profile_Username()
	cy.Navigation_Homepage_To_Deposit()
	cy.Navigation_SideMenu_To_Referral()
	cy.Referral_Page_Label()
})

// navigation{(Side Menu --> Change Password Page) , (test case, true)}
it('Go to Change Password Page from side menu', ()=>{
	cy.Click_Profile_Username()
	cy.Navigation_Homepage_To_Deposit()
	cy.Navigation_SideMenu_To_ChangePassword()
	cy.ChangePassword_Page_Label()
})