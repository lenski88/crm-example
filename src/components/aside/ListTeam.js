import React from "react";
import styled from "styled-components";
const ListTeam = ({ currentList }) => {
  return (
    <StyledListTeam>
      {currentList.map((member) => {
        return <li key={member.id}>{member.name}</li>;
      })}
    </StyledListTeam>
  );
};

export default ListTeam;

const StyledListTeam = styled.ul`
 margin: 20px;
 padding:0px;
 min-height: 100%;
 li {
   color: #fff;
   font-size: 1.6rem;
   font-family: Arial, Helvetica, sans-serif;
   opacity:.5;
   cursor:default;
   transition: all .3s;
 }
 li:not(:last-child) {
   margin-bottom: 10px;
 }
 li:hover {
   opacity:1;
   cursor: pointer;
 }
`
