import { useEffect } from 'react';
import Image from 'next/image' ;
import BackgroundImage from '../../public/images/backgroundImage-6.JPG';
import styles from '../contentHolder.module.css' ;

export default function Layout(){
    
    return(
        <div className= {`absolute min-w-full grid grid-rows-aboutlayout grid-cols-1 sm:grid-cols-2 ${styles.layoutView}`}>
            
            <div className = {`min-h-full min-w-full col-start-1 row-start-1 row-end-3 sm:col-start-2 sm:row-start-2 flex justify-center items-center sm:justify-end mr-10 pb-20 sm:pb-0`}> 
                <Image
                src={BackgroundImage}
                alt="Profile image"
                objectFit = 'contain'
                width= {500}
                height={450}
                
                />
                
            </div>
            
        </div>
    )
}