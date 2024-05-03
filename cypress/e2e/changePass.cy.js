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

function getNewPassword(currentPassword, newPassword, wrongPass) {
	return new Promise(resolve => {
		cy.fixture('shortcut.json').then(uf => {
			resolve({
				currentPass: uf[currentPassword],
				newPass: uf[newPassword],
                wrgPass: uf[wrongPass],
			})
		})
	})
}

it.skip('Player change password successfully from Frontend .skip()', async () => {
	const validata = await getUsernameAndPassword(
		'validUsername',
		'validPassword'
	)

	const { username, password } = validata

    const passwordData1 = await getNewPassword(
        'currentPassword1',
        'newPassword3',
        'wrongPassword1'
    )

    const {currentPass, newPass, wrgPass} = passwordData1

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

	//Login successfully

	cy.get('@profileUsername').click()
	cy.get('.account_title__CRo87').as('myAcc')
	cy.get('@myAcc').should('have.text', 'My Account')

	//3 dot indicator
	cy.get('.account_userMenuButtonContainer__Wa1hN').as('3dot')
	cy.get('@3dot').click('center')

	//3 dot indicator > Change password page
	cy.get('.account_list__2XnZl > [href="/account/change-password"]').as(
		'changePass'
	)
	cy.get('@changePass').should('have.text', 'Change password')
	cy.get('@changePass').click()
	cy.get('.main_title__6Mbhv').should('have.text', 'Change Password')

    cy.get('.inputs_textContainer__ksnHm:nth-child(1) > input').as('currentPassword')
    cy.get('@currentPassword').invoke('attr', 'placeholder').should('eq', 'Current Password');
    cy.get('@currentPassword').click()
    cy.get('@currentPassword').type(currentPass)
	cy.get('@currentPassword').invoke('val').should('eq', currentPass).and('have.length.gte', 8).and('have.length.lte', 30)

	cy.get('.inputs_textContainer__ksnHm:nth-child(2) > input').as('newPass')
	cy.get('@newPass').invoke('attr', 'placeholder').should('eq', 'New Password')
	cy.get('@newPass').click()
	cy.get('@newPass').type(newPass)
	cy.get('@newPass').invoke('val').should('eq', newPass).and('have.length.gte', 8).and('have.length.lte', 30)

	cy.get('.inputs_textContainer__ksnHm:nth-child(3) > input').as('retypePass')
	cy.get('@retypePass').invoke('attr', 'placeholder').should('eq', 'Retype Password')
	cy.get('@retypePass').click()
	cy.get('@retypePass').type(newPass)
	cy.get('@retypePass').invoke('val').should('eq', newPass).and('have.length.gte', 8).and('have.length.lte', 30)

	cy.get('.change-password_actionContainer__wxvfo > .TT__standard-button').as('changePassBTN')
	cy.get('@changePassBTN').should('have.text', 'Change password')
	cy.get('@changePassBTN').click()
})

it('Player failed to change password from frontend because using invalid password',async()=>{
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

	//Login successfully
})
