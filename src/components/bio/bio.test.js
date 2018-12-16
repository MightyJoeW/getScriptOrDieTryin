import React from 'react'
import renderer from 'react-test-renderer'
import Bio from './bio'

describe('Bio tests', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Bio />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
