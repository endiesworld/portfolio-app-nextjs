import Image from 'next/image' ;

import Header2 from '../components/header2' ;
import IconsHolder from '../components/socialMediaIconsHolder' ;
import styles from '../components/contentHolder.module.css' ;
import Projects from '../components/projects' ;
import AboutBarx from '../components/aboutBarX' ;



export default function Portfolio(){
    return(
        <div className ={` w-full min-h-screen grid grid-rows-mylayout grid-cols-1 justify-items-stretch border-2`}>
            <header className= ' container mx-auto row-span-1 bg-indigo-900 text-xs flex justify-center font-serif  border-2'>
                <Header2/>
            </header>
            <section className= {`row-span-4 container mx-auto h-full`}>
                <div className = {`w-full h-full `} >
                    <div className = 'text-black container mx-auto w-full  grid h-full  grid-cols-1 justify-items-stretch items-center '>
                        <div className = {`mx-auto gap-y-0 flex flex-col pt-6 w-11/12 sm:w-full h-full font-normal ${styles.scrollBar}`}>
                            <p className = 'mx-auto text-xl font-sans mb-6 font-extralight'> The below are some of my works. Except otherwise stated, all front-end and back-end for every project stated here were completely done by me.</p>
                            <Projects />
                           
                            <AboutBarx />
                            <AboutBarx />
                        </div>
                        
                    </div>
                </div> 

            </section>
            <footer className =' container mx-auto row-span-1 w-full bg-indigo-900 flex justify-start items-center'>
                <div className='sm:ml-40 2xl:ml-60 w-full'>
                    <IconsHolder />
                </div>
            </footer>
        </div>
    )
}