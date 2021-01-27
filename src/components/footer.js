import React from "react"
import { Link } from "gatsby"

import footerStyles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <ul className={footerStyles.footerList}>
        <li className={footerStyles.footerItem}>
          <a
            className={footerStyles.footerLink}
            href="https://github.com/LeoSpallino"
            target="_blank"
            rel="noreferrer"
          >
            Leonardo Spallino
          </a>{" "}
          © 2021
        </li>
        <li className={footerStyles.footerItem}>
          Powered by{" "}
          <a
            className={footerStyles.footerLink}
            href="https://www.gatsbyjs.com/"
            target="_blank"
            rel="noreferrer"
          >
            Gatsby
          </a>
        </li>
        <li className={footerStyles.footerItem}>
          <Link to="/privacy" className={footerStyles.footerLink}>
            Privacy Policy
          </Link>
        </li>
        <li className={footerStyles.footerItem}>
          <Link to="/legal" className={footerStyles.footerLink}>
            Legal
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
