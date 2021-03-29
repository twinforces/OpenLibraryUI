import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookDisplay from './components/BookDisplay'

interface AppProps {
  appname: string;
  message?: string;
}
class App extends Component<AppProps> {
constructor(props:AppProps) {
    super(props);
    this.state = {books:[]};
  }

/** internal method to render the book list*/
 renderBookList() {
 /** simple internal stateless component declared on the fly*/
  let BookRender = (book) => { return (<BookDisplay book={book} />)};
  result = this.state.books.map( (book) => (<BookRender book = {book}>);
  return result;
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
        {this.renderBookList())}
      </header>
    </div>
  );}
}

export default App;
