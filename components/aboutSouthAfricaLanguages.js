import Image from 'next/image' ;
import SouthAfrica from '../public/images/southAfrica.png';


export default function AboutSouthAfrica(){
    return (
        <div className= {`lg:grid lg:grid-cols-12 justify-items-stretch items-stretch grid-flow-row flex flex-col justify-center `}>
                <p className ='lg:flex hidden w-full col-span-2 sm:col-span-1 mt-6 sm:text-sm text-center text-gray-900 justify-center font-semibold'>2022-2022</p>
                <div className ='flex flex-col col-span-10 lg:border-l-2 border-gray-500'>
                    <div className = {`text-gray-500 w-full sm:border-l-2 sm:pl-6 flex flex-col lg:flex-row mr-1`}>
                        <div className = {`lg:w-1/2 w-full mt-6 pb-6 text-gray-300`}>
                            <h1 className='text-2xl mb-4 text-gray-900 font-semibold'>EDSA Classification Hackathon</h1>
                            <p className='text-gray-500 mb-6 ' >
                                In this challenge, I was required to take text which is in any of South Africa 11 Official languages 
                                and identify which language the text is in. This is an example of NLP Language Identification, 
                                the task of determining the natural language that a piece of text is written in. 
                            </p>
                            <span className='text-gray-500 mb-6 block '><a href='https://southafrica-info.com/arts-culture/11-languages-south-africa/'>Image source</a></span>
                            <a href ='https://emmanuelokoro.com/' className='bg-pink-900 text-white py-1 px-2 '>View online</a>
                            <div className='mt-6'>
                                <p className=' my-6 text-2xl text-gray-900 font-semibold'>
                                    Technologies
                                </p>
                                <div className='flex'>
                                    <p className='bg-pink-900 text-white py-1 px-2  mr-2'>
                                        Python
                                    </p>
                                    <p className='bg-pink-900 text-white py-1 px-2 mr-2'>
                                        NLTK
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=' lg:w-1/2 my-6 sm:ml-2' >
                            <Image
                                src={SouthAfrica}
                                alt="Barx image"
                                objectFit='scale-down'
                            />
                        </div>
                    </div>
                    <div className='  border-b-2 border-gray-500 sm:ml-6 text-gray'></div>
                </div>
        </div>
    )
}