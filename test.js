describe('ToDoList', () => {
   it('By iphone', () => {
      cy.visit("https://forhemer.github.io/React-Todo-List/");
      cy.get('.input-text').type('Первая заметка');
      cy.get('.input-submit').click();
      cy.get('.input-text').type('Вторая заметка');
      cy.get('.input-submit').click();
      cy.get('.input-text').type('Третья заметка');
      cy.get('.input-submit').click();
      cy.get('li').should('have.length', 3);
      cy.get(':nth-child(1) > .TodoItem_checkbox__Tf0FQ').click();
      cy.get(':nth-child(1) > span').should('have.css', 'text-decoration', 'line-through solid rgb(89, 89, 89)');
      cy.get('ul > :nth-child(3) > button').click();
      cy.get('ul > :nth-child(3)').should('not.exist');






   })
}) 
