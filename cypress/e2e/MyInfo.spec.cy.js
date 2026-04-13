import myInfoPage from "../pages/myInfoPage"
import myInfoData from "../fixtures/myInfoData.json"


describe('Orange HRM Tests My Info', () => {

beforeEach(() => {
  
  cy.login()
})


  it('Personal Details', () => {
    myInfoPage.clickOnMyInfo()

    myInfoPage.fillPersonalName(
      myInfoData.personalDetails.firstName,
      myInfoData.personalDetails.middleName,
      myInfoData.personalDetails.lastName,
    //  myInfoData.personalDetails.nickName
    )

    myInfoPage.fillEmployeeDetails(
      myInfoData.personalDetails
    )
    myInfoPage.fillDate(
      myInfoData.personalDetails.driverLicenseNumber,
      myInfoData.personalDetails.licenseExpiryDate,
      myInfoData.personalDetails.dateOfBirth

    )
    myInfoPage.clickSubmit()
    myInfoPage.validateToastMessage('Successfully Updated')
    
    myInfoPage.fillCustomFields(
      myInfoData.personalDetails
    )
    myInfoPage.clickSubmit('Custom Fields')
    myInfoPage.validateToastMessage('Successfully Updated')


     
  })
})

// cy.get('.oxd-toast') utilizar depois dentro dos metodos para capturar a mensagem de salvo com sucesso
// Success Successfully Updated

