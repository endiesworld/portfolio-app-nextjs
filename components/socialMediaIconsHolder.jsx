
import Image from 'next/image' ;
import Twitter from '../public/images/icons8-twitter.svg' ;
import Linkedin from '../public/images/icons8-linkedin.svg' ;
import Github from '../public/images/icons8-github.svg' ;

import styles from './contentHolder.module.css' ;

const icons = [Twitter, Linkedin, Github] ;
const links = ['#', 'https://www.linkedin.com/in/emmanuel-okoro-engr-coren-mnse-902bb963/','https://github.com/endiesworld'] ;

export default function IconsHolder(){
    return(
        <div>
            <p>Get in touch! </p>
            <div className = 'mt-3 w-full flex justify-start '>
            {
                icons.map((icon, index) => (
                    <div key = {index} className ='flex justify-center w-12  h-16'>
                        <a href={links[index]} className = ' w-full h-full '>
                            <Image 
                                src={icon}
                                alt="Profile image"
                                
                            />
                        </a>
                    </div>
                ))
            }
            </div>
        </div>
        
    )
}