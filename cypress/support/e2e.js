import './commands'

describe('Мій перший тест', () => {
    it('відкриває домашню сторінку', () => {
      cy.visit('http://localhost:3000');
      cy.contains('Welcome');
    });
  });
  
