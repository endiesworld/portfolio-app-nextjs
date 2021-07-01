import Image from 'next/image' ;

import Header2 from '../components/header2' ;
import IconsHolder from '../components/socialMediaIconsHolder' ;
import styles from '../components/contentHolder.module.css' ;
import Projects from '../components/projects' ;
import AboutBarx from '../components/aboutBarX' ;



export default function Portfolio(){
    return(
        <div className ={` w-full min-h-screen max-h-screen grid grid-rows-6 grid-cols-1 justify-items-stretch `}>
            <header className= ' h-full container mx-auto row-span-1 bg-indigo-900 text-xs flex justify-center font-serif '>
                <Header2/>
            </header>
            <section className= {`row-span-4 container mx-auto overflow-auto `}>
                <div className = {`w-full h-full overflow-auto `} >
                    <div className = 'text-black container mx-auto w-full  grid min-h-screen sm:min-h-0 sm:h-full grid-cols-1 justify-items-stretch items-center '>
                        <div className = {`overflow-auto gap-y-0 flex flex-col pt-6 w-full h-full font-normal ${styles.scrollBar}`}>
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