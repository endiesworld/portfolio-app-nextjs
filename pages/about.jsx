import Header2 from '../components/header2' ;
import IconsHolder from '../components/socialMediaIconsHolder' ;
import styles from '../components/contentHolder.module.css' ;

export default function About(){
    return(
        <div className= 'w-full min-h-screen grid grid-rows-aboutlayout grid-cols-1 justify-items-stretch'>
            <header className= {` h-full container mx-auto row-span-1 text-xs flex justify-center font-serif ${styles.portfolio}` }>
                <Header2/>
            </header>
            <section className= 'row-span-4 container mx-auto '>
                <div className = {`pl-10 sm:pl-20 w-full h-full overflow-auto mx-auto text-gray-500 sm:text-lg  xl:w-1/2 flex flex-col justify-center  `} >
                    <h2>
                        Hi &#128075;,I am<span className='font-bold'> Emmanuel</span>.
                    </h2>
                    <p className = 'mt-3 sm:mt-5 sm:max-w-2xl lg:mx-0'>
                        I am a data scientist, full-stack developer and an electrical & Instrumentation engineer, from Nigeria.
                        I was born in 1986(old right ?), grew up in Lagos and currently lives in Lagos, Nigeria. 
                    </p>
                    <p className = 'mt-3 sm:mt-5 sm:max-w-xl lg:mx-0'>
                        I hold a B.Eng and MSc. in Electrical Engineering from University of Nigeria Nsukka(UNN), and University of Lagos (UniLag) respectively, with strong bias in automation and control.
                    </p>
                    <p className = 'mt-3 sm:mt-5 sm:max-w-2xl lg:mx-0'>
                        I worked as and electrical and automation engineer for six years with companies in Engineering and Oil and Gas sectors in Nigeria, before deciding to switch to what makes me happier as an engineer( Software Developer)  
                    </p>
                    <p className = 'mt-3  sm:mt-5 sm:max-w-2xl lg:mx-0'>
                        I started working profesionally as a data scientist in 2022, and as a full-stack developer in 2019. I have proferred solutions and written codes professionally for 
                        <a href='https://explore-datascience.net/' className='text-pink-600'> Explore Data Science Academy (South Africa), </a> 
                        <a href='www.sahara-group.com/' className='text-pink-600'> Sahara-group (Nigeria), </a> 
                        <a href='https://www.Izigo.ng' className='text-pink-600'> Izigo (Nigeria),</a> 
                        <a href='https://emergencyresponseafrica.com/ ' className='text-pink-600'>Emergency Response Africa, </a>
                        <a className='text-pink-600' href='https://github.com/endiesworld'>and open source.</a> 
                    </p>
                    <p className = 'mt-3  sm:mt-5 sm:max-w-2xl  lg:mx-0'>
                        Feel free to link up with me on any of the social media platform listed below.
                    </p>
                </div>
                
                
            </section>
            <footer className =' container mx-auto row-span-1 w-full bg-indigo-900 flex justify-start items-center'>
                <div className='ml-6 sm:ml-40 2xl:ml-60 w-full'>
                    <IconsHolder />
                </div>
            </footer>
        </div>
    )
}