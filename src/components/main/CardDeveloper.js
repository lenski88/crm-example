import React from "react";
import styled from 'styled-components'
import { useSelector } from "react-redux";

const CardDeveloper = () => {
  const currentDeveloper = useSelector((state) => state.currentDeveloper);
  if (!currentDeveloper) return null;

  return (
    <StyledCardDeveloper>
      <h1>{currentDeveloper.name}</h1>
      <p>Технология: {currentDeveloper.technology}</p>
      <p>Уровень: {currentDeveloper.level}</p>
      <p>Уровень ЗП: ${currentDeveloper.salary}</p>
      <p>На проекте: {currentDeveloper.hasProject ? "Да" : "Нет"}</p>
      <p>Готов к дополнительной работе: {currentDeveloper.isClose ? "Нет" : 'Да'} </p>
    </StyledCardDeveloper>
  );
};

export default CardDeveloper;

const StyledCardDeveloper = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
color: #fff;
font-size: 1.6rem;
padding-left: 20px;
`
