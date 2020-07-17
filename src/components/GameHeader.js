import React from 'react';
import { connect } from 'react-redux';
import { shuffleAnswers } from '../service';

const GameHeader = (props) => (
  <header>
    <div>
      <img data-testid="header-profile-picture" src="" alt="img jogador" />
    </div>
    <div>
      <span data-testid="header-player-name">Jogador1: {name}</span>
    </div>
    <div>
      <span data-testid="header-score"></span>
    </div>
  </header>
);

const mapStateToProps = (state) {
  
}

export default connect()(GameHeader)