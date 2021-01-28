import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

import notFoundStyles from "./404.module.css"

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <div className={notFoundStyles.outerContainer}>
        <div className={notFoundStyles.container}>
          <h1 className={notFoundStyles.headline}>Oops!</h1>
          <p className={notFoundStyles.underline}>
            Looks like the page you're looking for was unavailable.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default NotFound
