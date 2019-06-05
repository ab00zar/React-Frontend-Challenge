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

  removeComment = index => {
    const { comments } = this.state;

    this.setState({
        comments: comments.filter((comment, i) => { 
            return i !== index;
        })
    });
  }

  render(){
    const { comments } = this.state;

    return (
      <div className="App col-md-4 offset-md-4">
        <Header />
        <Comments commentData={comments} removeComment={this.removeComment} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }

}

export default App;
