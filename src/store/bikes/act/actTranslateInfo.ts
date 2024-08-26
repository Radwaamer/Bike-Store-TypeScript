import { createAsyncThunk } from "@reduxjs/toolkit"
import { TProduct } from "types/productType";

export const translateInfo= createAsyncThunk<TProduct,TProduct>('bikes/translate',
    async(info,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI;
    console.log(JSON.stringify({msg:info,to:"ar",expect:[]}))
    try{
        const response= await fetch('https://muddy-silky-relative.glitch.me/translate',{
            method:'POST',
            headers:{
                "Content-Type" : "Application/Json"
            },
            body:JSON.stringify({msg:info,to:"ar",expect:[]})
        });
        const data:{translation:TProduct}= await response.json();
        return data.translation;
    }catch(error){
        return error instanceof Error ?
        rejectWithValue(error.message):
        rejectWithValue("Failed to fetch bikes");
    }
})