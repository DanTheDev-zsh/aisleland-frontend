import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export default function AuthForm(props) {
    const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [userName, setUserName] = useState("")

  const submit = e=>{
    e.preventDefault();
    props.handleSubmit(email,password);
  }
  return (
    <div className = "AuthForm">
        <header>{props.type}</header>
        <form onSubmit = {submit}>
            <input value={email} placeholder= "Enter Email" onChange={e=>setEmail(e.target.value)}/>
            <input value={password} placeholder="Enter Password" type="password" onChange={e=>setPassword(e.target.value)}/>
            {/* <input value={userName} placeholder="Enter Username" onChange={e=>setUserName(e.target.value)}/> */}
            <Link to="/"><button>{props.type}</button></Link>
            <Link to="/"><button>Home!</button></Link>
        </form>
    </div>
  )
}