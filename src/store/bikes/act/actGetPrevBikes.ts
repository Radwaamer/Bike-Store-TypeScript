import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBikes } from "./actGetBikes";
import { TProduct } from "types/productType";

interface RootState {
    bikes: {
        prevBikes: TProduct[];
    };
}

export const getPrevBikes=createAsyncThunk<TProduct[] | void, void, { state: RootState }>("bike/getPrevBikes",
    async (_,thunkAPI)=>{
    const {getState,dispatch}=thunkAPI;
    if(getState().bikes.prevBikes.length===0){
        dispatch(fetchBikes());
        }
        else{
        return getState().bikes.prevBikes;
    }

})