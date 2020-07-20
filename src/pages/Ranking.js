import React from 'react';
import HomePage from './HomePage'
import { Link } from 'react-router-dom';
import GameHeader from '../components/GameHeader'

const Ranking = ({ name, score }) => {

  const players = {};
  
  state.reduce((players, element => {return players + element}).sort((a, b) => {return b - a}));

  return ( 
    <div className="App">
      <GameHeader />
      <div className="">
      <img
        data-testid="header-profile-picture"
        src={`https://www.gravatar.com/avatar/${md5(props.email).toString()}`}
        alt="img jogador"
      />
      <h2 data-testid="player-name-${index}"> {name} - </h2>
      <h2 data-testid="player-score-${index}"> {score} pontos </h2>
      </div>
      <Link data-testid="btn-go-home" to="/HomePage">Go home</Link>
      <Button onClick = {() => {HomePage}} data-testid="btn-go-home">Go home</Button>
    </div>
  )
}

export default Ranking;