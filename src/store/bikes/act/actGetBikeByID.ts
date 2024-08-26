import { createAsyncThunk } from "@reduxjs/toolkit"
import { TProduct } from "types/productType";

export const getBike = createAsyncThunk<TProduct,string>('bike/getBike', 
    async(id:string, thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const response= await fetch(`${import.meta.env.VITE_JSON_SERVER_PATH}bikes/${id}`);
        const data:TProduct= await response.json();
        return data;
    }catch(error){
        return error instanceof Error ?
        rejectWithValue(error.message) : 
        rejectWithValue('Failed to fetch categories');
    }
});