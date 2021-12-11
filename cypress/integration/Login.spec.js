/// <reference types="cypress" />

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Enables login button', () => {
    cy.get('[data-testid="loginInput"]').type('Joe')
    cy.get('[data-testid="loginBtn"]').not('[disabled]')
  })

  it('Joins user into chatroom', () => {
    cy.get('[data-testid="loginInput"]').type('Joe')
    cy.get('[data-testid="loginBtn"]').click()
    cy.url().should('match', /chat/)
  })
})