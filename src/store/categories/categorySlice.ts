import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "./act/actGetCategories";
import { filterCategories } from "./act/actFilterCategories";

export interface ICategoryState {
    categories:string[],
    selectedCategories: string[],
    loading: boolean,
    error: string|null,
}

interface ICartPayload {
    type: string,
    payload: string
}

const initialState: ICategoryState = {categories:[],selectedCategories:[],loading:false,error:null};

const categorySlice=createSlice({
    name:"category",
    initialState,
    reducers:{
        selectCategory:(state:ICategoryState,action:ICartPayload)=>{
            state.selectedCategories.push(action.payload);
        },
        deselectCategory:(state:ICategoryState,action:ICartPayload)=>{
            state.selectedCategories=state.selectedCategories.filter((category:string)=>category!==action.payload);
        }
    },
    extraReducers:(builder)=>{

        // fetch categories
        builder.addCase(fetchCategories.pending,(state:ICategoryState)=>{
            state.loading=true;
            state.error=null;
        });
        builder.addCase(fetchCategories.fulfilled,(state:ICategoryState,action:{payload:string[]})=>{
            state.loading=false;
            state.categories=action.payload;
        });
        builder.addCase(fetchCategories.rejected,(state:ICategoryState,action)=>{
            state.loading=false;
            if (action.payload && typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        // filter category
        builder.addCase(filterCategories.pending,(state:ICategoryState)=>{
            state.loading=true;
            state.error=null;
        });
        builder.addCase(filterCategories.fulfilled,(state:ICategoryState)=>{
            state.loading=false;
        });
        builder.addCase(filterCategories.rejected,(state:ICategoryState,action)=>{
            state.loading=false;
            if (action.payload && typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

    }
});

export const {selectCategory} = categorySlice.actions; 
export const {deselectCategory} = categorySlice.actions; 

export default categorySlice.reducer;