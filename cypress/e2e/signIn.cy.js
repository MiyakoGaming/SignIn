beforeEach(() => {
	cy.visit('http://my.jufsolution1.com')
})

it('Player login account failed or success when player insert empty / invalid / valid username and password', () => {
	cy.get(
		':nth-child(1) > .user-quick-view_container__pFlJe > .user-quick-view_guestActions__La_tU > .user-quick-view_signInLink__trPsS'
	).as('signInPage')
	cy.get('@signInPage').click()

	//Empty username and password
	cy.get('.inputs_textContainer__ksnHm > input').as('username')
	cy.get('@username').click()

	cy.get('.inputs_inputContainer__YQKEw > input').as('password')
	cy.get('@password').click()

	cy.get('form > .TT__standard-button').as('loginButton')
	cy.get('@loginButton').click()

	//Invalid username and password
	cy.fixture('shortcut').then(shortcut => {
		const username = shortcut.invalidUsername
		const password = shortcut.invalidPassword

		cy.get('@username').type(username)
		cy.get('@password').type(password)
	})
	cy.get('@loginButton').click()

	cy.get('.modal_action__0o7AY > .TT__standard-button').as('okayBTN')
	cy.get('@okayBTN').click()

	//Clear previous detail before insert new details
	cy.get('@username').clear()
	cy.get('@password').clear()

	//Invalid username and empty password
	cy.fixture('shortcut').then(shortcut => {
		const username = shortcut.invalidUsername

		cy.get('@username').type(username)
	})

	cy.get('@loginButton').click()

	cy.get('.modal_action__0o7AY > .TT__standard-button').as('okayBTN')
	cy.get('@okayBTN').click()

	//Clear previous detail before insert new details
	cy.get('@username').clear()
	cy.get('@password').clear()

	//Valid username and password
	cy.fixture('shortcut').then(shortcut => {
		const username = shortcut.validUsername
		const password = shortcut.validPassword

		cy.get('@username').type(username)
		cy.get('@password').type(password)
	})

	cy.get('@loginButton').click()
})
