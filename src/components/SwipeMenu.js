import { useEffect, useState, useContext } from 'react';
import {NavLink} from 'react-router-dom'
import './SwipeMenu.css';
import {AuthContext} from '../context/AuthContext'

function SwipeMenu() {

    const {token, userId, nickname} = useContext(AuthContext)

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
                    <li><NavLink to='/' className="h-menu-item" onClick={() => setIsChecked(!isChecked)}>ГЛАВНАЯ</NavLink></li>
                    {token?
                    <li><NavLink to={`/user/${userId}`} className="h-menu-item" onClick={() => setIsChecked(!isChecked)}>КАБИНЕТ</NavLink></li>:
                    <li><NavLink to='/login' className="h-menu-item" onClick={() => setIsChecked(!isChecked)}>КАБИНЕТ</NavLink></li>}

                    <li><NavLink to='/map' className="h-menu-item" onClick={() => setIsChecked(!isChecked)}>Карта заправок</NavLink></li>
                    {/* <li><a className="h-menu-item" onClick={() => setIsChecked(!isChecked)}>Купить</a></li>
                    <li><a className="h-menu-item" onClick={() => setIsChecked(!isChecked)}>Подключиться к системе</a></li>
                    <li><a className="h-menu-item" onClick={() => setIsChecked(!isChecked)}>КАЛЬКУЛЯТОР</a></li>
                    <li><a className="h-menu-item" onClick={() => setIsChecked(!isChecked)}>МОБИЛЬНОЕ ПРИЛОЖЕНИЕ</a></li> */}
                    <li><NavLink to='/' className="h-menu-item" onClick={() => setIsChecked(!isChecked)}>ЗАРАБОТАТЬ</NavLink></li>
                    <li><NavLink to='/contacts' className="h-menu-item" onClick={() => setIsChecked(!isChecked)}>КОНТАКТЫ</NavLink></li>
                    <li><NavLink to='/news' className="h-menu-item" onClick={() => setIsChecked(!isChecked)}>НОВОСТИ</NavLink></li>
                </ul>
            </ul>
        </div>
    );
}

export default SwipeMenu;
