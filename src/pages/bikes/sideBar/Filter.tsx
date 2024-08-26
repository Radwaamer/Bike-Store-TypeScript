import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks';

// actions
import { fetchCategories } from 'store/categories/act/actGetCategories';
import { filterCategories } from 'store/categories/act/actFilterCategories';


const Filter = () => {

    const [filterActive, setFilterActive]=useState(false);

    const dispatch = useAppDispatch();
    const {categories}= useAppSelector(state=>state.categories);

    useEffect(()=>{
        dispatch(fetchCategories());
    },[dispatch]);

    return (
        <>
        <div className="flex justify-between items-center gap-4 font-semibold">
            <h3 className="text-lg">Filter</h3>
            <span onClick={()=>setFilterActive(!filterActive)} className="text-2xl cursor-pointer text-gray-600 transition">
                {filterActive?"-":"+"}
            </span>
        </div>
        <ul className={`pl-4 ${filterActive?'hidden':'block'} transition`}>
            {categories && categories.map((category:string,index:number)=>{
                return(
                    <li key={index} className='flex items-center gap-2 my-3'>
                        <input
                        className='scale-125 leading-none' type="checkbox" name={category} id={category} 
                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>
                        dispatch(filterCategories({category,select:e.target.checked}))}/>
                        <label className='text-lg capitalize' htmlFor={category}>{category}</label>
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export default Filter