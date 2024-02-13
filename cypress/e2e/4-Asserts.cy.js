describe('Curso Cypress - Capitulo 9', () => {

    it('Should - Class Assertion', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
        cy.wait(5000);   
        cy.get('#input-email').type('lambdatest.Cypress@disposable.com').should('have.class', 'form-control')
        cy.get('#input-password').type('Cypress123!!')
        cy.get('[value="Login"]').should('have.class', 'btn btn-primary')
        cy.wait(5000);   
    })

    it('Should - Text Assertion', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io/')
        cy.wait(5000);   
        cy.get('.m-md-0.d-flex.align-items-center.mb-3').should('have.text', "Upto 30% Off on Popular Smartphones + Exchange Offers")
        cy.get('.swiper-slide.swiper-slide-active').eq(2).find('>div>div>h4>a').first().should('have.text', 'Nikon D300')
        cy.wait(5000);   
    })

    it('Should - Value Assertion for Textbox', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io/')
        cy.get('input[name="search"]').first().type('iphone')
        cy.get('input[name="search"]').first().should('have.value', 'iphone')
        cy.wait(5000);   
       cy.get('input[name="search"]').first().should('not.have.value', 'IPHONE')
       cy.wait(5000); 
    })
  
    it('Should - Value Assertion for Dropdown', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')
        cy.get('#select-demo').select('Wednesday')
        cy.get('#select-demo option:selected').should('have.value', 'Wednesday')
        cy.wait(5000);   
    })

    it('Should - Checkbox Assertion', () => {   cy.visit('https://www.lambdatest.com/selenium-playground/checkbox-demo')
       cy.get('#isAgeSelected').check().should('be.checked')
       cy.get('.cb-element.mr-10').check().should('be.checked')
       cy.wait(5000);   
       cy.get('#isAgeSelected').uncheck().should('not.be.checked')
       cy.get('.cb-element.mr-10').uncheck().should('not.be.checked')
       cy.wait(5000);
   })
});