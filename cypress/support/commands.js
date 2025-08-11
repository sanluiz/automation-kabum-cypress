// custom commands for the Kabum flows
/*Cypress.Commands.add("buscarProduto", (produto) => {
  cy.xpath('//*[@id="inputBusca"]').should('be.visible').type(produto);
});*/

Cypress.Commands.add("adicionarProdutoCarrinhoPorIndex", (index = 0) => {
  // tentativa genérica de clicar no primeiro produto do resultado
  cy.get('[data-testid^="product-card"], .productCard, .card').then($cards => {
    if ($cards.length === 0) {
      // fallback: clique em qualquer link de produto
      cy.get('a[href*="/produto/"]').first().click();
    } else {
      cy.wrap($cards.eq(index)).click({force:true});
    }
  });
  // tenta clicar em botão de comprar/adicionar
  cy.contains(/comprar|adicionar ao carrinho|adicionar/i).first().click({force:true});
});

Cypress.Commands.add("abrirCarrinho", () => {
  // tenta abrir o carrinho pelo ícone ou link
  cy.get('a[href*="carrinho"], [data-testid="cart"], [title*="Carrinho"], .cart, .header-cart').first().click({force:true});
});

Cypress.Commands.add("removerPrimeiroItemDoCarrinho", () => {
  // tenta localizar botões de remover no carrinho
  cy.get('[data-testid*="cart-item-remove"], button[aria-label*="Remover"], button:contains("Remover")').first().click({force:true});
  cy.xpath("//button[contains(@class, 'bg-secondary') and @type='button']").click()
});
