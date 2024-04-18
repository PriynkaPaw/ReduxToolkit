import { createSlice } from "@reduxjs/toolkit";
import { addProducts } from "../Reducers/AddProductReducer";
import { updateProducts, deleteProducts } from "../Reducers/AddProductReducer";
const initialState = {
    data: [],
    error: null,
    isSuccess: false
}
const AddProductSlice = createSlice({

    name: "AddProducts",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(addProducts.pending, (state, action) => {
                state.isSuccess = false

            })
            .addCase(addProducts.fulfilled, (state, action) => {
                state.data = state.data.concat(action.payload)
                console.log("Action Payload", action.payload)
                console.log("STAte data  ===>", state.data)
                //   state.data=  state.data.push(action.payload)
                state.isSuccess = true
            })
            .addCase(addProducts.rejected, (state, action) => {
                state.error = action.error.message
            })

            // Update

            .addCase(updateProducts.pending, (state, action) => {

            })
            .addCase(updateProducts.fulfilled, (state, action) => {
                state.data.map((user) => {
                    if (user.id === action.payload.id) {
                        user.title = action.payload.title;
                    }
                })
            })

            // delete
            .addCase(deleteProducts.pending, (state, action) => {

            })

            .addCase(deleteProducts.fulfilled, (state, action) => {
                state.data = state.data.filter((user) => user.id !== action.payload.id);
            })

    }


})

export default AddProductSlice.reducer