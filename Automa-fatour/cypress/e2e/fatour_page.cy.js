import { dados } from '../fixtures/fatour_dados.json'
import { dados_admin } from '../fixtures/admin_dados.json'
import FatourPage from '../pages/fatourPage'
import CadastroPage from '../pages/cadastroPage'
import LoginPage from '../pages/loginPage'
import AdminPage from '../pages/adminPage'
/// <reference types="cypress" />

// describe('Testes Funcional - Criação de Excursão modo Admin', () => {
//   dados_admin.forEach((cenario, k) => {
//     it(`${cenario.Nome_cenario}`, () => {
//       LoginPage.acessarSite()
//       LoginPage.preencherEmail().type(cenario.email_admin)
//       LoginPage.preencherSenha().type(cenario.senha_admin,{log:false})
//       LoginPage.login()
//     })
//   })
// })
// describe('Testes Funcional - Cadastro de Usuário', () => {
//   dados.forEach((cenario, k) => {
//     it(`${cenario.Nome_cenario}`, () => {
//       FatourPage.site()
//       FatourPage.landingPageAcesso().click()
//       FatourPage.registrar().click()
//       FatourPage.preencherNome().type(cenario.nome)
//       FatourPage.preencherEmail().type(cenario.email)
//       FatourPage.preencherSenha().type(cenario.senha)
//       FatourPage.preencherConfirmacaoSenha().type(cenario.senha)
//       FatourPage.cadastrar().click()
//       FatourPage.validarCadastro()
//     })
//   })
// })

// describe('Testes Funcional - Login + Reserva de Excursão', () => {
//   dados.forEach((cenario, k) => {
//     it(`${cenario.Nome_cenario}`, () => {
//       LoginPage.acessarSite()
//       LoginPage.preencherEmail().type(cenario.email)
//       LoginPage.preencherSenha().type(cenario.senha,{log:false})
//       LoginPage.login()
//       FatourPage.preencherPesquisa().type(cenario.excursão)
//       FatourPage.pesquisarExcursão()
//       FatourPage.reservarExcursão()
//       FatourPage.preencherPassageiro1()
//       FatourPage.preencherPassageiro2()
//       FatourPage.seguirParaPagamento()
//       FatourPage.preencherDadosCartão()
//       FatourPage.validarCompra()  
//   })
// })
// })