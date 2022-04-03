import React from "react";
import Container from "./components/layout/Container";
import Header from "./components/Header/Header";
import ListTeamBlock from "./components/aside/ListTeamBlock";
import MainContainer from "./components/main/MainContainer";

function App() {
  return (
    <>
      <Header />
      <Container>
        <ListTeamBlock />
        <MainContainer />
      </Container>
    </>
  );
}

export default App;
