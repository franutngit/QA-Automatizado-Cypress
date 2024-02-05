describe('Curso Cypress - Capitulo 10', () => {

    before(function(){
        cy.fixture('fichero').then(function(data){
            globalThis.fixture = data;
        });
    });
    it('Ficheros Json', () =>{
        //Creación de variables
        let url = 'https://demoqa.com/automation-practice-form';
        const i = Math.floor(Math.random() * 5);

        cy.viewport(1920, 1080);
        cy.visit(url);
        cy.get('#firstName').type(fixture[i].nombre);
        cy.get('#lastName').type(fixture[i].apellido);
        cy.get('#userEmail').type(fixture[i].email);
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click();
        cy.get('#userNumber').type(fixture[i].numeroTelefono);
        //------Función select-------
        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__month-select').select(fixture[i].mesNacimiento);
        cy.get('.react-datepicker__year-select').select(fixture[i].añoNacimiento);
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