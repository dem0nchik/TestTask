import React from 'react'
<<<<<<< HEAD
import { BrowserRouter as Router, Link } from "react-router-dom";

class Navbar extends React.Component {

=======
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navbar extends React.Component {
>>>>>>> ab7c196b2ffcb843e0da905f3833d1da89e12ea5
  isLogin = () => {
    if(localStorage.getItem('isLogin'))
      return "/profile/"
    else {
        return "/login/"
      }
  }
  render() {
    return (
      <header className="App-header">
          <ul>
            <li>
<<<<<<< HEAD
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/news/">Новости</Link>
            </li>
            <li>
              <Link to={this.isLogin()} >Профиль</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link to="/login" >Войти</Link>
=======
              <a href="/">Главная</a>
            </li>
            <li>
              <a href="/news/">Новости</a>
            </li>
            <li>
              <a href={this.isLogin()} >Профиль</a>
>>>>>>> ab7c196b2ffcb843e0da905f3833d1da89e12ea5
            </li>
          </ul>
      </header>
    )
  }
}

export default Navbar
