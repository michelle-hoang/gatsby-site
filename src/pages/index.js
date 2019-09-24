import React from "react"
import Layout from "../components/layout"
import About from "../components/about"
import Skills from "../components/skills"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div style={{ textAlign: "center" }}>
        <h2>
          Hello there, I'm Michelle. <br /> It's great to meet you!
        </h2>
      </div>
      <About />
      <Skills />
    </div>
  </Layout>
)

export default IndexPage
