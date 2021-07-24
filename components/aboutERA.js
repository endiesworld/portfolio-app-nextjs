import Image from 'next/image' ;
import EraImage from '../public/images/era.jpg';


export default function AboutEra(){
    return (
         <div className= {`lg:grid lg:grid-cols-12 justify-items-stretch items-stretch grid-flow-row flex flex-col justify-center items-center`}>
                <p className ='lg:flex hidden w-full col-span-2 sm:col-span-1 mt-6 sm:text-sm text-center text-gray-900 justify-center font-semibold'>2021-2021</p>
                <div className ='flex flex-col col-span-10 lg:border-l-2 border-gray-500'>
                    <div className = {`text-gray-500 w-full sm:border-l-2 sm:pl-6 flex flex-col lg:flex-row mr-1`}>
                        <div className = {`lg:w-1/2 w-full mt-6 pb-6 text-gray-300`}>
                            <h1 className='text-2xl mb-4 text-gray-900 font-semibold'>DevPlacement Assessment</h1>
                            <p className='text-gray-500 mb-6 ' >
                                Emergency Response Africa (ERA) is a healthcare technology company that is changing how medical emergencies are managed in Africa, beginning in Nigeria.
                                During my time at ERA, I worked as a front-end developer, and was responsible for revamping and maintaining the hospital app.
                                The hospital app is open to hospital signed up to ERA, which can receive and attend to emergency cases. 
                                The hospital app made use of AWS services like:
                                <span className='block'>Congnito: signup and login service.</span><span className='block'>Lambda: database service</span>
                                <span className='block'>Amplify: backend services.</span>
                            </p>
                            <a href ='https://hospital.emergencyresponseafrica.com/login' className='bg-pink-900 text-white py-1 px-2 '>View online</a>
                            <div className='mt-6'>
                                <p className=' my-6 text-2xl text-gray-900 font-semibold'>
                                    Technologies
                                </p>
                                <div className='flex'>
                                    <p className='bg-pink-900 text-white py-1 px-2  mr-2'>
                                        React
                                    </p>
                                    <p className='bg-pink-900 text-white py-1 px-2 mr-2'>
                                        Redux
                                    </p>
                                    <p className='bg-pink-900 text-white py-1 px-2 mr-2'>
                                        AWS Cognito
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=' lg:w-1/2 my-6 sm:ml-2' >
                            <Image
                                src={EraImage}
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