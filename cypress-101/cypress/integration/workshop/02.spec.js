describe('/login', function() {
  it('should sign me in logic here', function() {
    cy.visit('http://10.110.193.224:4100/login')
    // cy.get('input').eq(0).type("demo@demo.com")
    // cy.get('input').eq(1).type("1234")
    cy.get('[data-test=email]').type("demo@demo.com")
    cy.get('[data-test=password]').type("1234")
    cy.get('[data-test=login-submit]').click()
  })
})