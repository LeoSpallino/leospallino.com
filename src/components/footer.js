import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          Made with {`\u{1f496}`} by{" "}
          <Link to="https://github.com/LeoSpallino" target="_blank">
            Leonardo Spallino
          </Link>{" "}
          © 2021
        </li>
        <li>
          Powered by{" "}
          <Link to="https://www.gatsbyjs.com/" target="_blank">
            Gatsby
          </Link>
        </li>
        <li>
          <Link to="/privacy">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/legal">Legal</Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
