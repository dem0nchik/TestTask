import {combineReducers} from 'redux'
import {newsReducer} from './news'
import {loginReducer} from './login'

export const rootReducer = combineReducers({
  news: newsReducer,
  login: loginReducer,
})
