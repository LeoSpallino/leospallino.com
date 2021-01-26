import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const Home = () => {
  return (
    <Layout>
      <Head title="Home" />
      <div>
        <h1>Leo Spallino</h1>
        <p>
          I'm a Front-End Web Developer.
          <br />I like to design things.
        </p>
      </div>
    </Layout>
  )
}

export default Home
