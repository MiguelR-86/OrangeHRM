class MyInfopage{

    elements = {
        myInfoTitle: () => cy.get("[href='/web/index.php/pim/viewMyDetails']"),
        firstNameField: () => cy.get("[name='firstName']"),
        middleName:() => cy.get("[name='middleName']"),
        lastName: () => cy.get("[name='lastName']"),
        genericId: () => cy.get("[data-v-1f99f73c='']"),


    };

// metodos
clickOnMyInfo() {
    this.elements.myInfoTitle().click()
}
personalDetails(){
    //this.elements.firstNameField().clear().type()
}

}
export default new MyInfopage();