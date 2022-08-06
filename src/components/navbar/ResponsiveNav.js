import Navbar from './Navbar'
import Mobilesub from './Mobilesub'

function ResponsiveNav() {
    if(window.innerWidth < 768)
    {
        return(
            <Mobilesub/>
            );


    }else{
        return(
            <Navbar/>

        )
    }
}

export default ResponsiveNav;