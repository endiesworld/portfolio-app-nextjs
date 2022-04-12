

export default function IntroMessage(){
    return(
        <div className = {` container mx-auto w-full pl-6 md:pl-12 h-full flex flex-col justify-end sm:justify-center `}>
            <p className = 'text-black text-3xl sm:text-5xl font-black'>Hi there! </p>
            <p className = 'mt-3 text-pink-900 text-xl sm:text-3xl  font-black'>
                I am Emmanuel Okoro,
                <span className='block text-black text-base sm:text-base'> Data Scientist | Full-stack Dev.</span>
                <span className='block text-black text-base sm:text-base'>| Engineer.</span>
            </p>
            <p className = 'mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 md:mb-10'>
                I leverage on data, technologies and my engineering skills, to provide state-of-the-art solutions to real world problems for organization of any size.
            </p>
            
        </div>
    )
}