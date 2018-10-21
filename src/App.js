import React, { Component } from 'react';
import WebFrame from './pagedraw/webframe';
import './App.css';

class App extends Component {
  // components constructor
  constructor(props){
    
    // required call to super
    super(props);

    // initial state
    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <div className="App">
        <WebFrame
          text = {this.state.text}
          onClick={this.onClick.bind(this)}
          />
      </div>
    );
  }

  onClick(){
    alert("Hello there");

    this.setState({
      text: "$40.00"
    });
  }
}

export default App;
