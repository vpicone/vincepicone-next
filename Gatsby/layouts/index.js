import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Navbar from "../components/Navbar";
require("typeface-roboto");

import "./index.css";

const Header = () =>
  <div
    style={{
      background: "#191919",
      marginBottom: "1.45rem",
      display: "flex",
      textAlign: "center"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem"
      }}
    >
      <h1 style={{ margin: "auto", marginBottom: "1.45rem" }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          V. Picone
        </Link>
      </h1>
      <Navbar />
    </div>
  </div>;

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Vince Picone - Portfolio"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>;

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
