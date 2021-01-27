import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import headerStyles from "./header.module.css"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <nav>
        <ul className={headerStyles.navList}>
          <li className={headerStyles.navItem}>
            <Link
              to="/"
              className={headerStyles.navLink}
              activeClassName={headerStyles.activeNavItem}
            >
              {data.site.siteMetadata.title}
            </Link>
          </li>
          <li className={headerStyles.navItem}>
            <Link
              to="/about"
              className={headerStyles.navLink}
              activeClassName={headerStyles.activeNavItem}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
