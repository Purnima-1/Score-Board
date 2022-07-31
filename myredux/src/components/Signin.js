


import { Button, Form } from "react-bootstrap";
import { saveToken, loginSubmit } from "../reducers/userReducer";
import { useSelector, useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom'
import axios from "axios";
const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { serverMessage } = useSelector((state) => state.loginSlice);
  let url;
  if (window.location.href === "http://localhost:3000/signin") {
   url = "http://localhost:5000/login";
   }
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
      console.log(formDataObj)
    axios({
      method: "POST",
      url: url,
      data: formDataObj,
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        dispatch(saveToken(response.data.token));

        dispatch(loginSubmit(response.data.status));
        //handle success
      })
      .catch(function (err) {
        dispatch(loginSubmit(err.response.data.status));
        //handle error
      });
  navigate("/")
  };

  return (
    <>
     <div className="container my-5">
      <Form onSubmit={handleSubmit}>
       
          {serverMessage ? (
            <div className="alert alert-warning mb-0 p-2" role="alert">
              {serverMessage}
            </div>
          ) : (
            ""
          )}
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign In
          </Button>
       
      </Form>
      </div>
    </>
  );
};

export default Signin;