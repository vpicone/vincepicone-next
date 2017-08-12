import React from 'react'
import Link from 'next/link'

const StyledLink = styled(Link)
`
	background: #191919;
	color: lightgrey;
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
`

const Icon = styled.img `height: 100px;`


const Navbar = () =>
  <div>
    <StyledLink to="/projects/" activeClassName="primary">
      projects
    </StyledLink>
    <StyledLink to="/" exact activeClassName="primary">
      about
    </StyledLink>
    <StyledLink to="/connect/" activeClassName="primary">
      connect
    </StyledLink>
  </div>


export default Navbar;
