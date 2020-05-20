import React from 'react';
import Game from '../Game';
import styled from 'styled-components';
import EricTest from '../Game/EricTest/EricTest';


function App() {
  return (
    <AppBody className='App'>
      <h1>World of Wrestling!!</h1>
      <EricTest/>
      <Game />
    </AppBody>
  );
}

const AppBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export default App;
