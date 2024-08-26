import { useState } from 'react'

// styles
import styles from './styles.module.css'

const Slider = ({children}:{children:React.ReactNode[]}) => {

    const [indexBox,setIndexBox]=useState(-1);
    return (
        <div>
            <div className={`${styles.slider} grid p-4 gap-4 grid-flow-col overflow-x-auto`}>
                {children && children.map((child,index)=>{
                    return(
                        <div key={index} className={`${styles.box} ${indexBox==index || index<indexBox ?styles[`not-active-box`]:""}`}>
                            {child}
                        </div>
                    )
                })}
            </div>
            <div className='mr-3 flex gap-4 justify-end'>
                <button className={`rounded-full py-1 px-2 shadow-sm shadow-white-color disabled:text-gray`} 
                disabled={indexBox<0 ?true:false} onClick={()=>setIndexBox(indexBox-1)}>&lt;</button>
                <button className={`rounded-full py-1 px-2 shadow-sm shadow-white-color disabled:text-gray`} 
                disabled={indexBox==children.length-4?true:false} onClick={()=>setIndexBox(indexBox+1)}>&gt;</button>
            </div>
        </div>
    )
}

export default Slider