import myInfoPage from "../pages/myInfoPage"
import myInfoData from "../fixtures/myInfoData.json"


describe('Orange HRM Tests My Info', () => {

beforeEach(() => {
  cy.login()
})


  it('Personal Details', () => {
    myInfoPage.clickOnMyInfo()
   // myInfoPage.writeFirstName()


  cy.contains('Employee Id')
  .parents('.oxd-input-group')
  .find('input').clear()
  .type('acertou')
    
  })
})

