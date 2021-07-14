import ContentHolder from '../components/contentHolder' ;
import NewLandingPage from '../components/newHomePage/layout' ;

import styles from '../styles/Home.module.css';

function HomePage(){
    return(
        <div className = {`relative sm:border-2 sm:container min-w-full ${styles.homepage} `}>
            <ContentHolder/>
            <NewLandingPage />
        </div>
    )
}

export default HomePage ;