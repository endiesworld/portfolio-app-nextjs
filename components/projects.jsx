import Link from 'next/link' ;



export default function Projects(){
    return (
         <div className= {` lg:grid lg:grid-cols-12 justify-items-stretch grid-flow-row flex flex-col justify-center items-center`}>
                <p className ='lg:flex hidden w-full col-span-2 sm:col-span-1 mt-6 text-center text-gray-900 justify-center font-semibold'>Now</p>
                <div className = {`col-span-10 sm:col-span-10 lg:border-l-2 sm:pl-6 border-gray-500 `}>
                    <p className = {`border-b-2 border-gray-500 w-full  mt-6 pb-6 text-gray-500`}>
                        <span className='block text-2xl mb-4 text-gray-900 font-semibold'>
                            Currently open to new opportuinities, for new and existing projects.
                        </span>
                        <span className='block'>
                            I seek a position that will leverage my skills and enthusiasm to proffer state-of-the-art solutions to challenges. 
                            Do you think I am a perfect fit for your current opening ?
                        </span>
                        <Link href='/'>
                            <a className = 'text-yellow-600'>Please contact me, </a>
                        </Link>
                        <span>and I will respond within 24hrs.</span>
                    </p>
                </div>
        </div>
    )
}