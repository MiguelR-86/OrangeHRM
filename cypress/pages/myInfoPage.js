class MyInfopage{

    elements = {
        myInfoTitle: () => cy.get("[href='/web/index.php/pim/viewMyDetails']"),
        firstNameField: () => cy.get("[name='firstName']"),
        middleName:() => cy.get("[name='middleName']"),
        lastName: () => cy.get("[name='lastName']"),
        genericGridItem: () => '.oxd-grid-item',


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
    cy.contains('License Expiry Date').parents(this.elements.genericGridItem()).clear().type(userData.licenseExpiryDate).click()   
   
   
    cy.contains('Employee Id').parents(this.elements.genericGridItem()).find('input').clear().type(userData.employeeId)

}

}
export default new MyInfopage();