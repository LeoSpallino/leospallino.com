import React from "react"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { HiAtSymbol } from "react-icons/hi"
import Layout from "../components/layout"
import Head from "../components/head"
import indexStyles from "./index.module.css"

const Home = () => {
  return (
    <Layout>
      <Head title="Home" />
      <div className={indexStyles.outerContainer}>
        <div className={indexStyles.container}>
          <h1 className={indexStyles.headline}>Leo Spallino</h1>
          <p className={indexStyles.underline}>
            I'm a Front-End Web Developer.
            <br />I like to design things.
          </p>
          <div className={indexStyles.links}>
            <a
              href="https://www.linkedin.com/in/leo-spallino/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Icon"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/LeoSpallino"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github Icon"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:spallino.leonardo@gmail.com"
              rel="noopener noreferrer"
              aria-label="Email Icon"
            >
              <HiAtSymbol />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
