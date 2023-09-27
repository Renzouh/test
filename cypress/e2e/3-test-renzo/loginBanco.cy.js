/// <reference types="cypress" />

describe("Test Banco (Prueba PAGINA) - conjunto de pruebas",() => {
    
    it("Validar pagina de Inicio", () => {
        
        cy.visit("http://zero.webappsecurity.com/")
        cy.get(".active > img").should("be.visible")
        cy.get(".active > .custom > h4").contains("Online Banking")
    
    })
});

describe("Test Banco (Prueba TITULO) - conjunto de pruebas",() => {    

    it('Verifica el título de la página', () => {
        cy.visit("http://zero.webappsecurity.com/")
        cy.title().should('eq', 'Zero - Personal Banking - Loans - Credit Cards');
    
    });
});

describe("Test Banco (Prueba ENCABEZADO) - conjunto de pruebas",() => {    

    it('Verifica el encabezado de la página', () => {
        cy.visit("http://zero.webappsecurity.com/")
        cy.get('.brand');
    
    });
});
