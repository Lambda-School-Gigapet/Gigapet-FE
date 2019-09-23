import { useState } from 'react'

export default function useForm(initialState={}, handleSubmitCb=(e)=>{}) {
    const [state, setState] = useState(initialState)

    const handleChanges = event => {
        setState({...state, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault()
        handleSubmitCb(state)
    }

    return [state, handleChanges, handleSubmit]
}