import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navbar extends React.Component {
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
              <a href="/">Главная</a>
            </li>
            <li>
              <a href="/news/">Новости</a>
            </li>
            <li>
              <a href={this.isLogin()} >Профиль</a>
            </li>
          </ul>
      </header>
    )
  }
}

export default Navbar
