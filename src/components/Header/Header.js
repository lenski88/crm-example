import React from "react";
import styled from "styled-components";

import logo from "../../assets/logo_fls.jpg";

import Navigation from "./Navigation";

const Header = () => {
  return (
    <StyledHeader>
      <figure>
        <img src={logo} alt="logo" />
      </figure>
      <Navigation />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 50px;
  color: #eee;
  figure {
      width:100px;
      height: 65px;
      margin: 10px 0
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
