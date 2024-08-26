import { useAppDispatch, useAppSelector } from 'store/hooks';

// actions
import { cartHandeler, setCart } from 'store/cart/cartSlice';

// types
import { Color } from 'types/productType';

const Cart = () => {

    const dispatch=useAppDispatch();
    const {cart}=useAppSelector(state=>state.cart);

    const compareOptions : string[] = 
    ["Bike","Price","Engine Capacity","Mileage","Fuel Tank Capacity",
    "Gears","Expert Rating","Colors","Cons","Pros"];

    return (
        <div>
            <div className="container">
                <table className='border w-full text-center'>
                    <thead>
                        <tr className='text-blue'>
                        <th className='border p-2 text-red-600'>
                            <button onClick={()=>dispatch(setCart([]))}>Delete All</button>
                        </th>
                            {compareOptions.map((option,index)=><th key={index} className='border p-2'>{option}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {cart && cart.map(item=>{
                            return(
                                <tr key={item.id}>
                                    <td className='border p-2 text-red-600'>
                                        <button onClick={()=>dispatch(cartHandeler({info:item,compare:true}))}>Delete</button>
                                    </td>
                                    <td className='border p-2'>
                                        <p className='mb-4 font-bold'>{item.name}</p>
                                        <img className='w-28 h-28 rounded-full mx-auto' src={item["small image"]} alt="" />
                                    </td>
                                    <td className='border p-2'>{item.price.start} - {item.price.end}</td>
                                    <td className='border p-2'>{item["Engine Capacity"]}</td>
                                    <td className='border p-2'>{item["Mileage"]}</td>
                                    <td className='border p-2'>{item["Fuel Tank Capacity"]}</td>
                                    <td className='border p-2'>{item["Gears"]}</td>
                                    <td className='border p-2'>8.6/10</td>
                                    <td className='border p-2'>
                                        <ul className='flex flex-col gap-3'>
                                            {item.colors.map((color:Color,index:number)=><li key={index} style={{backgroundColor:color.color}} 
                                            className={`w-8 h-8 rounded-full mx-auto`}></li>)}
                                        </ul>
                                    </td>
                                    <td className='border p-2'>
                                        <ul>{item["expert review"].cons.map((con:string,index:number)=><li key={index}>{con}</li>)}</ul>
                                    </td>
                                    <td className='border p-2'>
                                    <ul>{item["expert review"].pros.map((pro:string,index:number)=><li key={index}>{pro}</li>)}</ul>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Cart