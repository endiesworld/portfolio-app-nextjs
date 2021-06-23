
import Image from 'next/image' ;
import Twitter from '../public/images/icons8-twitter.svg' ;
import Linkedin from '../public/images/icons8-linkedin.svg' ;
import Github from '../public/images/icons8-github.svg' ;

import styles from './contentHolder.module.css' ;

const icons = [Twitter, Linkedin, Github] ;

export default function IconsHolder(){
    return(
        <div className = 'mx-6 mb-16 w-1/2 h-14 flex justify-start'>
            {
                icons.map((icon, index) => (
                    <div key = {index} className ='flex justify-center rounded-full w-10  mr-6 h-10'>
                        <Image 
                            src={icon}
                            alt="Profile image"
                            
                        />
                    </div>
                ))
            }
        </div>
    )
}