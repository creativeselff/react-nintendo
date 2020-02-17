import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Image from './Image';
import Toggle from './Toggle';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
     user: 'Mario',
     show: true
    };
  }


  render() {

    const changeUser = e => this.setState({user: e.target.value});
    
    const changeSom = e => this.setState({ user: e.target.value })

    return (
      <div>
       <label>
       <h2>Choose one Hero:</h2>
       <select value = {this.state.user} 
       onChange = {changeUser}>
       <option value="Mario">Mario</option>
       <option value="Luigi">Luigi</option>
       <option value="Princess">Princess</option> 
       </select>
       </label>
       <h1>Hello I'm {this.state.user}, and I like to change the world</h1>
      
      <Hello user={this.state.user}/>
     
     <Toggle />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

//{ARREGLAR EL HIDE DE LA IMG, VER SETSTATE O ESTA URL:https://stackoverflow.com/questions/24502898/show-or-hide-element-in-react }
