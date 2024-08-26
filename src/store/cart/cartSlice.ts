import { createSlice } from "@reduxjs/toolkit"
import { TProduct } from "types/productType";

export interface ICartState {
    cart: TProduct[],
    loading: boolean,
    error: string | null,
}

interface ICartHandelerAction {
    payload: {
        compare: boolean,
        info: TProduct,
    }
    type: string;
}

interface ISetCartAction {
    payload:TProduct[],
    type:string;
}

const initialState: ICartState = {cart:[],loading:false,error:null}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        cartHandeler:(state:ICartState,action:ICartHandelerAction)=>{
            if(action.payload.compare){
                state.cart=state.cart.filter(item=>item.id!=action.payload.info.id);
            }else{
                state.cart.push(action.payload.info);
            }
            localStorage.setItem("cart",JSON.stringify(state.cart));
        },

        setCart:(state:ICartState,action:ISetCartAction)=>{
            state.cart=action.payload;
            localStorage.setItem("cart",JSON.stringify(state.cart));
        }

    }
});

export const {cartHandeler}=cartSlice.actions;
export const {setCart}=cartSlice.actions;

export default cartSlice.reducer;