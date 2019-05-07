const initialState = {
  loggined: false
}

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOG_IN':
      localStorage.setItem('isLogin', true);
      return {...state, loggined: true}

    default:
      return state
  }
}
