/// <reference types="cypress" />

const el = require('./elementos').ELEMENTS

const formatDate = (date) => {
   const day = date.slice(0, 2); // Primeiro 2 dígitos
   const month = date.slice(2, 4); // Próximos 2 dígitos
   const year = date.slice(4); // Últimos 4 dígitos
   return `${year}-${month}-${day}`;
 };
 const formatTime = (time) => {
   const hours = time.slice(0, 2); // Primeiro 2 dígitos
   const minutes = time.slice(2, 4); // Últimos 2 dígitos
   return `${hours}:${minutes}`;
 };

 const horaIda = formatTime('0800'); 
 const horaVolta = formatTime('1800'); 
 const dateIda = formatDate('10122024');
 const dateVolta = formatDate('15122024');
 
 
class AdminPage {
    acessarPainel() {
        cy.get(el.painelAdmin).click();
        cy.get(el.addExcursão).click();
     }
     criarExcursão(){
        cy.get(el.localExcursão).type('Acqua Mundo');
        cy.get(el.descExcursão).type('Maior aquário da américa Latina');
        cy.get('input[type="file"]').selectFile('cypress/fixtures/acqua-mundo.jpg');
        cy.get(el.dataIda).type(dateIda);
        cy.get(el.dataVolta).type(dateVolta);
        cy.get(el.horaIda).type(horaIda);
        cy.get(el.horaVolta).type(horaVolta);
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