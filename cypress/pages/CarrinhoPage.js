class CarrinhoPage {
  abrirCarrinho() {
    cy.abrirCarrinho();
  }

  adicionarPrimeiroProduto() {
    cy.adicionarProdutoCarrinhoPorIndex(0);
  }

  removerPrimeiroProduto() {
    cy.removerPrimeiroItemDoCarrinho();
  }

  validarCarrinhoVazio() {
    // valida mensagens comuns de carrinho vazio
    cy.contains(/Seu carrinho está vazio|Nenhum produto no carrinho|Carrinho vazio/i).should('be.visible');
  }
}

export default new CarrinhoPage();
