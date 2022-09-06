// import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Search imports
// import {useEffect, useState} from 'react';
// import {useNavigate} from 'react-router-dom';

// const styles = {
//     headerStyle: {
//       background: '#F8B77C',
//     },
//   };

function NewStorePOST() {

    // const URL_PREFIX= "https://aisleland-backend.herokuapp.com"

    // const newStore = (e) =>{
    //     e.preventDefault()
    //     const nameProp = e.target.getAttribute("id")
    //     fetch(`${URL_PREFIX}/api/stores/`,{
    //       method:"POST",
    //       body:JSON.stringify({
    //         name: sdf,
    //         address: dsf,
    //         zipCode: dsf,
    //       }),
    //       headers:{
    //           "Content-Type":"application/json"
    //       } 
    //     }).then(res=>{
    //       return res.json()
    //     }).then(data=>{
    //       console.log(data)
    //     })
    //   }





    return (
        <Card className="text-center">
        <Card.Header>Create a New Store</Card.Header>
        <Card.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Store Name</Form.Label>
                    <Form.Control type="password" placeholder="Enter store name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Store Street Address</Form.Label>
                    <Form.Control type="password" placeholder="Building-Number Street, City, State." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control type="password" placeholder="Enter zip code" />
                </Form.Group>

                <Button size="sm" variant="outline-success" type="submit">
                    Submit
                </Button>
            </Form>
        </Card.Body>
      </Card>
    );
  }
  
  
  export default NewStorePOST;