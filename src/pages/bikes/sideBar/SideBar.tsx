// components
import Filter from './Filter';
import Sort from './Sort';


const SideBar = () => {

    return (
        <aside className="h-full border px-4 rounded-md py-8">
            <Sort />
            <hr  className="my-4"/>
            <Filter/>
        </aside>
    )
}

export default SideBar