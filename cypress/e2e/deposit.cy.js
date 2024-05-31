//website Sign In class name
const usernameContainer = '.inputs_textContainer__ksnHm > input'
const passwordContainer = '.inputs_inputContainer__YQKEw > input'
const signInButton = 'form > .TT__standard-button'
const profileUsername =
	':nth-child(1) > .user-quick-view_container__pFlJe > .user-quick-view_user__FkeJ_ > :nth-child(2) > .user-quick-view_playerMainContent__rDEHg > :nth-child(1)'

//Website Deposit Page class name
const homepageDepositButton = '.index_announcementActions__nhC_d > .user-quick-actions_shortcuts__RVJkw > :nth-child(1)'
const depositSelectionLabel = ':nth-child(1) > .inputs_selectContainer__O9Ic_ > label'
const depositSelectionDropdown = '.inputs_selectContainer__O9Ic_ > select'
const depositAmountContainer = '.amount-input_inputContainer__jUvRT > .inputs_textContainer__ksnHm > input'
const depositTransactionID = '.bank-transfer_transactionId__ziAat > .inputs_textContainer__ksnHm > input'
const depositSubmitButton = '#TT__deposit-submit-banktransfer'
const depositErrorPopUp = '.modal_hero__P0JkX > .modal_title__2_dt7';
const closeDepositErrorPopUp = '.modal_action__0o7AY > .TT__standard-button';


//Login detail
var validUsername = 'mikodemo1002'
var validPassword = 'Yes888888'

// Deposit ID
var validDepId1 = 'banktransfer997'
var validDepId2 = 'banktransfer996'
var invalidDepId1 = 'testspin445'
var invalidDepId2 = 'Test notification 12334'

//Bank ID
var prabhuBank ='7'
var mayBank = '11'

//Deposit amount (100 < x < 10,000)
var invalidAmount1 = '50'
var invalidAmount2 = '11000'
var validAmount1 = '120'
var validAmount2 = '500'

beforeEach(() => {
	cy.visit('https://www.jufsolution3.com/auth/signin?redirect=/')

	cy.get(usernameContainer).click()
	cy.get(usernameContainer).type(validUsername).should('have.value', validUsername)

	cy.get(passwordContainer).click()
	cy.get(passwordContainer).type(validPassword).should('have.value', validPassword)

	cy.get(signInButton).should('have.text', 'Sign In')
	cy.get(signInButton).click()

	cy.get(profileUsername).should('have.text', validUsername)
})

it('Deposit unsuccessfully with invalid amount & transaction ID', async () => {
	cy.get(homepageDepositButton).click()
	cy.get(homepageDepositButton).should('have.text', 'Deposit')

	cy.get(depositSelectionLabel).should('have.text','Deposit to Bank')
	cy.get(depositSelectionDropdown).select(prabhuBank).should('have.value', prabhuBank)

	cy.get(depositAmountContainer).click()
	cy.get(depositAmountContainer).type(invalidAmount1)

	cy.get(depositTransactionID).click()
	cy.get(depositTransactionID).type(invalidDepId1)

	cy.get(depositSubmitButton).should('have.text', 'Submit Deposit')
	cy.get(depositSubmitButton).click()

	cy.get(depositErrorPopUp).should('have.text', 'Deposit Unsuccessful')

	cy.get(closeDepositErrorPopUp).should('have.text', 'Okay')
	cy.get(closeDepositErrorPopUp).click()
})

// it.skip('Player insert invalid amount & valid transaction ID (Deposit unsuccessfully) .skip()', async () => {
// 	//Homepage > Deposit page
// 	cy.get(
// 		'.index_announcementActions__nhC_d > .user-quick-actions_shortcuts__RVJkw > :nth-child(1)'
// 	).as('depositBTN')
// 	cy.get('@depositBTN').should('have.text', 'Deposit')
// 	cy.get('@depositBTN').click()

// 	//Select bank
// 	cy.get(':nth-child(1) > .inputs_selectContainer__O9Ic_ > label').should(
// 		'have.text',
// 		'Deposit to Bank'
// 	)
// 	cy.get('.inputs_selectContainer__O9Ic_ > select')
// 		.select('84')
// 		.should('have.value', '84')

// 	//Deposit Amount - Invalid amount
// 	cy.get(
// 		'.amount-input_inputContainer__jUvRT > .inputs_textContainer__ksnHm > input'
// 	).as('amtInput')
// 	cy.get('@amtInput').click()
// 	cy.get('@amtInput').type('40000')

// 	//Transaction ID - valid ID
// 	cy.get(
// 		'.bank-transfer_transactionId__ziAat > .inputs_textContainer__ksnHm > input'
// 	).as('idInput')
// 	cy.get('@idInput').click()
// 	cy.get('@idInput').type(validID1)

// 	//Submit deposit button
// 	cy.get('#TT__deposit-submit-banktransfer').as('depSubmitBTN')
// 	cy.get('@depSubmitBTN').should('have.text', 'Submit Deposit')
// 	cy.get('@depSubmitBTN').click()

// 	// // Deposit error pop up
// 	cy.get('.modal_hero__P0JkX > .modal_title__2_dt7').as('depMsg')
// 	cy.get('@depMsg').should('have.text', 'Deposit Unsuccessful')

