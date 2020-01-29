import createDataContext from "./createDataContext";
import {AsyncStorage} from 'react-native'
import trackerApi from '../api/tracker'
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ERROR':
      return {...state, errorMessage: action.payload}
    case 'SIGNUP':
    case 'SIGNIN':
      return {...state, token: action.payload, errorMessage: null}
    case 'CLEAN_ERROR_MESSAGE':
      return {...state, errorMessage: null }
    case 'SIGNOUT':
      return {...state, errorMessage: null, token: null}
    default:
      return state
  }
}

const signup = (dispatch) => {
  return  async ({email, password}) => {
    try {
      const res = await trackerApi.post('/signup', { email, password })
      await AsyncStorage.setItem('token', res.data.token)
      dispatch({ type: 'SIGNUP', payload: res.data.token })
      navigate('mainFlow')
    } catch (error) {
      dispatch({type: 'ADD_ERROR', payload: error.response.data})
      console.log(error.response.data)
    }
  }
}

const signin = (dispatch) => {
  return async ({email, password}) => {
    try {
      const res = await trackerApi.post('/signin', { email, password })
      await AsyncStorage.setItem('token', res.data.token)
      dispatch({ type: 'SIGNIN', payload: res.data.token })
      navigate('mainFlow')
    } catch (error) {
      dispatch({ type: 'ADD_ERROR', payload: 'something went wrong' })
      console.log(error.response.data)
    }
  }
}

const tryLocalSignIn = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token')
  if(token) {
    dispatch({ type: 'SIGNIN', payload: token})
    navigate('mainFlow')
  } else {
    navigate('Signup')
  }
}

const cleanErrorMessage = (dispatch) => () => {
  dispatch({type: 'CLEAN_ERROR_MESSAGE'})
}  

const signout = (dispatch) => {
  return async () => {
    console.log('jeje')
    await AsyncStorage.removeItem('token')
    dispatch({ type: 'SIGNOUT'})
    navigate('loginFlow')
  }
}



export const {Context, Provider} = createDataContext(
  authReducer,
  { signin, signup, signout, cleanErrorMessage, tryLocalSignIn },
  {
    token: null,
    errorMessage: null,
  }
) 