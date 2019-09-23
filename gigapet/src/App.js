// npm packages
import React from 'react'
import { Route } from 'react-router-dom'
// Styles 
import './App.css'
// Components
import RegisterForm from './components/Forms/Register'
import LoginForm from './components/Forms/Login'
import Dashboard from './components/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
	return (
		<div className="App">
			<h2>Gigapet</h2>
			{/* TODO: render naviagtion and footer components  */}
			<Route exact path="/" component={LoginForm} />
			<Route path="/login" component={LoginForm} />
			<Route path="/register" component={RegisterForm} />
			<ProtectedRoute path="/dashboard" component={Dashboard}/>
		</div>
	)
}


