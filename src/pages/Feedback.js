import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GameHeader from '../components/GameHeader';

// this.valorResposta = this.valorResposta.bind(this);
// valorResposta = () => {
//   if (valorResposta < 3) <h2>Podia ser melhor...</h2>
//   if (valorResposta >= 3) <h2>Mandou bem!</h2>
// }
const Feedback = ({ name }) => {
  return (
    <div>
      <GameHeader />
      <div data-testid="feedback-text">{/* this.valorResposta() */}</div>
      <div>
        <span data-testid="feedback-total-question">${} Acertos</span>
        <span data-testid="feedback-total-score">${} Pontos</span>
      </div>

      <Link data-testid="btn-play-again" to="/">
        JOGAR NOVAMENTE
      </Link>

      <Link data-testid="btn-ranking" to="">
        Ver Ranking
      </Link>
    </div>
)
}

const mapStateToProps = (state) => {
  if (state.login) {
    return {
      name: state.login.name,
    };
  }
};

export default connect(mapStateToProps)(Feedback);
