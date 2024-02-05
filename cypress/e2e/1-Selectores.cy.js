describe('Curso Cypress - Capitulo 6', () => {
    //require('cypress-xpath');
    it('Selectores', () =>{
        cy.viewport(1920, 1080);
        cy.visit('https://demoqa.com/text-box').wait(2000);
        cy.get('#userName').type('Juan Martinez').wait(1000);
        //cy.xpath('//*[@id="userName"]').type('Juan Martinez').wait(1000);
        cy.get('#userEmail').type('juanmartinez@mailinator.com').wait(1000);
        cy.get('#currentAddress').type('123 Calle San Martín').wait(1000);
        cy.get('#permanentAddress').type('Casa');
        cy.get('#submit').click().wait(2000);
    });
});