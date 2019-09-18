import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { LinkedIn } from "../icons"

const ContactMe = () => (
  <Layout>
    <SEO title="Contact Me" />
    <h2>Contact Me</h2>
    <div className="container">
      <div>
        <p>
          <a href={`mailto: hello@michellehoang.dev`} target="_blank">
            hello@michellehoang.dev
          </a>
          <hr style={{ visibility: `hidden` }} />
          <a href="https://www.linkedin.com/in/hoangmichelle">
            linkedin.com/in/hoangmichelle/
          </a>
          <hr style={{ visibility: `hidden` }} />
          <a href="https://www.github.com/michelle-hoang">
            github.com/michelle-hoang
          </a>
        </p>
      </div>
    </div>
  </Layout>
)

export default ContactMe
