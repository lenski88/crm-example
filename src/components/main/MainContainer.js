import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import CardDeveloper from "./CardDeveloper";

const MainContainer = () => {
  const isSelected = useSelector((state) => state.currentDeveloper);
  return (
    <StyledMainContainer>
      {isSelected && <CardDeveloper></CardDeveloper>}
    </StyledMainContainer>
  );
};

export default MainContainer;

const StyledMainContainer = styled.div`
  flex: 0 1 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 100%;
    height: 500px;
    border: 1px solid green;
    border-radius: 5px;
  }
`;
