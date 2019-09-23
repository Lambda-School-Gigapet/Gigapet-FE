import React, { useState } from "react"
import axios from 'axios'
import { compose, map, split, trim } from 'ramda'

import useForm from '../../hooks/useForm'

export default function Login(props) {
  const initialStateCredentials = {
    name: '',
    children: '',
    email: '',
    password: '',
    cPassword: '',
  }

  const initialStateErrors = {
    name: null,
    children: null,
    email: null,
    password: null,
    cPassword: null
  }

  const validateInputs = (inputs) => {
    const { name, children, email, password, cPassword } = inputs

    if (!name) setError({...errors, name: 'You must enter a name.'})
    if (!children.length) setError({...errors, children: 'You must enter at least one child.'})
    if (!email || !email.includes('@') || !email.includes('.')) setError({...errors, email: 'You must enter a valid email address.'})
    if (!password) setError({...errors, password: 'You must enter a password.'}) 
    if (password.length < 6) setError({...errors, password: 'Your password must be at least 6 characters.'})
    if (password !== cPassword) setError({...errors, password: 'Passwords must match.', cPassword: 'Passwords must match.'})
  }

  const handleSubmitCb = newUserCredentials => {
    // display any potential errors 
    validateInputs(newUserCredentials)

    const { name, children, email, password, cPassword } = newUserCredentials
    if (name &&
        children.length &&
        email &&
        password &&
        cPassword &&
        password === cPassword
    ) {
        // remove any errors that are rendered to the screen
        setError(initialStateErrors)

        const splitOnCommasAndTrim = compose(map(trim), split(','))
        const convertChildrenInputToArray = map(([k,v]) => {
            if (k === 'children') {
                return [k, splitOnCommasAndTrim(v)]
            } else {
                return [k, v]
            }
        })
        const newUserCredsWithChildrenInArray = 
            compose(
                Object.fromEntries, 
                convertChildrenInputToArray,
                Object.entries
            )(newUserCredentials)

        // submit credenitals to the server
        // TODO: change post url to that of the deployed backend 
        axios.post('http://localhost:5000/api/register', newUserCredsWithChildrenInArray)
        .then(res => {
          // TODO: make newUserCredentials globally available via context
          props.history.push('/login')
        })
        .catch(console.error)
    } 
  }
  
  const [newUserCredentials, handleChanges, handleSubmit] = useForm(initialStateCredentials, handleSubmitCb)
  const [errors, setError] = useState(initialStateErrors)
  
  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        {errors.name && <Error message={errors.name} />}
        <label>
            Name: 
            <input 
                name="name" 
                type="text"
                placeholder="enter your full name"
                value={newUserCredentials.name}
                onChange={handleChanges}
            />
        </label>

        {errors.children && <Error message={errors.children}/>}
        <label>
            Children: 
            <input 
                name="children" 
                type="text"
                placeholder="enter your children's names, separated by comma"
                value={newUserCredentials.children}
                onChange={handleChanges}
            />
        </label>

        {errors.email && <Error message={errors.email}/>}
        <label>
            Email: 
            <input 
                name="email" 
                type="email"
                placeholder="someone@example.com"
                value={newUserCredentials.email}
                onChange={handleChanges}
            />
        </label>

        {errors.password && <Error message={errors.password} />}
        <label>
            Password:
            <input 
                name="password" 
                type="password"
                placeholder="must be at least 6 characters"
                value={newUserCredentials.password}
                onChange={handleChanges}
            />
        </label>

        {errors.cPassword && <Error message={errors.cPassword} /> }
        <label>
            Confirm Password:
            <input 
                name="cPassword" 
                type="password"
                placeholder="confirm password"
                value={newUserCredentials.cPassword}
                onChange={handleChanges}
            />
        </label>

        <button type="submit">Login</button>
      </form>
    </>
  )
}

function Error({message}) {
    return <p style={{color: "red"}}>{message}</p>
}
