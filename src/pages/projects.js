import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => (
  <Layout>
    <div className="content">
      <SEO title="Projects" />
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div>
        <h4>Stroll</h4>
        <p>
          A mobile app where users can view popular attractions and find or
          create walks in their area <br />
          Technologies implemented: React-Native, Expo.io, React-Navigation,
          React-Native-Maps, PostGIS, Native-Base
        </p>
      </div>
      <div>
        <h4>From D3 to Victory</h4>
        <p>
          A web app using data visualizations about my experience learning D3
          and Victory.js during a 4-day hackathon <br />
          Technologies implemented: React, Victory.js, D3.js
        </p>
      </div>
      <div>
        <h4>Let's get this bread (shop)</h4>
        <p>
          An e-commerce website selling bread and related products <br />
          Technologies implemented: Express, Sequelize, React, Redux,
          React-Bootstrap, Sketch, Stripe
        </p>
      </div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Projects
