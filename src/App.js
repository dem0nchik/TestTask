import React from 'react';
import Navbar from './components/Navbar'
import News from './components/News'
import Profile from './components/Profile'
import Login from './components/Login'
<<<<<<< HEAD
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {logIn} from './actions/LoginAction'

class App extends React.Component {
  render() {
    const { news, loggined} = this.props
    return (
      <Router>
        <div className="App">
           <Navbar />
           <Route path='/news' component={() => <News news={news.news} />} />
           <Route path='/profile' component={Profile}/>
           <Route path='/login' component={() => <Login logIn={loggined} />} />
        </div>
      </Router>
    )
  }
}

const mapStateToProps = store => {
  return {
    news: store.news,
    login: store.login,
  }
}

const mapDispatchToProps = dispatch => ({
    loggined: () => dispatch(logIn())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
=======
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
>>>>>>> ab7c196b2ffcb843e0da905f3833d1da89e12ea5
