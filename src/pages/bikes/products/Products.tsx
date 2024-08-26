import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks';

// actions
import { fetchBikes } from 'store/bikes/act/actGetBikes';

// components
import ProductCard from 'components/ODD/ProductCard';

// types
import { TProduct } from 'types/productType';


const Products = () => {

    const dispatch=useAppDispatch();
    useEffect(() => {dispatch(fetchBikes())},[dispatch]);
    
    const {bikes}=useAppSelector(state=>state.bikes);
    const {current,productsPerPage}=useAppSelector(state=>state.pagination);

    return (
        <div className='mt-12 grid grid-cols-3 gap-8'>
            {bikes && bikes.slice((current-1)*productsPerPage,current*productsPerPage)
            .map((bike:TProduct)=><ProductCard key={bike.id} product={bike}/>)}
        </div>
    )
}

export default Products