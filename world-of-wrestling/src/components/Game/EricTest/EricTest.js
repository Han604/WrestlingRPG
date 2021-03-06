import React from 'react';
import styled from 'styled-components';
const EricTest = () => {
  const [PLAYER_POS, SET_PLAYER_POS] = React.useState({x:1, y:1})
  const [PLAYER_PATH, SET_PLAYER_PATH] = React.useState([])
  const [OBSTRUCTIONS, SET_OBSTRUCTIONS] = React.useState([{x:4, y:4, obstacle:'rock'},{x:4, y:5, obstacle:'rock'}])

  const movePlayer = (boxX, boxY) => {
    SET_PLAYER_POS({x: boxX, y: boxY});
    SET_PLAYER_PATH([])
  }

  const distance = (boxX, boxY, PLAYER_POS) => {
    const pathArray = []
    const {x, y} = PLAYER_POS;
    const X_DISTANCE = Math.abs(boxX - x);
    const Y_DISTANCE = Math.abs(boxY - y);
    let incrementerY = 1;
    let deincrementerY = 1;
    let incrementerX = 1;
    let deincrementerX = 1;
    console.log(PLAYER_POS.y, 'player pos y')
    console.log(X_DISTANCE + Y_DISTANCE, 'total-distance')
    console.log(X_DISTANCE, 'x distance')
    console.log(Y_DISTANCE, 'y distance')
    for(let i = Y_DISTANCE; i > 0; i -= 1) {
      if (boxY > PLAYER_POS.y) {
        const nextPath = {...PLAYER_POS, y: PLAYER_POS.y + incrementerY}
        if (OBSTRUCTIONS.find(obj => obj.x === nextPath.x && obj.y === nextPath.y)) {
          console.log('obstructed')
        }
        pathArray.push({...PLAYER_POS, y: PLAYER_POS.y + incrementerY})
        incrementerY += 1;

      } else if (boxY < PLAYER_POS.y) {
        pathArray.push({...PLAYER_POS, y: PLAYER_POS.y - deincrementerY})
        deincrementerY += 1
      } 
    }
    if(pathArray[Y_DISTANCE - 1] === undefined) {
      for(let i = X_DISTANCE; i > 0; i -= 1) {
        if (boxX > PLAYER_POS.x) {
          pathArray.push({...PLAYER_POS, x: PLAYER_POS.x + incrementerX})
          incrementerX += 1;
          
        } else if (boxX < PLAYER_POS.x) {
          pathArray.push({...PLAYER_POS, x: PLAYER_POS.x - deincrementerX})
          deincrementerX += 1
        }}
      } else {
      let tempY = pathArray[Y_DISTANCE -1].y;
      for(let i = X_DISTANCE; i > 0; i -= 1) {
        if (boxX > PLAYER_POS.x) {
          pathArray.push({y:tempY, x: PLAYER_POS.x + incrementerX})
          incrementerX += 1;
  
        } else if (boxX < PLAYER_POS.x) {
          pathArray.push({y:tempY, x: PLAYER_POS.x - deincrementerX})
          deincrementerX += 1
        } 
      }
    }
    SET_PLAYER_PATH(pathArray)
  }

  const width = 10;
  const height = 10;
  let mapGrid = [];
  for (let y = 1; y <= height; y++) {
    mapGrid.push([]);
    for (let x = 1; x <= width; x++) {
      mapGrid[y - 1].push({ y: y, x: x, obst: 0 });
    }
  }
  
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
              } else if (PLAYER_PATH.find(item => item.x === sq.x && item.y === sq.y)){
                return <Path 
                  onMouseEnter ={() => distance(sq.x, sq.y, PLAYER_POS)}
                  onClick = {() => movePlayer(sq.x, sq.y)}
                  >
                  {sq.x},{sq.y}
                </Path>
              } else if (OBSTRUCTIONS.find(obs => sq.x === obs.x && sq.y === obs.y)){
                return (
                  <Box>{OBSTRUCTIONS.find(obs => sq.x === obs.x && sq.y === obs.y).obstacle}</Box>
                )
              } else {
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