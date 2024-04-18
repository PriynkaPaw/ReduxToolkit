import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../Reducers/ProductReducer";
const initialState ={
    data:[],
    error:null,
    isloading:false
}
 const ProductSlice =createSlice({
   name:"products",
   initialState,
   reducers:{},
   extraReducers(builder){
       builder
       .addCase(fetchProducts.pending, (state, action)=>{
           state.isloading=true
       })
       .addCase(fetchProducts.fulfilled, (state, action)=>{
        //    console.log("Product Action ", action.payload);
           state.data= state.data.concat(action.payload)
       })
       .addCase(fetchProducts.rejected, (state, action)=>{
           state.error= action.error.message
       })
   }
})

export default ProductSlice.reducer