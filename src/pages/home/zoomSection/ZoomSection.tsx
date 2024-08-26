import { useState } from 'react'

// assets
import ZoomView from 'assets/landing/zoom-view.png';
import SecondView from 'assets/landing/second-view.png';

// types
import { LandingProps } from 'types/types';


const ZoomSection = ({zoom,setZoom,styles}:LandingProps) => {

    const [scroll,setScroll]=useState<boolean>(false);

    let oldScrollY = window.scrollY;
    window.onscroll=()=>{
        if(oldScrollY < window.scrollY){
            setScroll(true)
        } else {
            setScroll(false)
        }
        oldScrollY = window.scrollY;
    }

    return (
        <>

        {/* start back button */}
            <div className={`${styles["go-back"]} col-span-1 cursor-pointer rounded-full
            ${zoom?"left-[270%] -top-[45%] relative":"-left-[200%] absolute"}`} 
            onClick={()=>setZoom(false)}>
                <p className={`${styles.back} col-span-1 text-lg cursor-pointer transition-all rounded-full w-fit ml-2 py-1 px-3 relative`}>&lt;</p>
            </div>
        {/* end back button */}

        {/* start zoom content */}
            <div className={`col-span-7 h-full ${zoom?"left-[45%] relative":"-left-[200%] absolute"}`}>

                {/* start content 1 */}
                    <div className={`duration-1000 ease-out min-h-[80vh] ${scroll?"absolute -top-[60%] opacity-0 z-[-1]":"relative top-0 opacity-100"}`}>
                        <div>
                            <h2 className='text-4xl mb-6'>Discover The Biker World</h2>
                            <h3 className='text-5xl font-bold text-blue mb-6'>ODD Bikes</h3>
                            <p className='text-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Consequuntur laudantium rem et aliquid cupiditate blanditiis, 
                                dignissimos sed est officia ex, expedita explicabo odit voluptatem 
                                omnis quaerat nemo saepe molestias architecto?
                            </p>
                        </div>
                        <div className='mt-16'>
                            <img src={ZoomView} alt=""/>
                        </div>
                    </div>
                {/* end content 1 */}
                
                {/* start content 2 */}
                    <div className={`duration-1000 ease-out min-h-[80vh] grid grid-cols-12 ${scroll?"relative bottom-0 opacity-100":"absolute -bottom-[93%] opacity-0 z-[-1]"}`}>
                        <div className='col-span-5'>
                            <div>
                                <h2 className='text-4xl mb-6'>Rear Brakes</h2>
                                <p className='text-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Consequuntur laudantium rem et aliquid cupiditate blanditiis, 
                                    dignissimos sed est officia ex, expedita explicabo odit voluptatem 
                                    omnis quaerat nemo saepe molestias architecto?
                                </p>
                            </div>
                            <div className='mt-16'>
                                <h2 className='text-4xl mb-6'>Rear Brakes</h2>
                                <p className='text-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Consequuntur laudantium rem et aliquid cupiditate blanditiis, 
                                    dignissimos sed est officia ex, expedita explicabo odit voluptatem 
                                    omnis quaerat nemo saepe molestias architecto?
                                </p>
                            </div>
                        </div>
                        <div className='col-span-7'>
                            <img src={SecondView} alt="" />
                        </div>
                    </div>
                {/* end content 2 */}

            </div>
        {/* end zoom content */}

        </>
    )
}

export default ZoomSection