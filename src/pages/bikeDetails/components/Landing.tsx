import { useState } from 'react'
import { useDispatch } from 'react-redux'

// actions
import { cartHandeler } from 'store/cart/cartSlice';

// custom hooks
import useCompare from 'hooks/useCompare';

// types
import { TProduct } from 'types/productType';


const Landing = ({info}:{info:TProduct}) => {

    const [compare,setCompare]=useState(false)
    const dispatch=useDispatch();

    useCompare(info,setCompare);

    return (
        <div className='h-[45vh] relative'>
            <img className='w-full h-full' src={info["cover image"]} alt={info.name} />
            <div className='absolute bottom-0 left-0 w-full'>
                <div className="container">
                    <h1 className='text-4xl mb-3 font-bold'>{info.name}</h1>
                    <p className='text-2xl font-semibold text-blue'>{info.price.start} - {info.price.end}</p>
                    <button onClick={()=>{
                        dispatch(cartHandeler({info,compare}))
                        setCompare(!compare);
                    }} 
                    className={`py-2 px-6 mt-5 rounded-3xl bg-blue text-black-color 
                    font-bold hover:bg-white-color ${compare?"bg-white-color":""} transition-all`}>
                        {compare?"Compared":"Compare"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Landing