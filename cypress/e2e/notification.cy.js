//1. testNotification{(Notification Pop up, Unread button) , (test case, true)}
//2. testNotification{(Notification Pop up, All button) , (test case, true)}
//3. testNotification{(Notification Pop up, See More Button) , (test case, true)}
//4. testNotification{(Notification Pop up, Click first Notification) , (test case, true)}
//5. testNotification{(Notification Pop up, Click second Notification) , (test case, true)}
//6. testNotification{(Notification Pop up, Click third Notification) , (test case, true)}
//7. testNotification{(Notification Page, Unread button) , (test case, true)}
//8. testNotification{(Notification Page, All button) , (test case, true)}
//9. testNotification{(Notification Page, Click deposits notification --> History page Deposits tab) , (test case, true)}
//10. testNotification{(Notification Page, Click withdrawals notification --> History page Withdrawals tab) , (test case, true)}
//11. testNotification{(Notification Page, Click promotion notification --> History page Bonus tab) , (test case, true)}
//12. testNotification{(Notification Page, Click inactive number page) , (test case, true)}
//13. testNotification{(Notification Page, Click active number page) , (test case, true)}
//14. testNotification{(Notification Page, Click next page arrow --> previous page arrow) , (test case, true)}
//15. testNotification{(Notification Page, Click disable previous page arrow & active number when page 1) , (test case, true)}

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

//testNotification{(Notification Pop up, Unread button) , (test case, true)}
it.skip('Verify Notification Pop Up, Unread button .skip()', () => {
	cy.Click_Notification_Icon_On_Header()
	cy.Notification_Pop_Up_Label()
	cy.Click_Notification_Unread_Button()
})

//testNotification{(Notification Pop up, All button) , (test case, true)}
it.skip('Verify Notification Pop Up, All button .skip()', () => {
	cy.Click_Notification_Icon_On_Header()
	cy.Notification_Pop_Up_Label()
	cy.Click_Notification_Unread_Button()
	cy.Click_Notification_All_Button()
})

//testNotification{(Notification Pop up, See More Button) , (test case, true)}
it.skip('Verify Notification Pop Up, See more button .skip()', () => {
	cy.Click_Notification_Icon_On_Header()
	cy.Notification_Pop_Up_Label()
	cy.Click_Notification_See_More_Button()
})

//testNotification{(Notification Pop up, Click first Notification) , (test case, true)}
it.skip('Verify Notification Pop Up, Click first notification .skip()', () => {
	cy.Click_Notification_Icon_On_Header()
	cy.Notification_Pop_Up_Label()
	cy.Click_1st_Notification_In_Notification_Pop_up()
	cy.Notification_Page_Label()
})

//testNotification{(Notification Pop up, Click second Notification) , (test case, true)}
it.skip('Verify Notification Pop Up, Click second notification .skip()', () => {
	cy.Click_Notification_Icon_On_Header()
	cy.Notification_Pop_Up_Label()
	cy.Click_2nd_Notification_In_Notification_Pop_up()
	cy.Notification_Page_Label()
})

//testNotification{(Notification Pop up, Click third Notification) , (test case, true)}
it.skip('Verify Notification Pop Up, Click third notification .skip()', () => {
	cy.Click_Notification_Icon_On_Header()
	cy.Notification_Pop_Up_Label()
	cy.Click_3rd_Notification_In_Notification_Pop_up()
	cy.Notification_Page_Label()
})

//testNotification{(Notification Page, Unread button) , (test case, true)}
it.skip('Verify Notification Page, Unread button .skip()', () => {
	cy.Click_Notification_Icon_On_Header()
	cy.Click_Notification_See_More_Button()
	cy.Notification_Page_Label()
	cy.Click_Notification_Unread_Button()
})

//testNotification{(Notification Page, All button) , (test case, true)}
it.skip('Verify Notification Page, All button .skip()', () => {
	cy.Click_Notification_Icon_On_Header()
	cy.Click_Notification_See_More_Button()
	cy.Notification_Page_Label()
	cy.Click_Notification_Unread_Button()
	cy.Click_Notification_All_Button()
})

//testNotification{(Notification Page, Click deposits notification --> History page Deposits tab) , (test case, true)}
it('Verify Notification Page, Click deposits notification direct to history deposit active tab', () => {
	cy.Click_Notification_Icon_On_Header()
	cy.Click_Notification_See_More_Button()
	cy.Notification_Page_Label()
	cy.Click_1st_Notification_In_Notification_Page()
	cy.History_Page_Deposit_Active_Tab()
})

//testNotification{(Notification Page, Click withdrawals notification --> History page Withdrawals tab) , (test case, true)}
it('Verify Notification Page, Click deposits notification direct to history deposit active tab', () => {
	cy.Click_Notification_Icon_On_Header()
	cy.Click_Notification_See_More_Button()
	cy.Notification_Page_Label()
	cy.Click_2nd_Notification_In_Notification_Page()
	cy.History_Page_Withdrawal_Active_Tab()
})

//testNotification{(Notification Page, Click promotion notification --> History page Bonus tab) , (test case, true)}
it.skip('Verify Notification page, Click deposits notification direct to history deposit active tab .skip()', () => {
	cy.Click_Notification_Icon_On_Header()
	cy.Click_Notification_See_More_Button()
	cy.Notification_Page_Label()
	cy.Click_1st_Notification_In_Notification_Page()
	cy.History_Page_Bonus_Active_Tab()
})

//testNotification{(Notification Page, Click inactive number page) , (test case, true)}
it('Verify Notification page, Click inactive number page', ()=>{
	cy.Click_Notification_Icon_On_Header()
	cy.Click_Notification_See_More_Button()
	cy.Notification_Page_Label()
	cy.Click_Message_Page_Two()
})

//testNotification{(Notification Page, Click active number page) , (test case, true)}
it('Verify Notification page, Click inactive number page', ()=>{
	cy.Click_Notification_Icon_On_Header()
	cy.Click_Notification_See_More_Button()
	cy.Notification_Page_Label()
	cy.Click_Message_Page_Two()
})

//testNotification{(Notification Page, Click next page arrow --> previous page arrow) , (test case, true)}
it('Verify Notification page, Click inactive number page', ()=>{
	cy.Click_Notification_Icon_On_Header()
	cy.Click_Notification_See_More_Button()
	cy.Notification_Page_Label()
	cy.Click_Message_Page_Two()
})

//testNotification{(Notification Page, Click disable previous page arrow & active number when page 1) , (test case, true)}
it('Verify Notification page, Click inactive number page', ()=>{
	cy.Click_Notification_Icon_On_Header()
	cy.Click_Notification_See_More_Button()
	cy.Notification_Page_Label()
	cy.Click_Message_Page_Two()
})
