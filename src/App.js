import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './trivia.png';
import './App.css';
import Home from './pages/Home';

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
          <Route exact path="/" component={Home} />
          {/* <Route path="/gamePage" component={GamePage} />
          <Route path="feedback" component={Feedback} />
          <Route path="configucao" component={Config} />
          <Route path="ranking" component={Ranking} /> */}
        </Switch>
      
      </BrowserRouter>
    );
  }
}
