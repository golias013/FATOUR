const el = require('./elementos').ELEMENTS
/// <reference types="cypress" />

class FatourPage {
    acessarSite() {
        cy.visit('https://fatour.netlify.app');
        cy.get(el.botãoLandingPage).click();
    }
    preencherPesquisa() {
        return cy.get(el.barraPesquisa)
    }
    pesquisarExcursão() {
        cy.get(el.botãoPesquisar).click();
    }
    reservarExcursão() {
        cy.get(el.bolsaDoCafé).click();
        cy.get(el.assento12).click();
        cy.get(el.assento13).click();
        cy.get(el.botãoReservaAssento).click();
    }
    preencherPassageiro1() {
        cy.get(el.nomePassageiro12).type("Golias");
        cy.get(el.emailPassageiro12).type("golias@fatour2024");
        cy.get(el.telefonePassageiro12).type("13997799779");
        cy.get(el.cpfPassageiro12).type("759.523.110-83");
    }
    preencherPassageiro2() {
        cy.get(el.nomePassageiro13).type("Victor Hugo");
        cy.get(el.emailPassageiro13).type("victor_hugo@fatec2024");
        cy.get(el.telefonePassageiro13).type("13996699669");
        cy.get(el.cpfPassageiro13).type("014.177.420-70");
    }
    seguirParaPagamento() {
        cy.get(el.botãoComprar).click();
    }
    preencherDadosCartão() {
        cy.get(el.botãoCredito).click();
        cy.get(el.parcelasLista).click();
        cy.contains('R$50,00').click();
        cy.get(el.nomeTitularCartão).type("Golias Soares");
        cy.get(el.numeroCartão).type("5477 0109 5726 1326");
        cy.get(el.validadeCartão).type("09/25");
        cy.get(el.cvvCartão).type("157");
        cy.get(el.botãoComprar).click();
        cy.get(el.historicoPedidos).click();
    }
    validarCompra() {
        cy.get(el.historicoPedidos).click();
        cy.get(el.detalhesExcursão).click();
        cy.get(el.fecharJanelaDetalhes).click();
        cy.get(el.logout).click();
    }

}

export default new FatourPage()