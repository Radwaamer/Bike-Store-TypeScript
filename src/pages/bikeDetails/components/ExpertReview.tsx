// components
import DetailsBox from 'components/ODD/DetailsBox';
import DetailsTitle from 'components/titles/DetailsTitle';
import ReadMore from 'components/ODD/readMore/ReadMore';

// assets
import Star from 'assets/icons/star.png';
import Like from 'assets/icons/like.svg';
import DisLike from 'assets/icons/dis_like.svg';

// types
import { Rating, TProduct } from 'types/productType';


const ExpertReview = ({info}:{info:TProduct}) => {
    return (
        <div className="col-span-8">
                        <DetailsTitle>{info.name} Expert Review</DetailsTitle>
                        <DetailsBox>
                            <div className='flex gap-8 items-center'>
                                <div className='rounded-full p-8 text-black-color font-bold bg-blue w-fit h-fit'>
                                    <span>8.6</span>
                                </div>
                                <div className="grid grid-cols-12 w-full gap-4">
                                    {Object.keys(info["expert review"].rating).map((rate:string,index:number)=>{
                                        return(
                                            <div key={index} className='col-span-4 justify-between'>
                                                <div className={`${(index+1) % 3 !== 0 ? "border-r border-gray":""}`}>
                                                    <p className='text-gray'>{rate}</p>
                                                    <p className='flex gap-2 items-center'>
                                                        <img className='w-5' src={Star} alt="" />
                                                        <span>{info["expert review"].rating[rate as keyof Rating]}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <hr className='border-gray my-7'/>
                            <div className="grid-cols-1">
                                <div className='grid grid-cols-3'>
                                    <div>
                                        <p className='flex gap-3 items-center mb-4 font-bold'>
                                            <img className='w-5' src={Like} alt="" />
                                            <span>Pros</span>
                                        </p>
                                        <ul className='list-disc px-5 text-gray grid gap-2'>
                                            {info["expert review"].pros.map(pro=><li key={pro}>{pro}</li>)}
                                        </ul>
                                    </div>
                                    <div>
                                        <p className='flex gap-3 items-center mb-4 font-bold'>
                                            <img className='w-5' src={DisLike} alt="" />
                                            <span>Cons</span>
                                        </p>
                                        <ul className='list-disc px-5 text-gray grid gap-2'>
                                        {info["expert review"].cons.map(pro=><li key={pro}>{pro}</li>)}
                                        </ul>
                                    </div>
                                    <div>
                                        <p className='font-bold'>Verdict</p>
                                        <p className='text-gray'>{info["expert review"].verdict}</p>
                                    </div>
                                </div>
                            </div>
                            <hr className='border-gray my-7'/>
                            <ReadMore>
                                {info["expert review"].description}
                            </ReadMore>
                        </DetailsBox>
                    </div>
    )
}

export default ExpertReview