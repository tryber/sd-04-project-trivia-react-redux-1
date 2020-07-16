import React from 'react';
import { connect } from 'react-redux';
import { getLogin, fetchData } from '../redux/actions/index';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gravatarEmail: '',
    }

    this.handleEmail = this.handleEmail.bind(this);
    this.handleNome = this.handleNome.bind(this);
  }

  handleEmail = (event) => {
    this.setState({
      gravatarEmail: event.target.value,
    });
  };

  handleNome = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    const { getLogin1, fetchData1 } = this.props;
    return (
      <form>
        <div>
          <label>
            Email do Gravatar:
            <input
              value={this.state.gravatarEmail}
              onChange={this.handleEmail}
              type="email"
              data-testid="input-gravatar-email"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Nome do Jogador:
            <input
              value={this.state.name}
              onChange={this.handleNome}
              type="text"
              data-testid="input-player-name"
              required
            />
          </label>
        </div>
        <div>
          <button
            data-testid="btn-play"
            onClick={(event) => {event.preventDefault()
              getLogin1(this.state.gravatarEmail, this.state.name)
              fetchData1()}}
          >
            JOGAR!
          </button>
        </div>
        <div>
          <button data-testid="btn-settings">Cofigurações</button>
        </div>
      </form>
    );
  }
}

const maDispacthToProps = (dispatch) => ({
  getLogin1: (email, name) => dispatch(getLogin(email, name)),
  fetchData1: () => dispatch(fetchData()),
});


export default connect(null, maDispacthToProps)(HomePage);
