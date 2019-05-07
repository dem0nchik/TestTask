import React from 'react'

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
          if(login.trim() && password.trim())
              return false
          else
            return true
    }
    clickHandle = (e) => {
      const {password, login} = this.state
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
          {this.renderErr() || (localStorage.getItem('isLogin') && <p>Перейдите в профиль</p>)}

        </form>
      </div>
    )
  }
}

export default Login
