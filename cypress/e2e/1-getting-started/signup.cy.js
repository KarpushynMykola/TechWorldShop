describe('Sign Up Page', () => {
    beforeEach(() => {
        cy.visit('/signup');
    });

    it('should register a new user successfully', () => {
        cy.get('input[placeholder="Name"]').type('John');
        cy.get('input[placeholder="Surname"]').type('Doe');
        cy.get('input[placeholder="Login"]').type('test@gmail.com');
        cy.get('input[placeholder="Phone number"]').type('1234567890');
        cy.get('input[placeholder="Password"]').type('password123');
        
        cy.get('button').contains('Sign Up').click();

        cy.url().should('eq', 'http://localhost:3000/');
    });
});
