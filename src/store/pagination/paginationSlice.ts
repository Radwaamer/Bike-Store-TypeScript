import { createSlice } from "@reduxjs/toolkit";

interface IPaginationState {
    pagination: number[],
    current: number,
    productsPerPage: number,
    loading: boolean,
    error: string|null,
}

const initialState : IPaginationState = {
    pagination:[],
    current:1,
    productsPerPage:6,
    loading:false,
    error:null,
};

const paginationSlice=createSlice({
    name:"pagination",
    initialState,
    reducers:{

        // change current page
        changeCurrent:(state:IPaginationState,action) => {
            state.current=action.payload;
        },

        // get pagination list
        paginationList:(state:IPaginationState,action) => {
            state.pagination=[];
            for(let i=1;i<=Math.ceil(action.payload.length/state.productsPerPage);i++){
                state.pagination.push(i)
            }
        },

    }
});


export const { changeCurrent } = paginationSlice.actions;
export const { paginationList } = paginationSlice.actions;

export default paginationSlice.reducer;
