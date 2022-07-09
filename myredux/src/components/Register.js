import React,{useState} from 'react'
import {Form,Button,FormControl}  from 'react-bootstrap'
import axios from 'axios'
const Register = () => {
  const [message,setMessage] = useState('')
  let url;
  if(window.location.href === "http://localhost:3000/"){
    url = "http://localhost:5000/register"
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
    formDataObj = Object.fromEntries(formData.entries())
    //const {name,email,password} = formDataObj
   
    axios({
      method:"POST",
      url: url,
      data:formDataObj,
      headers: { "Content-Type" : "application/json"},
    }).then(function(response){
      setMessage(response.data.status)
    }).catch(function(err){
    
      setMessage(err.response.data.status)
    })
  }
  return (
    <div className="container my-5">
<Form onSubmit={handleSubmit}>
<p className="h4 text-center mb-4">New Account Sign up Please.</p>
            <p className="h4 text-center mb-4">{message}</p>
    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>Name</Form.Label>
      <FormControl type="text" placeholder="Enter name"
      name='name'className='form-control' />
      </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <FormControl type="email" placeholder="Enter email" name='email'className='form-control' />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <FormControl type="password" placeholder="Password" name='password'className='form-control' />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Remember me on this computer" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </div>
  )
}

export default Register