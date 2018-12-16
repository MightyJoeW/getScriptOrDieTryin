import React from 'react'
import renderer from 'react-test-renderer'
import NotFoundPage from './404'

describe('NotFoundPage tests', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<NotFoundPage />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
