import UserData from '../fixtures/UserData.json'
import LoginPage from '../pages/LoginPage'

describe('Orange HRM Tests', () => {

 /* const selectorsList = {
    userNameField: "[name='username']",
    passwordField: '[name="password"]',
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredential: ".oxd-alert"

  }*/


  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    /*cy.get(selectorsList.userNameField).type(UserData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(UserData.userSuccess.password)*/
    LoginPage.elements.userNameField().type(UserData.userSuccess.username)
    LoginPage.elements.passwordField().type(UserData.userSuccess.password)

    cy.get("[type='submit']").click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
  })

    it.skip('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.userNameField).type('Admin')
    cy.get(selectorsList.passwordField).type('falha')//password errado
    cy.get("[type='submit']").click()
    cy.get(selectorsList.wrongCredential)
    
  }) 
    it.skip('Test Button Forgot Password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('.orangehrm-login-forgot').click()
    cy.location('pathname').should('equal', '/web/index.php/auth/requestPasswordResetCode')
    cy.get('.orangehrm-forgot-password-title').contains('Reset Password')
    //cy.get('[href="http://www.orangehrm.com"]').click() //Clica no Botão direciona para a pagina orangehrm.com
    /*cy.get('.orangehrm-login-forgot-header').click()
    cy.get('.oxd-text--h6').contains('Reset Password') *///Clica na recureção de senha direciona para pagina de recuperação
  })
  it.skip('test Link OrangeHRM', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[href='http://www.orangehrm.com']").click().should('have.attr', 'href', 'http://www.orangehrm.com')
   // cy.location('pathname').should('equal', 'https://www.orangehrm.com/')
  


  })

  
})