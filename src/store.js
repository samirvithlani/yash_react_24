import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/cartSlice";
import bankSlice from "./redux/bankSlice";

export const store = configureStore({
    reducer:{
        cart:cartReducer,
        bank:bankSlice
    }
})