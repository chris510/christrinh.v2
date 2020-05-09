import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Nav from './nav/nav';

import "../styles/global.scss";
import "./layout.styles.scss";

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          site {
            siteMetadata {
              title,
              siteUrl,
              description
            }
          }
        }
      `}
      render={({ site }) => (
        <div id="root">
          <h1>{site.siteMetadata.title}</h1>
          <h1>{site.siteMetadata.siteUrl}</h1>
          <h1>{site.siteMetadata.description}</h1>
          <div className="links">
          <Nav/>
          </div>
          <div id="content">
            { children }
          </div>
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
