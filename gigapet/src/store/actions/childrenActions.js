import axios from 'axios'
import axiosWithAuth from '../../utils/axiosWithAuth'

export const ADD_NEW_CHILD_START = "ADD_NEW_CHILD_START"
export const ADD_NEW_CHILD_SUCCESS = "ADD_NEW_CHILD_SUCCESS"
export const ADD_NEW_CHILD_FAILURE = "ADD_NEW_CHILD_FAILURE"

export const addNewChild = child => (dispatch, getState) => {
    dispatch({ type: ADD_NEW_CHILD_START })

    const { user: { id } } = getState()
    axiosWithAuth().post(`/${id}/new-kid`, child)
    .then(res => {
        dispatch({ type: ADD_NEW_CHILD_SUCCESS, payload: res.data[0] })
        console.log(res)
    })
    .catch(err => {
        dispatch({ type: ADD_NEW_CHILD_FAILURE })
        console.error(err)
    })

}