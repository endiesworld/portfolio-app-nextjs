import Image from 'next/image' ;
import ProfileImage from '../public/images/black-bg-image-2.png'

import styles from './contentHolder.module.css' ;

const ImageHolder = () => {
    return (
            <div className = {`h-full w-full bg-black ${styles.zindexBackground}`}> 
                <Image
                src={ProfileImage}
                alt="Profile image"
                objectFit = 'scale-down'
                layout="fill"
                objectPosition = 'right'
            />
            </div>
            
    )
}


export default ImageHolder ;

