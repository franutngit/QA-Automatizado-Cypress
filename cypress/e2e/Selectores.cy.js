describe('Curso Cypress - Capitulo 6', () => {
    it('Selectores', () =>{
        cy.viewport(1920, 1080);
        cy.visit('https://demoqa.com/').wait(2000);
    });
});