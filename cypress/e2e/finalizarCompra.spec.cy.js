describe('Finalizar compra', function() {
    // Visita a página inicial antes de cada teste
    beforeEach(function(){
      cy.visit('https://www.saucedemo.com/v1/')
    })
  
    // Teste para finalizar compra sem preencher nome, sobrenome e código postal
    it('finalizar compra sem preencher nome, sobrenome e código postal', function() {
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce', { log: false })
      cy.get('#login-button').click()
      cy.url().should('equals', 'https://www.saucedemo.com/v1/inventory.html')
      cy.get('.btn_primary.btn_inventory').eq(0).click()
      cy.get('.shopping_cart_badge').contains('1')
      cy.get('#shopping_cart_container').click()
      cy.get('.cart_quantity').contains('1')
      cy.contains('Sauce Labs Backpack').should('exist')
      cy.contains('29.99').should('exist')
      cy.contains('CHECKOUT').click()
      cy.contains('CONTINUE').click()
      cy.get('[data-test="error"]').should('be.visible')
    })
  
    // Teste para finalizar compra sem preencher sobrenome e código postal
    it('finalizar compra sem preencher sobrenome e código postal', function() {
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce', { log: false })
      cy.get('#login-button').click()
      cy.url().should('equals', 'https://www.saucedemo.com/v1/inventory.html')
      cy.get('.btn_primary.btn_inventory').eq(0).click()
      cy.get('.shopping_cart_badge').contains('1')
      cy.get('#shopping_cart_container').click()
      cy.get('.cart_quantity').contains('1')
      cy.contains('Sauce Labs Backpack').should('exist')
      cy.contains('29.99').should('exist')
      cy.contains('CHECKOUT').click()
      cy.get('[data-test="firstName"]').type('Ueber')
      cy.contains('CONTINUE').click()
      cy.get('[data-test="error"]').should('be.visible')
    })
  
    // Teste para finalizar compra sem preencher código postal
    it('finalizar compra sem preencher código postal', function() {
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce', { log: false })
      cy.get('#login-button').click()
      cy.url().should('equals', 'https://www.saucedemo.com/v1/inventory.html')
      cy.get('.btn_primary.btn_inventory').eq(0).click()
      cy.get('.shopping_cart_badge').contains('1')
      cy.get('#shopping_cart_container').click()
      cy.get('.cart_quantity').contains('1')
      cy.contains('Sauce Labs Backpack').should('exist')
      cy.contains('29.99').should('exist')
      cy.contains('CHECKOUT').click()
      cy.get('[data-test="firstName"]').type('Ueber')
      cy.get('[data-test="lastName"]').type('Santos')
      cy.contains('CONTINUE').click()
      cy.get('[data-test="error"]').should('be.visible')
    })
  
    // Teste para finalizar compra com sucesso
    it('finalizar compra com sucesso', function() {
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce', { log: false })
      cy.get('#login-button').click()
      cy.url().should('equals', 'https://www.saucedemo.com/v1/inventory.html')
      cy.get('.btn_primary.btn_inventory').eq(0).click()
      cy.get('.shopping_cart_badge').contains('1')
      cy.get('#shopping_cart_container').click()
      cy.get('.cart_quantity').contains('1')
      cy.contains('Sauce Labs Backpack').should('exist')
      cy.contains('29.99').should('exist')
      cy.contains('CHECKOUT').click()
      cy.get('[data-test="firstName"]').type('Ueber')
      cy.get('[data-test="lastName"]').type('Santos')
      cy.get('[data-test="postalCode"]').type('12345678')
      cy.contains('CONTINUE').click()
      cy.contains('Overview').should('exist')
      cy.contains('Sauce Labs Backpack').should('exist')
      cy.contains('29.99').should('exist')
      cy.contains('FINISH').click()
      cy.contains('THANK YOU FOR YOUR ORDER').should('exist')
    })
  })
  