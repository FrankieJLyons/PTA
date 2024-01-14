import React from 'react'
import SideNavigation from './SideNavigation'

describe('<SideNavigation />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SideNavigation />)
  })
})