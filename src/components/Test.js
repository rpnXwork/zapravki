import React, {useContext, useState,useEffect} from 'react'
import {Redirect, useParams} from "react-router-dom";
import './Test.css'

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

import close from './images/close.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes  } from '@fortawesome/free-solid-svg-icons'

import {NavLink} from 'react-router-dom'
import {MarkerContext} from '../context/MarkerContext'
import {AuthContext} from '../context/AuthContext'
import {Loaderr} from './Loaderr';

import CounterInput from "../components/CounterInput";



const Test = () => {

    const {id} = useParams()
    const [markers] = useContext(MarkerContext)
    const {isAuthenticated, token} = useContext(AuthContext)

    const [state, setState] = useState()

    const [work, setWork] = useState()
    const [busy, setBusy] = useState()
    const [alert, setAlert] = useState()
    const [service, setService] = useState()
    const [build, setBuild] = useState()
    const [reserved, setReserved] = useState()   
    const [connected, setConnected] = useState()

    const [charge, setCharge] = useState(false)
    const [reserv, setReserv] = useState(false)
    const [checked, setChecked] = useState({
        0: false,
        1: false
    })
    const [port, setPort] = useState(0)

    const [countCharge, setCountCharge] = useState(0)
    const [countReserv, setCountReserv] = useState(0)
    const [hour, setHour] = useState(false)
    const [hourmess, setHourmess] = useState(false)
    const [unlim, setUnlim] = useState(false)
    const [unlimmess, setUnlimmess] = useState(false)


    useEffect(() => {
        if (work && work.length === 0){
            setChecked({
                0: false,
                1: false
            })
            setHour(false)
            setCharge(false)
            setReserv(false)
            setCountCharge(0)
            setCountReserv(0)
        }
    }, [work])

    let workarr = []
    let busyarr = []
    let alertarr = []
    let servicearr = []
    let buildarr = []
    let reservedarr = []
    let connectedarr = []

    const arraycreator = (data) => {
     
        data.map((key,i) => {
            if(key.status === "work") {
                workarr.push(key)
                }
            if(key.status === "busy") {
                busyarr.push(key)
                }
            if(key.status === "alert") {
                alertarr.push(key)
                }
            if(key.status === "service") {
                servicearr.push(key)
                }
            if(key.status === "build") {
                buildarr.push(key)
                }
            if(key.status === "reserved") {
                reservedarr.push(key)
                }
            if(key.status === "connected") {
                connectedarr.push(key)
                }
                setWork(workarr)
                setBusy(busyarr)
                setAlert(alertarr)
                setService(servicearr)
                setBuild(buildarr)
                setReserved(reservedarr)
                setConnected(connectedarr)
            })
    }

    useEffect(() => {
        if (markers && markers !== null) {
            setState(markers[id-1])
            arraycreator(markers[id-1].connectors)
        }
    }, [markers])

    const changeHandler = event => {
        if (event.target.name === "1" && checked[1] === false) {
                setChecked({
                1: true,
                2: false
            })
            setPort(1)
        } else if (event.target.name === "1" && checked[1] === true) {
                setChecked({
                1: false,
                2: false
            })
            setPort(0)
        } else if  (event.target.name === "2" && checked[2] === true) {
            setChecked({
                1: false,
                2: false
            })
            setPort(0)
        } else {
            setChecked({
                1: false,
                2: true   
            })
            setPort(2)
        }
    }

    const Connector = ({props , status, num}) => {

        return(                            
            <div className="station-connector">
            <div className="station-connector-body">                            
                {status === "work" ?<div className="station-connector-picker"><input name={`${num}`} className='input-checkbox' type='checkbox' checked={checked[num]} onChange={(e)=>{changeHandler(e)}}></input></div >:<div style={{width:"26px"}}></div>}
                <div className="station-connector-img">
                   <Image type = {props.type} status={status}/>
                   
                </div>
                <div className="station-connector-prop">
                    <div className="station-connector-bold">Порт</div>
                    <div className="station-connector-text">{props.number}</div>
                </div>
                <div className="station-connector-prop"> 
                    <div className="station-connector-bold">Тип</div>
                    <div className="station-connector-text">{props.type}</div>
                </div>
                <div className="station-connector-prop">
                    <div className="station-connector-bold">Мощность</div>
                    <div className="station-connector-text">{props.power}</div>
                </div>
                <div className="station-connector-prop">
                    <div className="station-connector-bold">Тариф</div>
                    {reserv?<div className="station-connector-text">{props.tariffs.reserve.toFixed(2)} грн/мин</div>:
                    charge?<div className="station-connector-text">{props.tariffs.charge.toFixed(2)} грн/кВт⋅ч</div>:
                    <div className="station-connector-text">{props.tariffs.charge.toFixed(2)} грн/кВт⋅ч</div>}
                </div>
            </div>
        </div>
            
        )
    }

    const Image = ({type , status}) => {

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

    if (markers === null) {
        return ( <Redirect to='/map'/>)
    } 

    return (
        <>
            <div className="station-prop">
            <NavLink to='/map'><div className="station-prob-bg"></div> </NavLink>
            
                <div className='station-body'>
                    {state?
                    <div className='station-body-head'>
                        <div className="station-title">{state.properties.tittle}</div>
                        <div className="station-info">
                            <div className="station-worktime">
                                <div className="station-connector-bold">Рабочее время</div>
                                <div className="station-connector-text">{state.properties.worktime}</div>
                            </div>
                            <div className="station-adress">
                                <div className="station-connector-bold">Адрес</div>
                                <div className="station-connector-text">{state.properties.address}</div>
                            </div>
                        </div>                    
                    </div>:<Loaderr/>}
                    <div className="station-connectors">

                        {(state && work.length)?<div className="station-connector-tittle" style={{backgroundColor: "#41a350"}}>Доступны</div>:<div></div>}
                        {work?
                        work.map((key, i)=>
                        <Connector props = {key} key={i} status = {"work"} num={key.number}/>)
                        :<div>load</div>}

                        {(state && busy.length)?<div className="station-connector-tittle" style={{backgroundColor: "#00B0E6"}}>Заняты</div>:<div></div>}
                        {busy?
                        busy.map((key, i)=>
                        <Connector props = {key} key={i} status = {"busy"} num={key.number}/>)
                        :<div>load</div>}

                        {(state && reserved.length)?<div className="station-connector-tittle" style={{backgroundColor: "#C416FF"}}>Зарезервированы</div>:<div></div>}
                        {reserved?
                        reserved.map((key, i)=>
                        <Connector props = {key} key={i} status = {"reserved"} num={key.number}/>)
                        :<div>load</div>}

                        {(state && connected.length)?<div className="station-connector-tittle" style={{backgroundColor: "#E5BB12"}}>Подключены</div>:<div></div>}
                        {connected?
                        connected.map((key, i)=>
                        <Connector props = {key} key={i} status = {"connected"} num={key.number}/>)
                        :<div>load</div>}
                        
                        {(state && service.length)?<div className="station-connector-tittle" style={{backgroundColor: "#A3A6AB"}}>Сервис</div>:<div></div>}
                        {service?
                        service.map((key, i)=>
                        <Connector props = {key} key={i} status = {"service"} num={key.number}/>)
                        :<div>load</div>}

                        {(state && alert.length)?<div className="station-connector-tittle" style={{backgroundColor: "#FF3549"}}>Пиздец</div>:<div></div>}
                        {alert?
                        alert.map((key, i)=>
                          <Connector props = {key} key={i} status = {"alert"} num={key.number}/>)
                        :<div>load</div>}

                        {(state && build.length)?<div className="station-connector-tittle" style={{backgroundColor: "#404040"}}>Строятся</div>:<div></div>}
                        {build?
                        build.map((key, i)=>
                        <Connector props = {key} key={i} status = {"build"} num={key.number}/>)
                        :<div>load</div>}

                    </div>
                    {checked[1]?
                    <div className='station-body-buttons'>
                        <button className='station-body-button' style={charge?{backgroundColor: '#41a350'}:{backgroundColor: '#A3A6AB'}} onClick={()=>{
                            setCharge(true)
                            setHour(true)
                            setHourmess(true)
                            setReserv(false)
                            }}>Зарядить1</button>
                        <button className='station-body-button' style={reserv?{backgroundColor: '#C416FF'}:{backgroundColor: '#A3A6AB'}} onClick={()=>{
                            setReserv(true)
                            setCharge(false)
                            setCharge(false)
                            }}>Резервировать1</button>
                    </div>:
                    checked[2]?
                    <div className='station-body-buttons'>
                        <button className='station-body-button' style={charge?{backgroundColor: '#41a350'}:{backgroundColor: '#A3A6AB'}} onClick={()=>{
                            setCharge(true)
                            setHour(true)
                            setHourmess(true)
                            setReserv(false)
                            }}>Зарядить2</button>
                        <button className='station-body-button' style={reserv?{backgroundColor: '#C416FF'}:{backgroundColor: '#A3A6AB'}} onClick={()=>{
                            setReserv(true)
                            setCharge(false)
                            setCharge(false)
                            }}>Резервировать2</button>
                    </div>:
                    <div></div>}
                    {reserv?
                    <div className='reserv-body'>
                        <CounterInput
                            count = {countReserv}
                            placeholder='mm'
                            min={0}
                            max={500}
                            onCountChange={count => setCountReserv(count)}
                            />
                        <div className='reserv-tittle'>Итого:</div>
                        {state.connectors[port-1]?<div className='reserv-count'>{countReserv * Math.round(state.connectors[port-1].tariffs.reserve*100)/100}</div>:<div></div>}
                        <div className='reserv-UAH'>UAH</div>
                        <button className='station-body-button reserv-btn' style={{backgroundColor: '#C416FF'}}>Зарезервировать</button>
                    </div>:
                    charge?
                    <div className='connector-charge-btn'>

                        <button
                            style={hour?{backgroundColor: '#41a350'}:{backgroundColor: '#A3A6AB'}}
                            className='connector-hour-btn station-body-button '
                            onClick={()=>{
                            setHour(true)
                            setHourmess(true)
                            setUnlim(false)
                            setUnlimmess(false)
                            }}>кВТч</button>
                        <button 
                            style={unlim?{backgroundColor: '#41a350'}:{backgroundColor: '#A3A6AB'}}
                            className='connector-unlim-btn station-body-button '
                            onClick={()=>{
                            setUnlim(true)
                            setUnlimmess(true)
                            setHour(false)
                            setHourmess(false)
                            }}>Безлимитная</button>

                            {hour?<div className='counterarea'>
                            
                            <span>кв.Ч</span>
                            <CounterInput
                                    count = {countCharge}
                                    placeholder='mm'
                                    min={0}
                                    max={500}
                                    onCountChange={count => setCountCharge(count)}
                                /></div>:<div></div> }  
                           
                            {hourmess?
                            <div>
                                <div className='connector-hour-message'>
                                    <button className='connector-hour-message-btn' onClick={()=>{setHourmess(false)}}>
                                        <FontAwesomeIcon className='closebtn' icon={faTimes}/>
                                    </button>
                                    <div className='connector-hour-message-text'>С вашего счета будет списана сумма за указанное количество кВт*ч согласно тарифа.
                                        В случае остановки зарядки будет произведен перерасчет итоговой суммы, а разница будет возвращена на Ваш счет.</div>
                                   
                                </div>
                            </div>:
                            unlimmess?
                            <div>
                                <div className='connector-hour-message'>
                                    <button className='connector-hour-message-btn' onClick={()=>{setUnlimmess(false)}}>
                                        <FontAwesomeIcon className='closebtn' icon={faTimes}/>
                                    </button>
                                    <div className='connector-hour-message-text'>Безлимитная зарядка - это зарядка без указания времени или кВт*ч.
                                        С Вашего счета будет списана сумма за 10 часов зарядки или 100 кВт*ч согласно тарифа.
                                        В случае остановки зарядки будет произведен перерасчет итоговой суммы, а разница будет возвращена на Ваш счет.
                                        Если у Вас недостаточно средств на счету, Вы можете зарядиться на оставшуюся сумму..</div>
                                
                                </div>
                            </div>:
                            <div></div>}
                            <div className='reserv-tittle'>Итого:</div>
                            {state.connectors[port-1]&&hour?
                            <div className='reserv-count'>{countCharge * Math.round(state.connectors[port-1].tariffs.charge*100)/100 }</div>:
                            <div className='reserv-count'>{100 * Math.round(state.connectors[port-1].tariffs.charge*100)/100}</div>}
                            
                            <div className='reserv-UAH'>UAH</div>
                            <button className='station-body-button reserv-btn' style={{backgroundColor: '#41a350'}}>Зарезервировать</button>
                    </div>:
                    <div></div>
                    }
                    
                </div>
             </div>
        </>
    )
}

export default Test
