import React from 'react'
<<<<<<< HEAD
=======
import {BrowserRouter as Router, Redirect} from 'react-router-dom'
>>>>>>> ab7c196b2ffcb843e0da905f3833d1da89e12ea5

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
<<<<<<< HEAD
          if(login.trim() && password.trim())
=======
          if(login.trim() && password.length > 3)
>>>>>>> ab7c196b2ffcb843e0da905f3833d1da89e12ea5
              return false
          else
            return true
    }
    clickHandle = (e) => {
      const {password, login} = this.state
<<<<<<< HEAD
      e.preventDefault()

      if(login === "Admin" && password === "12345") {
        this.setState({err: false})
        this.props.logIn()  //action в редакс
      } else {
        this.setState({err: true})
      }
    }

    renderErr = () => {
    if (this.state.err)
      return <p>Имя пользователя или пароль введены не верно</p>
  }

=======
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
>>>>>>> ab7c196b2ffcb843e0da905f3833d1da89e12ea5
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
<<<<<<< HEAD
          {this.renderErr() || (localStorage.getItem('isLogin') && <p>Перейдите в профиль</p>)}

=======
          {this.renderErr() || localStorage.getItem('isLogin') && <p>Перейдите в профиль</p>}
>>>>>>> ab7c196b2ffcb843e0da905f3833d1da89e12ea5
        </form>
      </div>
    )
  }
}

export default Login
