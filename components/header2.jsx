import {useState} from 'react' ;
import Link from 'next/link' ;
import Image from 'next/image' ;
import ProfileImage from '../public/images/header-image-4.jpg';
import Hamburger from './hamburger' ;
import React from 'react';


const hideMenueOptions = 'sm:flex sm:w-96 gap-24 hidden ml-20 2xl:ml-0' ; 
const showMenueOptions = ' flex sm:w-96 sm:gap-24 flex-col sm:ml-20 2xl:ml-0 sm:flex-row sm:relative sm:left-50 sm:h-full justify-around items-center w-screen h-screen absolute top-0 z-10 bg-indigo-900'


function Header2(){
    const [headerClasses, setHeaderClasses] = useState(hideMenueOptions) ;
    return(
    <div className = 'flex justify-center items-center w-full h-full text-white xl:pr-40 2xl:pr-60 '>
        <div className = 'w-48 h-full flex justify-center items-center sm:ml-40 2xl:ml-0 2xl:mr-24'>
            <div className = 'w-28 h-full pt-2'>
                <Image
                src={ProfileImage}
                alt="Profile image"
                width = {112}
                height = {108}
                className = ' rounded-full'
            />
            </div>
            <Link href="/">
                <a className = 'flex-initial text-center hover:text-white hover:bg-indigo-600 w-20 h-6 pt-1 rounded-md'> Emmanuel O. </a>
            </Link>
        </div>
        <div className = {` ${headerClasses}`}>
            <Link href="/">
                <a className = 'flex-initial text-center hover:text-white hover:bg-indigo-600 w-11 h-6 pt-1 rounded-md '> Blog </a>
            </Link>
            <Link href="/">
                <a className = 'flex-initial text-center hover:text-white hover:bg-indigo-600 w-14 h-6 pt-1 rounded-md '> Portfolio </a>
            </Link>
            <Link href="/about">
                <a className = 'flex-initial text-center hover:text-white hover:bg-indigo-600 w-11 h-6 pt-1 rounded-md'> About  </a>
            </Link>
        </div>
        <Hamburger updateHeaderClasses = {setHeaderClasses} headerClassesOptions ={[hideMenueOptions, showMenueOptions]}/>
    </div >
    )
}

export default Header2 ;