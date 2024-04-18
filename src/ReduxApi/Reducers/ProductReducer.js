import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PRODUCT_ACTIONS } from "../Action_Type/action";
import { updateProducts } from "./AddProductReducer";
export const fetchProducts = createAsyncThunk(PRODUCT_ACTIONS.fetch_products, async()=>{
    const responce = await axios.get('http://localhost:3006/posts')
    // console.log("Products ",  responce.data )
     updateProducts()
    return  responce.data


})