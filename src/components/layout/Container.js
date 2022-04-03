import React from 'react';
import styled from 'styled-components';

const Container = ({children}) => {
  return (
    <StyledContainer>{children}</StyledContainer>
  )
}

export default Container;

const StyledContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
max-width: 1320px;
margin: 20px auto;
min-height: 100%;
`
