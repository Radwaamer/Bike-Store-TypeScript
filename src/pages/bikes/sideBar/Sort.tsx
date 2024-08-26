import { useState } from 'react'
import { useAppDispatch } from 'store/hooks';

// assets
import Ascending from 'assets/icons/ascending.png';
import Descending from 'assets/icons/descending.png';

// actions
import { sortByPrice } from 'store/bikes/bikeSlice';


type TSortMode = "asc"|"desc";

const Sort = () => {

    const [sortMode, setSortMode] = useState<TSortMode>("desc");
    const dispatch=useAppDispatch();

    const handleSort=()=>{
        setSortMode(sortMode==="asc"?"desc":"asc");
        dispatch(sortByPrice(sortMode))
    }

    return (
        <div className="flex justify-between items-center gap-4 font-semibold">
            <h3 className="text-lg">Sort</h3>
            <img onClick={handleSort}
            className='w-5 cursor-pointer hover:animate-bounce transition' 
            src={sortMode==="asc"?Ascending:Descending} alt="" />
        </div>
    )
}

export default Sort