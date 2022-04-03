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
  align-items: center;
  height: 50px;
  color: #eee;
  margin: 20px 0 0 0;
  border-bottom: 1px solid #fff;
  figure {
    width: 100px;
    height: 49px;
    margin: 0;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
