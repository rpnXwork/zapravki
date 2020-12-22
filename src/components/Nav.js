import React, {useEffect, useState, useContext} from 'react';
import './Nav.css';
import {useLocation, useHistory} from "react-router-dom";
import {NavLink} from 'react-router-dom'
import SwipeMenu from './SwipeMenu';
import logo from './logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons'
import {faFlagUsa} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import {AuthContext} from '../context/AuthContext'

function Nav() {
    
    let location = useLocation()
    const auth = useContext(AuthContext)
    let gg = location.pathname
    const history = useHistory()
    const {token, id, firstName} = useContext(AuthContext)

    const [isActive, setIsActive] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0);
    
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    const setPath = () => {
        localStorage.setItem("path", JSON.stringify("/user"))
    }

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')}


    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (gg !== '/') {
            setIsActive(true)
        }
        if (gg === '/') {
            if (scrollPosition >= 380) {
                setIsActive(true)
            }
            if (scrollPosition < 380) {
                setIsActive(false)
            }
        }

    }, [scrollPosition,gg]);

    return (
        <div className={`navbar ${isActive && 'navbar-active'}`}>
            <div className='nav-items'>
                <div className='nav-logo'>
                   <NavLink to='/'><img className='logoimage' src={logo} alt='logo-img'/></NavLink> 
                </div>
                <div className='nav-menu'>
                    {token?
                    <div>
                        <NavLink to={`/user/${id}`}><span className='menu-item menu-item-p'>
                            <FontAwesomeIcon icon={faUser} size="lg"/>
                            &nbsp; Кабинет пользователя {firstName}</span>
                        </NavLink>
                        <span><FontAwesomeIcon className='logout'  onClick={logoutHandler} icon={faSignOutAlt} size='2x'/></span>
                    </div>:
                        <NavLink to="/login" onClick={setPath}><div className='menu-item menu-item-p'>
                            <FontAwesomeIcon icon={faUser} size="lg"/> &nbsp; Личный кабинет</div>
                     </NavLink>
                     }
                    <div className='menu-item menu-item-p'>+ 375 19 859 65 89 </div>
                    <div className='menu-item item-border'
                        onMouseEnter ={()=>console.log("over")}
                        onMouseLeave={()=>console.log('Leave')}
                        ><FontAwesomeIcon icon={faFlagUsa} size="lg"/>
                            
                        </div>
                    <div className='menu-item item-border'><FontAwesomeIcon icon={faCartArrowDown} size="lg"/></div>
                    <div className='menu-item item-border'><FontAwesomeIcon icon={faEnvelope} size="lg"/></div>
                    <div className='menu-item item-border'><SwipeMenu/></div>
                    
                </div>
            </div>
            
            
        </div>
    );
}

export default Nav;




