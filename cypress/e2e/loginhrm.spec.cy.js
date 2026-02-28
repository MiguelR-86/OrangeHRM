import UserData from '../fixtures/UserData.json'
import LoginPage from '../pages/LoginPage'

describe('Orange HRM Tests', () => {

beforeEach(() => {
  cy.visit('/auth/login')
})


  it('Login - Success', () => {

    LoginPage.elements.userNameField().type(UserData.userSuccess.username)
    LoginPage.elements.passwordField().type(UserData.userSuccess.password)

    LoginPage.elements.loginButton().click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    LoginPage.elements.dashboardTitle().contains('Dashboard')
  })

  it('Login - Fail', () => {
    LoginPage.elements.userNameField().type(UserData.userFail.username)
    LoginPage.elements.passwordField().type(UserData.userFail.password)
    LoginPage.elements.loginButton().click()
    LoginPage.elements.wrongCredentialAlert().should('be.visible')
    
  }) 
  it('Login - UserName Invalid', () => {
    LoginPage.elements.userNameField().type(UserData.userFailUsernameInvalid.username)
    LoginPage.elements.passwordField()(UserData.userFailUsernameInvalid.password)
    LoginPage.elements.loginButton().click()
    LoginPage.elements.wrongCredentialAlert().should('be.visible')
    
  }) 
  it('Login - Password Invalid', () => {
    LoginPage.elements.userNameField().type(UserData.userFailPasswordInvalid.username)
    LoginPage.elements.passwordField().type(UserData.userFailPasswordInvalid.password)
    LoginPage.elements.loginButton().click()
    LoginPage.elements.wrongCredentialAlert().should('be.visible')
    
  })

  it('Login - Credential Empty', () => {
    LoginPage.elements.userNameField().type(UserData.userFailCredentialEmpty.username)
    LoginPage.elements.passwordField().type(UserData.userFailCredentialEmpty.password)
    LoginPage.elements.loginButton().click()
    LoginPage.elements.mandatoryCredentialAlert().should('be.visible')
    
  })

  it('Test Button Forgot Password', () => {
    cy.get('.orangehrm-login-forgot').click()
    cy.location('pathname').should('equal', '/web/index.php/auth/requestPasswordResetCode')
    cy.get('.orangehrm-forgot-password-title').contains('Reset Password')

  })
   
})