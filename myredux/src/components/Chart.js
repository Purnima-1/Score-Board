import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);

const Charts = () => {
  //const data = useSelector((state)=>state.actionR.value )
  const data = {
    labels: ['Red','Blue','Yellow','Green','Orange'],
    datasets: [{
      label:'Scoring Volleyball',
      data: [3,15,4,19,8],
      backgroundColor: ['pink','skyBlue','lightyellow','lightgreen','orange']
    }]
  }
  return (
    <div style={{maxWidth:'650px',margin:'0 auto'}}>
    <h1>Line Chart</h1>
    <Doughnut data = {data}/>
    </div>
  )
}

export default Charts