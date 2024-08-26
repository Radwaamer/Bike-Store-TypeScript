import { Link } from 'react-router-dom';
import { useAppSelector } from 'store/hooks';

// assets
import Compare from 'assets/icons/compare.png';

const BikesCart = () => {

    const count= useAppSelector(state=>state.cart.cart).length;

    return (
        <Link className='relative' to={"cart"}>
            <img className='w-7' src={Compare} alt="" /> 
            {count>0 && <span className='text-sm rounded-full bg-blue 
            py-1 px-2 absolute -top-[105%] -right-[30%]'>{count}</span>}
        </Link>
    )
}

export default BikesCart