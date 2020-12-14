import React, {useEffect, useState, useContext}  from 'react';
import './style/MainPage.css'
import Carousel from '../components/Carousel'
import video from './style/video/video.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBusinessTime, faShoppingCart, faHome, faMale, faCogs, faRocket, faPlug, faCopyright, faMobileAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

function MainPage() {

    useEffect(() => {
        localStorage.removeItem("mappage")
    }, [])

    return (
        <>  
            <div className='content'>

{/* video Block */}
                <div className='bung-block'></div>
                <div className='videoblock'>
                    <div className='video-container'> 
                    <video src={video} loop muted autoPlay className='video'></video>
                    <div className="elementor-background"></div>
                    </div>
                        <div className="undervideoblocks">
                            <div className='undervideoblock'>
                                <div className='uvb-icon'><FontAwesomeIcon icon={faBusinessTime} size="lg"/></div>
                                <div className='uvb-tittle'>ДЛЯ БИЗНЕСА</div>
                                <div className='uvb-text'>
                                    Установка зарядных станций для 
                                    <br/>
                                    Электромобиля Получай прибыль от
                                    <span className='uvb-strong-text'>CNIITY CHARGER</span>
                                </div>
                            </div>
                            <div className='undervideoblock'>
                                <div className='uvb-icon'><FontAwesomeIcon icon={faShoppingCart} size="lg"/></div>
                                <div className='uvb-tittle'>КУПИТЬ</div>
                                <div className='uvb-text'>электрозаправку
                                    <span className='uvb-strong-text'>CNIITY CHARGER</span>
                                </div>
                            </div>
                            <div className='undervideoblock'>
                                <div className='uvb-icon'><FontAwesomeIcon icon={faHome} size="lg"/></div>
                                <div className='uvb-tittle'>ДЛЯ ДОМА</div>
                                <div className='uvb-text'>Универсальная электрозаправка
                                    <br/>
                                    для приватного пользования
                                </div>

                            </div>
                    </div>
                </div>

{/* conviguration block */}
                <div className='configuration-container'>
                    <div className='configuration-block'>
                        <div className='configuration-tittle'>
                            <div className='ct-body'>
                                <div className='ct-header'>
                                    Конфигурация зарядных станций для электромобилей
                                    CNIITY Chargers
                                </div>
                                <div className='ct-line'>
                                    <div className='ct-dot'></div>
                                    <div className='ct-dot'></div>
                                    <div className='ct-dot'></div>
                                    <div className='ct-dott'></div>
                                </div>
                                <div className='ct-text'>
                                    Наши клиенты имеют возможность зарядить свои автомобили на зарядных станциях CNIITY CHARGERS двух типов:
                                </div>
                            </div>
                        </div>
                        <div className='configuration-body'>
                            <div className='cb-body'>
                                <div className='cb-block'>
                                    <div className='cb-block-body'>
                                        <div className='cb-block-img'>
                                            <img src='https://smart-chargers.ugv.ua/wp-content/uploads/elementor/thumbs/Napolnaja_port_rozetka_profil-min-ox02lub3v0wfusum9z4u434riziaz3fb06kkssbitc.png'/>
                                        </div>
                                        <div className='cb-block-text'> <span className='uvb-strong-text'>Обычная станция (AC)</span> 7-44 кВт для J1772/Type2 (Mennekes), полный заряд 2-3 часа.</div>
                                    </div>
                                </div>
                                <div className='cb-block'>
                                    <div className='cb-block-body'>
                                        <div className='cb-block-img'>
                                            <img src="https://smart-chargers.ugv.ua/wp-content/uploads/elementor/thumbs/Supercharger-electrozapravka-DC-chademo-ccs-City_format-Fast-charger1-ox02lnqayw5nh0mgrprxeh3eun97noppif67p2c290.png"/>
                                        </div>
                                        <div className='cb-block-text'> <span className='uvb-strong-text'>Скоростная станция-Fast (DC)</span> 20-50 кВт для CHAdeMO/CCS2, где полный щаряд осуществляется от 20 минут
                                        до 2-х часов, зависит от емкости и модели батареи авто.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

{/* model block */}

                <div className='model-container'>
                    <div className='model-block'>          
                        <div className='model-body'>
                            <div className='mb-body'>
                                <div className='mb-block'>
                                    <div className='mb-block-body'>
                                        <div className='mb-block-img'>
                                            <img className='mc-img' src='https://smart-chargers.ugv.ua/wp-content/uploads/elementor/thumbs/Napolnaja_port_rozetka_profil-min-ox02lub3v0wfusum9z4u434riziaz3fb06kkssbitc.png'/>
                                        </div>
                                        <div className='mb-block-text'> <span className='uvb-strong-text'>настінні станції: комерційні, домашні, 7-22 кВт.</span> Однопортові/двупортові. Роз'єми: розетка Type 2, кабелі Type 1, Type 2
                                        </div>
                                    </div>
                                </div>
                                <div className='mb-block'>
                                    <div className='mb-block-body'>
                                        <div className='mb-block-img'>
                                            <img className='mc-img' src="https://smart-chargers.ugv.ua/wp-content/uploads/elementor/thumbs/Supercharger-electrozapravka-DC-chademo-ccs-City_format-Fast-charger1-ox02lnqayw5nh0mgrprxeh3eun97noppif67p2c290.png"/>
                                        </div>
                                        <div className='mb-block-text'> <span className='uvb-strong-text'>швидка зарядка електромобіля-Fast (DC)</span> 20-50 кВт для CHAdeMO/CCS2, де повний заряд електрокара здійснюється від 20 хвилин
                                        до 2-х годин, та залежить від емністі батареї та моделі автомобіля.</div>
                                    </div>
                                </div>
                                <div className='mb-block'>
                                    <div className='mb-block-body'>
                                        <div className='mb-block-img'>
                                            <img className='mc-img' src='https://smart-chargers.ugv.ua/wp-content/uploads/elementor/thumbs/Napolnaja_port_rozetka_profil-min-ox02lub3v0wfusum9z4u434riziaz3fb06kkssbitc.png'/>
                                        </div>
                                        <div className='mb-block-text'> <span className='uvb-strong-text'>звичайна станція (AC)</span> 7-44 кВт для J1772/Type2 (Mennekes), повний заряд автомобіля займає 2-3 години</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='model-tittle'>
                            <div className='mt-body'>
                                <div className='mt-header'>
                                    Модельний ряд
                                </div>
                                <div className='mt-line'>
                                    <div className='mt-dot'></div>
                                    <div className='mt-dot'></div>
                                    <div className='mt-dot'></div>
                                    <div className='mt-dott'></div>
                                </div>  
                                <div className='mt-text'>
                                Модельний ряд зарядних станцій для електромобилів CNIITY Chargers представлений власними розробками, які підійдуть для різного використання станцій - комерційного та домашнього, і можливі з індивідуальною комплектацією:
                                </div>
                                <button className='mt-button'><FontAwesomeIcon icon={faShoppingCart}/> В МАГАЗИН</button>
                            </div>
                        </div>
                    </div>
                </div>

{/* Приемущества  */}

            <div className='advantages-container'>
                <div className='advantages-block'> 
                    <div className='at-body'>
                        <div className='at-tittle'>
                            <div className='at-header'>
                                Приемуществ зправочных станций CNIITY Chargers
                            </div>
                            <div className='at-line'>
                                <div className='at-dot'></div>
                                <div className='at-dot'></div>
                                <div className='at-dot'></div>
                                <div className='at-dott'></div>
                            </div>
                        </div>

                    </div>
                    <div className='advantages-blocks'>
                        <div className='ab-block ad-bbb ad-rrr ad-ddd'>
                            <div className='ad-block-body'>
                                <div className='ad-block-icon'><FontAwesomeIcon icon={faMale} size="lg"/></div>
                                <div className='ad-block-text'>Индивидуальное проектирование</div>
                            </div>
                        </div>
                        <div className='ab-block ad-bbb ad-lll ad-ddd'>
                            <div className='ad-block-body'>
                                <div className='ad-block-icon'><FontAwesomeIcon icon={faCogs} size="lg"/></div>
                                <div className='ad-block-text'>Монтаж электрозаправки под ключь</div>
                            </div>
                        </div>
                        <div className='ab-block ad-bbb ad-lll ad-rrr ad-ddd'>
                            <div className='ad-block-body'>
                                <div className='ad-block-icon'><FontAwesomeIcon icon={faRocket} size="lg"/></div>
                                <div className='ad-block-text'>Статистика зарядных сессий в реальном времени</div>
                            </div>
                        </div>
                        <div className='ab-block ad-ddd'>
                            <div className='ad-block-body'>
                                <div className='ad-block-icon'><FontAwesomeIcon icon={faPlug} size="lg"/></div>
                                <div className='ad-block-text'>Поддержка разных способов оплаты</div>
                            </div>
                        </div>
                        <div className='ab-block ad-lll ad-rrr'>
                            <div className='ad-block-body'>
                                <div className='ad-block-icon'><FontAwesomeIcon icon={faCopyright} size="lg"/></div>
                                <div className='ad-block-text'>white labke C ПО для сети зарядных станций</div>
                            </div>
                        </div>
                        <div className='ab-block ad-lll'>
                            <div className='ad-block-body'>
                                <div className='ad-block-icon'><FontAwesomeIcon icon={faMobileAlt} size="lg"/></div>
                                <div className='ad-block-text'>Мобильное приложение (Soon)</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='request-container'>
                <div className='request-block'>
                    <div>
                        <div  className="request-text" >CNIITY Chargers – розробник і виробник електрозаправних станцій,
                            тому ми можемо виготовити заправні станції під Ваш унікальний дизайн
                            і потреби. Надішліть нам запит і отримайте індивідуальну комерційну пропозицію.
                        </div>
                        <button className='mt-button request-button'>ОТПРАВИТЬ ЗАПРОС</button>

                    </div>
                </div>
            </div>

{/* slider block */}

            <div className='slider-container'>
                <div className="slider-elementor">
                    <div className='slider-box'>
                        <Carousel/>
                    </div>
                    <div className='slider-text-box'>
                        <div className='slider-text'>Наша компанія пропонує іноваційне IT-рішення для управління зарядними станціями на невеликих локаціях (приватний паркінг, паркінг компаній, житлових комплексів) так й систему повного циклу для комерційного використання зарядних станцій. Ми – інжинірингова українська компанія, відома своїми IT-професіоналами та ефективними ціновими рішеннями. Під нашим управлінням знаходиться власна мережа електрозаправочних станцій <span className='uvb-strong-text'> CNIITY Chargers</span>, тому наші рішення життєздатні та випробувані на практиці.
                        </div>
                    </div>
                </div>
            </div>


            <div className='mapinfo-container'>
                <div className="mapinfo-elementor">
                    <div className='mapinfo-text-box'>
                        <div className='mapinfo-text'>Для пошуку зарядних станцій для електромобілів в Україні ви можете користуватися картой електрозаправок  <span className='uvb-strong-text'>CNIITY Chargers:</span> адреси встановлених електрозаправок можна знайти на сайті компанії, а також в мобільному додатку. Придбавши та встановивши електрозаправочне обладнання <span className='uvb-strong-text'>CNIITY Chargers </span>, власник заправки гарантовано отримує велику кількість потенційних клієнтів за рахунок відображення встановленої електрозаправки на всеукраїнських картах.
                        </div>
                    </div>

                    <div className='mapinfo-box'>
                        <NavLink to='/map'><FontAwesomeIcon icon={faMapMarkerAlt}/></NavLink>
                    </div> 
                </div>
            </div>


        </div>
        </>
    );
}

export default MainPage;
