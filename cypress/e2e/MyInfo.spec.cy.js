import myInfoPage from "../pages/myInfoPage"
import myInfoData from "../fixtures/myInfoData.json"


describe('Orange HRM Tests My Info', () => {

beforeEach(() => {
  cy.login()
})


  it('Personal Details', () => {
    myInfoPage.clickOnMyInfo()
    myInfoPage.personalDetails(myInfoData.personalDetails)
   
    
  })
})

