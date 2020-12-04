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
                        <div className='fc-item'>Главная</div>
                        <div className='fc-item'>Купить заправку</div>
                        <div className='fc-item'>Подключиться</div>
                        <div className='fc-item'>Карта заправок</div>
                        <div className='fc-item'>Калькулятор</div>
                        <div className='fc-item'>Мобильное приложение</div>
                        <div className='fc-item'>Заработать</div>
                        <div className='fc-item'>Сертификаты</div>
                        <div className='fc-item'>Контакты</div>
                        <div className='fc-item'>Новости</div>
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
