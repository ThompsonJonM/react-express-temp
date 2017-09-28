// Dependencies
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// Components
import AddStudent from './components/AddStudent';
import ViewStudents from './components/ViewStudents';

// Style
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Student Roster</h2>
        </div>

        <Router>
          <div>
            <Link to='/add'> Add New Student </ Link>
            <Link to='/view'> View All Students </ Link>

            <hr />

            <Route exact path='/add' component={ AddStudent }/>
            <Route exact path='/view' component={ ViewStudents }/>
          </ div>
        </ Router>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
      </div>
    );
  }
}

export default App;
