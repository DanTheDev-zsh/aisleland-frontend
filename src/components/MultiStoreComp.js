import React, {useEffect, useState} from "react";
import '../styles/Header.css';
import { useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table';
// import {useNavigate} from 'react-router-dom';



function MultiStoreComp() {
    const {store, zipCode} = useParams()
    const [storesList, setStores] = useState(null)
    // const [storeID, setStoreID] = useState()
    const URL_PREFIX= "https://aisleland-backend.herokuapp.com"


    // let navigate = useNavigate(); 


    console.log(store, zipCode)
    useEffect(()=>{
            fetch(`${URL_PREFIX}/api/stores/${store}/${zipCode}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            } 
        }).then(res=>{
            return res.json()
        }).then(data=>{
            console.log(data)
            setStores(data)
        })
    },[store,zipCode])

    // const RessubmitHandle= e=>{
    //     e.preventDefault();

    //     // fetch(`http://localhost:3001/api/stores/${storeSearch}/${zipSearch}`,{
    //     //     method:"GET",
    //     //     headers:{
    //     //         "Content-Type":"application/json"
    //     //     } 
    //     // }).then(res=>{
    //     //     return res.json()
    //     // // }).then(data=>{
    //     //     console.log(data)
    //         navigate(`/results/${storeID}`)
    //     // })
    // }






    return (
                storesList && storesList.map((storeEntry) => (
                    
                 <Table key={storeEntry.id}>
                        <tr>
                            <td className='text-center'>
                                {storeEntry.name}
                                </td>
                            <td className='text-center'>
                                {storeEntry.address}
                                </td>
                            <td>
                                
                            </td>
                            <a href={`/results/${storeEntry.id}`}><button>Select Store</button></a>
                        </tr>
                </Table>
            ))
    );
  }

export default MultiStoreComp;
