import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './trivia.png';
import './App.css';
import Configuracao from './pages/Configuracao';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import Feedback from './pages/Feedback';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/configucao" component={Configuracao} />
          <Route path="/gamePage" component={GamePage} />
          <Route path="/feedback" component={Feedback} />
          {/* <Route path="/ranking" component={Ranking} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}
