import { Link } from 'react-router-dom'

// assets
import MainLanding from 'assets/landing/main-view.png';
import Overlay from 'assets/landing/overlay.png';
import Zoom from 'assets/icons/zoom.svg';
import Line from 'assets/icons/line.svg';

// types
import { LandingProps } from 'types/types';


const Landing = ({zoom,setZoom,styles}:LandingProps) => {
    return (
        <>

        {/* start landing text */}
            <div className={`${zoom?"absolute -right-[-200%]":"relative right-0 col-span-4"}`}>
                <h1 className='text-6xl text-blue mb-6'>Bike</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Consequuntur laudantium rem et aliquid cupiditate blanditiis, 
                    dignissimos sed est officia ex, expedita explicabo odit voluptatem 
                    omnis quaerat nemo saepe molestias architecto?
                </p>
                <Link className={`${styles["explore-btn"]} rounded-full mt-7 block w-fit p-[2px] relative overflow-hidden bg-black-color`} to={"bikes"}>
                    <button className='rounded-full py-2 px-6 relative bg-black-color z-10'>Explore Now</button>
                </Link>
            </div>
        {/* end landing text */}

        {/* start landing photo */}
            <div className={`${zoom?"right-[77.5%] top-[30%] w-[45rem] z-10 fixed":"col-span-8 right-0 relative"}`}>
                <img className={`w-full`} src={MainLanding} alt="" />
                <img className='absolute bottom-0 w-full right-0' src={Overlay} alt="" />
                <div className={`${styles["zoom-option"]} absolute top-[54%] left-[39%] w-20 cursor-pointer hover:scale-125 ${zoom?"hidden":""}`}
                    onClick={()=>setZoom(true)}>
                    <img src={Zoom} alt="" />
                </div>
                <div className={`${styles["zoom-option"]} absolute top-[16%] left-[63%] w-20 cursor-pointer hover:scale-125 ${zoom?"hidden":""}`}
                    onClick={()=>setZoom(true)}>
                    <img src={Zoom} alt="" />
                </div>
                <div className={`${styles["zoom-option"]} absolute top-[41%] left-[53%] w-20 cursor-pointer hover:scale-125 ${zoom?"hidden":""}`}
                    onClick={()=>setZoom(true)}>
                    <img src={Zoom} alt="" />
                </div>
                <div className={`${styles["zoom-option"]} absolute top-[36%] left-[74%] w-20 cursor-pointer hover:scale-125 ${zoom?"hidden":""}`}
                    onClick={()=>setZoom(true)}>
                    <img src={Zoom} alt="" />
                </div>
                <div className={`flex justify-between gap-3 items-center absolute bottom-0 right-0 w-full ${zoom?"hidden":""}`}>
                    <div className='flex gap-2 items-center'>
                        <img className='w-3' src={Line} alt="" />
                        <div>
                            <p className='text-xs'>Speed</p>
                            <span>80.5 KM/H</span>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img className='w-3' src={Line} alt="" />
                        <div>
                            <p className='text-xs'>Material</p>
                            <span>CARBON(CF)</span>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img className='w-3' src={Line} alt="" />
                        <div>
                            <p className='text-xs'>Sizes</p>
                            <span>S,M,L,XL</span>
                        </div>
                    </div>
                </div>
            </div>
        {/* end landing photo */}

        </>
    )
}

export default Landing