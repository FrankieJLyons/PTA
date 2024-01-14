import React from 'react'
import TextViewer from './TextViewer'

describe('<TextViewer />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TextViewer />)
  })
})