// components
import DetailsBox from 'components/ODD/DetailsBox';
import DetailsTitle from 'components/titles/DetailsTitle';

// types
import { TProduct } from 'types/productType';

const Prices = ({info}:{info:TProduct}) => {
    return (
        <div className="col-span-4">
            <DetailsTitle>{info.name} On-Road Price In India</DetailsTitle>
            <p className='text-gray text-sm mb-4'>Explore {info.name} pricing in India's major cities. {info.name} price starts from {info.price.start}.</p>
            <DetailsBox>
                <table className='w-full'>
                    <thead>
                        <tr className='text-sm text-gray text-left'>
                            <th>City</th>
                            <th>On-Road Price</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {info.prices.map((price,index)=>{
                            return(
                                <tr key={index}>
                                    <td className='py-2 pr-2'>{price.city}</td>
                                    <td className='p-2 pr-2'>{price.price}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </DetailsBox>
        </div>
    )
}

export default Prices