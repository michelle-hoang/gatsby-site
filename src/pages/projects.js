import React from "react"
import Link from "gatsby-link"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Stroll from "../components/examples/stroll"
import Breadshop from "../components/examples/breadshop"
import Victory from "../components/examples/victory"
import { InfoButton } from "../components/info-button"

const Projects = ({ data }) => (
  <Layout>
    <div className="content">
      <SEO title="Projects" />
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div style={{ marginBottom: `2rem` }}>
        <u>
          <h3>Stroll</h3>
        </u>
        <div className="projectImage">
          <Stroll className="projectThumbnail" />
        </div>
        <p>
          A mobile app where users can view popular attractions and find or
          create walks in their area
          <hr style={{ height: `0.75rem`, visibility: `hidden` }} />
          Technologies implemented: React-Native, Expo.io, React-Navigation,
          React-Native-Maps, PostGIS, Native-Base
        </p>

        <div style={{ display: `flex`, justifyContent: `flex-end` }}>
          <Link to="/stroll">
            <InfoButton />
          </Link>
        </div>
      </div>
      <div style={{ marginBottom: `2rem` }}>
        <u>
          <h3>From D3 to Victory</h3>
        </u>
        <div className="projectImage">
          <Victory className="projectThumbnail" />
        </div>
        <p>
          A web app using data visualizations about my experience learning D3
          and Victory.js during a 4-day hackathon
          <hr style={{ height: `0.75rem`, visibility: `hidden` }} />
          Technologies implemented: React, Victory.js, D3.js
        </p>
        <div style={{ display: `flex`, justifyContent: `flex-end` }}>
          <Link to="/stackathon">
            <InfoButton />
          </Link>
        </div>
      </div>
      <div style={{ marginBottom: `2rem` }}>
        <u>
          <h3>Let's get this bread (shop)</h3>
        </u>
        <div className="projectImage">
          <Breadshop className="projectThumbnail" />
        </div>
        <p>
          An e-commerce website selling bread and related products <br />
          <hr style={{ height: `0.75rem`, visibility: `hidden` }} />
          Technologies implemented: Express, Sequelize, React, Redux,
          React-Bootstrap, Sketch, Stripe
        </p>
        <div style={{ display: `flex`, justifyContent: `flex-end` }}>
          <Link to="/breadshop">
            <InfoButton />
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default Projects
