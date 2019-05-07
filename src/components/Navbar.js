import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";

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
            </li>
          </ul>
      </header>
    )
  }
}

export default Navbar
