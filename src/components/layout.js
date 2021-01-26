import React from "react"
import Particles from "react-particles-js"
import particleOptions from "../../assets/particles.json"

import Header from "./header"
import Footer from "./footer"

import layoutStyles from "./layout.module.css"

const Layout = props => {
  return (
    <div>
      <Particles className={layoutStyles.particles} params={particleOptions} />
      <div>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
