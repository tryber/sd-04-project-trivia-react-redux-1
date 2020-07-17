import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.valorResposta = this.valorResposta.bind(this);
  } 
  valorResposta = () => {
    if (valorResposta < 3) <h2>Podia ser melhor...</h2>
    if (valorResposta >= 3) <h2>Mandou bem!</h2>
  }
  render() {
    const { name } = this.props
    return (
      <div>
        <header>
          <div>
            <img data-testid='header-profile-picture' src="" alt="img jogador" />
          </div>
          <div>
            <span data-testid='header-player-name' >Jogador: {name}</span>
          </div>
          <div>
            <span data-testid='header-score' ></span>
          </div>
        </header>
        <div data-testid='feedback-text'>
          this.valorResposta()
        </div>
        <div>
          <span data-testid='feedback-total-question'>`${} Acertos`</span>
          <span data-testid='feedback-total-score'>`${} Pontos`</span>
        </div>

        <Link data-testid='btn-play-again' to='/'>JOGAR NOVAMENTE</Link>
        <Link data-testid='btn-ranking' to='' >Ver Ranking</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  name: state.reducer.login.name
}

export default connect(mapStateToProps)(Feedback);
