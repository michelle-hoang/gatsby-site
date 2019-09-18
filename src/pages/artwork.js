import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SightDistance from "../components/example"

const Artwork = () => (
  <Layout>
    <SEO title="Artwork" />
    {/* <h2 style={{ textAlign: "center" }}>Creative Work</h2> */}

    <h2 style={{ textAlign: "center" }}>Currently Under Construction</h2>
    <h4 style={{ textAlign: "center", margin: `2rem` }}>
      Thanks for your patience!
    </h4>
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        alignContent: `center`,
      }}
    >
      <div className="artPlaceholder">
        <SightDistance />
        <p style={{ paddingTop: `0.5rem`, textAlign: `right` }}>
          <i>On the Horizon</i>, 2016
        </p>
      </div>
    </div>
  </Layout>
)

export default Artwork
