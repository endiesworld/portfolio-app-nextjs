import Header from './header' ;
import styles from './contentHolder.module.css' ;
import IntroMessage from './introMessage' ;
import IconsHolder from './socialMediaIconsHolder' ;



const ContentHolder = () => {
    return (
        <div className = {`absolute z-10  min-w-full  grid grid-rows-aboutlayout bg-transparent sm:bg-myGradient  `}>
            <header className= {`row-start-1 w-full sm:w-3/5 h-full pb-8 text-xs flex items-center font-serif ` }>
                <Header/>
            </header>
            <div className = 'row-start-2 sm:w-1/2 w-full h-full flex justify-center flex-col items-start pb-12 sm:pb-0'>
                <IntroMessage />
            </div>
            <footer className ='row-start-3 mx-auto w-full flex justify-start items-center '>
                <div className='ml-6 sm:ml-20 w-full'>
                    <IconsHolder />
                </div>
            </footer>
        </div>
    )
}

export default ContentHolder ;