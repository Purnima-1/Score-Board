import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);
const Charts = () => {
  //const list = useSelector((state)=>state.actionR.value)
 if(localStorage.getItem('value')){
  const datas = JSON.parse(localStorage.getItem('value')).filter(data=> data.id!==null)
  
 const team = datas.map(data=>data.team)
  const score = datas.map(data=>data.score)
  
    const data = {
         labels: team,
        datasets: [{
      label:'Volleyball Final Scores',
      data: score,
      backgroundColor: ['pink','skyBlue','lightyellow','lightgreen','orange','grey']
    }]
  }
  return (
    <div style={{maxWidth:'600px',margin:'0 auto'}}>
    <h1>Doughnut Chart</h1>
     <Doughnut data = {data}/>
      </div>
  )}
  else {
   return(
    <div style={{maxWidth:'600px',margin:'0 auto'}}>
    <h1>Doughnut Chart</h1>
    <h1>please add team to see charts</h1>
    </div>
   )
  }
}
export default Charts