const DetailsTitle = ({children}:{children:React.ReactNode}) => {
    return (
        <div className='relative mb-8'>
            <h3 className='text-xl pb-2'>{children}</h3>
            <span className='absolute left-0 bottom-0 w-16 rounded-3xl h-3 bg-blue translate-y-full'></span>
        </div>
    )
}

export default DetailsTitle