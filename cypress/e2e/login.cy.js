 describe('Testing Login', () => {
  beforeEach(()=> {
    cy.visit('https://www.konga.com/')
  })

  it('Verify user is able to login',()=> {
      cy.get('._12e27_1r3kc > ._7ad32_SD12Y').click()
      cy.get('#username').type('09158412345')
      cy.get('#password').type('VirusMike4')
      cy.get('.eed68_3IZCC > ._2aac2_3bwnD > ._0a08a_3czMG').click()
  })
})