import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    balance: 0,
}

const bankSlice = createSlice({
    name:"bank",
    initialState,
    reducers:{
        deposit(state,action){

            state.balance = state.balance + action.payload
        },
        withdraw(state,action){
            state.balance = state.balance - action.payload
        }
        
    }
})

export const {deposit,withdraw} = bankSlice.actions
export default bankSlice.reducer