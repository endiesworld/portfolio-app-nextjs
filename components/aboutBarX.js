export default function AboutBarx(){
    return (
         <div className= {`lg:grid lg:grid-cols-12 justify-items-stretch items-stretch grid-flow-row flex flex-col justify-center items-center`}>
                <p className ='lg:flex hidden w-full col-span-2 sm:col-span-1 mt-6 text-center text-gray-900 justify-center font-semibold'>2020-2021</p>
                <div className ='flex flex-col col-span-10 lg:border-l-2 border-gray-500'>
                    <div className = {`text-gray-500 w-full border-l-2 pl-6 flex flex-col lg:flex-row mr-1`}>
                        <div className = {`lg:w-1/2 w-full mt-6 pb-6 text-gray-300`}>
                            <h1 className='text-2xl mb-4 text-gray-900 font-semibold'>Bar-X</h1>
                            <p className='text-gray-500 mb-6 ' >
                                Bar-X is a premier management platform for Bars.
                                Using Bar X, Bar owners or managers are able to engage
                                their customers, process bookings and payments , improve
                                business operation and ultimately sales through our “Bar
                                Discovery” functionalities.
                                Fully integrated with an inventory management and
                                employee management systems, Bar X is a one stop
                                solution for bar owners to efficiently operate their business
                                and improve customer experience.
                                Bar-X is also a booking and payment platform that connects
                                consumers with great bars (pubs) nationwide. Bar X makes
                                it easy to discover and book the best bars wherever you
                                are , in just a few steps.
                            </p>
                            <a href ='http://bar-x.herokuapp.com/' className='bg-pink-900 text-white py-1 px-2 '>View online</a>
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
                                    <p className='bg-pink-900 text-white py-1 px-2  mr-2'>
                                        Firebase
                                    </p>
                                    <p className='bg-pink-900 text-white py-1 px-2  mr-2'>
                                        Nodejs
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full lg:w-1/2 h-40 bg-black border-2 border-gray-500 my-6 ml-2' ></div>
                    </div>
                    <div className=' w-full border-b-2 border-gray-500 ml-6 text-gray'></div>
                </div>
        </div>
    )
}