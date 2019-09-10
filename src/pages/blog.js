import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <h2>Blog</h2>
    <div className="container"></div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Blog
