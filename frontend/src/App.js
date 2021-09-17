import './App.css';
import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Sensor from './component/Sensor';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import CreateSensor from './component/CreateSensor';
function App() {

  // Level 2 is done
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" component={Sensor} exact/>
          <Route path="/add_new_sensor" component={CreateSensor}/>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
