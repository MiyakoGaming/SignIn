//Sign In successfully
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

//Sign In unsuccessfully and show error message pop up
const signInErrorPopUp = '.modal_hero__P0JkX'
const closeSignInErrorPopUp = '.modal_action__0o7AY > .TT__standard-button'

var signInErrorPopUpText = 'Unable to log in.'
var closeSignInErrorPopUpText = 'Okay'

Cypress.Commands.add('Sign_In_Error_message', () => {
	cy.get(signInErrorPopUp).should('be.visible')
	cy.get(signInErrorPopUp).should('have.text', signInErrorPopUpText)

	cy.get(closeSignInErrorPopUp)
		.should('be.visible')
		.and('have.text', closeSignInErrorPopUpText)
	cy.get(closeSignInErrorPopUp).click()
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

//Change password Page - Insert current & new password
const currentPasswordContainer =
	'.inputs_textContainer__ksnHm:nth-child(1) > input'
const newPasswordContainer = '.inputs_textContainer__ksnHm:nth-child(2) > input'
const retypePasswordContainer =
	'.inputs_textContainer__ksnHm:nth-child(3) > input'
const changePasswordButton =
	'.change-password_actionContainer__wxvfo > .TT__standard-button'
var currentPasswordPlaceholder = 'Current Password'
var newPasswordPlaceholder = 'New Password'
var retypePasswordPlaceholder = 'Retype Password'
var changePasswordButtonText = 'Change password'

Cypress.Commands.add(
	'Change_Password_Details',
	(currentPassword, newPassword, retypePassword) => {
		cy.get(currentPasswordContainer)
			.invoke('attr', 'placeholder')
			.should('eq', currentPasswordPlaceholder)
		cy.get(currentPasswordContainer).click()
		cy.get(currentPasswordContainer).type(currentPassword)
		cy.get(currentPasswordContainer)
			.invoke('val')
			.should('eq', currentPassword)
			.and('have.length.gte', 8)
			.and('have.length.lte', 30)

		cy.get(newPasswordContainer)
			.invoke('attr', 'placeholder')
			.should('eq', newPasswordPlaceholder)
		cy.get(newPasswordContainer).click()
		cy.get(newPasswordContainer).type(newPassword)
		cy.get(newPasswordContainer)
			.invoke('val')
			.should('eq', newPassword)
			.and('have.length.gte', 8)
			.and('have.length.lte', 30)

		cy.get(retypePasswordContainer)
			.invoke('attr', 'placeholder')
			.should('eq', retypePasswordPlaceholder)
		cy.get(retypePasswordContainer).click()
		cy.get(retypePasswordContainer).type(retypePassword)
		cy.get(retypePasswordContainer)
			.invoke('val')
			.should('eq', retypePassword)
			.and('have.length.gte', 8)
			.and('have.length.lte', 30)

		cy.get(changePasswordButton).should('have.text', changePasswordButtonText)
		cy.get(changePasswordButton).click()
	}
)

//Deposit Page - Submit Deposit on the frontend
const depositSelectionLabel =
	':nth-child(1) > .inputs_selectContainer__O9Ic_ > label'
const depositSelectionDropdown = '.inputs_selectContainer__O9Ic_ > select'
const depositAmountContainer =
	'.amount-input_inputContainer__jUvRT > .inputs_textContainer__ksnHm > input'
const depositTransactionID =
	'.bank-transfer_transactionId__ziAat > .inputs_textContainer__ksnHm > input'
const depositSubmitButton = '#TT__deposit-submit-banktransfer'
var signInButtonText = 'Sign In'
var depositSubmitText = 'Submit Deposit'
Cypress.Commands.add('Test_Submit_Deposit', (bank, amount, transactionID) => {
	cy.get(depositSelectionLabel).should('have.text', 'Deposit to Bank')
	cy.get(depositSelectionDropdown).select(bank).should('have.value', bank)

	cy.get(depositAmountContainer).click()
	cy.get(depositAmountContainer).type(amount)

	cy.get(depositTransactionID).click()
	cy.get(depositTransactionID).type(transactionID)

	cy.get(depositSubmitButton).should('have.text', depositSubmitText)
	cy.get(depositSubmitButton).click()
})

//Deposit Page - Deposit Success & Error message Pop Up
const depositMessagePopUp = '.modal_hero__P0JkX > .modal_title__2_dt7'
const closeDepositErrorPopUp = '.modal_action__0o7AY > .TT__standard-button'
var depositSuccessPopUpText = 'Deposit submitted'
var depositErrorPopUpText = 'Deposit Unsuccessful'
var closeDepositErrorPopUpText = 'Okay'
Cypress.Commands.add('Deposit_success_message', () => {
	cy.get(depositMessagePopUp).should('have.text', depositSuccessPopUpText)
})

Cypress.Commands.add('Deposit_Error_message', () => {
	cy.get(depositMessagePopUp).should('have.text', depositErrorPopUpText)

	cy.get(closeDepositErrorPopUp).should('have.text', closeDepositErrorPopUpText)
	cy.get(closeDepositErrorPopUp).click()
})

//Manage Banks Page - Click "Link a bank" tab at My bank account page
const linkABankButton = '.banks_newBank__Ul2Bc'
var linkABankButtonText = 'Link a bank'
Cypress.Commands.add('Click_Link_a_bank_at_My_bank_Account_Page', () => {
	cy.get(linkABankButton).should('have.text', linkABankButtonText)
	cy.get(linkABankButton).click('center')
})

//Manage Banks Page - Select bank from dropdown list
const selectBankFromDropdown = '.inputs_selectContainer__O9Ic_ > select'
Cypress.Commands.add('Select_Bank_From_Dropdown', selectBank => {
	cy.get(selectBankFromDropdown)
		.select(selectBank)
		.should('have.value', selectBank)
})

//Manage Banks Page - Account Number container
const accountNumberContainer = 'form > :nth-child(1) > input'
var accountNumberContainerPlaceholder = '1234567890'
Cypress.Commands.add('Insert_Account_Number_Into_Container', accountNumber => {
	cy.get(accountNumberContainer)
		.invoke('attr', 'placeholder')
		.should('eq', accountNumberContainerPlaceholder)
	cy.get(accountNumberContainer).click()
	cy.get(accountNumberContainer).type(accountNumber)
	cy.get(accountNumberContainer)
		.invoke('val')
		.should('eq', accountNumber)
		.and('have.length.gte', 4)
		.and('have.length.lte', 20)
})

//Manage Banks Page - Click "Link bank account" add bank
const linkBankAccountButton =
	'.bank-inputs_actionContainer__OTY__ > .TT__standard-button'
var linkBankAccountButtonText = 'Link bank account'
Cypress.Commands.add('Click_Link_Bank_Account_Button', () => {
	cy.get(linkBankAccountButton).should('have.text', linkBankAccountButtonText)
	cy.get(linkBankAccountButton).click()
})

//Manage Banks Page - Duplicated account number error pop up
const duplicatedAccountNumberPopUp = '.modal_message__hHpBD'
const closeDuplicatedAccountNumberPopUp =
	'.modal_action__0o7AY > .TT__standard-button'
var duplicatedAccountNumberPopUpText =
	'Seems like you have the same bank account number, please use another bank account'
var closeDuplicatedAccountNumberPopUpText = 'Okay'
Cypress.Commands.add('Error_Message_Show_When_Duplicate_Account_Number', () => {
	cy.get(duplicatedAccountNumberPopUp).should(
		'have.text',
		duplicatedAccountNumberPopUpText
	)
	cy.get(closeDuplicatedAccountNumberPopUp).should(
		'have.text',
		closeDuplicatedAccountNumberPopUpText
	)
	cy.get(closeDuplicatedAccountNumberPopUp).click()
})

//Manage Banks Page - Show error message when reach bank account limit
const reachLimitErrorPanel = '.errorPanel'
var reachLimitErrorPanelText = 'You cannot have more than 5 bank accounts.'
Cypress.Commands.add('Error_Message_Show_When_Reach_Limit', () => {
	cy.get(reachLimitErrorPanel).should('have.text', reachLimitErrorPanelText)
})

//Withdraw Page - Submit Withdraw on the frontend
const withdrawAmountContainer = '.amount-input_amount__MY83h > input'
const withdrawSubmitButton = '.withdraw_submit__Ga6iu > .TT__standard-button'
var withdrawSubmitButtonText = 'Submit'

Cypress.Commands.add('Insert_Withdraw_Amount', withdrawAmount => {
	cy.get(withdrawAmountContainer).click()
	cy.get(withdrawAmountContainer).clear()
	cy.get(withdrawAmountContainer).type(withdrawAmount)
})

Cypress.Commands.add('Select_Withdraw_Bank_Checkbox', checkboxBank => {
	cy.get(checkboxBank).check()
})

Cypress.Commands.add('Click_Withdraw_Submit_Button', () => {
	cy.get(withdrawSubmitButton).should('have.text', withdrawSubmitButtonText)
	cy.get(withdrawSubmitButton).click()
})

//Withdraw Page - Confirm or Cancel Submit Withdraw Pop Up
const withdrawConfimationPopUp = '.react-confirm-alert'
const cancelSubmitWithdraw = '.buttons_link__UIxx_'
const confirmSubmitWithdraw = '.react-confirm-alert-button__success'
var cancelSubmitWithdrawText = 'Cancel'
var confirmSubmitWithdrawText = 'Withdraw'
Cypress.Commands.add('Cancel_Submit_Withdraw', () => {
	cy.get(withdrawConfimationPopUp)
	cy.get(cancelSubmitWithdraw).should('have.text', cancelSubmitWithdrawText)
	cy.get(cancelSubmitWithdraw).click()
})

Cypress.Commands.add('Confirm_Submit_Withdraw', () => {
	cy.get(withdrawConfimationPopUp)
	cy.get(confirmSubmitWithdraw).should('have.text', confirmSubmitWithdrawText)
	cy.get(confirmSubmitWithdraw).click()
})

//Withdraw Page - Withdraw & Uncheck Bank Error Message Pop Up
const withdrawErrorPopUp = '.modal_hero__P0JkX'
const uncheckBankErrorPopUp = '.modal_message__hHpBD'
const closeWithdrawErrorPopUpButton =
	'.modal_action__0o7AY > .TT__standard-button'
var withdrawErrorPopUpText = 'Error occurred!'
var uncheckBankErrorPopUpText = 'Please select a bank.'
var closeWithdrawErrorPopUpButtonText = 'Okay'

Cypress.Commands.add('Withdraw_Error_Message_Pop_Up', () => {
	cy.get(withdrawErrorPopUp).should('have.text', withdrawErrorPopUpText)
	cy.get(closeWithdrawErrorPopUpButton).should(
		'have.text',
		closeWithdrawErrorPopUpButtonText
	)
	cy.get(closeWithdrawErrorPopUpButton).click()
})

Cypress.Commands.add('Withdraw_Uncheck_Bank_Error_Message_Pop_Up', () => {
	cy.get(uncheckBankErrorPopUp).should('have.text', uncheckBankErrorPopUpText)
	cy.get(closeWithdrawErrorPopUpButton).should(
		'have.text',
		closeWithdrawErrorPopUpButtonText
	)
	cy.get(closeWithdrawErrorPopUpButton).click()
})

//Game Category Menu Tab
const liveCasinoCategory = '.games_menu__w051Z > :nth-child(1)'
const sportsCategory = '.games_menu__w051Z > :nth-child(2)'
const slotsCategory = '.games_menu__w051Z > :nth-child(3)'
const fishingCategory = '.games_menu__w051Z > :nth-child(4)'
const otherCategory = '.games_menu__w051Z > :nth-child(5)'
var liveCasinoCategoryText = 'Live Casino'
var sportsCategoryText = 'Sports'
var slotsCategoryText = 'Slots'
var fishingCategoryText = 'Fishing'
var otherCategoryText = 'Other'

Cypress.Commands.add('Live_Casino_Category_Tab', () => {
	cy.get(liveCasinoCategory).should('have.text', liveCasinoCategoryText)
	cy.get(liveCasinoCategory).click()
})

Cypress.Commands.add('Sports_Category_Tab', () => {
	cy.get(sportsCategory).should('have.text', sportsCategoryText)
	cy.get(sportsCategory).click()
})

Cypress.Commands.add('Slots_Category_Tab', () => {
	cy.get(slotsCategory).should('have.text', slotsCategoryText)
	cy.get(slotsCategory).click()
})

Cypress.Commands.add('Fishing_Category_Tab', () => {
	cy.get(fishingCategory).should('have.text', fishingCategoryText)
	cy.get(fishingCategory).click()
})

Cypress.Commands.add('Others_Category_Tab', () => {
	cy.get(otherCategory).should('have.text', otherCategoryText)
	cy.get(otherCategory).click()
})

//Games sequence in Game Category
const gameSequence1 = ':nth-child(1) > .TT__game-provider-label'
const gameSequence2 = ':nth-child(2) > .TT__game-provider-label'
const gameSequence3 = ':nth-child(3) > .TT__game-provider-label'

Cypress.Commands.add('Game_Sequence_1', () => {
	cy.get(gameSequence1).click()
})

Cypress.Commands.add('Game_Sequence_2', () => {
	cy.get(gameSequence2).click()
})

Cypress.Commands.add('Game_Sequence_3', () => {
	cy.get(gameSequence3).click()
})

//Click "Skip and proceed to game" to launch game
const skipProccesToGame = '.transfer-prompt_skip__wqRrm > .TT__standard-button'
var skipProccesToGameText = 'Skip and proceed to game'

Cypress.Commands.add('Skip_And_Proceed_To_Game', () => {
	cy.get(skipProccesToGame).should('have.text', skipProccesToGameText)
	cy.get(skipProccesToGame).click()
})

//Error message Pop Up when failed to launch game
const maintenanceMessagePopUp = '.modal_message__hHpBD'
const closeMaintenancePopUp = ''
var maintenanceMessagePopUpText =
	'Something went wrong while launching the game, please try again or contact support for assistance.'
var closeMaintenancePopUpText = 'Okay'
Cypress.Commands.add('Error_Message_When_Launch_Maintenance_Provider', () => {
	cy.get(maintenanceMessagePopUp).should(
		'have.text',
		maintenanceMessagePopUpText
	)
	cy.get(closeMaintenancePopUp).should('have.text', closeMaintenancePopUpText)
	cy.get(closeMaintenancePopUp).click()
})

//Open / close Transfer pop up - Homepage
const openTransferPopUp = '.transfer-prompt_title__dXxW3'
const closeTransferPopUp = '.transfer-prompt_close__mHVSm'
var openTransferPopUpText = 'Transfer'

Cypress.Commands.add('Open_Transfer_Pop_Up', () => {
	cy.get(openTransferPopUp).should('have.text', openTransferPopUpText)
})

Cypress.Commands.add('Close_Transfer_Pop_Up', () => {
	cy.get(closeTransferPopUp).click()
})

//Switch wallet between provider wallet and main wallet
const fromSelectOption =
	':nth-child(1) > .wallet-selection_walletSelector__qL7_c > select'
const toSelectOption =
	':nth-child(3) > .wallet-selection_walletSelector__qL7_c > select'

Cypress.Commands.add(
	'Switch_Wallet_Between_Provider_Wallet_And_Main_Wallet',
	(selectWallet1, selectWallet2) => {
		cy.get(fromSelectOption)
			.select(selectWallet1)
			.should('have.value', selectWallet1)
		cy.get(toSelectOption)
			.select(selectWallet2)
			.should('have.value', selectWallet2)
	}
)

//Insert transfer amount in transfer page after select wallet
const transferAmountLabel = '.amount-inputs_transferAmountLabel___tK6N'
const transferInsertAmount = '.amount-input_amount__MY83h > input'
var transferAmountLabelText = 'Transfer amount'

Cypress.Commands.add(
	'Insert_Transfer_Amount_In_Transfer_Page',
	transferAmount => {
		cy.get(transferAmountLabel).should('have.text', transferAmountLabelText)
		cy.get(transferInsertAmount).click
		cy.get(transferInsertAmount).type(transferAmount)
	}
)

//Click Transfer button in transfer page & transfer button disable when amount above main wallet / provider wallet
const transferPageTransferButton =
	'.amount-inputs_actionSection__XeYV0 > .TT__standard-button'
var transferPageTransferButtonText = 'Transfer'

Cypress.Commands.add('Click_Transfer_Button_In_Transfer_Page', () => {
	// cy.wait(6000)
	cy.get(transferPageTransferButton).should(
		'have.text',
		transferPageTransferButtonText
	)
	cy.get(transferPageTransferButton).click()
})

Cypress.Commands.add('Transfer_Page_Transfer_Button_Disable', () => {
	cy.get(transferPageTransferButton).should('be.disabled')
})

//Insert transfer amount in transfer pop up
const homepageTransferAmount = '.amount-input_amount__MY83h > input'
Cypress.Commands.add(
	'Insert_Transfer_Amount_In_Transfer_Pop_Up',
	transferAmount => {
		cy.get(homepageTransferAmount).click()
		cy.get(homepageTransferAmount).type(transferAmount)
	}
)

//Click Transfer button in transfer Pop up & transfer button disable when amount above main wallet / provider wallet
const transferPopUpTransferButton =
	'.amount-inputs_actionSection__XeYV0 > .TT__standard-button'
var transferPopUpTransferButtonText = 'Transfer'

Cypress.Commands.add('Click_Transfer_Button_In_Transfer_Pop_Up', () => {
	cy.get(transferPopUpTransferButton).should(
		'have.text',
		transferPopUpTransferButtonText
	)
	cy.get(transferPopUpTransferButton).click()
})

Cypress.Commands.add('Transfer_Pop_Up_Transfer_Button_Disable', () => {
	cy.get(transferPopUpTransferButton).should('be.disabled')
})

//Error message Pop Up show when transfer amount below 1 in Tranfer Pop Up
const minAmountErrorMessage = '.modal_message__hHpBD'
const closeMinAmountErrorMessage = '.modal_action__0o7AY > .TT__standard-button'
var minAmountErrorMessageText = 'Transfer amount must be more than 1.'
var closeMinAmountErrorMessageText = 'Okay'

Cypress.Commands.add('Transfer_Amount_Less_Then_1_Error_Pop_Up', () => {
	cy.get(minAmountErrorMessage).should('have.text', minAmountErrorMessageText)
	cy.get(closeMinAmountErrorMessage).should(
		'have.text',
		closeMinAmountErrorMessageText
	)
	cy.get(closeMinAmountErrorMessage).click()
})

//Transfer Page & Transfer Pop Up "Enter promo code" label
const enterPromoCodeLabel = '.inputs_textContainer__ksnHm > label'
var enterPromoCodeLabelText = 'Enter promo code'

Cypress.Commands.add(
	'Enter_Promo_Code_Label_On_Transfer_Page_And_Transfer_Pop_Up',
	() => {
		cy.get(enterPromoCodeLabel).should('have.text', enterPromoCodeLabelText)
	}
)

//Transfer Page & Transfer Pop Up "Select promo" Label
const selectPromoCodeLabel = '.inputs_selectContainer__O9Ic_ > label'
var selectPromoCodeLabelText = 'Select promo'

Cypress.Commands.add(
	'Select_Promo_Label_On_Transfer_Page_And_Transfer_Pop_Up',
	() => {
		cy.get(selectPromoCodeLabel).should('have.text', selectPromoCodeLabelText)
	}
)

//Select promotion on Transfer page & Transfer Pop Up to apply promotion
const promotionSelectionDropdown = '.inputs_selectContainer__O9Ic_ > select'

Cypress.Commands.add(
	'Select_Promotion_On_Transfer_Page_And_Transfer_Pop_Up',
	selectActivePromo => {
		cy.get(promotionSelectionDropdown)
			.select(selectActivePromo)
			.should('have.value', selectActivePromo)
	}
)

//Insert promotion code on Transfer page and Transfer Pop Up & apply promotion
const insertPromotionCode = '.inputs_textContainer__ksnHm > input'
const usePromotionCodeButton =
	'.promotion-code-input_container___dckd > .TT__standard-button'
var usePromotionCodeButtonText = 'Use'

Cypress.Commands.add(
	'Insert_Promotion_Code_On_Transfer_Page_And_Transfer_Pop_Up',
	insertPromoCode => {
		cy.get(insertPromotionCode).click()
		cy.get(insertPromotionCode).type(insertPromoCode)
		cy.get(usePromotionCodeButton).should(
			'have.text',
			usePromotionCodeButtonText
		)
		cy.get(usePromotionCodeButton).click()
	}
)

//Apply promotion success in Transfer page & Transfer Pop Up
const removePromotionButton =
	'.amount-inputs_selectedPromotionContainer__wjqQb > .TT__standard-button'
var removePromotionButtonText = 'Remove Promotion'

Cypress.Commands.add('Valid_Promotion_After_Apply', () => {
	cy.get(removePromotionButton).should('have.text', removePromotionButtonText)
})

Cypress.Commands.add('Cancel_Valid_Promotion_After_Apply', () => {
	cy.get(removePromotionButton).click()
})

//Scroll down to homepage promotion section & Promotion section Label
const homepagePromotionSection = '.index_promotions__YGYtx'
const homepagePromoSectionLabel = '.promotions-preview_header__RvKLD > h4'
var homepagePromoSectionLabelText = 'Exclusive Promotions'

Cypress.Commands.add('Scroll_Down_To_Homepage_Promotion', () => {
	cy.get(homepagePromotionSection).scrollIntoView()
})

Cypress.Commands.add('Homepage_Promotion_Label', () => {
	cy.get(homepagePromoSectionLabel).should(
		'have.text',
		homepagePromoSectionLabelText
	)
})

//Promotion Page Label
const promotionPageLabel = '.promotions_pageTitle__xhfxB > h2'
var promotionPageLabelText = 'All Promotions'

Cypress.Commands.add('Promotion_Page_Label', () => {
	cy.get(promotionPageLabel).should('have.text', promotionPageLabelText)
})

//Click "View all promotions" button to promotion page
const viewAllPromotionButton =
	'.promotions-preview_footer__RnoK0 > a > .TT__standard-button'
var viewAllPromotionButtonText = 'View all promotions'

Cypress.Commands.add('Click_View_All_Promotion_Button', () => {
	cy.get(viewAllPromotionButton).should('have.text', viewAllPromotionButtonText)
	cy.get(viewAllPromotionButton).click()
})

//Click 4 promotions in promotion page
const firstPromotionInPromotionPage =
	'.promotions_promotions__FobUK > .promotion-item_promotionLink__TIxVb:nth-child(1)'
const secondPromotionInPromotionPage =
	'.promotions_promotions__FobUK > .promotion-item_promotionLink__TIxVb:nth-child(3)'
const thirdPromotionInPromotionPage =
	'.promotions_promotions__FobUK > .promotion-item_promotionLink__TIxVb:nth-child(2)'
const forthPromotionInPromotionPage =
	'.promotions_promotions__FobUK > .promotion-item_promotionLink__TIxVb:nth-child(4)'
const promotionPageBanner = '.promotion_imageContainer__whkFN > img'

Cypress.Commands.add('Click_1st_Promotion_On_Promotion_Page', () => {
	cy.get(firstPromotionInPromotionPage).click()
})

Cypress.Commands.add('Click_2nd_Promotion_On_Promotion_Page', () => {
	cy.get(secondPromotionInPromotionPage).click()
})

Cypress.Commands.add('Click_3rd_Promotion_On_Promotion_Page', () => {
	cy.get(thirdPromotionInPromotionPage).click()
})

Cypress.Commands.add('Click_4th_Promotion_On_Promotion_Page', () => {
	cy.get(forthPromotionInPromotionPage).click()
})

Cypress.Commands.add('Promotion_Content_Page_Banner', () => {
	cy.get(promotionPageBanner).should('be.visible')
})

//Click 1st, 2nd, 3rd, 4th promotion on homepage promotion section
const firstPromotionInHomepage =
	'.promotions-preview_mainPromotionContent__8ftve'
const secondPromotionInHomepage =
	'.promotions-preview_subPromotion__x1RMG:nth-child(1) > .promotions-preview_subPromotionCTA__7KRMv'
const thirdPromotionInHomepage =
	'.promotions-preview_subPromotion__x1RMG:nth-child(2) > .promotions-preview_subPromotionCTA__7KRMv'
const forthPromotionInHomepage =
	'.promotions-preview_subPromotion__x1RMG:nth-child(3) > .promotions-preview_subPromotionCTA__7KRMv'

Cypress.Commands.add('Click_1st_Promotion_On_Homepage', () => {
	cy.get(firstPromotionInHomepage).click()
})

Cypress.Commands.add('Click_2nd_Promotion_On_Homepage', () => {
	cy.get(secondPromotionInHomepage).click()
})

Cypress.Commands.add('Click_3rd_Promotion_On_Homepage', () => {
	cy.get(thirdPromotionInHomepage).click()
})

Cypress.Commands.add('Click_4th_Promotion_On_Homepage', () => {
	cy.get(forthPromotionInHomepage).click()
})

//Scroll down to promotion content page & Promotion section Label
const morePromotionsForYou = '.promotion_moreTitle__bxf5v'
var morePromotionsForYouText = 'More promotions for you'

Cypress.Commands.add('Scroll_Down_To_More_Promotions_For_you', () => {
	cy.get(morePromotionsForYou).scrollIntoView()
})

Cypress.Commands.add('More_Promotions_For_You_Label', () => {
	cy.get(morePromotionsForYou).should('have.text', morePromotionsForYouText)
})

//Click 1st, 2nd, 3rd promotions promotion content page "More promotions For You" section
const firstMorePromotions = '.promotion-item_promotionLink__TIxVb:nth-child(1)'
const secondMorePromotions = '.promotion-item_promotionLink__TIxVb:nth-child(2)'
const thirdMorePromotions = '.promotion-item_promotionLink__TIxVb:nth-child(3)'

Cypress.Commands.add('Click_1st_Promotion_On_More_Promotion_section', ()=>{
	cy.get(firstMorePromotions).click()
})

Cypress.Commands.add('Click_2nd_Promotion_On_More_Promotion_section', ()=>{
	cy.get(secondMorePromotions).click()
})

Cypress.Commands.add('Click_3rd_Promotion_On_More_Promotion_section', ()=>{
	cy.get(thirdMorePromotions).click()
})
