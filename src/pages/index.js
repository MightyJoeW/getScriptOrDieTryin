import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio/bio'
import Footer from '../components/footer/footer'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

export default class BlogIndex extends Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    return (
      < Layout location={this.props.location} title={siteTitle} >
        <SEO
          title="All posts"
          keywords={['blog', 'gatsby', 'javascript', 'react']}
        />
        <Bio />
        {
          posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>
                  {node.frontmatter.date}
                </small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            )
          })
        }
        <Footer />
      </Layout >
    )
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
