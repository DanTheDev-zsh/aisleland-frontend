import React from 'react'
import AuthForm from '../src/components/AuthForm/Index'
// import { useNavigate } from 'react-router-dom'
export default function Login(props) {

  return (
    <div className="Login">
        <AuthForm type="Login" handleSubmit = {props.handleLogin}/>
        <AuthForm type="Signup" handleSubmit = {props.handleSignup}/>
      </div>
  )
}