import React, { useState } from "react"
import { Link } from 'react-router-dom'
import { Form, Button, Message } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'

import useForm from '../../hooks/useForm'
import { Container, Underlined, P } from './Login'
import { registerUser } from '../../store/actions'

export default function Login(props) {
    const dispatch = useDispatch()

    const initialStateCredentials = {
        email: '',
        username: '',
        password: '',
        cPassword: '',
    }

    const initialStateErrors = {
        email: null,
        username: null,
        password: null,
        cPassword: null
    }

    const validateInputs = (inputs) => {
        const { email, username, password, cPassword } = inputs

        if (!email) setError({...errors, email: 'You must enter an email address.'})
        if (!username) setError({...errors, username: 'You must enter a username.'})
        if (!password) setError({...errors, password: 'You must enter a password.'}) 
        if (password.length < 6) setError({...errors, password: 'Your password must be at least 6 characters.'})
        if (password !== cPassword) setError({...errors, cPassword: 'Passwords must match.'})
    }

    const handleSubmitCb = newUserCredentials => {
        // display any potential errors 
        validateInputs(newUserCredentials)

        const { username, password, cPassword } = newUserCredentials
        // I'm purposefully not requiring the email from the user since they only need 
        // a username/password to login
        if (username &&
            password &&
            password.length >=6 && 
            password === cPassword
        ) {
            // remove any errors that are rendered to the screen
            setError(initialStateErrors)

            // submit credenitals to the server
            // TODO: change post url to that of the deployed backend 
            dispatch(registerUser(newUserCredentials, props.history))
        } 
    }
  
    const [newUserCredentials, handleChanges, handleSubmit] = useForm(initialStateCredentials, handleSubmitCb)
    const [errors, setError] = useState(initialStateErrors)

    return (
        <Container>
            <h2>Register</h2>

            <Form error onSubmit={handleSubmit}>
                <Form.Field required>
                    <label>Email</label>
                    {errors.email && <Error message={errors.email} />}
                    <input 
                        name="email" 
                        type="email"
                        placeholder="enter your email"
                        value={newUserCredentials.email}
                        onChange={handleChanges}
                    />
                </Form.Field>

                <Form.Field required>
                    <label>Username</label>
                    {errors.username && <Error message={errors.username} />}
                    <input 
                        name="username" 
                        type="text"
                        placeholder="enter your username"
                        value={newUserCredentials.username}
                        onChange={handleChanges}
                    />
                </Form.Field>

                <Form.Field required>
                    <label>Password</label>
                    {errors.password && <Error message={errors.password} />}
                    <input 
                        name="password" 
                        type="password"
                        placeholder="must be at least 6 characters"
                        value={newUserCredentials.password}
                        onChange={handleChanges}
                    />
                </Form.Field>

                <Form.Field required>
                    <label>Confirm Password</label>
                    {errors.cPassword && <Error message={errors.cPassword} /> }
                    <input 
                        name="cPassword" 
                        type="password"
                        placeholder="confirm password"
                        value={newUserCredentials.cPassword}
                        onChange={handleChanges}
                    />
                </Form.Field>

                <Button type="submit">Login</Button>
            </Form>
        
            <P><strong>Already a user?</strong> <Link to="/login"><Underlined>Login</Underlined></Link></P>
        </Container>
    )
}

function Error({message}) {
    return <Message error content={message}></Message>
}
