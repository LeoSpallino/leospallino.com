import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <div>
        <h1>Oops!</h1>
        <p>Looks like the page you're looking for was unavailable.</p>
      </div>
    </Layout>
  )
}

export default NotFound
