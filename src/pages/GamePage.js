import React from 'react';
import { connect } from 'react-redux';
import { shuffleAnswers } from '../service';
import GameHeader from '../components/GameHeader';
import GameQuestions from '../components/GameQuestions';

const GamePage = () => (
  <div>
    <GameHeader />
    <GameQuestions />
  </div>
);

export default GamePage;
