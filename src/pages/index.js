import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import About from "../components/about"
import Skills from "../components/skills"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div style={{ textAlign: "center" }}>
        <h2>
          Hello there, <br />
          I'm Michelle. It's great to meet you!
        </h2>
      </div>
      <About />
      <Skills />
    </div>
  </Layout>
)

export default IndexPage
