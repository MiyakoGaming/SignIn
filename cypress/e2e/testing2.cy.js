beforeEach(async () => {
	await cy.visit('https://www.jufsolution3.com/auth/signin?redirect=/', {
		chromeWebSecurity: false, // Turn off all uncaught exception handling
	})
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

it('Player login account successfully', async () => {

    const validata = await getUsernameAndPassword(
		'validUsername',
		'validPassword'
	)

	const { username, password } = validata

    // cy.visit('https://www.jufsolution3.com/auth/signin?redirect=/')
	cy.get('.inputs_textContainer__ksnHm > input').as('username')
	cy.get('@username').click()
	// cy.get('@username').type(username).should('have.value', username)

	cy.get('.inputs_inputContainer__YQKEw > input').as('password')
	cy.get('@password').click()
	// cy.get('@password').type(password).should('have.value', password)
})
