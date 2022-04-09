import React from 'react'
import { Link } from 'gatsby'
import { rhythm } from '../../utils/typography'

const Footer = () => (
  <footer
    style={{
      marginTop: rhythm(2.5),
      paddingTop: rhythm(1),
    }}
  >
    {/* &copy; {new Date().getFullYear()} */}
    <Link to={'/'}>Home</Link> &bull;{' '}
    <a
      href="https://mobile.twitter.com/mightyjoew"
      target="_blank"
      rel="noopener noreferrer"
    >
      Twitter
    </a>{' '}
    &bull;{' '}
    <a
      href="https://github.com/MightyJoeW"
      target="_blank"
      rel="noopener noreferrer"
    >
      Github
    </a>{' '}
    &bull;{' '}
    <a
      href="https://stackoverflow.com/users/7310962/joe-warren"
      target="_blank"
      rel="noopener noreferrer"
    >
      Stack Overflow
    </a>
  </footer>
)

export default Footer
