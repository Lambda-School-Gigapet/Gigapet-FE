// npm packages
import React from 'react'
import { Route } from 'react-router-dom'
// Styles 
import './App.css'
// Components
import Navigation from'./components/Layout/Navigation'
import Footer from './components/Layout/Footer'
import Dashboard from './components/Dashboard'
import RegisterForm from './components/Forms/Register'
import LoginForm from './components/Forms/Login'
import ProtectedRoute from './components/ProtectedRoute'
export default function App() {
	return (
		<div className="App">
			<Navigation />
			<h2>Gigapet</h2>
			<Route exact path="/" component={LoginForm} />
			<Route path="/login" component={LoginForm} />
			<Route path="/register" component={RegisterForm} />
			<ProtectedRoute path="/dashboard" component={Dashboard}/>
			<Footer />
		</div>
	)
}


