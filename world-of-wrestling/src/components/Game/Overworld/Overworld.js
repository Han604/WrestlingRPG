import React from 'react';
import styled from 'styled-components';
import Arena_01_proto from '../../../assets/arena_01_proto.jpg';

function Overworld() {
  return (
    <Wrapper>
      <h3>Da World</h3>
      <Tile src={Arena_01_proto} alt='arena' />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  padding: 8px;
  margin: 16px;
  border: 1px solid green;
  border-radius: 8px;
  grid-area: map;
  overflow: hidden;
  justify-content: center;
`;

const Tile = styled.img`
  max-width: 95%;
  max-height: 95%;
`;

export default Overworld;
