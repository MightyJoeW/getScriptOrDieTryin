import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="404: Not Found" />
    <main>
      <section style={{ textAlign: 'center' }}>
        <h2>404</h2>
        <h3>page not found</h3>
        <Link to="/">Return home</Link>
      </section>
    </main>
  </Layout>
)

export default NotFoundPage
