import { pick } from 'ramda'
import axios from 'axios'


export const REGISTER_START = "REGISTER_START"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAILURE = "REGISTER_FAILURE"

export const registerUser = (newUserCredentials, setRegistrationSuccess, history) => dispatch => {
    dispatch({ type: REGISTER_START })
    axios.post('https://gigapets-be.herokuapp.com/api/auth/register', 
                pick(['username', 'password'], newUserCredentials)
    )
    .then(res => {
        // notify user of success processing their input
        // TODO: dispatch username to the store
        dispatch({ 
            type: REGISTER_SUCCESS, 
            payload: pick(['id', 'username'], res.data) 
        })
        setRegistrationSuccess(true)
        setTimeout(() => history.push('/login'), 1000)
    })
    .catch(err => {
        dispatch({ type: REGISTER_FAILURE })
        console.error(err)
    })
}


export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const loginUser = (loginCredentials, setLoginSuccess, history) => dispatch => {
    dispatch({ type: LOGIN_START })
    axios.post('https://gigapets-be.herokuapp.com/api/auth/login', loginCredentials)
		.then(res => {
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.token})
            setLoginSuccess(true)
			localStorage.setItem('gigapet-auth-token', res.data.token)
			setTimeout(() => history.push('/dashboard'), 1500)
		})
		.catch(err => {
            dispatch({ type: LOGIN_FAILURE })
            console.error(err)
        })
}

export const SIGN_OUT = "SIGN_OUT"

export const signOut = () => dispatch => { 
    dispatch({ type: SIGN_OUT })
    localStorage.removeItem('gigapet-auth-token')
    // window.history.go('/login')
}