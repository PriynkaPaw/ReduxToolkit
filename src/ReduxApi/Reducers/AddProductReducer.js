import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { ADD_PRODUCT_ACTION } from "../Action_Type/action"
import { UPDATE_PRODUCT_ACTION, DELETE_PRODUCT_ACTION } from "../Action_Type/action"
//post api
export const addProducts = createAsyncThunk(ADD_PRODUCT_ACTION.add_product, async (val) => {


  fetch('http://localhost:3006/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(val)
  })
    .then((res) => {
      res.json().then((data) => {
        console.log("API response", data);
        return data
      })
    })

    .catch(error => {
      console.log("error msy ============>", error);


    });

})

// UPDATE API

export const updateProducts = createAsyncThunk(DELETE_PRODUCT_ACTION.delete_product, async (val) => {


  fetch(`http://localhost:3006/posts/${val.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(val)
  })
    .then((res) => {
      res.json().then((data) => {
        console.log("API update response", data);
        return data
      })
    })

    .catch(error => {
      console.log("error msy ============>", error);


    });

})



// Delete

export const deleteProducts = createAsyncThunk(UPDATE_PRODUCT_ACTION.update_product, async (val) => {


  fetch(`http://localhost:3006/posts/${val.id}`, {
    method: 'DELETE'
  })
    .then((res) => {
      res.json().then((data) => {
        console.log("API Delete response", data);
        return data
      })
    })

    .catch(error => {
      console.log("error msy ============>", error);


    });

})

