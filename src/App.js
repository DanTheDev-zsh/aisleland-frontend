// import Accordion from 'react-bootstrap/Accordion';
// import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Results from './Results';
import Home from './Home';
import MultiStorePage from './MultiStorePage';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {useEffect,useState} from "react"
import API from "./utils/API"


function App() {
  const [user, setUser] = useState({
    id:0,
    email:''
  })
  // const [token, setToken] = useState("")

  useEffect(()=>{
    const storedToken = localStorage.getItem("token");
    API.checkToken(storedToken).then(res=>{
      if(!res.ok){
       console.log("invalid token!")
       localStorage.removeItem("token")
      }
      else {
        console.log("valid token")
        res.json().then(data=>{
          // setToken(storedToken)
          setUser({
            id:data.id,
            email:data.email
          })
        })
      }
    })
  },[])
 
  const submitLoginHandle= (email,password)=>{
    API.login(email,password).then(res=>{
      if(!res.ok){
        setUser({userId:0,email:""});
        // setToken("")
        return;
      }
       return res.json()
    }).then(data=>{
      console.log(data)
      setUser({
        id:data.user.id,
        email:data.user.email
      })
      // setToken(data.token)
      localStorage.setItem("token",data.token)
     
    })
  }
 
  const submitSignupHandle= (email,password)=>{
    API.signup(email,password).then(res=>{
      if(!res.ok){
        setUser({userId:0,email:""});
        // setToken("")
        return;
      }
       return res.json()
    }).then(data=>{
      console.log(data)
      setUser({
        id:data.user.id,
        email:data.user.email
      })
      // setToken(data.token)
      localStorage.setItem("token",data.token)
    })
  }

  // const logoutClick = ()=>{
  //   localStorage.removeItem("token");
  //   setUser({
  //     id:0,
  //     email:''
  //   })
  //   setToken("")
  // }

  
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login userId={user.id} handleLogin = {submitLoginHandle} handleSignup={submitSignupHandle}/>}/>
      <Route path="/results/:id" element={<Results/>}/>
      <Route path="/search/:store/:zipCode" element={<MultiStorePage/>}/>
    </Routes>
  </Router>
  );
}

export default App;
