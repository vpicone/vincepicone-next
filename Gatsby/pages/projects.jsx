import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const Visit = styled.a `
  background: #191919;
  color: white;
  transition: background 0.6s;
  transition-timing-function: ease;
  &:hover {
    background: white;
    color: #191919;
  }
  &.primary {
    background: white;
    color: #191919;
  }
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #191919;
  border-radius: 4px;
  text-decoration: none;
`;

const Title = styled.h2 `
  text-align: center;
  margin-top: 20px;
`;

const ProjectsPage = () =>
  <div style={{ margin: "auto", maxWidth: "700px", marginTop: "60px" }}>
    <Title>
      <Visit href="https://chrome.google.com/webstore/detail/sorry-tennessee/pnfibhfelcbokechjfmghnmgbchpijaj">
        Sorry TN
      </Visit>
    </Title>
    <p>
      As seen in the Austin Statesman, my friend's text messages, and my mom's
      refrigerator.
    </p>
    <p>
      Removes Tennessee from most drop down menus across the web for the greater
      good of Texans.
    </p>
    <br />
    <Title>
      <Visit href="http://www.followbud.us">Followbud.us</Visit>
    </Title>
    <p>
      Spotify's follow feature allows you to receive notifications when your
      favorite artists release new music.
    </p>
    <p>
      Followbud allows you to easily follow all of the artists in your favorite
      Spotify playlists.
    </p>
    <br />
    <Title>
      <Visit href="https://www.antibuddy.com">Antibuddy.com</Visit>
    </Title>
    <p>
      Antibuddy is a framework for digitally accessing databases with smart
      search and the power of firebase.
    </p>
    <p>Utilizes React, Material.ui, Firebase, Now.sh under the hood.</p>
    <br />
    <Title>
      <Visit href="https://github.com/vpicone/BloodbankPal">
        Bloodbankpal.com
      </Visit>
    </Title>
    <p>
      <strong>Problem:</strong> The bloodbank courier schedule was outdated and
      difficult to read.
    </p>
    <p>
      <strong>Solution:</strong> The schedule updates in real time and
      implements Googles Material Design pattern for readability.
    </p>
    <p>
      <strong>Tools</strong> React, react-router, material-ui, react-collapse,
      and Now for deployment.
    </p>
  </div>;

export default ProjectsPage;
