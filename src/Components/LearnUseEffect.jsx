import React, { useEffect, useState } from 'react'

export const LearnUseEffect = () => {
    const [input,setInput] = useState("")

    useEffect(()=>{
        console.log("calling useEffect");
    },[input])

  return (
    <div>
        <h1>Learn UseEffect</h1>
        <input type="text" value={input}  onChange={(e)=>{setInput(e.target.value)}}/>
    </div>
  )
}
