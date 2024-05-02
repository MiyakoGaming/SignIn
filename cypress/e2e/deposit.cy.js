beforeEach(() => {
	cy.visit('https://my.jufsolution1.com/auth/signin?redirect=/')
})

function getUsernameAndPassword(usernameKey, passwordKey) {
	return new Promise(resolve => {
		cy.fixture('shortcut.json').then(uf => {
			resolve({
				username: uf[usernameKey],
				password: uf[passwordKey],
			})
		})
	})
}

function getDepId(depositID1, depositID2) {
	return new Promise(resolve => {
		cy.fixture('depID.json').then(uf => {
			resolve({
				invalidID1: uf[depositID1],
				validID1: uf[depositID2],
			})
		})
	})
}

it.skip('Player insert invalid amount & transaction ID (Deposit Unsuccessfully) .skip()', async () => {
	const validata = await getUsernameAndPassword(
		'validUsername',
		'validPassword'
	)

	const invalidIdNo = await getDepId('invalidID1', 'validID1')

	const { username, password } = validata

	const { invalidID1, validID1 } = invalidIdNo

	cy.get('.inputs_textContainer__ksnHm > input').as('username')
	cy.get('@username').click()
	cy.get('@username').type(username).should('have.value', username)

	cy.get('.inputs_inputContainer__YQKEw > input').as('password')
	cy.get('@password').click()
	cy.get('@password').type(password).should('have.value', password)

	cy.get('form > .TT__standard-button').as('loginButton')
	cy.get('@loginButton').click()
	cy.get(
		':nth-child(1) > .user-quick-view_container__pFlJe > .user-quick-view_user__FkeJ_ > :nth-child(2) > .user-quick-view_playerMainContent__rDEHg > :nth-child(1)'
	).as('profileUsername')
	cy.get('@profileUsername').should('have.text', username)

	// *****Successfully login******

	//Homepage > Deposit page
	cy.get(
		'.index_announcementActions__nhC_d > .user-quick-actions_shortcuts__RVJkw > :nth-child(1)'
	).as('depositBTN')
	cy.get('@depositBTN').click()

	//Select bank
	cy.get(':nth-child(1) > .inputs_selectContainer__O9Ic_ > label').should(
		'have.text',
		'Deposit to Bank'
	)
	cy.get('.inputs_selectContainer__O9Ic_ > select')
		.select('84')
		.should('have.value', '84')

	//Deposit Amount - Invalid amount
	cy.get(
		'.amount-input_inputContainer__jUvRT > .inputs_textContainer__ksnHm > input'
	).as('amtInput')
	cy.get('@amtInput').click()
	cy.get('@amtInput').type('10')

	//Transaction ID - Invalid ID
	cy.get(
		'.bank-transfer_transactionId__ziAat > .inputs_textContainer__ksnHm > input'
	).as('idInput')
	cy.get('@idInput').click()
	cy.get('@idInput').type(invalidID1)

	//Submit deposit button
	cy.get('#TT__deposit-submit-banktransfer').as('depSubmitBTN')
	cy.get('@depSubmitBTN').should('have.text', 'Submit Deposit')
	cy.get('@depSubmitBTN').click()

	// Deposit error pop up
	cy.get('.modal_hero__P0JkX > .modal_title__2_dt7').as('depMsg')
	cy.get('@depMsg').should('have.text', 'Deposit Unsuccessful')

	//Click "Okay" to insert again
	cy.get('.modal_action__0o7AY > .TT__standard-button').as('OK')
	cy.get('@OK').should('have.text', 'Okay')
	cy.get('@OK').click()
})

