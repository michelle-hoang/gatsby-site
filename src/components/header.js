import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const h5style = { paddingRight: `1.5rem`, margin: 0 }

const Header = () => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div className="header">
      <h5 style={h5style}>
        <Link to="/" className="nav">
          Home
        </Link>
      </h5>
      <h5 style={h5style}>
        <Link to="/projects" className="nav">
          Projects
        </Link>
      </h5>
      <h5 style={h5style}>
        <Link to="/artwork" className="nav">
          Artwork
        </Link>
      </h5>
      <h5 style={h5style}>
        <Link to="/blog" className="nav">
          Blog
        </Link>
      </h5>
      <h5>
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
