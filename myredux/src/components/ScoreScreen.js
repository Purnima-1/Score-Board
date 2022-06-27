import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {Button,Table} from 'react-bootstrap'
import {increment1,decrement1,increment2,decrement2} from '../reducers/counterReducer'


const ScoreScreen = () => {
  
    const counter1 = useSelector((state)=> state.counterR.counter1)
    const counter2 = useSelector((state)=> state.counterR.counter2)
    const dispatch = useDispatch()
    // const [text,setText] = useState('')
    const [name,setName] = useState('')
    const [name1,setName1] = useState('')
  return (
    <>

   <h1 className='heading my-5'>Tournament</h1>
    <div className ='container my-5 team1'>
   
    <h2 id='team2'>{name} </h2>     
   <Button variant='success' onClick={()=>dispatch(increment1())}>Add Scores</Button>
   <Button variant = 'secondary' onClick={()=>dispatch(decrement1())}>Less</Button>
   
   <Button disabled={true} id='team1'>Score : {counter1}</Button> 
   <input type="text" placeholder= 'Add team name' 
   onChange={(event)=> {
      setName(event.target.value) 
        
   }}
   />
   {/* <Button ><i className="fa-solid fa-pen"></i></Button>
   <Button variant = 'secondary'><i className="fa-solid fa-trash"></i></Button> */}
   </div>
   <div className='container my-5 team2'>
 
   <h2 id='team2'>{name1}</h2>
   <Button variant='success' onClick={()=>dispatch(increment2())}>Add Scores</Button>
   <Button variant = 'secondary' onClick={()=>dispatch(decrement2())}>Less</Button>
      {/* <Button variant = 'secondary'><i className="fa-solid fa-trash"></i></Button> */}
   <Button disabled={true} id='team1'>Score : {counter2}</Button> 
   <input type="text" placeholder= 'Add team name' 
   onChange={(event)=> {
      setName1(event.target.value) 
        
   }} />
    </div>
    <div>
      <hr />
      <h2 className="max"> Maximum scores : 25</h2>
      <Table striped bordered hover className='container'>
        <thead>
          <tr>
            <th>SL NO.</th>
            <th>Teams</th>
            <th>Scores</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{name}</td>
            <td>{counter1}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{name1}</td>
            <td>{counter2}</td>
          </tr>
          
        </tbody>
      </Table>

      <h2 className="winner">
        {" "}
        Winner:
        {counter1 > counter2
          ? "Team 1"
          : counter2 > counter1
          ? 'Team 2'
          : ""}{" "}
      </h2>
     
    </div>
    </>
  )
}

export default ScoreScreen