it.skip('Player insert invalid amount & valid transaction ID (Deposit unsuccessfully) .skip()', async () => {
	const validata = await getUsernameAndPassword(
		'validUsername',
		'validPassword'
	)

	const invalidIdNo = await getDepId('invalidID1', 'validID1')

	const { username, password } = validata

	const { invalidID1, validID1 } = invalidIdNo

	cy.get('.inputs_textContainer__ksnHm > input').as('username')
	cy.get('@username').click()
	cy.get('@username').type(username).should('have.value', username)

	cy.get('.inputs_inputContainer__YQKEw > input').as('password')
	cy.get('@password').click()
	cy.get('@password').type(password).should('have.value', password)

	cy.get('form > .TT__standard-button').as('loginButton')
	cy.get('@loginButton').click()

	// *****Successfully login******

	//Homepage > Deposit page
	cy.get(
		'.index_announcementActions__nhC_d > .user-quick-actions_shortcuts__RVJkw > :nth-child(1)'
	).as('depositBTN')
	cy.get('@depositBTN').should('have.text', 'Deposit')
	cy.get('@depositBTN').click()

	//Select bank
	cy.get(':nth-child(1) > .inputs_selectContainer__O9Ic_ > label').should(
		'have.text',
		'Deposit to Bank'
	)
	cy.get('.inputs_selectContainer__O9Ic_ > select')
		.select('84')
		.should('have.value', '84')

	//Deposit Amount - Invalid amount
	cy.get(
		'.amount-input_inputContainer__jUvRT > .inputs_textContainer__ksnHm > input'
	).as('amtInput')
	cy.get('@amtInput').click()
	cy.get('@amtInput').type('40000')

	//Transaction ID - valid ID
	cy.get(
		'.bank-transfer_transactionId__ziAat > .inputs_textContainer__ksnHm > input'
	).as('idInput')
	cy.get('@idInput').click()
	cy.get('@idInput').type(validID1)

	//Submit deposit button
	cy.get('#TT__deposit-submit-banktransfer').as('depSubmitBTN')
	cy.get('@depSubmitBTN').should('have.text', 'Submit Deposit')
	cy.get('@depSubmitBTN').click()

	// // Deposit error pop up
	cy.get('.modal_hero__P0JkX > .modal_title__2_dt7').as('depMsg')
	cy.get('@depMsg').should('have.text', 'Deposit Unsuccessful')

	//Click "Okay" to insert again
	cy.get('.modal_action__0o7AY > .TT__standard-button').as('OK')
	cy.get('@OK').should('have.text', 'Okay')
	cy.get('@OK').click()
})

it.skip('player insert valid amount & invalid transaction ID (Deposit unsuccessfully) .skip()', async () => {
	const validata = await getUsernameAndPassword(
		'validUsername',
		'validPassword'
	)

	const invalidIdNo = await getDepId('invalidID1', 'validID1')

	const { username, password } = validata

	const { invalidID1, validID1 } = invalidIdNo

	cy.get('.inputs_textContainer__ksnHm > input').as('username')
	cy.get('@username').click()
	cy.get('@username').type(username).should('have.value', username)

	cy.get('.inputs_inputContainer__YQKEw > input').as('password')
	cy.get('@password').click()
	cy.get('@password').type(password).should('have.value', password)

	cy.get('form > .TT__standard-button').as('loginButton')
	cy.get('@loginButton').click()

	// *****Successfully login******

	//Homepage > Deposit page
	cy.get(
		'.index_announcementActions__nhC_d > .user-quick-actions_shortcuts__RVJkw > :nth-child(1)'
	).as('depositBTN')
	cy.get('@depositBTN').should('have.text', 'Deposit')
	cy.get('@depositBTN').click()

	//Select bank
	cy.get(':nth-child(1) > .inputs_selectContainer__O9Ic_ > label').should(
		'have.text',
		'Deposit to Bank'
	)
	cy.get('.inputs_selectContainer__O9Ic_ > select')
		.select('84')
		.should('have.value', '84')

	//Deposit Amount - Invalid amount
	cy.get(
		'.amount-input_inputContainer__jUvRT > .inputs_textContainer__ksnHm > input'
	).as('amtInput')
	cy.get('@amtInput').click()
	cy.get('@amtInput').type('65')

	//Transaction ID - valid ID
	cy.get(
		'.bank-transfer_transactionId__ziAat > .inputs_textContainer__ksnHm > input'
	).as('idInput')
	cy.get('@idInput').click()
	cy.get('@idInput').type(invalidID1)

	//Submit deposit button
	cy.get('#TT__deposit-submit-banktransfer').as('depSubmitBTN')
	cy.get('@depSubmitBTN').should('have.text', 'Submit Deposit')
	cy.get('@depSubmitBTN').click()

	// Deposit error pop up
	cy.get('.modal_hero__P0JkX > .modal_title__2_dt7').as('depMsg')
	cy.get('@depMsg').should('have.text', 'Deposit Unsuccessful')

	//Click "Okay" to insert again
	cy.get('.modal_action__0o7AY > .TT__standard-button').as('OK')
	cy.get('@OK').should('have.text', 'Okay')
	cy.get('@OK').click()
})

