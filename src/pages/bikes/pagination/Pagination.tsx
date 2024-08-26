import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks';

// actions
import { changeCurrent, paginationList } from 'store/pagination/paginationSlice';


const Pagination = () => {

    const dispatch=useAppDispatch();
    const {bikes}=useAppSelector(state=>state.bikes);
    const {pagination,current}=useAppSelector(state=>state.pagination);

    useEffect(() => {
        bikes.length && dispatch(paginationList(bikes));
    }, [dispatch, bikes]);

    return (
        <div className="flex justify-center items-center gap-4 pt-12">
            {pagination && pagination.map(page=>{
                return(
                    <button key={page} onClick={()=>{
                    dispatch(changeCurrent(page))
                    window.scrollTo({top: 0, behavior:"smooth"});
                }} className={`font-semibold text-2xl px-3 rounded-lg ${page==current?"bg-blue text-black-color":"bg-gray"}`}>
                    {page}</button>
                )
            })}
        </div>
    )
}

export default Pagination