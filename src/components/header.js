import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      className="header"
      style={{
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `center`,
        width: `100%`,
        // maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h5 style={{ paddingLeft: `0.5rem`, margin: 0 }}>
        <Link to="/" className="nav">
          Home
        </Link>
      </h5>
      <h5 style={{ paddingLeft: `1rem`, margin: 0 }}>
        <Link to="/projects" className="nav">
          Projects
        </Link>
      </h5>
      <h5 style={{ paddingLeft: `1rem`, margin: 0 }}>
        <Link to="/artwork" className="nav">
          Artwork
        </Link>
      </h5>
      <h5 style={{ paddingLeft: `1rem`, margin: 0 }}>
        <Link to="/blog" className="nav">
          Blog
        </Link>
      </h5>
      <h5 style={{ paddingLeft: `1rem`, margin: 0 }}>
        <Link to="/contact-me" className="nav">
          Contact
        </Link>
      </h5>
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
