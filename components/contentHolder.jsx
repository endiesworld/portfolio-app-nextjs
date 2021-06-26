import Header from './header' ;
import styles from './contentHolder.module.css' ;
import IntroMessage from './introMessage' ;



const ContentHolder = () => {
    return (
        <div className = {`w-full flex flex-col h-full ${styles.myBackgroundImage}`}>
            <header className= {` w-full h-14 text-xs flex items-center font-serif ` }>
                <Header/>
            </header>
            <div className = ' w-full h-full md:pl-16 flex justify-center flex-col items-start'>
                <IntroMessage />
            </div>
        </div>
    )
}

export default ContentHolder ;