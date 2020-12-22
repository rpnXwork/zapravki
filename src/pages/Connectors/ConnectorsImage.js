import Type1service from './images/Type1service.png'
import Type1busy from './images/Type1busy.png'
import Type1work from './images/Type1work.png'
import Type1alert from './images/Type1alert.png'
import Type1build from './images/Type1build.png'
import Type1reserved from './images/Type1reserved.png'
import Type1connected from './images/Type1connected.png'

import Type2service from './images/Type2service.png'
import Type2busy from './images/Type2busy.png'
import Type2work from './images/Type2work.png'
import Type2alert from './images/Type2alert.png'
import Type2build from './images/Type2build.png'
import Type2reserved from './images/Type2reserved.png'
import Type2connected from './images/Type2connected.png'

export const Image = ({type , status}) => {

    if (type === "AC1/J1772" && status === 'work'){
        return(    
        <img className='connector-img' src={Type1work} alt='conectortype'/>         
        )
    }
    if (type === "AC1/J1772" && status === 'busy'){
        return(    
        <img className='connector-img' src={Type1busy} alt='conectortype'/>         
        )
    }
    
    if (type === "AC1/J1772" && status === 'service'){
        return(    
        <img className='connector-img' src={Type1service} alt='conectortype'/>         
        )
    }
    
    if (type === "AC1/J1772" && status === 'alert'){
        return(    
        <img className='connector-img' src={Type1alert} alt='conectortype'/>         
        )
    }
    
    if (type === "AC1/J1772" && status === 'build'){
        return(    
        <img className='connector-img' src={Type1build} alt='conectortype'/>         
        )
    }
    
    if (type === "AC1/J1772" && status === 'reserved'){
        return(    
        <img className='connector-img' src={Type1reserved} alt='conectortype'/>         
        )
    }
    
    if (type === "AC1/J1772" && status === 'connected'){
        return(    
        <img className='connector-img' src={Type1connected} alt='conectortype'/>         
        )
    }
    
    if (type === "AC3/Type2" && status === 'work'){
        return(    
        <img className='connector-img' src={Type2work} alt='conectortype'/>         
        )
    }
    
    if (type === "AC3/Type2" && status === 'busy'){
        return(    
        <img className='connector-img' src={Type2busy} alt='conectortype'/>         
        )
    }
    
    if (type === "AC3/Type2" && status === 'build'){
        return(    
        <img className='connector-img' src={Type2build} alt='conectortype'/>         
        )
    }
    
    if (type === "AC3/Type2" && status === 'service'){
        return(    
        <img className='connector-img' src={Type2service} alt='conectortype'/>         
        )
    }
    
    if (type === "AC3/Type2" && status === 'reserved'){
        return(    
        <img className='connector-img' src={Type2reserved} alt='conectortype'/>         
        )
    }
    
    if (type === "AC3/Type2" && status === 'connected'){
        return(    
        <img className='connector-img' src={Type2connected} alt='conectortype'/>         
        )
    }
    
    if (type === "AC3/Type2" && status === 'alert'){
        return(    
        <img className='connector-img' src={Type2alert} alt='conectortype'/>         
        )
    }
    return(<img className='connector-img' src={Type2work} alt='conectortype'/> )       
} 