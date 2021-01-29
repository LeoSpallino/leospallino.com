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
          <br />
          I’m extremely passionate about web development and designing creative
          solutions to everyday problems. Outside of the web, I’m interested in
          camping, playing boardgames with friends, going to concerts, and
          playing music.
          <br />
          <br />
          I'm currently seeking co-op opportunities beginning in May 2021, and
          have experience working with React, React-Native, JavaScript, HTML,
          CSS.
          <br />
          <br />
          Technologies I use:
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React / React-Native</li>
            <li>Git</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>PL/SQL</li>
            <li>Oracle APEX</li>
            <li>Gatsby.js</li>
            <li>Firebase</li>
          </ul>
        </p>
      </div>
    </Layout>
  )
}

export default About
