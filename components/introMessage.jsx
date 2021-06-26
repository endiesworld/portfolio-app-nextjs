import IconsHolder from './socialMediaIconsHolder' ;

export default function IntroMessage(){
    return(
        <div className = {`mx-6 sm:mt-10 md:mt-32 w-1/2 h-2/3 flex flex-col justify-center `}>
            <p className = 'text-black text-3xl sm:text-5xl font-black'>Hi there! </p>
            <p className = 'mt-3 text-pink-900 text-xl sm:text-3xl  font-black'>
                I am Emmanuel Okoro,
                <span className='block'> an Engineer.</span>
            </p>
            <p className = 'mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
                I help people automate and build stuffs that runs on computers and mobile phones.
            </p>
            <IconsHolder /> 
        </div>
    )
}