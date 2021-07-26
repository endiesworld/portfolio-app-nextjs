import Link from 'next/link'

function Header(){
   return(
    <div className = 'inline-flex justify-around items-center w-full xl:w-2/3 h-full text-black '>
        <Link href="/">
            <a className = 'flex-initial text-center hover:text-white hover:bg-pink-900 w-20 h-6 pt-1 rounded-md'> Emmanuel O. </a>
        </Link>
        
        <Link href="/portfolio">
            <a className = 'flex-initial text-center hover:text-white hover:bg-pink-900 w-16 h-6 pt-1 rounded-md'> Portfolio </a>
        </Link>
        <Link href="/about">
            <a className = 'flex-initial text-center hover:text-white hover:bg-pink-900 w-11 h-6 pt-1 rounded-md'> About  </a>
        </Link>
    </div >
   )
}

export default Header ;