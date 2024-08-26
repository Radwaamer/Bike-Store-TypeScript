import { createSlice } from "@reduxjs/toolkit"

import { fetchBikes } from "./act/actGetBikes";
import { getBike } from "./act/actGetBikeByID";
import { getPrevBikes } from "./act/actGetPrevBikes";
import { searchBikes } from "./act/actSearchBikes";
import { translateInfo } from "./act/actTranslateInfo";
import { TProduct } from "types/productType";

interface IBikeState {
    prevBikes:TProduct[],
    bikes:TProduct[],
    selectedBike:TProduct | null,
    loading:boolean,
    error:string|null
}

const initialState: IBikeState = {prevBikes:[],bikes:[],selectedBike:null,loading:false,error:null};

const bikeSlice=createSlice({
    name:"bike",
    initialState,


    reducers:{

        // filter by category
        filterByCategory:(state:IBikeState,action)=>{
            state.bikes=action.payload;
        },

        // sort Bikes by price
        sortByPrice:(state:IBikeState,action)=>{
            state.bikes= action.payload=="asc"? 
            state.bikes.slice().sort((a,b)=>Number((a.price.start).slice(1))-Number((b.price.start).slice(1))) : 
            state.bikes.slice().sort((a,b)=>Number((b.price.start).slice(1))-Number((a.price.start).slice(1)));
        }

    },


    extraReducers:(builder)=>{

        // fetch bikes
        builder.addCase(fetchBikes.pending,(state:IBikeState)=>{
            state.loading=true;
            state.error=null;
        });
        builder.addCase(fetchBikes.fulfilled,(state:IBikeState,action)=>{
            state.loading=false;
            state.bikes=action.payload;
            state.prevBikes=state.bikes;
        });
        builder.addCase(fetchBikes.rejected,(state:IBikeState,action)=>{
            state.loading=false;
            if (action.payload && typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        // get prev bikes data
        builder.addCase(getPrevBikes.pending,(state:IBikeState)=>{
            state.loading=true;
            state.error=null;
        });
        builder.addCase(getPrevBikes.fulfilled,(state:IBikeState,action)=>{
            state.loading=false;
            if(action.payload){
                state.bikes=action.payload
            }
        });
        builder.addCase(getPrevBikes.rejected,(state:IBikeState,action)=>{
            state.loading=false;
            if (action.payload && typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        // get bike by id
        builder.addCase(getBike.pending,(state:IBikeState)=>{
            state.loading=true;
            state.error=null;
        });
        builder.addCase(getBike.fulfilled,(state:IBikeState,action)=>{
            state.loading=false;
            state.selectedBike=action.payload;
        });
        builder.addCase(getBike.rejected,(state:IBikeState,action)=>{
            state.loading=false;
            if (action.payload && typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        // search bikes
        builder.addCase(searchBikes.pending,(state:IBikeState)=>{
            state.loading=true;
            state.error=null;
        });
        builder.addCase(searchBikes.fulfilled,(state:IBikeState,action)=>{
            state.loading=false;
            const searchTerm = String(action.payload).toLowerCase();
            state.bikes=state.bikes.filter((bike:TProduct)=>bike.name.toLowerCase().includes(searchTerm));
        });
        builder.addCase(searchBikes.rejected,(state:IBikeState,action)=>{
            state.loading=false;
            if (action.payload && typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        // translate bike info
        builder.addCase(translateInfo.pending,(state:IBikeState)=>{
            state.loading=true;
            state.error=null;
        });
        builder.addCase(translateInfo.fulfilled,(state:IBikeState,action)=>{
            state.loading=false;
            state.selectedBike=action.payload;
        });
        builder.addCase(translateInfo.rejected,(state:IBikeState,action)=>{
            state.loading=false;
            if (action.payload && typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

    }
});


export const {filterByCategory}=bikeSlice.actions;
export const {sortByPrice}=bikeSlice.actions;

export default bikeSlice.reducer;