// cypress/pages/LoginPage.js

class LoginPage {

  // 👉 1) Mapeamento de elementos (SELETORES)
  elements = {
    usernameField: () => cy.get('[name="username"]'),
    passwordField: () => cy.get('[name="password"]'),
    loginButton: () => cy.get('[type="submit"]'),
    dashboardGrid: () => cy.get('.orangehrm-dashboard-grid'),
    wrongCredentialAlert: () => cy.get('.oxd-alert-content')
  };

  // 👉 2) AÇÕES DA PÁGINA (métodos)
  login(username, password) {
    this.elements.usernameField().type(username);
    this.elements.passwordField().type(password);
    this.elements.loginButton().click();
  }
}

export default new LoginPage();