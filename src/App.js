import React, { Component } from 'react';
import './App.css';
import Comments from './Comments'

class App extends Component {
  render(){
    const comments = [
      {
        name: 'Charlie',
        comment: 'sample comment text 1',
      },
      {
        name: 'Mac',
        comment: 'sample comment text 2',
      },
      {
        name: 'Dee',
        comment: 'sample comment text 3',
      },
      {
        name: 'Dennis',
        comment: 'sample comment text 4',
      },
    ]

    return (
      <div className="App">
        <Comments commentData={comments} />
      </div>
    );
  }

}

export default App;
