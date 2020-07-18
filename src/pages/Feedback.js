import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GameHeader from '../components/GameHeader';

// this.valorResposta = this.valorResposta.bind(this);

const Feedback = ({ score, assertions }) => {
  const valorResposta = () => {
    let text = '';
    if (assertions < 3) text = 'Podia ser melhor...';
    if (assertions >= 3) text = 'Mandou bem!';
    return text;
  };

  return (
    <div>
      <GameHeader />
      <div data-testid="feedback-text">
        <h2>{valorResposta()}</h2>
      </div>
      <div>
        <span data-testid="feedback-total-question">{assertions} Acertos</span>
        <span data-testid="feedback-total-score">{score} Pontos</span>
      </div>
      <Link data-testid="btn-play-again" to="/">
        JOGAR NOVAMENTE
      </Link>
      <Link data-testid="btn-ranking" to="">
        Ver Ranking
      </Link>
    </div>
  );
};

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  if (state.data.receivedData) {
    return {
      score: state.trivia.score,
      assertions: state.trivia.assertions,
    };
  }
  return { receivedData: state.data.receivedData };
};

export default connect(mapStateToProps)(Feedback);
