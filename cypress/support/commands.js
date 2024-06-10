//Sign In
const usernameContainer = '.inputs_textContainer__ksnHm > input'
const passwordContainer = '.inputs_inputContainer__YQKEw > input'
const signInButton = 'form > .TT__standard-button'
var signInButtonText = 'Sign In'
Cypress.Commands.add('Test_Login_Account', (username, password) => {
	cy.get(usernameContainer).click()
	cy.get(usernameContainer).type(username).should('have.value', username)

	cy.get(passwordContainer).click()
	cy.get(passwordContainer).type(password).should('have.value', password)

	cy.get(signInButton).should('have.text', signInButtonText)
	cy.get(signInButton).click()
})

//Verify Profile Username
const profileUsername =
	':nth-child(1) > .user-quick-view_container__pFlJe > .user-quick-view_user__FkeJ_ > :nth-child(2) > .user-quick-view_playerMainContent__rDEHg > :nth-child(1)'
Cypress.Commands.add('Profile_Username', profile_Username => {
	cy.get(profileUsername).should('have.text', profile_Username)
})

//Click Profile Username to My account Page
Cypress.Commands.add('Click_Profile_Username', () => {
	cy.get(profileUsername).click()
})

//My account Page Label
const myAccountPageLabel = '.account_title__CRo87'
var myAccountPageLabelText = 'My Account'
Cypress.Commands.add('My_Account_Page_Label', () => {
	cy.get(myAccountPageLabel).should('have.text', myAccountPageLabelText)
})

//Deposit Page Label
const depositPageLabel = '.content_sectionTitle__9Umi5'
var depositPageLabelText = 'Deposit Options'
Cypress.Commands.add('Deposit_Page_Label', () => {
	cy.get(depositPageLabel).should('have.text', depositPageLabelText)
})

//Withdraw Page Label
const withdrawPageLabel = '.withdraw_bankSelector__lCczo > :nth-child(1)'
var withdrawPageLabelText = 'Transfer to:'
Cypress.Commands.add('Withdraw_Page_Label', () => {
	cy.get(withdrawPageLabel).should('have.text', withdrawPageLabelText)
})

//Transfer Page Label
const transferPageLabel = '.content_sectionTitle__9Umi5 > :nth-child(1)'
var transferPageLabelText = 'Wallet'
Cypress.Commands.add('Transfer_Page_Label', () => {
	cy.get(transferPageLabel).should('have.text', transferPageLabelText)
})

//Manage Bank Page Label
const manageBankPageLabel = '.content_sectionTitle__9Umi5'
var manageBankPageLabelText = 'My bank accounts'
Cypress.Commands.add('ManageBank_Page_Label', () => {
	cy.get(manageBankPageLabel).should('have.text', manageBankPageLabelText)
})

//Link a Bank Account Page Label
const linkBankAccountPageLabel = '.main_title__6Mbhv'
var linkBankAccountPageLabelText = 'Link a bank account'
Cypress.Commands.add('Link_Bank_Account_Page_Label', () => {
	cy.get(linkBankAccountPageLabel).should(
		'have.text',
		linkBankAccountPageLabelText
	)
})

//Referral Page Label
const referralPageLabel = '.referral_sectionTitle__hPCjM'
var referralPageLabelText = 'Referral'
Cypress.Commands.add('Referral_Page_Label', () => {
	cy.get(referralPageLabel).should('have.text', referralPageLabelText)
})

//Change Password Page Label
const changePasswordPageLabel = '.main_title__6Mbhv'
var changePasswordPageLabelText = 'Change Password'
Cypress.Commands.add('ChangePassword_Page_Label', () => {
	cy.get(changePasswordPageLabel).should(
		'have.text',
		changePasswordPageLabelText
	)
})

//Click My Account tab on Side Menu --> My account page
const sideMenuMyAccountButton =
	'.account-info_sideNavBar__Zeolo > :nth-child(7)'
Cypress.Commands.add('Navigation_SideMenu_To_MyAccount', () => {
	cy.get(sideMenuMyAccountButton).click()
})

//Click 3 dot indicator
const threeDotIndicator = '.account_userMenuButtonContainer__Wa1hN'
Cypress.Commands.add('Click_3Dot_Indicator', () => {
	cy.get(threeDotIndicator).click('center')
})

//Click manage Banks tab in 3 dot indicator menu --> Manage banks Page
const manageBankTab = '.account_list__2XnZl > [href="/account/banks"]'
var manageBankTabText = 'Manage Banks'
Cypress.Commands.add('Click_ManageBanks_In_3Dot', () => {
	cy.get(manageBankTab).should('have.text', manageBankTabText)
	cy.get(manageBankTab).click()
})

//Click Manage Banks tab on Side Menu --> Manage Banks page
const sideMenuManageBankButton =
	'.account-info_sideNavBar__Zeolo > :nth-child(8)'
