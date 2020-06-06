import React, { Component } from 'react';
import logo from './logo.svg';
import CardList from './components/card-list/card-list.component';
import './components/card-list/card-list.component.css'
import './App.css';

import SearchBox from './components/search-box/search-box.component'

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters : [],
      searchfield : ''
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({ 
      monsters: users
     }))
  }
  
  render() {
    
    const { monsters, searchfield } = this.state;
    const filteredmonsters = monsters.filter(i => i.name.toLowerCase().includes(searchfield.toLowerCase()));
   
    

    return (
    <div className="App">
      <h1> Monsters Rolodex </h1>
      <SearchBox placeholder={"Search monsters..."} changestate={val => {
        this.setState({searchfield: val})
      }} />
      
    <CardList monsters={filteredmonsters} />

    
    </div>);
  }
}
export default App;
