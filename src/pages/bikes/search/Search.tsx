import { useRef } from 'react';

// assets
import SearchIcon from 'assets/icons/search.png';

// actions
import { searchBikes } from 'store/bikes/act/actSearchBikes';
import { useAppDispatch } from 'store/hooks';

const Search = () => {

    const dispatch= useAppDispatch();
    const searchInput= useRef<HTMLInputElement>(null);
    
    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault();
        let searchValue:string= searchInput.current!.value;
        dispatch(searchBikes(searchValue));
        searchValue="";
    }

    return (
        <form onSubmit={(e:React.FormEvent)=>handleSubmit(e)} className='relative'>
            <input className='w-1/2 placeholder:text-white-color placeholder:text-sm 
            bg-transparent border-l border-b border-white-color rounded-xl py-2 px-4 mx-auto block outline-none' 
            type="search" name="" id="" placeholder='Search For Bikes, Eg:Hero, Or Royal'
            ref={searchInput}/>
            <button className='w-9 absolute top-1/2 right-1/4 mr-3 -translate-y-1/2 hover:scale-105' type='submit'>
                <img className='w-full' src={SearchIcon} alt="search" />
            </button>
        </form>
    )
}

export default Search