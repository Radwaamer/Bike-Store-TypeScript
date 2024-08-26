import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchCategories=createAsyncThunk<string[],void>('category/fetchCategories',
    async (_,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const response=await fetch(import.meta.env.VITE_JSON_SERVER_PATH+'categories');
        const data:string[]=await response.json();
        return data;
    }catch(error){
        return error instanceof Error ?
        rejectWithValue(error.message) : 
        rejectWithValue('Failed to fetch categories');
    }
})