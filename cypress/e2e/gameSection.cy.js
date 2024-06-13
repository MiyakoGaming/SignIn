//1. testGameSection{(Switch from Live Casino category --> Sports Category) , (test case, true)}
//2. testGameSection{(Switch from Live Casino category --> Slots Category) , (test case, true)}
//3. testGameSection{(Switch from Live Casino category --> Fishing Category) , (test case, true)}
//4. testGameSection{(Switch from Live Casino category --> Others Category) , (test case, true)}
//5. testGameSection{(Switch from Live Casino category --> Sports Category --> Fishing Category) , (test case, true)}
//6. testGameSection{(Click any game in Live casino category, show Transfer Pop Up) , (test case, true)}
//7. testGameSection{(Click any game in App category) , (test case, true)}
//8. testGameSection{(Click any game in Slots category, launch game) , (test case, true)}
//9. testGameSection{(Click any maintenance game, launch game failed) , (test case, true)}

Cypress.on('uncaught:exception', (err, runnable) => {
	// Fail the test
	throw err
	// Return false to prevent the error from failing the test in an unexpected way
	return false
})

//Login detail
var validUsername = 'mikodemo1002'
var validPassword = 'Yes888888'

beforeEach(() => {
	cy.visit('https://www.jufsolution3.com/auth/signin?redirect=/')
	cy.Test_Login_Account(validUsername, validPassword)
	cy.Profile_Username(validUsername)
})

//testGameSection{(Switch from Live Casino category --> Sports Category) , (test case, true)}
it('Verify switch game from Live Casino category to Sports Category', () => {
	cy.Sports_Category_Tab()
})

//testGameSection{(Switch from Live Casino category --> Slots Category) , (test case, true)}
it('Verify switch game from Live Casino category to Slots Category', () => {
	cy.Slots_Category_Tab()
})

//testGameSection{(Switch from Live Casino category --> Fishing Category) , (test case, true)}
it('Verify switch game from Live Casino category to Fishing Category', () => {
	cy.Fishing_Category_Tab()
})

//testGameSection{(Switch from Live Casino category --> Others Category) , (test case, true)}
it('Verify switch game from Live Casino category to Others Category', () => {
	cy.Others_Category_Tab()
})

//testGameSection{(Switch from Live Casino category --> Sports Category --> Live Casino Category) , (test case, true)}
it('Verify switch game from Live Casino category to Sports Category to Live Casino Category', () => {
	cy.Sports_Category_Tab()
	cy.Live_Casino_Category_Tab()
})

//testGameSection{(Click any game in Fishing category, show Transfer Pop Up) , (test case, true)}
it('Verify show transfer pop up when click any game in Fishing Category', () => {
	cy.Fishing_Category_Tab()
	cy.Game_Sequence_1()
})

//testGameSection{(Click any game in App category) , (test case, true)}
it('Verify show transfer pop up when click any game in APP Category', () => {})

//testGameSection{(Click any game in Slots category, launch game) , (test case, true)}
it('Verify show transfer pop up when click any game in Slots Category and launch game', () => {
    cy.Slots_Category_Tab()
	cy.Game_Sequence_2()
    cy.Skip_And_Proceed_To_Game()
})

//testGameSection{(Click any maintenance game, launch game failed) , (test case, true)}
it.skip('Verify show error message pop up when provider is maintenance .skip()', ()=>{
	cy.Game_Sequence_1()
	cy.Skip_And_Proceed_To_Game()
})
