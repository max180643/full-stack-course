describe('/register', function() {

  beforeEach(function() {
    cy.visit('http://10.110.193.224:4100/register')
  })

  it('should greet with Sign up', function() {
    // cy.visit('http://10.110.193.224:4100/register')
    cy.get('h1').contains('Sign Up')
  })

  it('should have link that navigate to /login', function() {
    // cy.visit('http://10.110.193.224:4100/register')
    cy.get('p').contains('Have an account?')
    // click logic
    cy.get('p.text-xs-center > a')
      .contains('Have an account?')
      .should('have.attr', 'href', '/login')
  })

  it('should navigate to /login', function() {
    // cy.visit('http://10.110.193.224:4100/register')
    cy.get('p').contains('Have an account?')
    // click logic
    cy
      // .get('p.text-xs-center > a')
      .contains('Have an account?')
      // .should('have.attr', 'href', '/login')
      .click()
  })

  it('should sign me up successfully', function() {
    cy.server()
    // stub route create users
    cy.route({
      url: '/api/users',
      method: 'POST',
      status: 200,
      response: { "user": {username: "chnwt1", email: "demo1@demo.com", token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmN…2MzN9.i8Zg-ZIXqBqCUTsXja0_a4H7pF5fj4OviyD9I0WxaYE"} }
    })
    // cy.visit('http://10.110.193.224:4100/register')
    cy.get('[data-test=username]').type('chnwt1')
    cy.get('[data-test=email]').type('demo1@demo.com')
    cy.get('[data-test=password]').type('1234')
    cy.get('[data-test=register-submit]').click()
  })

  it('should not able to sign up (dupicate email)', function() {
    // cy.visit('http://10.110.193.224:4100/register')
    cy.server()
    cy.route({
      url: '/api/users',
      method: 'POST',
      status: 402,
      response: { 
        errors: {
          email: "is already taken.",
          username: "is already taken."
        }
       }
    })
    cy.InputRegisterForm()
    // cy.get('[data-test=username]').type('chnwt1')
    // cy.get('[data-test=email]').type('demo1@demo.com')
    // cy.get('[data-test=password]').type('1234')
    // cy.get('[data-test=register-submit]').click()
  })
})