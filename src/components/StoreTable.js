import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css';
import { useParams } from "react-router-dom";

import {useEffect, useState} from 'react';



function StoreTable() {
  // Query for looping through objects that contain aisle and name

  const {id} = useParams()
  const [foodItems, setFoods] = useState([])
  const [houseItems, setHouseItems] = useState ([])
  const URL_PREFIX= "https://aisleland-backend.herokuapp.com"

  console.log(id)

  // Food fetch
  useEffect(()=>{
    fetch(`${URL_PREFIX}/api/foods/${id}`,{
    method:"GET",
    headers:{
        "Content-Type":"application/json"
    } 
  }).then(res=>{
    return res.json()
  }).then(data=>{
    console.log(data)
    setFoods(data)
  })
  },[id])

  // houseItem Fetch
  useEffect(()=>{
    fetch(`${URL_PREFIX}/api/households/${id}`,{
    method:"GET",
    headers:{
        "Content-Type":"application/json"
    } 
  }).then(res=>{
    return res.json()
  }).then(data=>{
    console.log(data)
    setHouseItems(data)
  })
  },[id])

  const updateAisle = (e) =>{
    e.preventDefault()
    console.log(e.target.children[0].children[0].value)
    const foodID = e.target.getAttribute("id")
    fetch(`${URL_PREFIX}/api/foods/${foodID}`,{
      method:"PUT",
      body:JSON.stringify({
        aisleLocation: e.target.children[0].children[0].value,
      }),
      headers:{
          "Content-Type":"application/json"
      } 
    }).then(res=>{
      return res.json()
    }).then(data=>{
      console.log(data)
      const newFood = foodItems.map(item=>{
        if (item._id === foodID){
          return data
        }
        return item
      })
      setFoods(newFood)
    })
  }



  const updateHouseAisle = (e) =>{
    e.preventDefault()
    console.log(e.target.children[0].children[0].value)
    const houseID = e.target.getAttribute("id")
    fetch(`${URL_PREFIX}/api/households/${houseID}`,{
      method:"PUT",
      body:JSON.stringify({
        aisleLocation: e.target.children[0].children[0].value,
      }),
      headers:{
          "Content-Type":"application/json"
      } 
    }).then(res=>{
      return res.json()
    }).then(data=>{
      console.log(data)
      const newHouse = houseItems.map(item=>{
        if (item._id === houseID){
          return data
        }
        return item
      })
      setHouseItems(newHouse)
    })
  }



  return (
    <div className="StoreTable">
      <h1 className='text-center'>AisleLand</h1>
      <h3 className='text-center'>Food</h3>
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Grocery Items</Accordion.Header>
        <Accordion.Body>   
          <Table striped bordered hover>
      <thead>
        <tr>
          <th className='text-center'>Item Name</th>
          <th className='text-center'>Ailse Number</th>
          <th className='text-center'>Update</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bread<img alt="icon"  src={require("../icons/foodIcons/icons8-bread-48.png")}></img></td>
          <td>{foodItems?.find(breadItem=>(breadItem.typeName.toLowerCase()==="bread"))?.aisleLocation}</td>
          <td>
           <Form onSubmit={updateAisle} className='text-center' id={foodItems?.find(breadItem=>(breadItem.typeName.toLowerCase()==="bread"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Cereal<img alt="icon"  src={require("../icons/foodIcons/icons8-cereal-48.png")}></img></td>
          <td>{foodItems?.find(cerealItem=>(cerealItem.typeName.toLowerCase()==="cereal"))?.aisleLocation}</td>
          <td>
            <Form onSubmit={updateAisle} className='text-center' id={foodItems?.find(cerealItem=>(cerealItem.typeName.toLowerCase()==="cereal"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Granola Bars</td>
          <td>{foodItems?.find(GranolaBarIteam=>(GranolaBarIteam.typeName.toLowerCase()==="granola bars"))?.aisleLocation}</td>
          <td>
            <Form onSubmit={updateAisle} className='text-center' id={foodItems?.find(barItem=>(barItem.typeName.toLowerCase()==="granola bars"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Pasta<img alt="icon"  src={require("../icons/foodIcons/icons8-spaghetti-48.png")}></img></td>
          <td>{foodItems?.find(pastaIteam=>(pastaIteam.typeName.toLowerCase()==="pasta"))?.aisleLocation}</td>
          <td>
           <Form onSubmit={updateAisle} className='text-center' id={foodItems?.find(pastaIteam=>(pastaIteam.typeName.toLowerCase()==="pasta"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Jams<img alt="icon"  src={require("../icons/foodIcons/icons8-bread-48.png")}></img></td>
          <td>{foodItems?.find(jamItem=>(jamItem.typeName.toLowerCase()==="jams"))?.aisleLocation}</td>
          <td>
           <Form onSubmit={updateAisle} className='text-center' id={foodItems?.find(jamItem=>(jamItem.typeName.toLowerCase()==="jams"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Coffee<img alt="icon"  src={require("../icons/foodIcons/icons8-coffee-pot-48.png")}></img></td>
          <td>{foodItems?.find(coffeeItem=>(coffeeItem.typeName.toLowerCase()==="coffee"))?.aisleLocation}</td>
          <td>
            <Form onSubmit={updateAisle} className='text-center' id={foodItems?.find(coffeeItem=>(coffeeItem.typeName.toLowerCase()==="coffee"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Tea<img alt="icon"  src={require("../icons/foodIcons/icons8-teapot-48.png")}></img></td>
          <td>{foodItems?.find(teaItem=>(teaItem.typeName.toLowerCase()==="tea"))?.aisleLocation}</td>
          <td>
            <Form onSubmit={updateAisle} className='text-center' id={foodItems?.find(teaItem=>(teaItem.typeName.toLowerCase()==="tea"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Baking<img alt="icon"  src={require("../icons/foodIcons/icons8-bake-48.png")}></img></td>
          <td>{foodItems?.find(bakingItem=>(bakingItem.typeName.toLowerCase()==="baking"))?.aisleLocation}</td>
          <td>
           <Form onSubmit={updateAisle} className='text-center' id={foodItems?.find(bakingItem=>(bakingItem.typeName.toLowerCase()==="baking"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Bulk Foods<img alt="icon"  src={require("../icons/foodIcons/icons8-bulk-food-48.png")}></img></td>
          <td>{foodItems?.find(bulkItem=>(bulkItem.typeName.toLowerCase()==="bulk foods"))?.aisleLocation}</td>
          <td>
          <Form onSubmit={updateAisle} className='text-center' id={foodItems?.find(bulkItem=>(bulkItem.typeName.toLowerCase()==="bulk foods"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Chips<img alt="icon"  src={require("../icons/foodIcons/icons8-nachos-48.png")}></img></td>
          <td>{foodItems?.find(chipsItem=>(chipsItem.typeName.toLowerCase()==="chips"))?.aisleLocation}</td>
          <td>
           <Form onSubmit={updateAisle} className='text-center' id={foodItems?.find(chipsItem=>(chipsItem.typeName.toLowerCase()==="chips"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
      <tr>
          <td>Rice<img alt="icon"  src={require("../icons/foodIcons/icons8-rice-bowl-48.png")}></img></td>
          <td>{foodItems?.find(riceItem=>(riceItem.typeName.toLowerCase()==="rice"))?.aisleLocation}</td>
          <td>
          <Form onSubmit={updateAisle} className='text-center' id={foodItems?.find(riceItem=>(riceItem.typeName.toLowerCase()==="rice"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Condiments<img alt="icon"  src={require("../icons/foodIcons/icons8-mustard-48.png")}></img></td>
          <td>{foodItems?.find(condimentsItem=>(condimentsItem.typeName.toLowerCase()==="condiments"))?.aisleLocation}</td>
          <td>
           <Form onSubmit={updateAisle} className='text-center' id={foodItems?.find(condimentsItem=>(condimentsItem.typeName.toLowerCase()==="condiments"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Salad Dressing<img alt="icon"  src={require("../icons/foodIcons/icons8-salad-48.png")}></img></td>
          <td>{foodItems?.find(saladItem=>(saladItem.typeName.toLowerCase()==="salad dressing"))?.aisleLocation}</td>
          <td>
           <Form onSubmit={updateAisle} className='text-center' id={foodItems?.find(saladItem=>(saladItem.typeName.toLowerCase()==="salad dressing"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Eggs<img alt="icon"  src={require("../icons/foodIcons/icons8-egg-carton-48.png")}></img></td>
          <td>{foodItems?.find(eggsItem=>(eggsItem.typeName.toLowerCase()==="eggs"))?.aisleLocation}</td>
          <td>
           <Form onSubmit={updateAisle} className='text-center' id={foodItems?.find(eggsItem=>(eggsItem.typeName.toLowerCase()==="eggs"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Juice<img alt="icon"  src={require("../icons/foodIcons/icons8-lemonade-48.png")}></img></td>
          <td>{foodItems?.find(juiceItem=>(juiceItem.typeName.toLowerCase()==="juice"))?.aisleLocation}</td>
          <td>
           <Form onSubmit={updateAisle} className='text-center' id={foodItems?.find(juiceItem=>(juiceItem.typeName.toLowerCase()==="juice"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Butter<img alt="icon"  src={require("../icons/foodIcons/icons8-butter-48.png")}></img></td>
          <td>{foodItems?.find(butterItem=>(butterItem.typeName.toLowerCase()==="butter"))?.aisleLocation}</td>
          <td>
            <Form onSubmit={updateAisle} className='text-center' id={foodItems?.find(butterItem=>(butterItem.typeName.toLowerCase()==="butter"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Milk<img alt="icon"  src={require("../icons/foodIcons/icons8-milk-48.png")}></img></td>
          <td>{foodItems?.find(milkItem=>(milkItem.typeName.toLowerCase()==="milk"))?.aisleLocation}</td>
          <td>
            <Form onSubmit={updateAisle} className='text-center' id={foodItems?.find(milkItem=>(milkItem.typeName.toLowerCase()==="milk"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Creamer<img alt="icon"  src={require("../icons/foodIcons/icons8-creamer-48.png")}></img></td>
          <td>{foodItems?.find(creamerItem=>(creamerItem.typeName.toLowerCase()==="creamer"))?.aisleLocation}</td>
          <td>
            <Form onSubmit={updateAisle} className='text-center' id={foodItems?.find(creamerItem=>(creamerItem.typeName.toLowerCase()==="creamer"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Cheese<img alt="icon"  src={require("../icons/foodIcons/icons8-cheese-48.png")}></img></td>
          <td>{foodItems?.find(cheeseItem=>(cheeseItem.typeName.toLowerCase()==="cheese"))?.aisleLocation}</td>
          <td>
            <Form onSubmit={updateAisle} className='text-center' id={foodItems?.find(cheeseItem=>(cheeseItem.typeName.toLowerCase()==="cheese"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
      </tbody>
    </Table>
    </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="7">
        <Accordion.Header>Frozen Food</Accordion.Header>
        <Accordion.Body>   
          <Table striped bordered hover>
      <thead>
        <tr>
          <th className='text-center'>Item Name</th>
          <th className='text-center'>Ailse Number</th>
          <th className='text-center'>Update</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Pizza<img alt="icon"  src={require("../icons/foodIcons/icons8-pizza-48.png")}></img></td>
          <td>{foodItems?.find(pizzaIteam=>(pizzaIteam.typeName.toLowerCase()==="frozen pizza"))?.aisleLocation}</td>
          <td>
           <Form onSubmit={updateAisle} className='text-center' id={foodItems?.find(pizzaIteam=>(pizzaIteam.typeName.toLowerCase()==="frozen pizza"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Single Meals<img alt="icon"  src={require("../icons/foodIcons/icons8-meal-48.png")}></img></td>
          <td>{foodItems?.find(singelMealsItem=>(singelMealsItem.typeName.toLowerCase()==="frozen single meals"))?.aisleLocation}</td>
          <td>
           <Form onSubmit={updateAisle} className='text-center' id={foodItems?.find(singelMealsItem=>(singelMealsItem.typeName.toLowerCase()==="frozen single meals"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Burritos</td>
          <td>{foodItems?.find(burritoItem=>(burritoItem.typeName.toLowerCase()==="frozen burritos"))?.aisleLocation}</td>
          <td>
           <Form onSubmit={updateAisle} className='text-center' id={foodItems?.find(burritoItem=>(burritoItem.typeName.toLowerCase()==="frozen buttitos"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Family Meals<img alt="icon"  src={require("../icons/foodIcons/icons8-family-48.png")}></img></td>
          <td>{foodItems?.find(familyMealsItem=>(familyMealsItem.typeName.toLowerCase()==="frozen family meals"))?.aisleLocation}</td>
          <td>
            <Form onSubmit={updateAisle} className='text-center' id={foodItems?.find(familyMealsItem=>(familyMealsItem.typeName.toLowerCase()==="frozen family meals"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Vegetables<img alt="icon"  src={require("../icons/foodIcons/icons8-broccolini-48.png")}></img></td>
          <td>{foodItems?.find(vegetableItems=>(vegetableItems.typeName.toLowerCase()==="frozen vegetables"))?.aisleLocation}</td>
          <td>
           <Form onSubmit={updateAisle} className='text-center' id={foodItems?.find(vegetableItems=>(vegetableItems.typeName.toLowerCase()==="frozen vegetables"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Meats<img alt="icon"  src={require("../icons/foodIcons/icons8-cuts-of-beef-48.png")}></img></td>
          <td>{foodItems?.find(meatItem=>(meatItem.typeName.toLowerCase()==="frozen meats"))?.aisleLocation}</td>
          <td>
            <Form onSubmit={updateAisle} className='text-center' id={foodItems?.find(meatItem=>(meatItem.typeName.toLowerCase()==="frozen meats"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
      </tbody>
    </Table>
    </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey='2'>
      <Accordion.Header>Canned Food</Accordion.Header>
      <Accordion.Body>
          <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th className='text-center'>Item Name</th>
          <th className='text-center'>Ailse Number</th>
          <th className='text-center'>Update</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tomatoes<img alt="icon"  src={require("../icons/foodIcons/icons8-tomatoes-48.png")}></img></td>
          <td>{foodItems?.find(tomatosItem=>(tomatosItem.typeName.toLowerCase()==="canned tomatoes"))?.aisleLocation}</td>
          <td>
            <Form onSubmit={updateAisle} className='text-center' id={foodItems?.find(tomatosItem=>(tomatosItem.typeName.toLowerCase()==="canned tomatoes"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Beans<img alt="icon"  src={require("../icons/foodIcons/icons8-white-beans-48.png")}></img></td>
          <td>{foodItems?.find(beansItem=>(beansItem.typeName.toLowerCase()==="canned beans"))?.aisleLocation}</td>
          <td>
            <Form onSubmit={updateAisle} className='text-center' id={foodItems?.find(beansItem=>(beansItem.typeName.toLowerCase()==="canned beans"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Peas<img alt="icon"  src={require("../icons/foodIcons/icons8-peas-48.png")}></img></td>
          <td>{foodItems?.find(peasItem=>(peasItem.typeName.toLowerCase()==="canned peas"))?.aisleLocation}</td>
          <td>
            <Form onSubmit={updateAisle} className='text-center' id={foodItems?.find(peasItem=>(peasItem.typeName.toLowerCase()==="canned peas"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Peaches<img alt="icon"  src={require("../icons/foodIcons/icons8-peach-48.png")}></img></td>
          <td>{foodItems?.find(peachesItem=>(peachesItem.typeName.toLowerCase()==="canned peaches"))?.aisleLocation}</td>
          <td>
            <Form onSubmit={updateAisle} className='text-center' id={foodItems?.find(peachesItem=>(peachesItem.typeName.toLowerCase()==="canned peaches"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Tuna<img alt="icon"  src={require("../icons/foodIcons/icons8-tuna-48.png")}></img></td>
          <td>{foodItems?.find(tunaItems=>(tunaItems.typeName.toLowerCase()==="canned tuna"))?.aisleLocation}</td>
          <td>
            <Form onSubmit={updateAisle} className='text-center' id={foodItems?.find(tunaItems=>(tunaItems.typeName.toLowerCase()==="canned tuna"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Chili<img alt="icon"  src={require("../icons/foodIcons/icons8-chili-pepper-48.png")}></img></td>
          <td>{foodItems?.find(chiliItem=>(chiliItem.typeName.toLowerCase()==="canned chili"))?.aisleLocation}</td>
          <td>
            <Form onSubmit={updateAisle} className='text-center' id={foodItems?.find(chiliItem=>(chiliItem.typeName.toLowerCase()==="canned chili"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Soup<img alt="icon"  src={require("../icons/foodIcons/icons8-soup-plate-48.png")}></img></td>
          <td>{foodItems?.find(soupItem=>(soupItem.typeName.toLowerCase()==="canned soup"))?.aisleLocation}</td>
          <td>
            <Form onSubmit={updateAisle} className='text-center' id={foodItems?.find(soupItem=>(soupItem.typeName.toLowerCase()==="canned soup"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
      </tbody>
    </Table>
          </Accordion.Body>
      </Accordion.Item>
  
    </Accordion>

  <h3 className='text-center'>Household Items</h3>


    <Accordion>
    <Accordion.Item eventKey='3'>
        <Accordion.Header>Cleaning</Accordion.Header>
        <Accordion.Body>
        <Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th className='text-center'>Item Name</th>
        <th className='text-center'>Ailse Number</th>
        <th className='text-center'>Update</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Paper Towels<img alt="icon"  src={require("../icons/houseIcons/icons8-wipes-48.png")}></img></td>
        <td>{houseItems?.find(papertowelItem=>(papertowelItem.typeName.toLowerCase()==="paper towels"))?.aisleLocation}</td>
        <td>
         <Form onSubmit={updateHouseAisle} className='text-center' id={houseItems?.find(papertowelItem=>(papertowelItem.typeName.toLowerCase()==="paper towels"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
        </td>
      </tr>
      <tr>
        <td>Napkins<img alt="icon"  src={require("../icons/houseIcons/icons8-wipes-48.png")}></img></td>
        <td>{houseItems?.find(napkinItem=>(napkinItem.typeName.toLowerCase()==="napkins"))?.aisleLocation}</td>
        <td>
          <Form onSubmit={updateHouseAisle} className='text-center' id={houseItems?.find(napkinItem=>(napkinItem.typeName.toLowerCase()==="napkins"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
        </td>
      </tr>
      <tr>
        <td>Rubber Gloves<img alt="icon"  src={require("../icons/houseIcons/icons8-rubber-gloves-48.png")}></img></td>
        <td>{houseItems?.find(rubbergloveItem=>(rubbergloveItem.typeName.toLowerCase()==="rubber gloves"))?.aisleLocation}</td>
        <td>
          <Form onSubmit={updateHouseAisle} className='text-center' id={houseItems?.find(rubbergloveItem=>(rubbergloveItem.typeName.toLowerCase()==="rubber gloves"))?._id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
        </td>
      </tr>
      <tr>
        <td>Sponges<img alt="icon"  src={require("../icons/houseIcons/icons8-absorb-48.png")}></img></td>
        <td>{houseItems?.find(spongeItem=>(spongeItem.typeName.toLowerCase()==="sponges"))?.aisleLocation}</td>
        <td>
          <Form onSubmit={updateHouseAisle} className='text-center' id={houseItems?.find(spongeItem=>(spongeItem.typeName.toLowerCase()==="sponges"))?._id}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
                </Form.Group>
                <Button size="sm" variant="outline-success" type="submit">
                Submit
                </Button>
            </Form>
        </td>
      </tr>
      <tr>
        <td>Detergent<img alt="icon"  src={require("../icons/houseIcons/icons8-wash-by-hand-48.png")}></img></td>
        <td>{houseItems?.find(detergentItem=>(detergentItem.typeName.toLowerCase()==="detergent"))?.aisleLocation}</td>
        <td>
          <Form onSubmit={updateHouseAisle} className='text-center' id={houseItems?.find(detergentItem=>(detergentItem.typeName.toLowerCase()==="detergent"))?._id}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
                </Form.Group>
                <Button size="sm" variant="outline-success" type="submit">
                Submit
                </Button>
            </Form>
        </td>
      </tr>
      <tr>
        <td>Fabric Softener<img alt="icon"  src={require("../icons/houseIcons/icons8-wash-by-hand-48.png")}></img></td>
        <td>{houseItems?.find(fabricItem=>(fabricItem.typeName.toLowerCase()==="fabric softener"))?.aisleLocation}</td>
        <td>
         <Form onSubmit={updateHouseAisle} className='text-center' id={houseItems?.find(fabricItem=>(fabricItem.typeName.toLowerCase()==="fabric softener"))?._id}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
                </Form.Group>
                <Button size="sm" variant="outline-success" type="submit">
                Submit
                </Button>
            </Form>
        </td>
      </tr>
      <tr>
        <td>Cleaners<img alt="icon"  src={require("../icons/houseIcons/icons8-spray-48.png")}></img></td>
        <td>{houseItems?.find(cleanerItem=>(cleanerItem.typeName.toLowerCase()==="cleaners"))?.aisleLocation}</td>
        <td>
         <Form onSubmit={updateHouseAisle} className='text-center' id={houseItems?.find(cleanerItem=>(cleanerItem.typeName.toLowerCase()==="cleaners"))?._id}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
                </Form.Group>
                <Button size="sm" variant="outline-success" type="submit">
                Submit
                </Button>
            </Form>
        </td>
      </tr>
      <tr>
        <td>Garbage Bags<img alt="icon"  src={require("../icons/houseIcons/icons8-trash-can-48.png")}></img></td>
        <td>{houseItems?.find(garbageItem=>(garbageItem.typeName.toLowerCase()==="garbage bags"))?.aisleLocation}</td>
        <td>
          <Form onSubmit={updateHouseAisle} className='text-center' id={houseItems?.find(garbageItem=>(garbageItem.typeName.toLowerCase()==="garbage bags"))?._id}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
                </Form.Group>
                <Button size="sm" variant="outline-success" type="submit">
                Submit
                </Button>
            </Form>
        </td>
      </tr>
      <tr>
        <td>Toilet Paper<img alt="icon"  src={require("../icons/houseIcons/icons8-toilet-paper-48.png")}></img></td>
        <td>{houseItems?.find(toiletPaperItem=>(toiletPaperItem.typeName.toLowerCase()==="toilet paper"))?.aisleLocation}</td>
        <td>
          <Form onSubmit={updateHouseAisle} className='text-center' id={houseItems?.find(toiletPaperItem=>(toiletPaperItem.typeName.toLowerCase()==="toilet paper"))?._id}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
                </Form.Group>
                <Button size="sm" variant="outline-success" type="submit">
                Submit
                </Button>
            </Form>
        </td>
      </tr>
      <tr>
        <td>Brooms and Mops<img alt="icon"  src={require("../icons/houseIcons/icons8-housekeeping-48.png")}></img></td>
        <td>{houseItems?.find(broomsItem=>(broomsItem.typeName.toLowerCase()==="brooms and mops"))?.aisleLocation}</td>
        <td>
          <Form onSubmit={updateHouseAisle} className='text-center' id={houseItems?.find(broomsItem=>(broomsItem.typeName.toLowerCase()==="brooms and mops"))?._id}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
                </Form.Group>
                <Button size="sm" variant="outline-success" type="submit">
                Submit
                </Button>
            </Form>
        </td>
      </tr>
    </tbody>
  </Table>
        </Accordion.Body>
    </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Pharmacy</Accordion.Header>
        <Accordion.Body>   
          <Table striped bordered hover>
      <thead>
        <tr>
          <th className='text-center'>Item Name</th>
          <th className='text-center'>Ailse Number</th>
          <th className='text-center'>Update</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Hair Products<img alt="icon"  src={require("../icons/houseIcons/icons8-hair-brush-48.png")}></img></td>
          <td>{houseItems?.find(hairsItems=>(hairsItems.typeName.toLowerCase()==="hair products"))?.aisleLocation}</td>
          <td>
            <Form onSubmit={updateHouseAisle} className='text-center' id={houseItems?.find(hairsItems=>(hairsItems.typeName.toLowerCase()==="hair products"))?._id}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
                </Form.Group>
                <Button size="sm" variant="outline-success" type="submit">
                Submit
                </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Cold and Flu<img alt="icon"  src={require("../icons/houseIcons/icons8-virus-48.png")}></img></td>
          <td>{houseItems?.find(coldItems=>(coldItems.typeName.toLowerCase()==="cold and flu"))?.aisleLocation}</td>
          <td>
            <Form onSubmit={updateHouseAisle} className='text-center' id={houseItems?.find(coldItems=>(coldItems.typeName.toLowerCase()==="cold and flu"))?._id}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
                </Form.Group>
                <Button size="sm" variant="outline-success" type="submit">
                Submit
                </Button>
            </Form>
          </td>
        </tr>
        <tr>
        <td>Pain Medication<img alt="icon"  src={require("../icons/houseIcons/icons8-pill-48.png")}></img></td>
        <td>{houseItems?.find(painItem=>(painItem.typeName.toLowerCase()==="pain medication"))?.aisleLocation}</td>
        <td>
          <Form onSubmit={updateHouseAisle} className='text-center' id={houseItems?.find(painItem=>(painItem.typeName.toLowerCase()==="frozen meats"))?._id}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
                </Form.Group>
                <Button size="sm" variant="outline-success" type="submit">
                Submit
                </Button>
            </Form>
        </td>
      </tr>
      <tr>
        <td>Contraception<img alt="icon"  src={require("../icons/houseIcons/icons8-pregnancy-test-48.png")}></img></td>
        <td>{houseItems?.find(contraceptionItem=>(contraceptionItem.typeName.toLowerCase()==="contraception"))?.aisleLocation}</td>
        <td>
          <Form onSubmit={updateHouseAisle} className='text-center' id={houseItems?.find(contraceptionItem=>(contraceptionItem.typeName.toLowerCase()==="contraception"))?._id}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
                </Form.Group>
                <Button size="sm" variant="outline-success" type="submit">
                Submit
                </Button>
            </Form>
        </td>
      </tr>
      </tbody>
    </Table>
    </Accordion.Body>
    </Accordion.Item>
  
      <Accordion.Item eventKey='4'>
        <Accordion.Header>Baby</Accordion.Header>
        <Accordion.Body>
        <Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th className='text-center'>Item Name</th>
        <th className='text-center'>Aisle Number</th>
        <th className='text-center'>Update</th>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td>Formula<img alt="icon"  src={require("../icons/houseIcons/icons8-baby-bottle-48.png")}></img></td>
        <td>{houseItems?.find(formulaItem=>(formulaItem.typeName.toLowerCase()==="baby formula"))?.aisleLocation}</td>
        <td>
          <Form onSubmit={updateHouseAisle} className='text-center' id={houseItems?.find(formulaItem=>(formulaItem.typeName.toLowerCase()==="baby formula"))?._id}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
                </Form.Group>
                <Button size="sm" variant="outline-success" type="submit">
                Submit
                </Button>
            </Form>
        </td>
      </tr>
      <tr>
        <td>Diapers<img alt="icon"  src={require("../icons/houseIcons/icons8-nappy-48.png")}></img></td>
        <td>{houseItems?.find(diapersItem=>(diapersItem.typeName.toLowerCase()==="baby diapers"))?.aisleLocation}</td>
        <td>
          <Form onSubmit={updateHouseAisle} className='text-center' id={houseItems?.find(diapersItem=>(diapersItem.typeName.toLowerCase()==="baby diapers"))?._id}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
                </Form.Group>
                <Button size="sm" variant="outline-success" type="submit">
                Submit
                </Button>
            </Form>
        </td>
      </tr>
    </tbody>
  </Table>
        </Accordion.Body>
    </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default StoreTable;
