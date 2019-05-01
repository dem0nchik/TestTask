import React from 'react'
import {BrowserRouter as Router, Redirect} from 'react-router-dom'

class Login extends React.Component {
    state = {
      login: '',
      password: '',
      err: null,
    }
    changeHandler = (e) => {
      const {id, value} = e.currentTarget
      this.setState({ [id]: value})
    }
    validate = () => {
          const {login, password} = this.state
          if(login.trim() && password.length > 3)
              return false
          else
            return true
    }
    clickHandle = (e) => {
      const {password, login} = this.state
        localStorage.removeItem('isLogin')
      if(login === "admin" && +password === 12345) {
        localStorage.setItem('isLogin', true);
        this.setState({err: false})
      } else {
        e.preventDefault()
        this.setState({err: true})
      }
    }
    renderErr = () => {
    if (this.state.err)
      return <p>Имя пользователя или пароль введены не верно</p>
  	if(!this.state.err && this.state.err !== null)
  		return <Redirect to='/profile' />
  }
  render() {
    return(
      <div className="login">
        <form>
          <label>Введите логин<input
                          type="login"
                          name="login"
                          placeholder="login"
                          id="login"
                          onChange={this.changeHandler}/></label>
          <label>Введите пароль<input
                          type="password"
                          name="password"
                          placeholder="password"
                          id="password"
                          onChange={this.changeHandler}/></label>
          <button type="submit" disabled={this.validate()} onClick={this.clickHandle}>Отправить</button>
          {this.renderErr() || localStorage.getItem('isLogin') && <p>Перейдите в профиль</p>}
        </form>
      </div>
    )
  }
}

export default Login
