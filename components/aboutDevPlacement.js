import Image from 'next/image' ;
import DevPlaceImage from '../public/images/devplacement.jpg';


export default function AboutDevPlacement(){
    return (
         <div className= {`lg:grid lg:grid-cols-12 justify-items-stretch items-stretch grid-flow-row flex flex-col justify-center items-center`}>
                <p className ='lg:flex hidden w-full col-span-2 sm:col-span-1 mt-6 text-center text-gray-900 justify-center font-semibold'>2020-2020</p>
                <div className ='flex flex-col col-span-10 lg:border-l-2 border-gray-500'>
                    <div className = {`text-gray-500 w-full sm:border-l-2 sm:pl-6 flex flex-col lg:flex-row mr-1`}>
                        <div className = {`lg:w-1/2 w-full mt-6 pb-6 text-gray-300`}>
                            <h1 className='text-2xl mb-4 text-gray-900 font-semibold'>DevPlacement Assessment</h1>
                            <p className='text-gray-500 mb-6 ' >
                                DevPlacement assessment is a web app I built during an interview process with Emergency Response Africa, for a front-end position.
                                The app consumes randomuser.me API to fetch random users and display all vital details,
                                and further use the gender endpoint to choose either the male or female gender.
                                The user of the app can also go further in filtering users/user details to be displayed. 
                                For instance, you can choose if to display user phone number, and user countries. You can also further filter users by country of choice. 

                            </p>
                            <a href ='https://devplacement-assessment-web.herokuapp.com/' className='bg-pink-900 text-white py-1 px-2 '>View online</a>
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
                                </div>
                            </div>
                        </div>
                        <div className=' lg:w-1/2 my-6 sm:ml-2' >
                            <Image
                                src={DevPlaceImage}
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