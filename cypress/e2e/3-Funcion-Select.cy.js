describe('Curso Cypress - Capitulo 8', () => {
    it('Función Select', () =>{
        //Creación de variables
        let url = 'https://demoqa.com/automation-practice-form';
        let nombre = 'Juan';
        let apellido = 'Martinez';
        let email = 'juanmartinez@mailinator.com';
        let numeroTelefono = 123456789;

        cy.viewport(1920, 1080);
        cy.visit(url);
        cy.get('#firstName').type(nombre);
        cy.get('#lastName').type(apellido);
        cy.get('#userEmail').type(email);
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click();
        cy.get('#userNumber').type(numeroTelefono);
        //------Función select-------
        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__month-select').select('April');
        cy.get('.react-datepicker__year-select').select('2000');
        cy.get(':nth-child(3) > .react-datepicker__day--013').click();
        //---------------------------
        cy.get('.subjects-auto-complete__value-container').type('Maths{enter}');
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click();
        cy.get('#currentAddress').type("Calle San Martin 123");
        cy.get('#state > .css-yk16xz-control > .css-1hwfws3').click().type('NCR{enter}');
        cy.get('#city > .css-yk16xz-control > .css-1hwfws3').click().type('Delhi{enter}');
        cy.get('#submit').click();
    });
});