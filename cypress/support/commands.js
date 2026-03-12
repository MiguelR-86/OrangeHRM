import LoginPage from "../pages/LoginPage"
import UserData from '../fixtures/UserData.json'

Cypress.Commands.add('login', () => {
  cy.visit('/auth/login')

  LoginPage.elements.userNameField().type(UserData.userSuccess.username)
  LoginPage.elements.passwordField().type(UserData.userSuccess.password)

  LoginPage.elements.loginButton().click()

  cy.contains('Dashboard').should('be.visible')
})