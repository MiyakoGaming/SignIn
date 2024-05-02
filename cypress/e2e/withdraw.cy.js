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



it('Player manage bank and submit withdraw successfilly', async ()=>{
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
    cy.get('.inputs_selectContainer__O9Ic_ > select').select('CHNA').should('have.value', 'CHNA')

})