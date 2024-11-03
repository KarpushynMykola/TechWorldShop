describe('Sign Up Page', () => {
  
    it('Registers a new user successfully', () => {
      cy.visit('/signup'); 
  
      cy.get('input[placeholder="Name"]').type('TestName');
      cy.get('input[placeholder="Surname"]').type('TestSurname');
      cy.get('input[placeholder="Login"]').type('TestLogin');
      cy.get('input[placeholder="Phone number"]').type('1234567890');
      cy.get('input[placeholder="Password"]').type('TestPassword123');
  
      cy.contains('Sign Up').click();
  
      cy.url().should('eq', Cypress.config().baseUrl + '/');
    });
  });