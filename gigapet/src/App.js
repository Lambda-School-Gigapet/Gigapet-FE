// npm packages
import React from 'react'
import { Route } from 'react-router-dom'
// Styles 
import './App.css'
// Components
import Footer from './components/Layout/Footer'
import Dashboard from './components/Dashboard'
import ChildDashboard from './components/Children/ChildDashboard'
import RegisterForm from './components/Forms/Register'
import LoginForm from './components/Forms/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Settings from './components/Settings'

export default function App() {
	return (
		<div className="App">
			<Route exact path="/" component={LoginForm} />
			<Route path="/login" component={LoginForm} />
			<Route path="/register" component={RegisterForm} />
			<ProtectedRoute path="/dashboard" component={Dashboard}/>
			<ProtectedRoute path="/child-dashboard/:id" component={ChildDashboard}/>
			<ProtectedRoute path="/settings" component={Settings} />
			<Footer />
		</div>
	)
}


