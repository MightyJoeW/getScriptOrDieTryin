import React from 'react'
import { rhythm } from '../../utils/typography'

const Footer = () => (
  <footer
    style={{
      marginTop: rhythm(2.5),
      paddingTop: rhythm(1),
    }}
  >
    <a
      href="https://mobile.twitter.com/mightyjoew"
      target="_blank"
      rel="noopener noreferrer"
    >
      twitter
    </a>{' '}
    &bull;{' '}
    <a
      href="https://github.com/MightyJoeW"
      target="_blank"
      rel="noopener noreferrer"
    >
      github
    </a>{' '}
    &bull;{' '}
    <a
      href="https://stackoverflow.com/users/7310962/joe-warren"
      target="_blank"
      rel="noopener noreferrer"
    >
      stack overflow
    </a>
  </footer>
)

export default Footer
