import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactMe = () => (
  <Layout>
    <SEO title="Contact Me" />
    <h2>Contact Me</h2>
    <div className="container"></div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactMe
