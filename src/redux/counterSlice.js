import { createSlice } from "@reduxjs/toolkit";
/* create slice method returns automatically the action as well as reducer */
export const counterSlice= createSlice({
    name:'counterApp',
    initialState:{value:0},
    /* ations */
    reducers:{
        increment:(state)=>
        {
            state.value+=1
        },
        decrement:(state)=>
            {
                state.value-=1
            },
            reset:(state)=>
                {
                    state.value=0
                },
            changeRange:(state,action)=>
            {
               state.value+=action.payload
            }


     }
})
/* action are need to component */
export const {increment,decrement,reset,changeRange}=counterSlice.actions
/* reducer are need to store to updtae state  */
export default counterSlice.reducer