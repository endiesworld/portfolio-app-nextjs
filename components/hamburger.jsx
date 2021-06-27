import {useState} from 'react' ;

const openMenue = 'border-2 w-full mb-2' ;
const closeMenueTop = 'border-2 w-full mt-4 transform rotate-45 relative top-0.5' ;
const closeMenueMiddle = 'border-2 w-full transform -rotate-45 relative bottom-0.5' ;
const closeMenueBottom = 'hidden' ;

export default function Hamburger({updateHeaderClasses,  headerClassesOptions}){
    const [hideMenueOptions, showMenueOptions] = headerClassesOptions ;
    const [showMenue, setShowMenue] = useState(false) ;
    const [topClass, setTopclass] = useState(openMenue) ; 
    const [middleClass, setMiddleclass] = useState(openMenue) ; 
    const [bottomClass, setBottomclass] = useState(openMenue) ; 

    const displayMenue = () => {
        setTopclass(closeMenueTop) ;
        setMiddleclass(closeMenueMiddle) ;
        setBottomclass(closeMenueBottom) ;
        updateHeaderClasses(showMenueOptions) ;

    }

    const hideMenue = () =>{
        setTopclass(openMenue) ;
        setMiddleclass(openMenue) ;
        setBottomclass(openMenue) ;
        updateHeaderClasses(hideMenueOptions) ;
    }

    const menueOption = (menueState) =>{
        (menueState) ? displayMenue() : hideMenue() ;
        setShowMenue((showMenue) => !showMenue) 
    }

    return (
         <div className = 'w-8 h-10 ml-14 sm:hidden z-20 ' onClick = { ()=> menueOption(!showMenue)} >
            <div className= {topClass}></div>
            <div className= {middleClass}></div>
            <div className= {bottomClass}></div>
        </div>
    )
}