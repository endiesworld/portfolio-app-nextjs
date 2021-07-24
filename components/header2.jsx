import {useState} from 'react' ;
import Link from 'next/link' ;
import Image from 'next/image' ;
import ProfileImage from '../public/images/header-image-4.jpg';
import Hamburger from './hamburger' ;
import React from 'react';


const hideMenueOptions = 'md:flex sm:w-full gap-10 xl:gap-24 hidden xl:ml-20 ml-0' ; 
const showMenueOptions = ' flex sm:w-full gap-10 xl:gap-24 flex-col xl:ml-20 ml-0 md:flex-row md:relative sm:left-50 sm:h-full justify-around items-center w-screen h-screen absolute top-0 z-20 bg-indigo-900'


function Header2(){
    const [headerClasses, setHeaderClasses] = useState(hideMenueOptions) ;
    return(
    <div className = 'flex justify-center items-center 2xl:w-2/3 h-full gap-4 text-white'>
        <div className = 'w-48 h-full flex justify-center items-center   '>
            <div className = 'w-28 h-full flex justify-center items-center'>
                <Image
                src={ProfileImage}
                alt="Profile image"
                width = {104}
                height = {100}
                className = ' rounded-full'
            />
            </div>
            <Link href="/">
                <a className = 'flex-initial text-center hover:text-white hover:bg-indigo-800 w-20 h-6 pt-1 rounded-md'> Emmanuel O. </a>
            </Link>
        </div>
        <div className = {` ${headerClasses}`}>
            <Link href="/portfolio">
                <a className = 'flex-initial text-center hover:text-white hover:bg-indigo-800 w-14 h-6 pt-1 rounded-md '> Portfolio </a>
            </Link>
            <Link href="/about">
                <a className = 'flex-initial text-center hover:text-white hover:bg-indigo-800 w-11 h-6 pt-1 rounded-md'> About  </a>
            </Link>
            <Link href="/contactMe">
                <a className = 'flex-initial text-center hover:text-white hover:bg-indigo-800 w-20 h-6 pt-1 rounded-md'> Contact me.  </a>
            </Link>
        </div>
        <Hamburger updateHeaderClasses = {setHeaderClasses} headerClassesOptions ={[hideMenueOptions, showMenueOptions]}/>
    </div >
    )
}

export default Header2 ;