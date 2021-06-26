import Link from 'next/link' ;
import Image from 'next/image' ;
import ProfileImage from '../public/images/header-image-4.jpg';
import Hamburger from './hamburger' ;


let headerOptions = 'flex justify-start hidden sm:block' ; 

function Header2(){
    return(
    <div className = 'flex justify-center items-center w-full h-full text-white xl:pr-44 '>
        <div className = 'w-48 h-full flex justify-center items-center sm:mr-20'>
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
        <div className = {`${headerOptions}`}>
            <Link href="/">
                <a className = 'flex-initial text-center hover:text-white hover:bg-indigo-600 w-11 h-6 pt-1 rounded-md sm:mr-20'> Blog </a>
            </Link>
            <Link href="/">
                <a className = 'flex-initial text-center hover:text-white hover:bg-indigo-600 w-16 h-6 pt-1 rounded-md sm:mr-20'> Portfolio </a>
            </Link>
            <Link href="/about">
                <a className = 'flex-initial text-center hover:text-white hover:bg-indigo-600 w-11 h-6 pt-1 rounded-md'> About  </a>
            </Link>
        </div>
        <Hamburger />
    </div >
    )
}

export default Header2 ;