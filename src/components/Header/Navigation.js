import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { developersListAC } from "../../redux/actions/actions";

const { navigationItems } = require("../../data/data.json");

const Navigation = () => {
  const dispatch = useDispatch();
  const listNav = navigationItems.map((item) => {
    return <button key={item}>{item}</button>;
  });
  const handleDevelopers = () => {
    dispatch(developersListAC());
  }
  return <StyledNavigation onClick={handleDevelopers}>{listNav}</StyledNavigation>;
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
    border: 1px solid green;
    border-radius: 3px;
    outline: none;
    color: #eee;
    font-size: 1.6rem;
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
