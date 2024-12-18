const el = require('./elementos').ELEMENTS
/// <reference types="cypress" />

class LoginPage {
    acessarSite() {
        cy.visit('https://fatour.netlify.app');
        cy.get(el.botãoLandingPage).click();
    }
    registrarUsuario() {
        cy.get(el.botãoCadastrar).click();
    }
    login() {
        cy.get(el.botãoLogin).click();
    }
    preencherEmail() {
        return cy.get(el.campoEmail)
    }
    preencherSenha() {
        return cy.get(el.campoSenha)
    }
    esqueceuSenha() {
        cy.get(el.esqueciMinhaSenha).click();
    }
    validarCadastro() {
        cy.contains(el.logoPaginaPrincipal)
        cy.get(el.logout).click();
    }
}

export default new LoginPage();