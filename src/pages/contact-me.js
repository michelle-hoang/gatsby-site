import React from "react"
import { Link } from "gatsby"
import Resume from "../components/resume"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactMe = () => (
  <Layout>
    <SEO title="Contact Me" />
    <h2>Contact Me</h2>
    <div className="container">
      <div>
        <p>hello@michellehoang.dev</p>
        <p>
          <a href="https://www.linkedin.com/in/hoangmichelle">
            linkedin.com/in/hoangmichelle/
          </a>
        </p>
        <p>
          <a href="https://www.github.com/michelle-hoang">
            github.com/michelle-hoang
          </a>
        </p>
      </div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactMe
