describe('Curso Cypress - Capitulo 11', () => {

  it('Intercept by Url', () => {
    cy.visit('https://reqres.in/');
    cy.wait(5000);
    cy.intercept('https://reqres.in/api/users?page=2').as('posts');
    cy.get("[data-id=users]").click();
    cy.wait('@posts').its('response.body.data').should('have.length', 6);
  });
});