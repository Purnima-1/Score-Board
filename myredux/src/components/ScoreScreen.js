import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {Button} from 'react-bootstrap'
import {increment1,decrement1,increment2,decrement2} from '../reducers/counterReducer'

const ScoreScreen = () => {
    const counter1 = useSelector((state)=> state.counterR.counter1)
    const counter2 = useSelector((state)=> state.counterR.counter2)
    const dispatch = useDispatch()
  return (
    <>
    
   <h1 className='heading my-5'>Tournament</h1>
    <div className ='container my-5 team1'>
   <h2>Ace Holes Score: {counter1}</h2>
   
   <Button variant='success' onClick={()=>dispatch(increment1())}>Add</Button>
   <Button variant = 'secondary' onClick={()=>dispatch(decrement1())}>Less</Button>
   </div>
   <div className='container my-5 team2'>
   <h2>All Net Score: {counter2}</h2>
   <Button variant='success' onClick={()=>dispatch(increment2())}>Add</Button>
   <Button variant = 'secondary' onClick={()=>dispatch(decrement2())}>Less</Button>
    </div>
    </>
  )
}

export default ScoreScreen