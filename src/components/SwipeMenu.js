import React, {useState, useContext } from 'react';
import {NavLink, Link} from 'react-router-dom'
import './SwipeMenu.css';
import {AuthContext} from '../context/AuthContext'

function SwipeMenu() {

    const {token, id} = useContext(AuthContext)

    const [isChecked, setIsChecked] = useState(false);
    
    return (
        <div className="hamburger-menu">
            <input id="menu-toggle" type="checkbox" onChange={(event) => setIsChecked(event.currentTarget.checked)} checked={isChecked} />
            <label className="menu-btn" htmlFor="menu-toggle">
            <span></span>
            </label>

            <div className='cover' onClick={() => setIsChecked(!isChecked)}></div>

            <ul className="menu-box">
                <ul className="menu-boxrr">
                    <li><NavLink to='/' className="h-menu-item" onClick={() => setIsChecked(!isChecked)}>Главная</NavLink></li>
                    {/* {token?
                    <li><NavLink to={`/user/${id}`} className="h-menu-item" onClick={() => setIsChecked(!isChecked)}>КАБИНЕТ</NavLink></li>:
                    <li><NavLink to='/login' className="h-menu-item" onClick={() => setIsChecked(!isChecked)}>ЛОГИН</NavLink></li>} */}
                    <li><Link to='/login' className="h-menu-item" onClick={() => setIsChecked(!isChecked)}>Логин</Link></li>
                    <li><NavLink to='/map' className="h-menu-item" onClick={() => setIsChecked(!isChecked)}>Карта заправок</NavLink></li>
                    <li><NavLink to='/' className="h-menu-item" onClick={() => setIsChecked(!isChecked)}>Заработать</NavLink></li>
                    <li><NavLink to='/contacts' className="h-menu-item" onClick={() => setIsChecked(!isChecked)}>Контакты</NavLink></li>
                    <li><NavLink to='/news' className="h-menu-item" onClick={() => setIsChecked(!isChecked)}>Новочти</NavLink></li>
                </ul>
            </ul>
        </div>
    );
}

export default SwipeMenu;
