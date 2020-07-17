import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLogin, fetchData } from '../redux/actions/index';
import { getToken } from '../service';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gravatarEmail: '',
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handleNome = this.handleNome.bind(this);
    this.storeToken = this.storeToken.bind(this);
  }

  storeToken = () =>
    getToken().then((token) => {
      console.log('homepage', token);
      this.props.fetchData1(token);
      localStorage.setItem('token', token);
    });

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
    const { getLogin1 } = this.props;
    return (
      <form>
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
        <Link to="/gamePage">
          <button
            disabled={!this.state.gravatarEmail || !this.state.name}
            id="btn-play"
            data-testid="btn-play"
            onClick={() => {
              getLogin1(this.state.gravatarEmail, this.state.name);
              this.storeToken();
            }}
          >
            JOGAR!
          </button>
        </Link>
        <Link to="/configucao" data-testid="btn-settings">
          Cofigurações
        </Link>
      </form>
    );
  }
}

const maDispacthToProps = (dispatch) => ({
  getLogin1: (email, name) => dispatch(getLogin(email, name)),
  fetchData1: (token) => dispatch(fetchData(token)),
});

export default connect(null, maDispacthToProps)(HomePage);
