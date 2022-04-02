import React from "react";
import styled from "styled-components";

const { navigationItems } = require("../../data/navigation.json");

const Navigation = () => {
  const listNav = navigationItems.map((item) => {
    return <button key={item}>{item}</button>;
  });
  return <StyledNavigation>{listNav}</StyledNavigation>;
};

export default Navigation;

const StyledNavigation = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: default;
  button {
    background: transparent;
    border: 1px solid #fff;
    border-radius: 3px;
    outline: none;
    color: #eee;
    font-size: 1.6rem;
    margin-top: 24px;
    margin-right: 5%;
    padding: 5px 10px;
    font-family: Arial, Helvetica, sans-serif;
    opacity: .5;
    transition: all 0.3s;
    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }
`;
