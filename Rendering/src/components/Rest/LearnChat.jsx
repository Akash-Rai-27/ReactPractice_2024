import React,{useState} from 'react'
import BarChat from './BarChat'
import {UserData} from './Data.js'
function LearnChat() {
    const[userData, setUserData] = useState({
        labels: UserData.map((data)=>data.year) ,
        datasets: [{
            label : "Profits over the year",
            data : UserData.map((data)=>data.userGain),
            barThickness :20 , // thickness of the bar
            backgroundColor : ["teal","orange","lightgreen","violet","red","yellow"],// color of bars
            borderColor: "white",
            borderWidth: 2,
            borderRadius: 5,
            // barPercentage: ,

        }]
    });
  return (
    <div style={{width: 400}}>
        <BarChat chartData = {userData}/>
    </div>
  )
}

export default LearnChat