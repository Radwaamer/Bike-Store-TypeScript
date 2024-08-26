import { useState } from 'react'

// sections
import Landing from './landing/Landing';
import ZoomSection from './zoomSection/ZoomSection';

// styles
import styles from './styles.module.css'

const Home = () => {

    const [zoom,setZoom]=useState<boolean>(false);

    return (
        <section>
            <div className="grid grid-cols-12 container justify-between items-center">
                <Landing zoom={zoom} setZoom={setZoom} styles={styles}/>
                <ZoomSection zoom={zoom} setZoom={setZoom} styles={styles}/>
            </div>
        </section>
    )
}

export default Home