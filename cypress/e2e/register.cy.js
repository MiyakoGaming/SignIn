//Details - Username, Password, Full name, Email, DOB
//. testRegister{(Click sign in button, direct to sign in page) , (text case, true)}
//. testRegister{(Insert invalid phone number, show message below phone number container ) , (text case, true)}
//. testRegister{(phone number container empty, show message below phone number container) , (text case, true)}
//. testRegister{(all container empty, Show message below username validate message) , (text case, true)}
//. testRegister{(Username empty, other detail are valid/empty, Show message below username validate message) , (text case, true)}
//. testRegister{(Password empty, other detail are valid/empty, Show message below password validate message) , (text case, true)}
//. testRegister{(Full Name empty, other detail are valid/empty, Show message below full name validate message) , (text case, true)}
//. testRegister{(Email empty, other detail are valid/empty, Show message below email validate message) , (text case, true)}
//. testRegister{(Insert invalid length username, other details are valid, Show message below username container) , (test case, true)}
//. testRegister{(Insert username has already been taken, other details are valid, Show message below username container) , (test case, true)}
//. testRegister{(Insert invalid password (less than 8), other details are valid, Show message below username & password container) , (test case, true)}
//. testRegister{(Insert invalid password (more than 30), other details are valid, Show message below username & password container) , (test case, true)}
//. testRegister{(Insert invalid Email, other details are valid, Show message below username & email validate message) , (test case, true)}
//. testRegister{(Select DOB below 18 years old, other details are valid, Show message below username & DOB container) , (test case, true)}
//. testRegister{(Insert all invalid details, Show message below username, password, DOB container & email validate message) , (test case, true)}
//. testRegister{(Insert all valid details, register successfully) , (test case, true)}

Cypress.on('uncaught:exception', (err, runnable) => {
	// Fail the test
	throw err
	// Return false to prevent the error from failing the test in an unexpected way
	return false
})

//Register Phone Number
var selectCountry = ''
var invalidPhoneNumber = ''
var validPhoneNumber = ''

//Register Username detail
var invalidUsername = 'mikodemo1001'
var invalidMinUsername = 'Mi'
var validUsername = 'mickey123'

//Register password detail
var invalidMinPassword = 'abc123'
var invalidMaxPassword = 'aaaaabbbbbcccccdddddeeeeefffff12345'
var validPassword = 'Yes888888'

//Register Full name detail
var invalidFullName = 'Mickey Lee'
var validFullName = 'Mikodemo12345!!!'

//Register email detail
var invalidEmail = 'demogmail'
var validEmail = 'demo@gmail.com'

//Register DOB detail
var thisYear = '2024'
var validYear = '1990'
var registerMonth = 'March'
var registerDay = '14'

beforeEach(() => {
	cy.Website_Homepage_URL()
    cy.Click_Sign_In_To_Play_Button()
    cy.Sign_Up_Page_1_Label()
})

//testRegister{(Click sign in button, direct to sign in page) , (text case, true)}
it('Verify', () => {})


//testRegister{(Insert invalid phone number, show message below phone number container ) , (text case, true)}
//testRegister{(phone number container empty, show message below phone number container) , (text case, true)}
//testRegister{(all container empty, Show message below username validate message) , (text case, true)}
//testRegister{(Username empty, other detail are valid/empty, Show message below username validate message) , (text case, true)}
//testRegister{(Password empty, other detail are valid/empty, Show message below password validate message) , (text case, true)}
//testRegister{(Full Name empty, other detail are valid/empty, Show message below full name validate message) , (text case, true)}
//testRegister{(Email empty, other detail are valid/empty, Show message below email validate message) , (text case, true)}
//testRegister{(Insert invalid length username, other details are valid, Show message below username container) , (test case, true)}
//testRegister{(Insert username has already been taken, other details are valid, Show message below username container) , (test case, true)}
//testRegister{(Insert invalid password (less than 8), other details are valid, Show message below username & password container) , (test case, true)}
//testRegister{(Insert invalid password (more than 30), other details are valid, Show message below username & password container) , (test case, true)}
//testRegister{(Insert invalid Email, other details are valid, Show message below username & email validate message) , (test case, true)}
//testRegister{(Select DOB below 18 years old, other details are valid, Show message below username & DOB container) , (test case, true)}
//testRegister{(Insert all invalid details, Show message below username, password, DOB container & email validate message) , (test case, true)}
//testRegister{(Insert all valid details, register successfully) , (test case, true)}

