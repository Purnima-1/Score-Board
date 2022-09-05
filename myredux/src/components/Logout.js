import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { logOut } from '../reducers/userReducer';

const Logout = () => {
    const dispatch = useDispatch();
    const logOutHandler = () => {
    dispatch(logOut());
  };
  return (
    <Button onClick={logOutHandler} size='sm'>Log Out</Button>
  )
}

export default Logout