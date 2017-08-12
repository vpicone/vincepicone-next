import React from "react";
import Link from "gatsby-link";
import Github from "../components/github.svg";
import Linkedin from "../components/linkedin.svg";
import Twitter from "../components/twitter.svg";
import styled from "styled-components";

const SocialLink = styled.img`height: 75px;`;

const ConnectPage = () =>
  <div
    style={{
      display: "flex",
      maxWidth: "600px",
      margin: "auto",
      justifyContent: "center"
    }}
  >
    <a style={{ margin: "10px" }} href="https://www.github.com/vpicone">
      <SocialLink src={Github} />
    </a>
    <a style={{ margin: "10px" }} href="https://www.twitter.com/TheElodin">
      <SocialLink src={Twitter} />
    </a>
    <a
      style={{ margin: "10px" }}
      href="https://www.linkedin.com/in/vincentpicone/"
    >
      <SocialLink src={Linkedin} />
    </a>
  </div>;

export default ConnectPage;
