import React, { Component } from 'react';
import DogList from './DogList';
import DogDetails from './DogDetails';
import Navbar from './Navbar';
import { Switch, Route } from 'react-router-dom';
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
    let getDog = props => {
      let name = props.match.params.name;
      let currentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
      )
      return <DogDetails {...props} dog={currentDog} />
    }
    return (
      <div>
        <Navbar dogs={this.props.dogs}/>
        <Switch>
          <Route exact path='/dogs' render={() => <DogList dogs={this.props.dogs} />} />
          <Route exact path='/dogs/:name' render={getDog} />
        </Switch>
      </div>
    )
  }
}

export default App;
