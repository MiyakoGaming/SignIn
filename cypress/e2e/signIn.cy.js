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

it.skip('Player login account successfully  .skip()', async () => {
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
})

it('Player login account failed when player insert invalid username and password', async () => {
	const invalidata = await getUsernameAndPassword(
		'invalidUsername',
		'invalidPassword'
	)

	const { username, password } = invalidata

	cy.get('.inputs_textContainer__ksnHm > input').as('username')
	cy.get('@username').invoke('attr', 'placeholder').should('eq', 'Username')
	cy.get('@username').click().should('have.text', '')
	cy.get('@username').type(username)
	cy.get('@username').should('have.value', username)

	cy.get('.inputs_inputContainer__YQKEw > input').as('password')
	cy.get('@password').invoke('attr', 'placeholder').should('eq', 'Password');
	cy.get('@password').click().should('have.text', '')
	cy.get('@password').type(password)
	cy.get('@password').should('have.value', password)


	cy.get('form > .TT__standard-button').as('loginButton')
	cy.get('@loginButton').should('have.text', 'Sign In')
	cy.get('@loginButton').click()

	cy.get('.modal_hero__P0JkX').as("loginMsg")
	cy.get('@loginMsg').should('be.visible');
	cy.get('@loginMsg').should('have.text', 'Unable to log in.')

	cy.get('.modal_action__0o7AY > .TT__standard-button').as('okay')
	cy.get('@okay').should('be.visible');
	cy.get('@okay').should('have.text', 'Okay')
	cy.get('@okay').click()

	cy.get('@username').invoke('attr', 'placeholder').should('eq', 'Username')
	cy.get('@password').invoke('attr', 'placeholder').should('eq', 'Password');
})
