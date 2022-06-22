// import { useState } from 'react';
// import './App.css';

// function App() {
//   let [count,setCount] = useState(0)
//   let [name,setName] = useState('')
//   let [sub,setSub] = useState('')
//   const increment = ()=>{
//      setCount(count++)
//   }
//   const decrement = ()=>{
//     setCount(count--)
//  }
//  const changeName = (e) => {
//   e.preventDefault()
//   setName(e.target.value)
//  }
//  const changeSub = (e) => {
//   e.preventDefault()
//   setSub(e.target.value)
//  }
//   return (
//     <div>
//      Counter
//      <button onClick = {()=> increment()}style={{marginLeft:'5px'}}>Inc</button>
//      <button onClick = {()=> decrement()} style={{marginLeft:'5px'}}>Dec</button>
//      <h4 style={{marginLeft:'15px'}}>{count}</h4>
//      <form action="">
//       Name: <input type="text"  onChange={changeName} /> <br/>Candidate's Name: {name} <br/>
//       Subject: <input type="text"  onChange={changeSub} /> <br/>Candidate's Subject: {sub}
//      </form>
//     </div>
//   );
// }

// export default App;
