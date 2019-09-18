import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <h2 style={{ textAlign: `center` }}>What's on my mind lately?</h2>
    <div className="container"></div>
  </Layout>
)

export default Blog
