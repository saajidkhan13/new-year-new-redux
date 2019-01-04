import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

const MyInputs = props => (
  <div className="App">
    <h1 className="header">Your input:</h1>
    <input className="input" type='text' onChange={(event) => props.handleChange(event.target.value)} value={props.text} />
    <h1 className="header">Your output: <br />{props.text}</h1>
  </div>
)

class App extends Component {
  state = {
    text: ''
  }

  handleChange = (value) => {
    this.props.dispatch({
      type: "UPDATE_TERM", payload: value
    })
  }



  render() {
    console.log(this.props);
    return (
      <MyInputs handleChange={this.handleChange} text={this.props.text} dispatch={this.props.dispatch} />
    );
  }
}


const mapStateToProps = (state) => {
  console.log(state);
  return {
    text: state
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     dispatch: () => dispatch(//info)
//   }
// }

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default ConnectedApp;
