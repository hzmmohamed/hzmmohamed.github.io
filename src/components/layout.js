import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { container, navLinks, navLinkItem } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav style={{ marginBottom: '1rem', marginTop: '2.5rem' }}>
        <StaticImage
          src="../images/orman.png"
          alt="orman garden"
          placeholder="blurred"
          aspectRatio={13 / 4}
          quality="95"
          style={{ boxShadow: '0px 3px 8px rgba(0,0,0,0.2)' }}
          imgStyle={{ borderRadius: '5px' }}
        ></StaticImage>
        <div>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link
                to="/posts"
                style={{
                  textDecoration: 'none',
                  color: '#3666AE',
                  padding: '2px',
                }}
                activeStyle={{
                  border: 'solid 2px #3666AE',
                  borderRadius: '2px',
                }}
              >
                posts
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link
                to="/art"
                style={{
                  textDecoration: 'none',
                  color: '#E5B763',
                  padding: '2px',
                }}
                activeStyle={{
                  border: 'solid 2px #E5B763',
                  borderRadius: '2px',
                }}
              >
                art
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link
                to="/about"
                style={{
                  textDecoration: 'none',
                  color: '#5C9071',
                  padding: '2px',
                }}
                activeStyle={{
                  border: 'solid 2px #5C9071',
                  borderRadius: '2px',
                }}
              >
                about
              </Link>
            </li>
          </ul>
        </div>
        <div
          style={{
            width: '95%',
            display: 'flex',
            justifyContent: 'center',
            margin: 'auto',
          }}
        ></div>
      </nav>
      <main>{children}</main>
    </div>
  )
}

export default Layout
