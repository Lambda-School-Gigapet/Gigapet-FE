import React from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Form, Button } from 'semantic-ui-react'
import styled from 'styled-components'

import useForm from '../../hooks/useForm'


const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Underlined = styled.span`
	text-decoration: underline
`	

const P = styled.p`
	margin: 1rem 0;
`


export default function Login(props) {
	// TODO: default the email value based on credentials stored on global context object 
  	const initialState = {
		username: '',
		password: ''
	}

	const handleSubmitCb = loginCredentials => {
		// TODO: change post url to that of the deployed backend 
		axios.post('http://localhost:5000/api/login', loginCredentials)
		.then(res => {
			localStorage.setItem('gigapet-auth-token', res.data.payload)
			props.history.push('/dashboard')
		})
		.catch(console.error)
	}
  
	const [loginCredentials, handleChanges, handleSubmit] = useForm(initialState, handleSubmitCb)
  
	return (
		<Container>
			<h2>Login</h2>
			<Form onSubmit={handleSubmit}>
				<Form.Field>
					<label>Username</label>
					<input
						name="username" 
						type="text"
						placeholder="enter your username"
						value={loginCredentials.username}
						onChange={handleChanges}
					/>
				</Form.Field>
				
				<Form.Field>
					<label>Password</label>
					<input 
						name="password" 
						type="password"
						placeholder="enter your password"
						value={loginCredentials.password}
						onChange={handleChanges}
					/>
				</Form.Field>
				<Button type="submit">Login</Button>
			</Form>

			<P>
				<strong>Not a user?</strong> <Link to="/register"><Underlined>Register now.</Underlined></Link>
			</P>
		</Container>
	)
}

	