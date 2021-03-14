import React, { Component } from 'react';
import Routes from './Routes';
import Navbar from './Navbar';
import './App.css';
import whiskey from './images/whiskey.jpg'
import hazel from './images/hazel.jpg';
import tubby from './images/tubby.jpg';

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: 'Whiskey',
        age: 5,
        src: whiskey,
        facts: [
          'Whiskey love eating popcorn.',
          'Whiskey is a terrible guard dog.',
          'Whiskey wants to cuddle with you!'
        ]
      },
      {
        name: 'Hazel',
        age: 3,
        src: hazel,
        facts: [
          'Hazel has sooo much energy!',
          'Hazel is highly intelligent.',
          'Hazel loves people more than dogs.'
        ]
      },
      {
        name: 'Tubby',
        age: 4,
        src: tubby,
        facts: [
          'Tubby is not the brightest dog.',
          'Tubby doesnt like walks or exercises.',
          'Tubby loves eating food!'
        ]
      }
    ]
  }
  render() {

    return (
      <div>
        <Navbar dogs={this.props.dogs} />
        <div className="container">
          <Routes dogs={this.props.dogs} />
        </div>
      </div>
    )
  }
}

export default App;
