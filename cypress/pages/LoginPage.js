// cypress/pages/LoginPage.js

class LoginPage {

  // 👉 1) Mapeamento de elementos (SELETORES)
  elements = {
    userNameField: () => cy.get('[name="username"]'),
    passwordField: () => cy.get('[name="password"]'),
    loginButton: () => cy.get('[type="submit"]'),
    dashboardGrid: () => cy.get('.oxd-topbar-header-breadcrumb-module'),
    wrongCredentialAlert: () => cy.get('.oxd-alert-content')
  };

  // 👉 2) AÇÕES DA PÁGINA (métodos)
  login(username, password) {
    this.elements.userNameField().type(username);
    this.elements.passwordField().type(password);
    this.elements.loginButton().click();
  }
}

export default new LoginPage();