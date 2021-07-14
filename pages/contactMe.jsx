import Image from 'next/image' ;

import Header2 from '../components/header2' ;
import IconsHolder from '../components/socialMediaIconsHolder' ;

import Envelope from '../public/images/envelope-solid.svg' ;
import Linkedin from '../public/images/icons8-linkedin-2.svg' ;
import Github from '../public/images/icons8-twitter-2.svg' ;

export default function ContactME(){
    return(
        <div className= 'w-full min-h-screen grid grid-rows-contactMelayout grid-cols-1 justify-items-stretch'>
            <header className= ' h-full container mx-auto row-span-1 bg-indigo-900 text-xs flex justify-center font-serif '>
                <Header2/>
            </header>
            <section className= 'row-span-4 container mx-auto   '>
                <div className = {`pl-10 sm:pl-20 w-full h-full mx-auto text-gray-500 sm:text-lg  xl:w-1/2 flex flex-col justify-center  `} >
                    <h2 className='sm:text-xl  font-bold'>
                        CONTACT ME
                    </h2>
                    <p className = 'mt-3 sm:mt-5 '>
                        I am available for both full-time and part-time jobs for cooperation of any size, and will reply any message sent through any of these channels within 24hrs.
                    </p>
                    <div className = 'grid grid-cols-6 sm:w-2/3 mt-6 text-sm'>
                        <div className = '  h-full w-full col-span-2 grid grid-rows-contactTable items-stretch w-full h-10/12'>
                            
                            <p className= ' h-full row-span-1'>
                                E-mail:
                            </p>
                            <p className= ' row-span-1'>
                                Linkedin:
                            </p>
                            <p className= ' row-span-1'>
                                Twitter:
                            </p>
                        </div>
                        
                        <div className = 'h-full w-full  col-span-4 grid grid-rows-contactTable items-stretch w-full h-10/12'>
                            
                            <div className= 'row-span-1 flex '>
                                <div className=''>
                                    <div className=' h-1/2 w-full flex justify-start items-center mr-4'>
                                        <Image 
                                        src={Envelope}
                                        alt="Profile image"
                                        width={20}
                                        height ={20}
                                        />
                                    </div>
                                    
                                </div>
                                <div>
                                    <p>
                                        <a href="mailto:endiesworld@gmail.com" className='hover:text-indigo-500 border-b-2 hover:border-indigo-500'>
                                        endiesworld@gmail.com,
                                        </a>
                                    </p>
                                    <p>
                                        <a href="mailto:endiesworld@yahoo.com" className='hover:text-indigo-500 border-b-2 hover:border-indigo-500'>endiesworld@yahoo.com.</a>
                                    </p>
                            
                                </div>
                            </div>
                            <div className= 'flex row-span-1'>
                                <div className=' flex justify-start items-start mr-4'>
                                        <Image 
                                        className='fill-current text-green-600'
                                        src={Linkedin}
                                        alt="Profile image"
                                        width={20}
                                        height ={20}
                                        />
                                    </div>
                                <p>
                                    <a href="https://www.linkedin.com/in/emmanuel-okoro-coren-902bb963/" className='hover:text-indigo-500 border-b-2 hover:border-indigo-500'>
                                        Emmanuel Okoro, Engr. COREN, 
                                    </a>
                                </p>
                            </div>
                            <div className= 'flex row-span-1'>
                                <div className='flex justify-start items-start mr-4'>
                                        <Image 
                                        src={Github}
                                        alt="Profile image"
                                        width={20}
                                        height ={20}
                                        />
                                    </div>
                                <p>
                                    <a href="https://github.com/endiesworld" className='hover:text-indigo-500 border-b-2 hover:border-indigo-500'>
                                        @ndubuisi_ok
                                    </a>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                   
                </div>
                
                
            </section>
            <footer className =' container mx-auto row-span-1 w-full bg-indigo-900 flex justify-start items-center'>
                <div className='ml-6 sm:ml-60 2xl:ml-60 w-full'>
                    <IconsHolder />
                </div>
                
            </footer>
        </div>
    )
}