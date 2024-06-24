//1. testMessage{(Message Pop up, Unread button) , (test case, true)}
//2. testMessage{(Message Pop up, All button) , (test case, true)}
//3. testMessage{(Message Pop up, See More Button) , (test case, true)}
//4. testMessage{(Message Pop up, Click first message) , (test case, true)}
//5. testMessage{(Message Pop up, Click second message) , (test case, true)}
//6. testMessage{(Message Pop up, Click third message) , (test case, true)}
//7. testMessage{(Message Pop Up, Click learn more / Go to promotion) , (test case, true)}
//8. testMessage{(Message Page, Unread button) , (test case, true)}
//9. testMessage{(Message Page, All button) , (test case, true)}
//10. testMessage{(Message Page, Click learn more / Go to promotion) , (test case, true)}
//11. testMessage{(Message Page, Click inactive number page) , (test case, true)}
//12. testMessage{(Message Page, Click active number page) , (test case, true)}
//13. testMessage{(Message Page, Click next page arrow --> previous page arrow) , (test case, true)}
//14. testMessage{(Message Page, Click disable previous page arrow & active number when page 1) , (test case, true)}

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

//testMessage{(Message Pop up, Unread button) , (test case, true)}
it('Verify Message Pop up page unread button', ()=>{
    cy.Click_Message_Icon_On_Header()
    cy.Message_Pop_Up_Label()
	cy.Message_See_More_Button()
})