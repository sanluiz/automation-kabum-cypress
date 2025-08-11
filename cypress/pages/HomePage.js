class HomePage {
  visitar() {
    cy.visit('/');
  }

  buscarProduto(produto) {
    cy.buscarProduto(produto);
  }
}

export default new HomePage();