Cypress.Commands.add('Navigation_SideMenu_To_ManageBanks', () => {
	cy.get(sideMenuManageBankButton).click()
})

//Click Manage banks on withdraw page
const addNewBankLink = '.withdraw_manage__CQGbD > a'
Cypress.Commands.add('Click_Add_New_banks_Link_To_ManageBanks', () => {
	cy.get(addNewBankLink).click('center')
})

//Click change password tab in 3 dot indicator menu --> Change Password Page
const changePasswordTab =
	'.account_list__2XnZl > [href="/account/change-password"]'
var changePasswordTabText = 'Change password'
Cypress.Commands.add('Click_ChangePassword_In_3Dot', () => {
	cy.get(changePasswordTab).should('have.text', changePasswordTabText)
	cy.get(changePasswordTab).click()
})

//Click Change Password tab on Side Menu --> Change Password page
const sideMenuChangePasswordButton =
	'.account-info_sideNavBar__Zeolo > :nth-child(10)'
Cypress.Commands.add('Navigation_SideMenu_To_ChangePassword', () => {
	cy.get(sideMenuChangePasswordButton).click()
})

//From homepage to Deposit
const homepageDepositButton =
	'.index_announcementActions__nhC_d > .user-quick-actions_shortcuts__RVJkw > :nth-child(1)'
Cypress.Commands.add('Navigation_Homepage_To_Deposit', () => {
	cy.get(homepageDepositButton).click()
})

//Click Deposit in My Account --> Deposit page
const accountPageDepositButton =
	'.account_topActionsContainer__qOQOS > .account_actions__y4FAy > [href="/account/deposit"]'
Cypress.Commands.add('Navigation_AccountPage_To_Deposit', () => {
	cy.get(accountPageDepositButton).click()
})

//Click Deposit tab on Side Menu --> Deposit page
const sideMenuDepositButton =
	'.account-info_sideNavBar__Zeolo > :nth-child(2) > a'
Cypress.Commands.add('Navigation_SideMenu_To_Deposit', () => {
	cy.get(sideMenuDepositButton).click()
})

//From homepage to Transfer
const homepageTransferButton =
	'.index_announcementActions__nhC_d > .user-quick-actions_shortcuts__RVJkw > :nth-child(2)'
Cypress.Commands.add('Navigation_Homepage_To_Transfer', () => {
	cy.get(homepageTransferButton).click()
})

//Click Transfer in My Account --> Transfer page
const accountPageTransferButton =
	'.account_topActionsContainer__qOQOS > .account_actions__y4FAy > [href="/account/transfer"]'
Cypress.Commands.add('Navigation_AccountPage_To_Transfer', () => {
	cy.get(accountPageTransferButton).click()
})

//Click Transfer tab on Side Menu -->Transfer page
const sideMenuTransferButton =
	'.account-info_sideNavBar__Zeolo > :nth-child(3) > a'
Cypress.Commands.add('Navigation_SideMenu_To_Transfer', () => {
	cy.get(sideMenuTransferButton).click()
})

//From homepage to Withdraw page
const homepageWithdrawButton =
	'.index_announcementActions__nhC_d > .user-quick-actions_shortcuts__RVJkw > :nth-child(3)'
Cypress.Commands.add('Navigation_Homepage_To_Withdraw', () => {
	cy.get(homepageWithdrawButton).click()
})

//Click Withdraw in My Account --> Withdraw page
const accountPageWithdrawButton =
	'.account_topActionsContainer__qOQOS > .account_actions__y4FAy > [href="/account/withdraw"]'
Cypress.Commands.add('Navigation_AccountPage_To_Withdraw', () => {
	cy.get(accountPageWithdrawButton).click()
})

//Click Withdraw tab on Side Menu --> Withdraw page
const sideMenuWithdrawButton =
	'.account-info_sideNavBar__Zeolo > :nth-child(4) > a'
Cypress.Commands.add('Navigation_SideMenu_To_Withdraw', () => {
	cy.get(sideMenuWithdrawButton).click()
})

//Click History in My Account --> History page
const accountPageHistoryButton =
	'.account_topActionsContainer__qOQOS > .account_actions__y4FAy > [href="/account/history"]'
Cypress.Commands.add('Navigation_AccountPage_To_History', () => {
	cy.get(accountPageHistoryButton).click()
})

//Click History tab on Side Menu --> History page
const sideMenuHistoryButton =
	'.account-info_sideNavBar__Zeolo > :nth-child(5) > a'
Cypress.Commands.add('Navigation_SideMenu_To_History', () => {
	cy.get(sideMenuHistoryButton).click()
})

//Click Referral tab on Side Menu --> Referral page
const sideMenuReferralButton = '.account-info_sideNavBar__Zeolo > :nth-child(9)'
Cypress.Commands.add('Navigation_SideMenu_To_Referral', () => {
	cy.get(sideMenuReferralButton).click()
})
