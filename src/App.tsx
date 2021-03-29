import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

interface AppProps {
  appname: string;
  message?: string;
}
class App extends Component<AppProps> {
constructor(props:AppProps) {
    super(props);
    this.state = {};
  }
  render() {
      const { appname, message } = this.props;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {appname} {message}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );}
}

export default App;
