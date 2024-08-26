// components
import DetailsBox from 'components/ODD/DetailsBox';
import DetailsTitle from 'components/titles/DetailsTitle';
import Slider from 'components/sliders/Slider';

// types
import { TProduct } from 'types/productType';


const Gallery = ({info}:{info:TProduct}) => {
    return (
        <div className='mt-16'>
            <DetailsTitle>{info.name} Image Gallery</DetailsTitle>
            <p className='text-gray text-sm mb-4'>Browse through a collection of {info.images.length} 
                high-quality images showcasing {info.name}
            </p>
            <Slider>
                {info.images.map((image,index)=>{
                return(
                        <DetailsBox key={index}>
                            <img className='w-full' src={image} alt="" />
                        </DetailsBox>
                    )
                })}
            </Slider>
        </div>
    )
}

export default Gallery