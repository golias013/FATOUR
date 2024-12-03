import { dados_cadastro } from '../fixtures/cadastro_dados.json'
import { dados_admin } from '../fixtures/admin_dados.json'
import { dados_login } from '../fixtures/login_dados.json'
import FatourPage from '../pages/fatourPage'
import CadastroPage from '../pages/cadastroPage'
import LoginPage from '../pages/loginPage'
import AdminPage from '../pages/adminPage'
/// <reference types="cypress" />

describe('Testes Funcional - Criação de Excursão modo Admin', () => {
  dados_admin.forEach((cenario, k) => {
    it(`${cenario.Nome_cenario}`, () => {
      LoginPage.acessarSite()
      LoginPage.preencherEmail().type(cenario.email_admin)
      LoginPage.preencherSenha().type(cenario.senha_admin,{log:false})
      LoginPage.login()
      AdminPage.acessarPainel()
      AdminPage.criarExcursão()
      AdminPage.validarExcursão()
      AdminPage.logout()
      cy.end()  
    })
  })
})
describe('Testes Funcional - Cadastro de Usuário', () => {
  dados_cadastro.forEach((cenario, k) => {
    it(`${cenario.Nome_cenario}`, () => {
      LoginPage.acessarSite()
      CadastroPage.cadastro()
      CadastroPage.preencherNome().type(cenario.novo_nome)
      CadastroPage.preencherEmail().type(cenario.novo_email)
      CadastroPage.preencherSenha().type(cenario.nova_senha)
      CadastroPage.preencherConfirmacaoSenha().type(cenario.nova_senha)
      CadastroPage.cadastrar()
      CadastroPage.validarCadastro()
      cy.end()  
    })
  })
})

describe('Testes Funcional - Login + Reserva de Excursão', () => {
  dados_login.forEach((cenario, k) => {
    it(`${cenario.Nome_cenario}`, () => {
      LoginPage.acessarSite()
      LoginPage.preencherEmail().type(cenario.email)
      LoginPage.preencherSenha().type(cenario.senha,{log:false})
      LoginPage.login()
      cy.window().should('have.property', '$');
      FatourPage.preencherPesquisa().type(cenario.excursão)
      FatourPage.pesquisarExcursão()
      FatourPage.reservarExcursão()
      FatourPage.preencherPassageiro1()
      FatourPage.preencherPassageiro2()
      FatourPage.seguirParaPagamento()
      FatourPage.preencherDadosCartão()
      FatourPage.validarCompra()
      cy.end()  
  })
})
})