import React from 'react'
import renderer from 'react-test-renderer'
import Layout from './layout'

describe('Layout tests', () => {
  let { location, title, children } = props

  it('renders correctly', () => {
    const tree = renderer.create(<Layout {...props}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
