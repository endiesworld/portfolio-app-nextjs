import Header from './header' ;
import styles from './contentHolder.module.css' ;
import IntroMessage from './introMessage' ;
import IconsHolder from './socialMediaIconsHolder' ;


const ContentHolder = () => {
    return (
        <div className = {`w-full flex flex-col h-full ${styles.myBackgroundImage}`}>
            <header className= {` w-full h-14 flex justify-start text-xs  font-serif ` }>
                <Header/>
            </header>
            <div className = ' w-full h-full flex justify-center flex-col items-start'>
                <IntroMessage />
                <IconsHolder /> 
            </div>
        </div>
    )
}

export default ContentHolder ;