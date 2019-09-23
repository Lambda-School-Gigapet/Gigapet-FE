import React from "react"
import axios from 'axios'

import useForm from '../../hooks/useForm'

export default function Login(props) {
	// TODO: default the email value based on credentials stored on global context object 
  	const initialState = {
		email: '',
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
		<>
		<h2>Login</h2>
		<form onSubmit={handleSubmit}>
			<label>
				Email: 
				<input 
					name="email" 
					type="email"
					placeholder="someone@example.com"
					value={loginCredentials.email}
					onChange={handleChanges}
				/>
			</label>

			<label>
				Password:
				<input 
					name="password" 
					type="password"
					placeholder="enter your password"
					value={loginCredentials.password}
					onChange={handleChanges}
				/>
			</label>

			<button type="submit">Login</button>
		</form>
		</>
	)
}

	