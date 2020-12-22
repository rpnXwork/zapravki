import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome  } from '@fortawesome/free-solid-svg-icons'
import { faPhone  } from '@fortawesome/free-solid-svg-icons'
import { faClock  } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='footer-container'>
            <div className='footer-cols'>
                <div className='footer-col'>
                    <div className='fc-title'>
                        Навигация
                    </div>
                    <div className='fc-body'>
                        <div className='fc-item'><NavLink className='fc-item-text' to='/'>Главная</NavLink></div>
                        {/* <div className='fc-item'><NavLink className='fc-item-text' to='/buy'>Купить заправку</NavLink></div> */}
                        <div className='fc-item'><NavLink className='fc-item-text' to='/login'>Логин</NavLink></div>
                        <div className='fc-item'><NavLink className='fc-item-text' to='/map'>Карта заправок</NavLink></div>
                        <div className='fc-item'><NavLink className='fc-item-text' to='/registration'>Регистрация</NavLink></div>
                        <div className='fc-item'><NavLink className='fc-item-text' to='/sertificats'>Сертификаты</NavLink></div>
                        <div className='fc-item'><NavLink className='fc-item-text' to='/contacts'>Контакты</NavLink></div>
                        <div className='fc-item'><NavLink className='fc-item-text' to='/news'>Новости</NavLink></div>
                    </div>
                </div>
                <div className='footer-col'>
                    <div className='fc-title'>
                        Наши Контакты
                    </div>
                    <div className='fc-body'>
                        <div className='fc-item'><FontAwesomeIcon className='fc-icon' icon={faHome}/>г. Минск пр-т. Партизанский 2</div>
                        <div className='fc-item'><FontAwesomeIcon className='fc-icon' icon={faPhone}/>+375 29 202 03 27 - биосистема</div>
                        <div className='fc-item'><FontAwesomeIcon className='fc-icon' icon={faPhone}/>+375 29 224 22 24 - Nicer Diser</div>      
                        <div className='fc-item'>cniity@gmail.com</div>
                        <div className='fc-item'><FontAwesomeIcon className='fc-icon' icon={faClock}/>103 - Скорая помощь (круглосуточно!) </div>

                    </div>
                    
                </div>
                <div className='footer-col'>
                    <div className='fc-title'>
                       Есть вопросы?
                    </div>
                    <div className='fc-body'>
                        <div className='fc-item'>Отправить заявку</div>
                    </div>
                    
                </div>
            </div>
            
        </div>

        <div className='footer-bar'>
            <div className='fb-block'>
                <div className='fb-text'>
                © 2020 CNIITY CHARGERS. Все права.
                </div>
            </div>
            
               
        </div>
        </>
    )
}

export default Footer
