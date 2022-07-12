import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { saveToken,loginSubmit } from '../reducers/userReducer'
import axios from 'axios'
import {Form,Button}  from 'react-bootstrap'
const Signin = () => {
  const dispatch = useDispatch()
  const {serverMessage} = useSelector((state) => state.loginSlice)
  let url
  if (window.location.href === "http://localhost:3000/") {
    url = "http://localhost:5000/login";
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target),
    formDataObj = Object.fromEntries(formData.entries())
    axios({
      method: 'POST',
      url: url,
      data: formDataObj,
      headers: { "Content-Type": "application/json" },
          }).then(function(response){
   dispatch(saveToken(response.data.token))
   dispatch(loginSubmit(response.data.status))
          }).catch(function(err){
            dispatch(loginSubmit(err.response.data.status))
          })
  }
  return (
    <div className="container my-5">
        <Form onSubmit={handleSubmit}>
          {serverMessage? (<div className="alert alert-warning mb-0 p-2" role="alert">
              {serverMessage}
            </div>):('')}
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
  )
}

export default Signin