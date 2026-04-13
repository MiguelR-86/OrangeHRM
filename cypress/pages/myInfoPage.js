class MyInfopage{

    elements = {
        myInfoTitle: () => cy.get("[href='/web/index.php/pim/viewMyDetails']"),
        firstNameField: () => cy.get("[name='firstName']"),
        middleName:() => cy.get("[name='middleName']"),
        lastName: () => cy.get("[name='lastName']"),
        testField:() => cy.get("[options='']"),
        genericGridItem: () => '.oxd-grid-item',
        optionSelect: () => '.oxd-select-dropdown',
        gender: () => '.oxd-radio-wrapper',
        closeButton: () => '.--close',
        submitButton: () => "[type='submit']"


    };

// metodos
clickOnMyInfo() {
    this.elements.myInfoTitle().click()
}
fillPersonalName(firstName, middleName, lastName, nickName){
    this.elements.firstNameField().clear().type(firstName)
    this.elements.middleName().clear().type(middleName)
    this.elements.lastName().clear().type(lastName)
    //cy.contains('Nickname').parents(this.elements.genericGridItem()).find('input').clear().type(nickName)
}
 
fillEmployeeDetails(userData){
    cy.contains('Other Id').parents(this.elements.genericGridItem()).find('input').clear().type(userData.otherId)
    cy.contains('Employee Id').parents(this.elements.genericGridItem()).find('input').clear().type(userData.employeeId)
    cy.contains('Nationality').parents(this.elements.genericGridItem()).click()
    cy.get(this.elements.optionSelect()).contains(userData.nationality).click()
    cy.contains('Marital Status').parents(this.elements.genericGridItem()).click()
    cy.get(this.elements.optionSelect()).contains(userData.marital).click()    
    cy.get(this.elements.gender()).contains(userData.genderData).click()   
    //cy.contains('Military Service').parents(this.elements.genericGridItem()).find('input').clear().type(userData.serviceNumber)
     
    
}
fillCustomFields(customData){
    cy.contains('Blood Type').parents(this.elements.genericGridItem()).click()
    cy.get(this.elements.optionSelect()).contains(customData.bloodType).click()
    this.elements.testField().clear().type(customData.TestField)

}
fillDate(driverLicenseNumber, licenseExpiryDate, dateOfBirth){
    cy.contains("Driver's License Number").parents(this.elements.genericGridItem()).find('input').clear().type(driverLicenseNumber)    
    cy.contains('License Expiry Date').parents(this.elements.genericGridItem()).clear().type(licenseExpiryDate)   
    cy.get(this.elements.closeButton()).click()
    cy.contains("Date of Birth").parents(this.elements.genericGridItem()).find('input').clear().type(dateOfBirth)   
    cy.get(this.elements.closeButton()).click()

}


validateToastMessage(expectedMessage) {
    cy.get('.oxd-text--toast-message')
      .should('be.visible')
      .and('contain', expectedMessage)
}

/*clickSubmit(){
    cy.get(this.elements.submitButton()).first().click()

}*/
clickSubmit(sectionTitle = null) {
    if (sectionTitle) {        
        cy.contains(sectionTitle)           
          .parent('.orangehrm-card-container') 
          .find("[type='submit']") 
          .click();
    } else {
        
        cy.get(this.elements.submitButton()).first().click();
    }
}

}
export default new MyInfopage();