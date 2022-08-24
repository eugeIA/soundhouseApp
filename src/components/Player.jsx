
import React from "react";
import styled from "styled-components";
import CurrentTrack from "./CurrentTrack";
import PlayerController from "./PlayController";
import Volume from "./Volume";
function Player() {
  return (
    <Container>
      <CurrentTrack />
      <PlayerController />
      <Volume />
    </Container>
  );
}

const Container = styled.div`
  height: 12.5vh;
  
  
  background-color: black;
  border-top: 1px solid #282828;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`;

export default Player;