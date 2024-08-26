import { createAsyncThunk } from "@reduxjs/toolkit"
import { getPrevBikes } from "./actGetPrevBikes";
import { AppDispatch } from "store";

export const searchBikes=createAsyncThunk<string,string,{dispatch: AppDispatch}>('bike/searchBikes',
    async(search:string,thunkAPI)=>{
    const {dispatch}= thunkAPI;
    await dispatch(getPrevBikes());
    return search;
})