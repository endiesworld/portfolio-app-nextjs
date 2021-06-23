import ContentHolder from '../components/contentHolder' ;
import ImageHolder from '../components/imageSection' ;

function HomePage(){
    return(
        <div className = 'relative container w-full h-full '>
            <ImageHolder />
            <ContentHolder/>
            
        </div>
    )
}

export default HomePage ;