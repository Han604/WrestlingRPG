import React from 'react';
import styled from 'styled-components';
const EricTest = () => {
  const [PLAYER_POS, SET_PLAYER_POS] = React.useState({x:1, y:1})
  const [PLAYER_PATH, SET_PLAYER_PATH] = React.useState([])

  const distance = (boxX, boxY, PLAYER_POS) => {
    const pathArray = []
    const {x, y} = PLAYER_POS;
    const X_DISTANCE = Math.abs(boxX - x);
    const Y_DISTANCE = Math.abs(boxY - y);
    console.log(X_DISTANCE + Y_DISTANCE, 'total-distance')
    console.log(X_DISTANCE, 'x distance')
    console.log(Y_DISTANCE, 'y distance')
    for(let i = Y_DISTANCE; i > 0; i -= 1) {
      console.log('ding')
      if (boxY > PLAYER_POS.y) {
        pathArray.push({...PLAYER_POS, y: PLAYER_POS.y - 1})
        // SET_PLAYER_PATH([...PLAYER_PATH, {...PLAYER_POS, y: PLAYER_POS.y + 1}])
      } else if (boxY < PLAYER_POS.y) {
        pathArray.push({...PLAYER_POS, y: PLAYER_POS.y + 1})
        // SET_PLAYER_PATH([...PLAYER_PATH, {...PLAYER_POS, y: PLAYER_POS.y + 1}])
      } 
    }
    for(let i = X_DISTANCE; i > 0; i -= 1) {
      if (boxX > PLAYER_POS.X) {
        pathArray.push({...PLAYER_POS, x: PLAYER_POS.x + 1})
        // SET_PLAYER_PATH([...PLAYER_PATH, {...PLAYER_POS, x: PLAYER_POS.x + 1}])
      } else if (boxX < PLAYER_POS.x) {
        pathArray.push({...PLAYER_POS, x: PLAYER_POS.x - 1})
        // SET_PLAYER_PATH([...PLAYER_PATH, {...PLAYER_POS, x: PLAYER_POS.x - 1}])
      } 
    }
    SET_PLAYER_PATH(pathArray)
  }

  console.log(PLAYER_PATH)

  const mapGrid = [
    [
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 3, y: 1 },
      { x: 4, y: 1 },
      { x: 5, y: 1 },
      { x: 6, y: 1 },
      { x: 7, y: 1 },
      { x: 8, y: 1 },
      { x: 9, y: 1 },
      { x: 10, y: 1 },
    ],
    [
      { x: 1, y: 2 },
      { x: 2, y: 2 },
      { x: 3, y: 2 },
      { x: 4, y: 2 },
      { x: 5, y: 2 },
      { x: 6, y: 2 },
      { x: 7, y: 2 },
      { x: 8, y: 2 },
      { x: 9, y: 2 },
      { x: 10, y: 2 },
    ],
    [
      { x: 1, y: 3 },
      { x: 2, y: 3 },
      { x: 3, y: 3 },
      { x: 4, y: 3 },
      { x: 5, y: 3 },
      { x: 6, y: 3 },
      { x: 7, y: 3 },
      { x: 8, y: 3 },
      { x: 9, y: 3 },
      { x: 10, y: 3 },
    ],
    [
      { x: 1, y: 4 },
      { x: 2, y: 4 },
      { x: 3, y: 4 },
      { x: 4, y: 4 },
      { x: 5, y: 4 },
      { x: 6, y: 4 },
      { x: 7, y: 4 },
      { x: 8, y: 4 },
      { x: 9, y: 4 },
      { x: 10, y: 4 },
    ],
    [
      { x: 1, y: 5 },
      { x: 2, y: 5 },
      { x: 3, y: 5 },
      { x: 4, y: 5 },
      { x: 5, y: 5 },
      { x: 6, y: 5 },
      { x: 7, y: 5 },
      { x: 8, y: 5 },
      { x: 9, y: 5 },
      { x: 10, y: 5 },
    ],
    [
      { x: 1, y: 6 },
      { x: 2, y: 6 },
      { x: 3, y: 6 },
      { x: 4, y: 6 },
      { x: 5, y: 6 },
      { x: 6, y: 6 },
      { x: 7, y: 6 },
      { x: 8, y: 6 },
      { x: 9, y: 6 },
      { x: 10, y: 6 },
    ],
    [
      { x: 1, y: 7 },
      { x: 2, y: 7 },
      { x: 3, y: 7 },
      { x: 4, y: 7 },
      { x: 5, y: 7 },
      { x: 6, y: 7 },
      { x: 7, y: 7 },
      { x: 8, y: 7 },
      { x: 9, y: 7 },
      { x: 10, y: 7 },
    ],
    [
      { x: 1, y: 8 },
      { x: 2, y: 8 },
      { x: 3, y: 8 },
      { x: 4, y: 8 },
      { x: 5, y: 8 },
      { x: 6, y: 8 },
      { x: 7, y: 8 },
      { x: 8, y: 8 },
      { x: 9, y: 8 },
      { x: 10, y: 8 },
    ],
    [
      { x: 1, y: 9 },
      { x: 2, y: 9 },
      { x: 3, y: 9 },
      { x: 4, y: 9 },
      { x: 5, y: 9 },
      { x: 6, y: 9 },
      { x: 7, y: 9 },
      { x: 8, y: 9 },
      { x: 9, y: 9 },
      { x: 10, y: 9 },
    ],
    [
      { x: 1, y: 10 },
      { x: 2, y: 10 },
      { x: 3, y: 10 },
      { x: 4, y: 10 },
      { x: 5, y: 10 },
      { x: 6, y: 10 },
      { x: 7, y: 10 },
      { x: 8, y: 10 },
      { x: 9, y: 10 },
      { x: 10, y: 10 },
    ],
  ];
  return (
    <Wrapper>
      {mapGrid.map((row, idx) => {
        return (
          <div key={idx} style={{display:'flex'}}>
            {row.map((sq) => {
              if(sq.x === PLAYER_POS.x && sq.y === PLAYER_POS.y) {
                return (
                  <Player/>
                )
              } else if (PLAYER_PATH.includes(item => item === sq)){
                  return <Path/>
              }else {
                return (
                  <Box
                  key={Math.random() * 100000}
                  style={{ border: '1px solid black' }}
                  onClick = {() => SET_PLAYER_POS({x: sq.x, y: sq.y})}
                  onMouseEnter = {() => distance(sq.x, sq.y, PLAYER_POS)}
                  >
                  {sq.x},
                  {sq.y}
                </Box>
                )}
              ;
            })}
          </div>
        );
      })}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: auto;
  height: auto;
  position: absolute;
`;
const Box = styled.div`
  width: 50px;
  height: 50px;
  background-color: grey;
  border: 1px solid black;
  opacity: 0.5;
  :hover {
    border: 1px solid black;
    opacity: 0.8;
  }
`

const Player = styled.div`
  width: 50px;
  height: 50px;
  background-color: red;
  outline: 1px solid black;
  opacity: 0.8;
`;
const Path = styled.div`
  width: 50px;
  height: 50px;
  background-color: yellow;
  outline: 1px solid black;
  opacity: 0.8;
`;

export default EricTest;