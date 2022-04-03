import React from "react";
import styled from "styled-components";
import { currentDeveloperAC } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
const ListTeam = ({ currentList }) => {
  const dispatch = useDispatch();
  const handleChoiceMember = (eo) => {
    const developer = currentList.find(dev => eo.target.id === String(dev.id));
    dispatch(currentDeveloperAC(developer));
  }
  return (
    <StyledListTeam>
      {currentList.map((member) => {
        return (
          <StyledMember onClick={handleChoiceMember} isClose={member.isClose} key={member.id} id={member.id}>
            {member.name}
          </StyledMember>
        );
      })}
    </StyledListTeam>
  );
};

export default ListTeam;

const StyledListTeam = styled.ul`
  margin: 10px;
  padding: 0px;
  min-height: 100%;
`;

const StyledMember = styled.li`
  color: #fff;
  font-size: 1.6rem;
  font-family: Arial, Helvetica, sans-serif;
  opacity: 0.5;
  cursor: default;
  transition: all 0.3s;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  &::before {
    position: absolute;
    top: 4px;
    left: -14px;
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ isClose }) => (isClose ? "red" : "green")};
  }
`;