it.skip('player insert valid amount & valid transaction ID (Deposit successfully) .skip()', async () => {
	const validata = await getUsernameAndPassword(
		'validUsername',
		'validPassword'
	)

	const invalidIdNo = await getDepId('invalidID1', 'validID1')

	const { username, password } = validata

	const { invalidID1, validID1 } = invalidIdNo

	cy.get('.inputs_textContainer__ksnHm > input').as('username')
	cy.get('@username').click()
	cy.get('@username').type(username).should('have.value', username)

	cy.get('.inputs_inputContainer__YQKEw > input').as('password')
	cy.get('@password').click()
	cy.get('@password').type(password).should('have.value', password)

	cy.get('form > .TT__standard-button').as('loginButton')
	cy.get('@loginButton').click()

	// *****Successfully login******

	//Homepage > Deposit page
	cy.get(
		'.index_announcementActions__nhC_d > .user-quick-actions_shortcuts__RVJkw > :nth-child(1)'
	).as('depositBTN')
	cy.get('@depositBTN').should('have.text', 'Deposit')
	cy.get('@depositBTN').click()

	//Select bank
	cy.get(':nth-child(1) > .inputs_selectContainer__O9Ic_ > label').should(
		'have.text',
		'Deposit to Bank'
	)
	cy.get('.inputs_selectContainer__O9Ic_ > select')
		.select('84')
		.should('have.value', '84')

	//Deposit Amount - Invalid amount
	cy.get(
		'.amount-input_inputContainer__jUvRT > .inputs_textContainer__ksnHm > input'
	).as('amtInput')
	cy.get('@amtInput').click()
	cy.get('@amtInput').type('65')

	//Transaction ID - valid ID
	cy.get(
		'.bank-transfer_transactionId__ziAat > .inputs_textContainer__ksnHm > input'
	).as('idInput')
	cy.get('@idInput').click()
	cy.get('@idInput').type(validID1)

	//Submit deposit button
	cy.get('#TT__deposit-submit-banktransfer').as('depSubmitBTN')
	cy.get('@depSubmitBTN').should('have.text', 'Submit Deposit')
	cy.get('@depSubmitBTN').click()

	// Deposit error pop up
	cy.get('.modal_hero__P0JkX > .modal_title__2_dt7').as('depMsg')
	cy.get('@depMsg').should('have.text', 'Deposit Successful')
})

it('player upload receipt', async () => {
	const validata = await getUsernameAndPassword(
		'validUsername',
		'validPassword'
	)

	const invalidIdNo = await getDepId('invalidID1', 'validID1')

	const { username, password } = validata

	const { invalidID1, validID1 } = invalidIdNo

	cy.get('.inputs_textContainer__ksnHm > input').as('username')
	cy.get('@username').click()
	cy.get('@username').type(username).should('have.value', username)

	cy.get('.inputs_inputContainer__YQKEw > input').as('password')
	cy.get('@password').click()
	cy.get('@password').type(password).should('have.value', password)

	cy.get('form > .TT__standard-button').as('loginButton')
	cy.get('@loginButton').click()

	// *****Successfully login******

	//Homepage > Deposit page
	cy.get(
		'.index_announcementActions__nhC_d > .user-quick-actions_shortcuts__RVJkw > :nth-child(1)'
	).as('depositBTN')
	cy.get('@depositBTN').should('have.text', 'Deposit')
	cy.get('@depositBTN').click()

	//Select bank
	cy.get(':nth-child(1) > .inputs_selectContainer__O9Ic_ > label').should(
		'have.text',
		'Deposit to Bank'
	)
	cy.get('.inputs_selectContainer__O9Ic_ > select')
		.select('84')
		.should('have.value', '84')

		cy.get('.image-uploader_inputContainer__ofJtX > div > label > div > .TT__standard-button').as('uploadReceipt')
		cy.get('@uploadReceipt').should('have.text', 'Select receipt')
		cy.get('@uploadReceipt').click()
})
