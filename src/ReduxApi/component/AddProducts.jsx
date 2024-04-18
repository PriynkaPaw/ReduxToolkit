import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addProducts} from '../Reducers/AddProductReducer'
function AddProducts() {
    const dispatch = useDispatch()
    const {isSuccess} = useSelector((state)=> state.addProducts.data)
    const [data, setData] = useState({
        name:'',
        title:'',
    
    })
    const PostUser = useSelector((state) => state.addProducts.data)

    function handleChange(e){
        const {name, value} = e.target
        setData((preData)=>({...preData, [name]:value }))
    }

  function submitHandler(e){
   console.log("Dataaa",data)

   e.preventDefault()
   dispatch(addProducts(data))
  }
  
  return (
    <div>
        {
            isSuccess !=='' && <p>SuccessFully Added</p>
        }
        <h1>ALL Posts</h1>

      
        <input name='name' placeholder='Enter name' value={data.name} onChange={handleChange}/> <br />
        <input name='title' placeholder='Enter title' value={data.title} onChange={handleChange} /> <br />
      <button onClick={submitHandler}>Add Title</button>
    </div>
  )
}

export default AddProducts