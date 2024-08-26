import { createAsyncThunk } from "@reduxjs/toolkit"
import { TProduct } from "types/productType";

export const fetchBikes=createAsyncThunk<TProduct[],void>('bike/fetchBikes',async (_,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const response=await fetch(import.meta.env.VITE_JSON_SERVER_PATH+'bikes');
        const bikes:TProduct[]=await response.json();
        return bikes;
    }catch(error){
        return error instanceof Error ?
        rejectWithValue(error.message):
        rejectWithValue("Failed to fetch bikes");
    }
});