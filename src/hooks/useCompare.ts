import { useEffect } from 'react'
import { useAppSelector } from 'store/hooks'

// types
import { TProduct } from 'types/productType'

const useCompare = (info:TProduct,setCompare:React.Dispatch<React.SetStateAction<boolean>>) => {
    const {cart}=useAppSelector(state=>state.cart)
    useEffect(()=>{
        if(cart.find(item=>item.id==info.id)){
            setCompare(true)
        }else{
            setCompare(false);
        }
    },[])
}

export default useCompare