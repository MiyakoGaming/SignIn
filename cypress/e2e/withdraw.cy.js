beforeEach(() => {
	cy.visit('https://www.jufsolution3.com/auth/signin?redirect=/')
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

function getWithdrawAccNo(invalidAccNo, validAccNo) {
	return new Promise(resolve => {
		cy.fixture('shortcut.json').then(uf => {
			resolve({
				invalidAccNo: uf[invalidAccNo],
				validAccNo: uf[validAccNo],
			})
		})
	})
}

it.skip('Player manage bank and submit withdraw successfully .skip()', async () => {
	const validata = await getUsernameAndPassword(
		'validUsername',
		'validPassword'
	)

	const { username, password } = validata

	const withdrawAccNo = await getWithdrawAccNo('invalidAccNo2', 'validAccNo2')

	const { invalidAccNo, validAccNo } = withdrawAccNo

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

	cy.get(
		'.index_announcementActions__nhC_d > .user-quick-actions_shortcuts__RVJkw > :nth-child(3)'
	).as('withdrawBTN')
	cy.get('@withdrawBTN').should('have.text', 'Withdraw')
	cy.get('@withdrawBTN').click()
	cy.get('.withdraw_bankSelector__lCczo > :nth-child(1)').should(
		'have.text',
		'Transfer to:'
	)

	//Click "Add new bank / manage your banks"
	cy.get('.withdraw_manage__CQGbD').as('manageBank')
	cy.get('@manageBank').click('center')

	//Add new banks
	cy.get('.banks_newBank__Ul2Bc').as('linkBank')
	cy.get('@linkBank').should('have.text', 'Link a bank')
	cy.get('@linkBank').click('center')
	cy.get('.main_title__6Mbhv').should('have.text', 'Link a bank account')

	//Link a bank account page
	cy.get('.inputs_selectContainer__O9Ic_ > select')
		.select('SADB')
		.should('have.value', 'SADB')

	cy.get('form > :nth-child(1) > input').as('withdrawAccNo')
	cy.get('@withdrawAccNo')
		.invoke('attr', 'placeholder')
		.should('eq', '1234567890')
	cy.get('@withdrawAccNo').click()
	cy.get('@withdrawAccNo').type(validAccNo)
	cy.get('@withdrawAccNo')
		.invoke('val')
		.should('eq', validAccNo)
		.and('have.length.gte', 4)
		.and('have.length.lte', 20)

	cy.get('.bank-inputs_actionContainer__OTY__ > .TT__standard-button').as(
		'withdrawSubBTN'
	)
	cy.get('@withdrawSubBTN').should('have.text', 'Link bank account')
	cy.get('@withdrawSubBTN').click()

	//Side navigation menu > Deposit > Withdraw
	cy.get('.account-info_sideNavBar__Zeolo > :nth-child(4) > a').as('witNav')
	cy.get('@witNav').should('have.text', 'Withdraw')
	cy.get('@witNav').click()

	cy.get('.amount-input_amount__MY83h > input').as('withdrawInput')
	cy.get('@withdrawInput').click()
	cy.get('@withdrawInput').clear()
	cy.get('@withdrawInput').type('100')

	// select bank
	cy.get('#bank__396').as('selectBank')
	cy.get('@selectBank').check()

	cy.get('.withdraw_submit__Ga6iu > .TT__standard-button').as('withdrawBTN')
	cy.get('@withdrawBTN').should('have.text', 'Submit')
	cy.get('@withdrawBTN').click()


})

it('Player submit withdraw successfully ', async()=>{
	const validata = await getUsernameAndPassword(
		'validUsername',
		'validPassword'
	)

	const { username, password } = validata

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

	cy.get(
		'.index_announcementActions__nhC_d > .user-quick-actions_shortcuts__RVJkw > :nth-child(3)'
	).as('withdrawBTN')
	cy.get('@withdrawBTN').should('have.text', 'Withdraw')
	cy.get('@withdrawBTN').click()

	cy.get('.amount-input_amount__MY83h > input').as('withdrawInput')
	cy.get('@withdrawInput').click()
	cy.get('@withdrawInput').clear()
	cy.get('@withdrawInput').type('100')

	// select bank
	cy.get('#bank__396').as('selectBank')
	cy.get('@selectBank').check()

	cy.get('.withdraw_submit__Ga6iu > .TT__standard-button').as('withdrawBTN')
	cy.get('@withdrawBTN').should('have.text', 'Submit')

	//Click Cancelbutton
	cy.get('@withdrawBTN').click()
	cy.get('.react-confirm-alert')
	cy.get('.buttons_link__UIxx_').as("withdarwCancel")
	cy.get('@withdarwCancel').should('have.text', 'Cancel')
	cy.get('@withdarwCancel').click()
	


	//Click Withdraw button
	// cy.get('@withdrawBTN').click()
	// cy.get('.react-confirm-alert')
	// cy.get('.react-confirm-alert-button__success').as("withdrawButton")
	// cy.get('@withdrawButton').should('have.text', 'Withdraw')
	// // cy.get('@withdrawButton').click()
})
