import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    products: [ "Model 3", "Model Y", "Model S", "Model X", "Solar Roof", "Solar Panels"]
}

const productSlice = createSlice({
    name: "product",
    initialState, 
    reducers: {}

})

export const selectProducts = state => state.product.products

export default productSlice.reducer