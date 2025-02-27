describe('Página de Login', () => {
  it('Verifica se a página inicial é de Login', () => {
    cy.visit('http://localhost:3000/');

    cy.get('#email-login').type('teste@teste.com');

    cy.get('#email-login').should('have.value', 'teste@teste.com');
  });
});
