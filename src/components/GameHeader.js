import React from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';

const GameHeader = (props) => (
  <header>
    <div>
      <img
        data-testid="header-profile-picture"
        src={`https://www.gravatar.com/avatar/${md5(props.email).toString()}`}
        alt="img jogador"
      />
    </div>
    <div>
      <span data-testid="header-player-name">Jogador1: {props.name}</span>
    </div>
    <div>
      <span data-testid="header-score">{props.score}</span>
    </div>
  </header>
);

const mapStateToProps = (state) => ({
  email: state.login.gravatarEmail,
  name: state.login.name,
  score: state.trivia.score,
});

export default connect(mapStateToProps)(GameHeader);
