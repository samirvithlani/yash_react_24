//action,reducer...

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: [],
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        //actions
        addToCart: (state,action)=>{
            //state --> initial state
            //action --->type ,payload
            //type --> "cart/addToCart"
            //payload --> object
            // console.log("action",action)
            // console.log("state",state.cart)
            state.cart = [...state.cart,action.payload]
        }
    }
})
export const {addToCart}  = cartSlice.actions
export default cartSlice.reducer
