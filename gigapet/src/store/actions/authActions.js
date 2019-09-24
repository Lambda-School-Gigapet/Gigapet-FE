import { pick } from 'ramda'
import axios from 'axios'


export const REGISTER_START = "REGISTER_START"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAILURE = "REGISTER_FAILURE"

export const registerUser = (newUserCredentials, history) => dispatch => {
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
        history.push('/login')
    })
    .catch(err => {
        dispatch({ type: REGISTER_FAILURE })
        console.error(err)
    })
}