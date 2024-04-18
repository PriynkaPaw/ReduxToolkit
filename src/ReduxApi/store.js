import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slice/ProductSlice";
import AddProductSlice from "./slice/AddProductSlice";
export const store = configureStore({
    reducer:{
        products:ProductSlice,
        addProducts:AddProductSlice
    }
}) 