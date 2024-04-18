import React, { useState } from 'react'

function IncreamentCart() {

  const [data, setData] = useState(0)
  function SaveCart(){
   localStorage.setItem("data", data)

      setData(data+1)
  }
  const val = localStorage.getItem("data", data)


  return (
    <div>
        <h1>value {val} </h1>
        <button onClick={()=>SaveCart()}>add to cart</button>
    </div>
  )
}

export default IncreamentCart