import { createAsyncThunk } from "@reduxjs/toolkit"
import { AppDispatch } from "store";
import { getPrevBikes } from "store/bikes/act/actGetPrevBikes";
import { filterByCategory } from "store/bikes/bikeSlice";
import { deselectCategory, selectCategory } from 'store/categories/categorySlice';

type TFilterParams ={
    category:string,
    select: boolean
}

interface RootState {
    categories: {
        selectedCategories: string[];
    };
    bikes: {
        bikes: { category: string; }[];
    };
}

export const filterCategories=createAsyncThunk<void,TFilterParams,{ state: RootState, dispatch: AppDispatch }>('category/filterCategory',
    async({category,select}:TFilterParams,thunkAPI)=>{
    const {dispatch, getState}=thunkAPI;
    select? dispatch(selectCategory(category)): dispatch(deselectCategory(category));
    await dispatch(getPrevBikes());

    const selectedCategories=getState().categories.selectedCategories;
    const bikesState=getState().bikes.bikes;

    if(selectedCategories.length!==0){
        const filterdBikes=[];
        for(let i=0;i<selectedCategories.length;i++){
            for(let x=0;x<bikesState.length;x++){
                if(bikesState[x].category.toLowerCase()===selectedCategories[i].toLowerCase()){
                    filterdBikes.push(bikesState[x]);
                }
            }
        }
    dispatch(filterByCategory(filterdBikes));
    }
});