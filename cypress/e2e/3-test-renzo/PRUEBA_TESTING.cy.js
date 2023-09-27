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
        cy.get('.brand').should("contain.text", "Zero Bank");
    
    });
});

describe("Test Banco (Prueba TEXTO) - conjunto de pruebas",() => {    

    it('Verifica el la descripcion del cuadro (Checking Account Activity) en la página', () => {
        cy.visit("http://zero.webappsecurity.com/")
        cy.get('#online_banking_features > :nth-child(2) > div > p').should("contain.text", "Use Zero to view the most up-to-date listings of your deposits, withdrawals, interest payments, and a number of other useful transactions.")
    
    });
});

describe("Test Banco (Prueba TEXTO) - conjunto de pruebas",() => {    

    it('Verifica el la descripcion del cuadro (Checking Account Activity) en la página', () => {
        cy.visit("http://zero.webappsecurity.com/")
        cy.get('#online_banking_features > :nth-child(4) > div > p').should("contain.text", "Use Zero to set up and monitor your personalized money map. A money map is an easy-to-use online tool that helps you manage your finances efficiently. With Money Map, you can create a budget, sort your finances into spending and savings categories,  check the interest your accounts are earning, and gain new understanding of your patterns with the help of Zero’s clear charts and graphs.");
    
    });
});

describe("Test Banco (Prueba BOTON DE NAVEGACION) - conjunto de pruebas",() => {    

    it('Verifica el boton de navegacion', () => {
        cy.visit("http://zero.webappsecurity.com/")
        cy.get('#homeMenu > div > strong').click();
        cy.url().should('eq', 'http://zero.webappsecurity.com/index.html');
    
    });
});

describe("Test Banco (Prueba IMAGENES) - conjunto de pruebas",() => {    

    it('Verifica que funcionen las imagenes', () => {
        cy.visit("http://zero.webappsecurity.com/")
        cy.get('.active > img').each(($img) => {
        cy.wrap($img).should('be.visible');
    });
})});

describe("Test Banco (Prueba LOGIN/FORMULARIO) - conjunto de pruebas",() => {    

    it('Verifica el login/formulario', () => {
        cy.visit("http://zero.webappsecurity.com/")
        cy.get('#signin_button').click()
        cy.get('#user_login') .type("username");
        cy.get('#user_password') .type("password");
        
})});