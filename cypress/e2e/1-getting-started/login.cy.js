describe('Log In Page', () => {
    beforeEach(() => {
        cy.visit('/login');
    });

    it('should register a new user successfully', () => {
        cy.get('input[placeholder="Login"]').type('test@gmail.com');
        cy.get('input[placeholder="Password"]').type('password123');
        
        cy.get('button').contains('Log in').click();

        cy.url().should('eq', 'http://localhost:3000/');
    });
});
