// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import MultiStore from '../MultiStorePage';

// Search imports
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';



function BrandNav() {
    let navigate = useNavigate(); 
    // const routeChange = () =>{ 
    //   let path = `/search`; 
    //   navigate(path);
    // }
    



    const [storeSearch, setStore] = useState("")
    const [zipSearch, setZip] = useState("")
    const submitHandle= e=>{
        e.preventDefault();

        // fetch(`http://localhost:3001/api/stores/${storeSearch}/${zipSearch}`,{
        //     method:"GET",
        //     headers:{
        //         "Content-Type":"application/json"
        //     } 
        // }).then(res=>{
        //     return res.json()
        // // }).then(data=>{
        //     console.log(data)
            navigate(`/search/${storeSearch}/${zipSearch}`)
        // })
    }
    


    // useEffect(()=>{
    //     fetch("http://localhost:3001/api/stores/bynamezip").then(res=>res.json()).then(data=>{
    //         console.log(data);
    //     })
    // },[])

  return (
    <form onSubmit={submitHandle}>
    <input name="storeSearch" placeholder="Enter Store Name" value={storeSearch} onChange={e=>setStore(e.target.value)}/>
    <input name="zipSearch" placeholder="Enter Zip Code" value={zipSearch} onChange={e=>setZip(e.target.value)}/>
    <button>Search</button>  
    <Link to="/login"><button>Login!</button></Link>
  </form>

  );
}




// Route dump 
// onClick={
//     <Router>
//         <Routes>
//         <Route path="/search" element={<MultiStore/>}/>
//     </Routes>
// </Router>
// }>

export default BrandNav;