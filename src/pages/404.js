import React, { Component } from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

export default class NotFoundPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="404: Not Found" />
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... Whoops</p>
      </Layout>
    )
  }
}
