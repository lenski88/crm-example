import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import ListTeam from "./ListTeam";

const ListTeamBlock = () => {
  const currentSelectionFromNav = useSelector((state) => state.navigation);
  return (
    <StyledListTeamBlock>
      {!currentSelectionFromNav ? null : (
        <ListTeam currentList={currentSelectionFromNav} />
      )}
    </StyledListTeamBlock>
  );
};

export default ListTeamBlock;

const StyledListTeamBlock = styled.aside`
  width: 10%;
  height: 100%;
  margin:0;
`;
