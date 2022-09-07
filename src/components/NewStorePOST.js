
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

function NewStorePOST () {

    const URL_PREFIX= "https://aisleland-backend.herokuapp.com"

    const newStore = (e) =>{
        e.preventDefault()
        console.log(e.target.children[0].children[1].value)
        console.log(e.target.children[1].children[1].value)
        console.log(e.target.children[2].children[1].value)
        fetch(`${URL_PREFIX}/api/stores/`,{
          method:"POST",
          body:JSON.stringify({
            name: e.target.children[0].children[1].value,
            address: e.target.children[1].children[1].value,
            zipCode: e.target.children[2].children[1].value
          }),
          headers:{
              "Content-Type":"application/json"
          } 
        }).then(res=>{
          return res.json()
        }).then(data=>{
          console.log(data)
        })
      }





    return (
        <Card className="text-center">
        <Card.Header>Create a New Store</Card.Header>
        <Card.Body>
            <Form onSubmit={newStore}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Store Name</Form.Label>
                    <Form.Control type="input" placeholder="Enter store name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Store Street Address</Form.Label>
                    <Form.Control type="input" placeholder="Building-Number Street, City, State." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control type="input" placeholder="Enter zip code" />
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