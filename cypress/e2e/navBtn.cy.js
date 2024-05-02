beforeEach(() => {
	cy.visit('http://my.jufsolution1.com')
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

it('Login website and check navigation function', async () => {
	cy.get(
		':nth-child(1) > .user-quick-view_container__pFlJe > .user-quick-view_guestActions__La_tU > .user-quick-view_signInLink__trPsS'
	).as('signInPage')
	cy.get('@signInPage').should('have.text', 'Sign In')
	cy.get('@signInPage').click()

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

	//Desktop 3 icons (Deposit, transfer, withdraw) on homepage
	cy.get('.top-nav-bar_menu___yi5O > [href="/"]').as('homepage')
	cy.get('@homepage').click()

	cy.get(
		'.index_announcementActions__nhC_d > .user-quick-actions_shortcuts__RVJkw > :nth-child(1)'
	).as('depositBTN')
	cy.get('@depositBTN').should('have.text', 'Deposit')

	cy.get(
		'.index_announcementActions__nhC_d > .user-quick-actions_shortcuts__RVJkw > :nth-child(3)'
	).as('withdrawBTN')
	cy.get('@withdrawBTN').should('have.text', 'Withdraw')

	cy.get(
		'.index_announcementActions__nhC_d > .user-quick-actions_shortcuts__RVJkw > :nth-child(2)'
	).as('transferBTN')
	cy.get('@transferBTN').should('have.text', 'Transfer')

	// Homepage > Go to deposit page
	cy.get('@depositBTN').click()
	cy.get('.content_sectionTitle__9Umi5').should('have.text', 'Deposit Options')

	//Back to homepage > Got to Transfer page
	cy.get('@homepage').click()
	cy.get('@profileUsername').should('have.text', username)
	cy.get('@transferBTN').click()
	cy.get('.content_sectionTitle__9Umi5 > :nth-child(1)').should(
		'have.text',
		'Wallet'
	)

	//Back to homepage > Got to Withdraw page
	cy.get('@homepage').click()
	cy.get('@profileUsername').should('have.text', username)
	cy.get('@withdrawBTN').click()
	cy.get('.withdraw_bankSelector__lCczo > :nth-child(1)').should(
		'have.text',
		'Transfer to:'
	)

	//Side navigation menu > Deposit
	cy.get('.account-info_sideNavBar__Zeolo > :nth-child(2) > a').as('depNav')
	cy.get('@depNav').should('have.text', 'Deposit')
	cy.get('@depNav').click()

	//Side navigation menu > Deposit > Withdraw
	cy.get('.account-info_sideNavBar__Zeolo > :nth-child(4) > a').as('witNav')
	cy.get('@witNav').should('have.text', 'Withdraw')
	cy.get('@witNav').click()

	//Side navigation menu > Withdraw > Transfer
	cy.get('.account-info_sideNavBar__Zeolo > :nth-child(3) > a').as('tranNav')
	cy.get('@tranNav').should('have.text', 'Transfer')
	cy.get('@tranNav').click()

//Side navigation menu > Transfer > History
	cy.get('.account-info_sideNavBar__Zeolo > :nth-child(5) > a').as('hisNav')
	cy.get('@hisNav').should('have.text', 'History')
	cy.get('@hisNav').click()
	cy.get('.history_tabButton__active__tGtBQ').should('have.text', 'Transfers')
	cy.get('.history_tabButtons__fSoCw > :nth-child(2)').should('have.text', 'Deposits')
	cy.get('.history_tabButtons__fSoCw > :nth-child(3)').should('have.text', 'Withdrawals')
	cy.get('.history_tabButtons__fSoCw > :nth-child(2)').click()

	//Account Navigation > to my account page
	cy.get('.account-info_sideNavBar__Zeolo > :nth-child(7)').as('myAcc')
	cy.get('@myAcc').should('have.text', 'My Account')
	cy.get('@myAcc').click()

	cy.get('.account_title__CRo87').should('have.text', 'My Account')

	// My Account page > Deposit page
	cy.get('.account_topActionsContainer__qOQOS > .account_actions__y4FAy > [href="/account/deposit"]').as('DepIcon')
	cy.get('@DepIcon').should('have.text', 'Deposit')
	cy.get('@DepIcon').click()

	//Deposit page > My Account page > Withdraw page
	cy.get('@myAcc').click()
	cy.get('.account_topActionsContainer__qOQOS > .account_actions__y4FAy > [href="/account/withdraw"]').as('witIcon')
	cy.get('@witIcon').should('have.text', 'Withdraw')
	cy.get('@witIcon').click()

	//Withdraw page > My Account page > Transfer page
	cy.get('@myAcc').click()
	cy.get('.account_topActionsContainer__qOQOS > .account_actions__y4FAy > [href="/account/transfer"]').as('transIcon')
	cy.get('@transIcon').should('have.text', 'Transfer')
	cy.get('@transIcon').click()

	//Transfer page > My Account page > History page
	cy.get('@myAcc').click()
	cy.get('.account_topActionsContainer__qOQOS > .account_actions__y4FAy > [href="/account/history"]').as('hisIcon')
	cy.get('@hisIcon').should('have.text', 'History')
	cy.get('@hisIcon').click()

	//History page > Manage Banks
	cy.get('.account-info_sideNavBar__Zeolo > :nth-child(8)').as('magBankNav')
	cy.get('@magBankNav').should('have.text', 'Manage Banks')
	cy.get('@magBankNav').click()
	cy.get('.content_sectionTitle__9Umi5 > div').should('have.text', 'My bank accounts')

	//Manage Banks > Change password
	// cy.get('.account-info_sideNavBar__Zeolo > :nth-child(10)').as('changePassNav')
	// cy.get('@changePassNav').should('have.text', 'Change password')
	// cy.get('@changePassNav').click()
})

it('Login website and 3 dots navigation (sign out, Change Password, Manage banks)', async () => {
    cy.get(
		':nth-child(1) > .user-quick-view_container__pFlJe > .user-quick-view_guestActions__La_tU > .user-quick-view_signInLink__trPsS'
	).as('signInPage')
	cy.get('@signInPage').should('have.text', 'Sign In')
	cy.get('@signInPage').click()

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

    cy.get('@profileUsername').click()
	cy.get('.account_title__CRo87').as('myAcc')
    cy.get('@myAcc').should('have.text', 'My Account')
	
	//3 dot indicator
	cy.get('.account_userMenuButtonContainer__Wa1hN').as('3dot')
    cy.get('@3dot').click('center')

	//3 dot indicator > Manage Banks Nav > My bank accounts
	cy.get('.account_list__2XnZl > [href="/account/banks"]').as("magBanks")
	cy.get('@magBanks').should('have.text', 'Manage Banks')
	cy.get('@magBanks').click()

	//My bank account > 3 dot indicator > Change password page
	cy.get('@profileUsername').click()
	cy.get('.account_list__2XnZl > [href="/account/change-password"]').as("changePass")
	cy.get('@changePass').should('have.text', 'Change password')
	cy.get('@changePass').click()
	cy.get('.main_title__6Mbhv').should('have.text', 'Change Password')

	//My bank account > 3 dot indicator > Sign out
	// cy.get('@profileUsername').click()
	// cy.get('.account_list__2XnZl > .account_listItem___V0Ng').contains('Sign Out')
	// cy.get('.account_list__2XnZl > .account_listItem___V0Ng').as('signOut')
	// cy.get('@signOut').should('have.text', 'Sign Out')
})
