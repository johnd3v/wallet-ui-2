import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Dashboard from '../src/views/Dashboard/dashboard'; 
import LineGraph from '../src/views/Charts/LineGraph/line-graph';
class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Route path="/" exact render={ () =>{
                return (<Dashboard/>);
            }}/>
            <Route path="/dashboard" exact render={() =>{
              return (<Dashboard/>);
            }}/>
             <Route path="/graph" exact render={() =>{
              return (<LineGraph/>);
            }}/>
          </div>
        </Router>
   
    );
  }
}

export default App;
