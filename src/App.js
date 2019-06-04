import React, { Component } from 'react';
import './App.css';
import Comments from './Comments'
import Form from './Form'
import Header from './Header'

class App extends Component {
  state = {
    comments: [],
  }

  handleSubmit = comment => {
    this.setState({ comments: [...this.state.comments, comment] })
  }

  render(){
    const { comments } = this.state;

    return (
      <div className="App">
        <Header />
        <Comments commentData={comments} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }

}

export default App;
