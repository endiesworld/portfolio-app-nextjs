
import Header2 from '../components/header2' ;
import IconsHolder from '../components/socialMediaIconsHolder' ;
import styles from '../components/contentHolder.module.css' ;
import Projects from '../components/projects' ;
import AboutBarx from '../components/aboutBarX' ;
import AboutDevPlacement from '../components/aboutDevPlacement' ;
import AboutEra from '../components/aboutERA' ;
import MostPopularRepo from '../components/gitHubGraphql' ;




export default function Portfolio(){
    return(
        <div className ={` min-w-full min-h-screen relative flex justify-center `}>
            <header className= {` w-full sm:fixed max-h-80  row-span-1 text-xs flex ${styles.portfolio}` }>
                <div className ='w-1/6 min-h-full '></div>
                <div className= ' w-2/3 h-80 row-span-1 text-xs flex flex-col justify-start items-center font-serif pb-6 '>
                    <Header2/>
                    <div className= 'w-full h-1/2 '></div>
                </div>
                <div className ='w-1/6 min-h-full '></div>
            </header>
            <div className ={`bg-gray-100 absolute top-40 z-10 w-full sm:w-4/5 2xl:w-2/3 min-h-screen grid grid-rows-mylayout grid-cols-1 justify-items-stretch `}>
                <section className= {`row-span-4 container mx-auto h-full`}>
                    <div className = 'pb-2 text-black container mx-auto w-full  grid h-full  grid-cols-1 justify-items-stretch items-center '>
                        <div className = {`mx-auto gap-y-0 flex flex-col pt-6 w-11/12 sm:w-full h-full font-normal `}>
                            <p className = ' sm:mx-6 font-sans mb-6 text-gray-500 font-extralight lg:text-lg'> The below are some of my works. Except otherwise stated, all front-end and back-end for every project stated here were completely done by me.</p>
                            <Projects />
                            <AboutBarx />
                            <AboutEra />
                            <AboutDevPlacement />
                            <MostPopularRepo />
                        </div>
                </div> 

            </section>
            <footer className =' container mx-auto row-span-1 w-full bg-indigo-900 flex justify-start items-center'>
                <div className=' ml-10 sm:ml-40 2xl:ml-60 w-full'>
                    <IconsHolder />
                </div>
            </footer>
            </div>
            
        </div>
    )
}


/***
 * <div className ={` w-full min-h-screen grid grid-rows-mylayout grid-cols-1 justify-items-stretch border-2`}>
            <header className= ' container mx-auto row-span-1 bg-indigo-900 text-xs flex justify-center font-serif '>
                <Header2/>
            </header>
            <section className= {`row-span-4 container mx-auto h-full`}>
                    <div className = 'pb-2 text-black container mx-auto w-full  grid h-full  grid-cols-1 justify-items-stretch items-center '>
                        <div className = {`mx-auto gap-y-0 flex flex-col pt-6 w-11/12 sm:w-full h-full font-normal `}>
                            <p className = 'mx-auto text-xl font-sans mb-6 font-extralight'> The below are some of my works. Except otherwise stated, all front-end and back-end for every project stated here were completely done by me.</p>
                            <Projects />
                            <AboutBarx />
                            <AboutEra />
                            <AboutDevPlacement />
                            <MostPopularRepo />
                        </div>
                </div> 

            </section>
            <footer className =' container mx-auto row-span-1 w-full bg-indigo-900 flex justify-start items-center'>
                <div className=' ml-10 sm:ml-40 2xl:ml-60 w-full'>
                    <IconsHolder />
                </div>
            </footer>
        </div>
 */