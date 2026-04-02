class MyInfopage{

    elements = {
        myInfoTitle: () => cy.get("[href='/web/index.php/pim/viewMyDetails']"),
        firstNameField: () => cy.get("[name='firstName']"),
        middleName:() => cy.get("[name='middleName']"),
        lastName: () => cy.get("[name='lastName']"),
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
personalDetails(userData){
    this.elements.firstNameField().clear().type(userData.firstName)
    this.elements.middleName().clear().type(userData.middleName)
    this.elements.lastName().clear().type(userData.lastName)
    cy.contains('Other Id').parents(this.elements.genericGridItem()).find('input').clear().type(userData.otherId)
    cy.contains("Driver's License Number").parents(this.elements.genericGridItem()).clear().type(userData.driverLicenseNumber)
    cy.contains('License Expiry Date').parents(this.elements.genericGridItem()).clear().type(userData.licenseExpiryDate)
    cy.get(this.elements.closeButton()).click()
    cy.contains('Employee Id').parents(this.elements.genericGridItem()).find('input').clear().type(userData.employeeId)
    cy.contains('Nationality').parents(this.elements.genericGridItem()).click()
    cy.get(this.elements.optionSelect()).contains(userData.nationality).click()
    cy.contains('Marital Status').parents(this.elements.genericGridItem()).click()
    cy.get(this.elements.optionSelect()).contains(userData.marital).click()
    cy.contains("Date of Birth").parents(this.elements.genericGridItem()).find('input').clear().type(userData.dateOfBirth)
    cy.get(this.elements.closeButton()).click()
    cy.get(this.elements.gender()).eq(0).click()
    cy.get(this.elements.submitButton()).eq(0).click()
   
   
    
}

}
export default new MyInfopage();