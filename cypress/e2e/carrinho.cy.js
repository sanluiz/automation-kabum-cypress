import HomePage from '../pages/HomePage';
import CarrinhoPage from '../pages/CarrinhoPage';
import 'cypress-xpath';


describe('Teste de Carrinho Kabum', () => {
  beforeEach(() => {
    HomePage.visitar();
    cy.wait(1000);
  });

  it('Deve adicionar e remover produto do carrinho', () => {
    CarrinhoPage.adicionarPrimeiroProduto();
    Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignora erros não tratados do React no site Kabum para evitar falha dos testes com Cypress
      return false
    })
    cy.wait(4000);
    CarrinhoPage.abrirCarrinho();
    CarrinhoPage.removerPrimeiroProduto();
    CarrinhoPage.validarCarrinhoVazio();
  });
});
