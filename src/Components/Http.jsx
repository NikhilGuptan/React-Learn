// ""

import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Http = () => {
    const [value,setValues] = useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((data)=>{
            console.log("data===>",data.data);
            setValues(data.data)
        })
    },[])

  return (
    <div>
        <h1>HTTP Woring</h1>
        <ul>
            {value.map((e)=>{
                return <li>{e.title}</li>
            })}
        </ul>
    </div>
  )
}

