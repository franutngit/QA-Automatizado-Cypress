describe('Curso Cypress - Capitulo 7', () => {
    it('Check', () =>{
        cy.viewport(1920, 1080);
        cy.visit('https://demo.automationtesting.in/Register.html').wait(2000);

        cy.get('#checkbox1').check().wait(5000);//Check Cricket
        cy.get('#checkbox1').should('be.checked').wait(3000);

        cy.get('#checkbox1').uncheck().wait(5000);//Quitar Check Cricket
        cy.get('#checkbox1').should('not.be.checked').wait(3000);
    });
});