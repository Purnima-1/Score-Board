import React,{useState,useRef} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {Table} from 'react-bootstrap';
import {Button,Form} from 'react-bootstrap'
import { addTeam,deleteTeam } from '../reducers/actionReducer';

const Scores = () => {
  const dispatch = useDispatch()
  const teamRef = useRef()
  const scoreRef = useRef()
  const list = useSelector((state)=>state.actionR.value )
  const [tem,setTeam] = useState('')
  const [scor,setScore] = useState(0)
    return (
    <div className='container'>
      <h1 className='score my-5'>Volleyball Score Board</h1>
      <Table striped bordered hover >
  <thead>
    <tr>
      <th>SL No.</th>
      <th>Teams</th>
      <th>Scores </th>
      <th>Action</th>
         </tr>
  </thead>
  <tbody>
     
      {list.map((team) =>{
        return(
          team.id!==null?
          <tr key= {team.id}>
      <td>{team.id}</td>
      <td>{team.team}</td>
      <td>{team.score}</td>
      <td><Button onClick={()=>{
                dispatch(deleteTeam({id:team.id}))
                  }             
                }>Delete</Button></td>
      </tr>
    : '')})}
    </tbody>
</Table>
<Form>
  <input type="text" 
  name='teamname'
  required='required'
  placeholder = 'Enter a team' 
  ref={teamRef}
  onChange= {(event)=> {setTeam(event.target.value)}}
    />
   <input type="score" 
  name='Scores'
  required='required'
  placeholder = 'Enter the score' 
  ref={scoreRef}
  onChange= {(event)=> {setScore(event.target.value)}}
  />
<Button onClick= {()=>{if(tem && scor){
  dispatch(addTeam({id:list[list.length-1].id+1,team:tem,score:scor}))
    teamRef.current.value= ''
  scoreRef.current.value = ''
} else{alert('Please enter the details')}

}} 

size='sm'>Add</Button>
  </Form>
    </div>
  )
}

export default Scores