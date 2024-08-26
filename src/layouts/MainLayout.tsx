import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useAppDispatch } from 'store/hooks'

import Header from '../components/common/header/Header'

// actions
import { setCart } from 'store/cart/cartSlice'


const MainLayout = () => {

    const dispatch=useAppDispatch();

    useEffect(()=>{
        const cartData : string | null = localStorage.getItem("cart");
        if(cartData){
            dispatch(setCart(JSON.parse(cartData)));
        }
    },[dispatch]);

    return (
        <>
        <Header />
        <Outlet />
        </>
    )
}

export default MainLayout