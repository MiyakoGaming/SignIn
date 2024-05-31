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

Cypress.on('uncaught:exception', (err, runnable) => {
	// Fail the test
	throw err
	// Return false to prevent the error from failing the test in an unexpected way
	return false
})

it('Player login account successfully', async () => {
	const validata = await getUsernameAndPassword(
		'validUsername',
		'invalidPassword'
	)

	const { username, password } = validata

	const caught = {
		message: null,
	}

	cy.on('uncaught:exception', (e, runnable, promise) => {
		caught.message = e.message

		return false
	})

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
	cy.wrap(caught).should((c) => {
		expect(c.message).to.include('Did not handle this promise')
	  })
})

// Your asynchronous function example
// async function someAsyncOperation() {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			reject(new Error('Uncaught exception'))
// 		}, 4000)
// 	})
// }
