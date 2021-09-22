import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { rhythm } from '../../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: 'flex',
              marginBottom: rhythm(2.5),
            }}
          >
            <StaticImage
              src="../../../content/assets/profile-pic.jpg"
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                maxWidth: 60,
                height: 60,
                borderRadius: '100%',
              }}
            />
            <div
              style={{
                flexDirection: 'column',
              }}
            >
              <span>
                Personal blog by <strong>{author}</strong>.
              </span>
              <br />
              <span>Career Tips and Insight For Software Developers</span>
            </div>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
