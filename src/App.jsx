import React, { useEffect, useState } from 'react'
import "../src/App.css"


export default function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)
  const [totalCount, setTotalCount] = useState(0)


  const countn1 = ()=>{
    setCount1(count1+1)
  }
  const countn2 = ()=>{
    setCount2(count2+1)
  }
  const countn3 = ()=>{
    setCount3(count3+1)
  }

 useEffect(()=>{
     
    setTotalCount(count1 + count2 + count3)
 },[countn1,count2,count3])

  return (

    <div className='parent'>
      <h1 style={{margin:"100px 0", color:"Red"}}>sum: {totalCount}</h1>
      <h2 style={{marginLeft:"75px", color:"Red"}}>{count1}</h2>
      <button className='btn' onClick={()=> countn1()}>count</button>
      <h2 style={{marginLeft:"75px", color:"Red"}}>{count2}</h2>
      <button className='btn' onClick={()=> countn2()}>count</button>
      <h2 style={{marginLeft:"75px", color:"Red"}}>{count3}</h2>
      <button className='btn' onClick={()=> countn3()}>count</button>
    </div>
  )
}
