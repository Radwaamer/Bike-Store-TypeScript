// components
import Search from './search/Search.js'
import SideBar from './sideBar/SideBar'
import Products from './products/Products.js'
import Pagination from './pagination/Pagination.js'


const Bikes = () => {
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-3'>
                <SideBar />
            </div>
            <section className='col-span-9 px-4'>
                <div className="container">
                    <Search />
                    <Products />
                    <Pagination/>
                </div>
            </section>
        </div>
    )
}

export default Bikes