// 	//Click "Okay" to insert again
// 	cy.get('.modal_action__0o7AY > .TT__standard-button').as('OK')
// 	cy.get('@OK').should('have.text', 'Okay')
// 	cy.get('@OK').click()
// })

// it.skip('player insert valid amount & invalid transaction ID (Deposit unsuccessfully) .skip()', async () => {
// //Homepage > Deposit page
// 	cy.get(
// 		'.index_announcementActions__nhC_d > .user-quick-actions_shortcuts__RVJkw > :nth-child(1)'
// 	).as('depositBTN')
// 	cy.get('@depositBTN').should('have.text', 'Deposit')
// 	cy.get('@depositBTN').click()

// 	//Select bank
// 	cy.get(':nth-child(1) > .inputs_selectContainer__O9Ic_ > label').should(
// 		'have.text',
// 		'Deposit to Bank'
// 	)
// 	cy.get('.inputs_selectContainer__O9Ic_ > select')
// 		.select('84')
// 		.should('have.value', '84')

// 	//Deposit Amount - Invalid amount
// 	cy.get(
// 		'.amount-input_inputContainer__jUvRT > .inputs_textContainer__ksnHm > input'
// 	).as('amtInput')
// 	cy.get('@amtInput').click()
// 	cy.get('@amtInput').type('65')

// 	//Transaction ID - valid ID
// 	cy.get(
// 		'.bank-transfer_transactionId__ziAat > .inputs_textContainer__ksnHm > input'
// 	).as('idInput')
// 	cy.get('@idInput').click()
// 	cy.get('@idInput').type(invalidID1)

// 	//Submit deposit button
// 	cy.get('#TT__deposit-submit-banktransfer').as('depSubmitBTN')
// 	cy.get('@depSubmitBTN').should('have.text', 'Submit Deposit')
// 	cy.get('@depSubmitBTN').click()

// 	// Deposit error pop up
// 	cy.get('.modal_hero__P0JkX > .modal_title__2_dt7').as('depMsg')
// 	cy.get('@depMsg').should('have.text', 'Deposit Unsuccessful')

// 	//Click "Okay" to insert again
// 	cy.get('.modal_action__0o7AY > .TT__standard-button').as('OK')
// 	cy.get('@OK').should('have.text', 'Okay')
// 	cy.get('@OK').click()
// })

// it.skip('player insert valid amount & valid transaction ID (Deposit successfully) .skip()', async () => {
// //Homepage > Deposit page
// 	cy.get(
// 		'.index_announcementActions__nhC_d > .user-quick-actions_shortcuts__RVJkw > :nth-child(1)'
// 	).as('depositBTN')
// 	cy.get('@depositBTN').should('have.text', 'Deposit')
// 	cy.get('@depositBTN').click()

// 	//Select bank
// 	cy.get(':nth-child(1) > .inputs_selectContainer__O9Ic_ > label').should(
// 		'have.text',
// 		'Deposit to Bank'
// 	)
// 	cy.get('.inputs_selectContainer__O9Ic_ > select')
// 		.select('84')
// 		.should('have.value', '84')

// 	//Deposit Amount - Invalid amount
// 	cy.get(
// 		'.amount-input_inputContainer__jUvRT > .inputs_textContainer__ksnHm > input'
// 	).as('amtInput')
// 	cy.get('@amtInput').click()
// 	cy.get('@amtInput').type('65')

// 	//Transaction ID - valid ID
// 	cy.get(
// 		'.bank-transfer_transactionId__ziAat > .inputs_textContainer__ksnHm > input'
// 	).as('idInput')
// 	cy.get('@idInput').click()
// 	cy.get('@idInput').type(validID1)

// 	//Submit deposit button
// 	cy.get('#TT__deposit-submit-banktransfer').as('depSubmitBTN')
// 	cy.get('@depSubmitBTN').should('have.text', 'Submit Deposit')
// 	cy.get('@depSubmitBTN').click()

// 	// Deposit error pop up
// 	cy.get('.modal_hero__P0JkX > .modal_title__2_dt7').as('depMsg')
// 	cy.get('@depMsg').should('have.text', 'Deposit Successful')
// })

// it('player upload receipt', async () => {
// 	//Homepage > Deposit page
// 	cy.get(
// 		'.index_announcementActions__nhC_d > .user-quick-actions_shortcuts__RVJkw > :nth-child(1)'
// 	).as('depositBTN')
// 	cy.get('@depositBTN').should('have.text', 'Deposit')
// 	cy.get('@depositBTN').click()

// 	//Select bank
// 	cy.get(':nth-child(1) > .inputs_selectContainer__O9Ic_ > label').should(
// 		'have.text',
// 		'Deposit to Bank'
// 	)
// 	cy.get('.inputs_selectContainer__O9Ic_ > select')
// 		.select('84')
// 		.should('have.value', '84')

// 		cy.get('.image-uploader_inputContainer__ofJtX > div > label > div > .TT__standard-button').as('uploadReceipt')
// 		cy.get('@uploadReceipt').should('have.text', 'Select receipt')
// 		cy.get('@uploadReceipt').click()
// })
