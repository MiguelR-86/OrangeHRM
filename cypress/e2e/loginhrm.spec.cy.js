import userData from '../fixtures/userData.json'
import LoginPage from '../pages/LoginPage'

describe('Orange HRM Tests', () => {

beforeEach(() => {
  cy.visit('/auth/login')
})


  it('Login - Success', () => {

    LoginPage.elements.userNameField().type(userData.userSuccess.username)
    LoginPage.elements.passwordField().type(userData.userSuccess.password)

    LoginPage.elements.loginButton().click()
    LoginPage.elements.dashboardGrid()
    //cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    //LoginPage.elements.dashboardTitle().contains('Dashboard')
  })

  it('Login - Fail', () => {
    LoginPage.elements.userNameField().type(userData.userFail.username)
    LoginPage.elements.passwordField().type(userData.userFail.password)
    LoginPage.elements.loginButton().click()
    LoginPage.elements.wrongCredentialAlert().should('be.visible')
    
  }) 
  it('Login - UserName Invalid', () => {
    LoginPage.elements.userNameField().type(userData.userFailUsernameInvalid.username)
    LoginPage.elements.passwordField().type(userData.userFailUsernameInvalid.password)
    LoginPage.elements.loginButton().click()
    LoginPage.elements.wrongCredentialAlert().should('be.visible')
    
  }) 
  it('Login - Password Invalid', () => {
    LoginPage.elements.userNameField().type(userData.userFailPasswordInvalid.username)
    LoginPage.elements.passwordField().type(userData.userFailPasswordInvalid.password)
    LoginPage.elements.loginButton().click()
    LoginPage.elements.wrongCredentialAlert().should('be.visible')
    
  })

  it('Login - Credential Empty', () => {
    LoginPage.elements.userNameField().type(userData.userFailCredentialEmpty.username)
    LoginPage.elements.passwordField().type(userData.userFailCredentialEmpty.password)
    LoginPage.elements.loginButton().click()
    LoginPage.elements.mandatoryCredentialAlert().should('be.visible')
    
  })

  it('Test Button Forgot Password', () => {
    cy.get('.orangehrm-login-forgot').click()
    cy.location('pathname').should('equal', '/web/index.php/auth/requestPasswordResetCode')
    cy.get('.orangehrm-forgot-password-title').contains('Reset Password')

  })
   
})