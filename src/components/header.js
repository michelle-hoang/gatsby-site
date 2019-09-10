import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header
    style={{
      marginBottom: "2rem",
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.3rem 0.3rem`,
      }}
    >
      <p style={{ margin: "1rem" }}>
        <Link
          to="/"
          style={{
            fontFamily: "Windsor_BT",

            textDecoration: `none`,
          }}
        >
          Home
        </Link>
      </p>
      <p style={{ margin: "1rem" }}>
        <Link
          to="/projects"
          style={{
            fontFamily: "Windsor_BT",

            textDecoration: `none`,
          }}
        >
          Projects
        </Link>
      </p>
      <p style={{ margin: "1rem" }}>
        <Link
          to="/artwork"
          style={{
            fontFamily: "Windsor_BT",
            textDecoration: `none`,
          }}
        >
          Artwork
        </Link>
      </p>
      <p style={{ margin: "1rem" }}>
        <Link
          to="/blog"
          style={{
            fontFamily: "Windsor_BT",
            textDecoration: `none`,
          }}
        >
          Blog
        </Link>
      </p>
      <p style={{ margin: "1rem" }}>
        <Link
          to="/contact-me"
          style={{
            fontFamily: "Windsor_BT",
            textDecoration: `none`,
          }}
        >
          Contact Me
        </Link>
      </p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
