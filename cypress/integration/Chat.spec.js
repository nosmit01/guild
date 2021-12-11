/// <reference types="cypress" />
import { format } from 'date-fns'

describe('Chat', () => {
  beforeEach(() => {
    cy.visit('/chat')
  })

  it('Enables send button', () => {
    cy.get('[data-testid="chatInput"]').type('Hello there')
    cy.get('[data-testid="chatSendBtn"]').not('[disabled]')
  })

  /* normally we would remove the messaage after adding it */
  it('Adds message', () => {
    cy.get('[data-testid="chatInput"]').type('Hello there')
    cy.get('[data-testid="chatSendBtn"]').click()
    cy.get('[data-testid="message"]')
      .last()
      .find('[data-testid="content"]')
      .should('have.text', 'Hello there')

    cy.get('[data-testid="message"]')
      .last()
      .find('[data-testid="date"]')
      .should('have.text', format(new Date(), 'h:m aaa - MM/dd/yyyy'))
  })
})