import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `3rem`,
    }}
  >
    <div
      style={{
        display: "flex",
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        // marginBottom: '10%',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            fontSize: 16,
          }}
        >
          {/* {siteTitle} */}
        </Link>
        {/* <a style={fontSize:}target="_blank" href="https://dribbble.com/crypghost">art </a> */}
        <Link style={{ fontSize: 20, color: `black`, marginRight: 20 }} to="/">
          home
        </Link>
        <Link
          style={{ fontSize: 20, color: `black`, marginRight: 20 }}
          to="/contact/"
        >
          contact
        </Link>
      </h1>
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
