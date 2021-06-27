import Header2 from '../components/header2' ;
import IconsHolder from '../components/socialMediaIconsHolder' ;

export default function About(){
    return(
        <div className= 'w-screen relative'>
            <header className= ' w-full bg-indigo-900 h-32 text-xs flex justify-center font-serif '>
                <Header2/>
            </header>
            <section className= 'pl-4 mx-auto text-base text-gray-500 sm:text-lg  sm:w-1/2  flex flex-col items-start mb-12'>
                <h2 className = ' mt-3 sm:mt-5 sm:max-w-xl md:mt-5 lg:mx-0'>
                Hi &#128075;, I am Emmanuel.
                </h2>
                <p className = 'mt-3 sm:mt-5 sm:max-w-2xl md:mt-5 lg:mx-0'>
                    I am an electrical engineer, and a software developer from Nigeria.
                    I was born in 1986(old right ?), grew up in Lagos and currently lives in Lagos, Nigeria. 
                </p>
                <p className = 'mt-3 sm:mt-5 sm:max-w-xl md:mt-5 lg:mx-0'>
                    I hold a B.Eng  and MSc. in Electrical Engineering from University of Nigeria Nsukka(UNN), and University of Lagos (UniLag) respectively, with strong bias in automation and control.
                </p>
                <p className = 'mt-3 sm:mt-5 sm:max-w-2xl md:mt-5 lg:mx-0'>
                    I worked as and electrical and automation engineer for six years with companies in Engineering and Oil and Gas sectors in Nigeria, before deciding to switch to what makes me happier as an engineer( Software Developer)  
                </p>
                <p className = 'mt-3  sm:mt-5 sm:max-w-2xl md:mt-5 lg:mx-0'>
                    I started working profesionally as a software developer in 2019, and have written codes professionally for <a href='https://www.sahara-group.com/' className='text-pink-600'>Sahara-group,</a> <a href='https://emergencyresponseafrica.com/ ' className='text-pink-600'>Emergency Response Africa,</a><a href='#' className='text-pink-600'> Izigo Nigeria,</a> <a className='text-pink-600' href='https://github.com/endiesworld'>and open source.</a> 
                </p>
                 <p className = 'mt-3  sm:mt-5 sm:max-w-2xl md:mt-5 lg:mx-0'>
                    Feel free to link up with me on any of the social media platform listed below.
                </p>
            </section>
            <footer className ='w-full bg-indigo-900 h-52 place-self-end flex justify-center items-center'>
                <div className='w-1/2'>
                    <IconsHolder />
                </div>
                
            </footer>
        </div>
    )
}