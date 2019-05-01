import React from 'react';
import Navbar from './components/Navbar'
import News from './components/News'
import Profile from './components/Profile'
import Login from './components/Login'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
         <Navbar />
         <Route path='/news' component={News}/>
         <Route path='/profile' component={Profile}/>
         <Route path='/login' component={Login}/>
      </div>
    </Router>
  );
}

export default App;
