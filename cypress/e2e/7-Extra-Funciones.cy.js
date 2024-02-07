describe('Curso Cypress - Capitulo 14', () => {

    it.only('Url', () =>{
        cy.viewport(1920, 1080);
        let url = "https://demoqa.com/automation-practice-form";
        cy.visit(url);

        cy.url().then((urlActual)=>{
            let urlForm = urlActual.toString();
            cy.log(urlForm);
        });
    });

    it('Force : True', () =>{
        cy.viewport(1920, 1080);
        let url = "https://demoqa.com/";
        cy.visit(url);
        cy.get('.category-cards > :nth-child(1)').click({force : true});
    });

    it('Contains', () =>{
        cy.viewport(1920, 1080);
        let url = "https://demoqa.com/automation-practice-form";
        cy.visit(url);
        cy.get('#userName-label').contains('Name');
    });

    it.skip('Find', () =>{
        cy.viewport(1920, 1080);
        let url = "https://demoqa.com/automation-practice-form";
        cy.visit(url);
        cy.get('#userName-wrapper').wait(3000).find('#firstName').wait(3000).type('Juan');
    });
});