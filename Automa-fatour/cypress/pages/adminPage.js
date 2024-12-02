/// <reference types="cypress" />

const el = require('./elementos').ELEMENTS

class AdminPage {
    acessarPainel() {
        cy.get(el.painelAdmin).click();
        cy.get(el.addExcursão).click();
     }
     clicarIA(){
        cy.get(el.robo).click()
     }
     criarExcursão(){
        cy.get(el.localExcursão).type('Acqua Mundo');
        cy.get(el.descExcursão).type('Maior aquário da américa Latina');
        cy.get(el.dataIda).type('10/12/2024');
        cy.get(el.dataVolta).type('10/12/2024');
        cy.get(el.imgExcursão).click().type('acqua-mundo.jpg');
        cy.get(el.horaIda).type('08:00');
        cy.get(el.horaVolta).type('18:00');
        cy.get(el.valorExcursão).type('25');
        cy.get(el.limitePessoas).type('40');
        cy.get(el.botãoCriarExcursão).click();
     }
     validarExcursão(){
        cy.contains('Acqua Mundo');
     }
     logout(){
        cy.get(el.logout).click();
     }
}
export default new AdminPage();