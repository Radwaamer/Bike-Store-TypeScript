// components
import DetailsBox from 'components/ODD/DetailsBox'
import DetailsTitle from 'components/titles/DetailsTitle'

// assets
import Engine from 'assets/carDetails/engine.svg';
import Mileage from 'assets/carDetails/mileage.svg';
import Fuel from 'assets/carDetails/fuel_tank.svg';
import Gears from 'assets/carDetails/gears.svg';
import Brakes from 'assets/carDetails/brake.svg';
import Mechanism from 'assets/carDetails/starting-mechanism.svg';
import Wheel from 'assets/carDetails/wheel.svg';
import Body from 'assets/carDetails/class.svg';

// types
import { TProduct } from 'types/productType';

const Overview = ({info}:{info:TProduct}) => {

    const data=[
        {id:1, image:Engine, name:'Engine Capacity', value:info["Engine Capacity"]},
        {id:2, image:Mileage, name:'Mileage', value:info["Mileage"]},
        {id:3, image:Fuel, name:'Fuel Tank Capacity', value:info["Fuel Tank Capacity"]},
        {id:4, image:Gears, name:'Gears', value:info["Gears"]},
        {id:5, image:Brakes, name:'Brakes', value:info["Brakes"]},
        {id:6, image:Mechanism, name:'Starting Mechanism', value:info["Starting Mechanism"]},
        {id:7, image:Wheel, name:'Wheel Type', value:info["Wheel Type"]},
        {id:8, image:Body, name:'Body Type', value:info["Body Type"]}
    ]

    return (
        <div className='col-span-8'>
            <DetailsTitle>{info.name} Overview</DetailsTitle>
            <DetailsBox>
                <div className='grid grid-cols-3 gap-4'>
                    {data.map((item)=>{
                        return(
                            <div key={item.id} className='flex gap-4'>
                                <img className="w-8" src={item.image} alt={item.name} />
                                <div>
                                    <span className='text-gray text-sm'>{item.name}</span>
                                    <p>{item.value}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </DetailsBox>
        </div>
    )
}

export default Overview