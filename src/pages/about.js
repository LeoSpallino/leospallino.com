import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

import aboutStyles from "./about.module.css"

const About = () => {
  return (
    <Layout>
      <Head title="About" />
      <div className={aboutStyles.container}>
        <h1 className={aboutStyles.title}>About Me</h1>
        <p className={aboutStyles.text}>
          Hello! My name is Leo Spallino. I'm an aspiring web developer and
          student currently studying Materials Engineering at McMaster
          University expecting to graduate in April 2022.
          <br />
          I'm currently seeking co-op opportunities beginning in May 2021, and
          have experience working with React, React-Native, JavaScript, HTML,
          CSS
        </p>
      </div>
    </Layout>
  )
}

export default About
