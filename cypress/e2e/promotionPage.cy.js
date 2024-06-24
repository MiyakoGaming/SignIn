//1. testPromotionContent{(Click homepage 'View all promotion' to promotion page, true) , (test case, true)}
//2. testPromotionContent{(Click homepage 1st promotion go to selected promotion content page, true) , (test case, true)}
//3. testPromotionContent{(Click homepage 2nd promotion go to selected promotion content page, true) , (test case, true)}
//4. testPromotionContent{(Click homepage 3nd promotion go to selected promotion content page, true) , (test case, true)}
//5. testPromotionContent{(Click homepage 4nd promotion go to selected promotion content page, true) , (test case, true)}
//6. testPromotionContent{(Click promotion page right sided 1st promotion go to selected promotion content page, true) , (test case, true)}
//7. testPromotionContent{(Click promotion page right sided 2nd promotion go to selected promotion content page, true) , (test case, true)}
//8. testPromotionContent{(Click promotion page left sided 1st promotion go to selected promotion content page, true) , (test case, true)}
//9. testPromotionContent{(Click promotion page left sided 2nd promotion go to selected promotion content page, true) , (test case, true)}
//10. testPromotionContent{(Click 1st promotion on promotion promotion content page, true) , (test case, true)}
//11. testPromotionContent{(Click 2st promotion on promotion promotion content page, true) , (test case, true)}
//12. testPromotionContent{(Click 3st promotion on promotion promotion content page, true) , (test case, true)}
Cypress.on('uncaught:exception', (err, runnable) => {
	// Fail the test
	throw err
	// Return false to prevent the error from failing the test in an unexpected way
	return false
})

beforeEach(() => {
	cy.Website_Homepage_URL()
})

//testPromotionContent{(Click homepage 'View all promotion' to promotion page, true) , (test case, true)}
it.skip('Click "View all promotion" button to promotion page .skip()', () => {
	cy.Scroll_Down_To_Homepage_Promotion()
	cy.Homepage_Promotion_Label()
	cy.Click_View_All_Promotion_Button()
	cy.Promotion_Page_Label()
})

//testPromotionContent{(Click homepage 1st promotion go to selected promotion content page, true) , (test case, true)}
it.skip('Click homepage 1st promotion go to selected promotion content page .skip()', () => {
	cy.Scroll_Down_To_Homepage_Promotion()
	cy.Homepage_Promotion_Label()
	cy.Click_1st_Promotion_On_Homepage()
})

//testPromotionContent{(Click homepage 2nd promotion go to selected promotion content page, true) , (test case, true)}
it.skip('Click homepage 2nd promotion go to selected promotion content page .skip()', ()=>{
	cy.Scroll_Down_To_Homepage_Promotion()
	cy.Homepage_Promotion_Label()
	cy.Click_2nd_Promotion_On_Homepage()
})

//testPromotionContent{(Click homepage 3nd promotion go to selected promotion content page, true) , (test case, true)}
it.skip('Click homepage 3nd promotion go to selected promotion content page .skip()', ()=>{
	cy.Scroll_Down_To_Homepage_Promotion()
	cy.Homepage_Promotion_Label()
	cy.Click_3rd_Promotion_On_Homepage()
})

//testPromotionContent{(Click homepage 4nd promotion go to selected promotion content page, true) , (test case, true)}
it.skip('Click homepage 4nd promotion go to selected promotion content page .skip()', ()=>{
	cy.Scroll_Down_To_Homepage_Promotion()
	cy.Homepage_Promotion_Label()
	cy.Click_4th_Promotion_On_Homepage()
})

//testPromotionContent{(Click promotion page right sided 1st promotion go to selected promotion content page, true) , (test case, true)}
it.skip('Click right column 1st promotion on promotion page .skip()', ()=>{
	cy.Scroll_Down_To_Homepage_Promotion()
	cy.Homepage_Promotion_Label()
	cy.Click_View_All_Promotion_Button()
	cy.Click_1st_Promotion_On_Promotion_Page()
	cy.Promotion_Content_Page_Banner()
})

//testPromotionContent{(Click promotion page right sided 2nd promotion go to selected promotion content page, true) , (test case, true)}
it.skip('Click right column 2nd promotion on promotion page .skip()', ()=>{
	cy.Scroll_Down_To_Homepage_Promotion()
	cy.Homepage_Promotion_Label()
	cy.Click_View_All_Promotion_Button()
	cy.Click_2nd_Promotion_On_Promotion_Page()
	cy.Promotion_Content_Page_Banner()
})

//testPromotionContent{(Click promotion page left sided 1st promotion go to selected promotion content page, true) , (test case, true)}
it.skip('Click right column 3rd promotion on promotion page .skip()', ()=>{
	cy.Scroll_Down_To_Homepage_Promotion()
	cy.Homepage_Promotion_Label()
	cy.Click_View_All_Promotion_Button()
	cy.Click_3rd_Promotion_On_Promotion_Page()
	cy.Promotion_Content_Page_Banner()
})

//testPromotionContent{(Click promotion page left sided 2nd promotion go to selected promotion content page, true) , (test case, true)}
it.skip('Click right column 4th promotion on promotion page .skip()', ()=>{
	cy.Scroll_Down_To_Homepage_Promotion()
	cy.Homepage_Promotion_Label()
	cy.Click_View_All_Promotion_Button()
	cy.Click_4th_Promotion_On_Promotion_Page()
	cy.Promotion_Content_Page_Banner()
})

//testPromotionContent{(Click 1st promotion on promotion promotion content page, true) , (test case, true)}
it('Click 1st promotion on promotion promotion content page', ()=>{
	cy.Scroll_Down_To_Homepage_Promotion()
	cy.Click_View_All_Promotion_Button()
	cy.Click_4th_Promotion_On_Homepage()
	cy.Scroll_Down_To_More_Promotions_For_you()
	cy.More_Promotions_For_You_Label()
	cy.Click_1st_Promotion_On_More_Promotion_section()
	cy.Promotion_Content_Page_Banner()
})

//testPromotionContent{(Click 2st promotion on promotion promotion content page, true) , (test case, true)}
it('Click 2nd promotion on promotion promotion content page', ()=>{
	cy.Scroll_Down_To_Homepage_Promotion()
	cy.Click_View_All_Promotion_Button()
	cy.Click_4th_Promotion_On_Homepage()
	cy.Scroll_Down_To_More_Promotions_For_you()
	cy.More_Promotions_For_You_Label()
	cy.Click_2nd_Promotion_On_More_Promotion_section()
	cy.Promotion_Content_Page_Banner()
})

//testPromotionContent{(Click 3st promotion on promotion promotion content page, true) , (test case, true)}
it('Click 3rd promotion on promotion promotion content page', ()=>{
	cy.Scroll_Down_To_Homepage_Promotion()
	cy.Click_View_All_Promotion_Button()
	cy.Click_4th_Promotion_On_Homepage()
	cy.Scroll_Down_To_More_Promotions_For_you()
	cy.More_Promotions_For_You_Label()
	cy.Click_3rd_Promotion_On_More_Promotion_section()
	cy.Promotion_Content_Page_Banner()
})