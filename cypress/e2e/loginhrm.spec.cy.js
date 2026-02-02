describe('Orange HRM Tests', () => {
  it.skip('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get("[type='submit']").click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard')
  })
    it.skip('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('falha')//password errado
    cy.get("[type='submit']").click()
    cy.get('.oxd-alert')
    
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
  it('test Link OrangeHRM', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[href='http://www.orangehrm.com']").click().should('have.attr', 'href', 'http://www.orangehrm.com')
   // cy.location('pathname').should('equal', 'https://www.orangehrm.com/')
  


  })

  
})