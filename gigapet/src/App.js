import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import RegisterForm from './components/Forms/Register'
import LoginForm from './components/Forms/Login'

export default function App() {
  return (
    <div className="App">
        <h2>Gigapet</h2>
        {/* TODO: render naviagtion and footer components  */}
        <Route exact path="/" component={LoginForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
    </div>
  )
}


