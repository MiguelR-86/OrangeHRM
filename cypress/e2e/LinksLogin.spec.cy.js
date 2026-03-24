//import UserData from '../fixtures/UserData.json'
//import LoginPage from '../pages/LoginPage'


describe('Orange HRM Tests Links Login', () => {

beforeEach(() => {
    cy.visit('/auth/login')

})

it('test Link OrangeHRM, Inc.', ()=>{    
    cy.get("[href='http://www.orangehrm.com']").click().should('have.attr', 'href', 'http://www.orangehrm.com')
   
  })

it('test Link Linkedin', ()=>{    
    cy.get("[href='https://www.linkedin.com/company/orangehrm/mycompany/']").click().should('have.attr', 'href', 'https://www.linkedin.com/company/orangehrm/mycompany/')                                                                                                             
  })

it('test Link Facebook', ()=>{
    cy.get("[href='https://www.facebook.com/OrangeHRM/']").click().should('have.attr', 'href', 'https://www.facebook.com/OrangeHRM/')  
  })

it('test Link X', ()=>{
    cy.get("[href='https://twitter.com/orangehrm?lang=en']").click().should('have.attr', 'href', 'https://twitter.com/orangehrm?lang=en') 
  })

it('test Link youtube', ()=>{
    cy.get("[href='https://www.youtube.com/c/OrangeHRMInc']").click().should('have.attr', 'href', 'https://www.youtube.com/c/OrangeHRMInc')  
  })

})

