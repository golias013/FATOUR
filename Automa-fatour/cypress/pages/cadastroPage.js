const el = require('./elementos').ELEMENTS
/// <reference types="cypress" />

class CadastroPage {
    cadastro() {
       cy.get(el.botãoRegistrarse).click()
    }
    preencherEmail() {
       return cy.get(el.campoEmail)
    }
    preencherSenha() {
      return cy.get(el.campoSenha)
    }
    preencherConfirmacaoSenha() {
       return cy.get(el.campoConfirmarSenha)
    }
    cadastrar() {
       cy.get(el.botãoCadastrar).click()
    }
    validarCadastro() {
       return cy.get(el.logoPaginaPrincipal)
    }
}
export default new CadastroPage();