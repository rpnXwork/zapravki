import React, {useContext, useState,useEffect} from 'react'
import {Redirect, useParams} from "react-router-dom"
import './Connectors.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import {Image} from './ConnectorsImage'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom'
import {MarkerContext} from '../../context/MarkerContext'
import {AuthContext} from '../../context/AuthContext'
import {Loaderr} from '../../components/Loaderr'
import {useHttp} from '../../hooks/http.hook'
import {useMessage} from '../../hooks/message.hook'
import {API, PORT} from '../../api'

import CounterInput from "../../components/CounterInput"

const Connectors = () => {

    const {conectorId} = useParams()
    const [markers] = useContext(MarkerContext)
    const {id, setChargeid}  = useContext(AuthContext)
    const {request, error, clearError} = useHttp()
    const message = useMessage()
    const [mes, setMes] = useState(null)

    const [state, setState] = useState(null)

    const [work, setWork] = useState([])
    const [busy, setBusy] = useState([])
    const [alert, setAlert] = useState([])
    const [service, setService] = useState([])
    const [build, setBuild] = useState([])
    const [reserved, setReserved] = useState([])   
    const [connected, setConnected] = useState([])
    const [status, setStatus] = useState(false)
    const [plug, setPlug] = useState(false)

    const [charge, setCharge] = useState(false)
    const [reserv, setReserv] = useState(false)
    const [action, setAction] = useState(null)
    const [checked, setChecked] = useState({
        0: false,
        1: false
    })
    const [port, setPort] = useState(0)
    const [countCharge, setCountCharge] = useState(0)
    const [hour, setHour] = useState(false)
    const [hourmess, setHourmess] = useState(false)
    const [unlim, setUnlim] = useState(false)
    const [unlimmess, setUnlimmess] = useState(false)

    useEffect(() => {
        if (!work.length && !connected.length){
            setChecked({
                1: false,
                2: false   
            })
            setHour(false)
            setHourmess(false)
            setCharge(false)
            setReserv(false)
            setUnlim(false)
            setUnlimmess(false)
        }
        
    }, [work, connected])

    useEffect(() => {
        message(mes)
        message(error)
        setMes(null)
        clearError()
      }, [error, mes, message, clearError])
      useEffect(() => {
        M.updateTextFields()
      }, [])

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
        }
    }, [work])

    useEffect(() => {
        if (connected && connected.length === 0){
            setChecked({
                0: false,
                1: false
            })
            setHour(false)
            setCharge(false)
            setReserv(false)
            setCountCharge(0)
        }
    }, [connected])

    let workarr = []
    let busyarr = []
    let alertarr = []
    let servicearr = []
    let buildarr = []
    let reservedarr = []
    let connectedarr = []

    const arraycreator = (data) => {
     
        data.forEach(key => {
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

    const getMarkerFromContext = (data) => {
        data.forEach(key=>{
            if (String(key.id) === conectorId){
                setState(key)
            }
        })
    }

    useEffect(() => {
        if (markers && markers !== null) {
            getMarkerFromContext(markers)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [markers])

    useEffect(() => {
        if (state !== null){
            arraycreator(state.connectors)
            setPlug(false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state])

    const changeHandler = event => {
        if (event.target.name === "1" && checked[1] === false) {
                setChecked({
                1: true,
                2: false
            })
            setPort(1)
            setPlug(false)
        } else if (event.target.name === "1" && checked[1] === true) {
                setChecked({
                1: false,
                2: false
            })
            setHour(false)
            setReserv(false)
            setCharge(false)
            setPlug(false)
            setCountCharge(0)
            // setCountReserv(0)
        } else if  (event.target.name === "2" && checked[2] === true) {
            setChecked({
                1: false,
                2: false
            })
            setHour(false)
            setReserv(false)
            setPlug(false)
            setCharge(false)
            setCountCharge(0)
            // setCountReserv(0)
        } else {
            setChecked({
                1: false,
                2: true   
            })
            setPort(2)
            setPlug(false)
        }
    }

    const startcharge = async (e, count = 1) => {
        try{
            const data = await request(`${API}${PORT}/chargepoint/${conectorId}/start/${action}/${port}/${id}?${e}=${countCharge * count}`, 'POST','')
            setChargeid(conectorId,id)
            setChecked({
                1: false,
                2: false   
            })
            setReserv(false)
            setCharge(false)
            if (data.status === 'plug'){
                setPlug(true)
            }
            setMes(data.message)
            if (data.status === 'ok') {
                setStatus(true)
            }
        } catch(e){
        }    
    }

    const Connector = ({props , status, num}) => {

        return(                            
            <div className="station-connector">
            <div className="station-connector-body">                            
                {status === "work" || status === 'connected'?<div className="station-connector-picker"><input name={`${num}`} className='input-checkbox' type='checkbox' checked={checked[num]} onChange={(e)=>{changeHandler(e)}}></input></div >:<div style={{width:"26px"}}></div>}
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

    if (markers === null) {
        return ( <Redirect to='/map'/>)
    }

    if (status) {
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

                        {(state !== null && work.length)?<div className="station-connector-tittle" style={{backgroundColor: "#41a350"}}>Доступны</div>:<div></div>}
                        {work?
                        work.map((key, i)=>
                        <Connector props = {key} key={key.number} status = {"work"} num={key.number}/>)
                        :<div>load</div>}

                        {(state !== null && busy.length)?<div className="station-connector-tittle" style={{backgroundColor: "#00B0E6"}}>Заняты</div>:<div></div>}
                        {busy?
                        busy.map((key, i)=>
                        <Connector props = {key}key={key.number} status = {"busy"} num={key.number}/>)
                        :<div>load</div>}

                        {(state !== null && reserved.length)?<div className="station-connector-tittle" style={{backgroundColor: "#C416FF"}}>Зарезервированы</div>:<div></div>}
                        {reserved?
                        reserved.map((key, i)=>
                        <Connector props = {key}key={key.number} status = {"reserved"} num={key.number}/>)
                        :<div>load</div>}

                        {(state !== null && connected.length)?<div className="station-connector-tittle" style={{backgroundColor: "#E5BB12"}}>Подключены</div>:<div></div>}
                        {connected?
                        connected.map((key, i)=>
                        <Connector props = {key}key={key.number} status = {"connected"} num={key.number}/>)
                        :<div>load</div>}
                        
                        {(state !== null && service.length)?<div className="station-connector-tittle" style={{backgroundColor: "#A3A6AB"}}>Сервис</div>:<div></div>}
                        {service?
                        service.map((key, i)=>
                        <Connector props = {key}key={key.number} status = {"service"} num={key.number}/>)
                        :<div>load</div>}

                        {(state !== null && alert.length)?<div className="station-connector-tittle" style={{backgroundColor: "#FF3549"}}>Пиздец</div>:<div></div>}
                        {alert?
                        alert.map((key, i)=>
                          <Connector props = {key}key={key.number} status = {"alert"} num={key.number}/>)
                        :<div>load</div>}

                        {(state !== null && build.length)?<div className="station-connector-tittle" style={{backgroundColor: "#404040"}}>Строятся</div>:<div></div>}
                        {build?
                        build.map((key, i)=>
                        <Connector props = {key}key={key.number} status = {"build"} num={key.number}/>)
                        :<div>load</div>}

                    </div>
                    {plug?<div onClick={()=>{setPlug(false)}} className='station-plug'><div className='plug-text'>Вставте конектор, когда состояние разьема изменится (желтый) начните зарядку заново.</div></div>:<div></div>}
                    {checked[1] && state.connectors[0].status === 'work'?
                    <div className='station-body-buttons'>
                        <button className='station-body-button' style={charge?{backgroundColor: '#41a350'}:{backgroundColor: '#A3A6AB'}} onClick={()=>{
                            setCharge(true)
                            setAction('charge')
                            setHour(true)
                            setHourmess(true)
                            setReserv(false)
                            }}>Зарядить</button>
                        <button className='station-body-button' style={reserv?{backgroundColor: '#C416FF'}:{backgroundColor: '#A3A6AB'}} onClick={()=>{
                            setReserv(true)
                            setCharge(false)
                            setHour(false)
                            setHourmess(false)
                            setAction('reserve')
                            }}>Резервировать</button>
                    </div>:
                    checked[1] && state.connectors[0].status === 'connected'?
                    <div className='station-body-buttons'>
                    <button className='station-body-button' style={charge?{backgroundColor: '#E5BB12'}:{backgroundColor: '#A3A6AB'}} onClick={()=>{
                        setCharge(true)
                        setAction('charge')
                        setHour(true)
                        setHourmess(true)
                        setReserv(false)
                        }}>Зарядить</button>
                </div>:
                    checked[2] && state.connectors[1].status === 'work'?
                    <div className='station-body-buttons'>
                        <button className='station-body-button' style={charge?{backgroundColor: '#41a350'}:{backgroundColor: '#A3A6AB'}} onClick={()=>{
                            setCharge(true)
                            setAction('charge')
                            setHour(true)
                            setHourmess(true)
                            setReserv(false)
                            }}>Зарядить</button>
                        <button className='station-body-button' style={reserv?{backgroundColor: '#C416FF'}:{backgroundColor: '#A3A6AB'}} onClick={()=>{
                            setReserv(true)
                            setCharge(false)
                            setHour(false)
                            setAction('reserve')
                            setHourmess(false)
                            }}>Резервировать</button>
                    </div>:
                    checked[2] && state.connectors[1].status === 'connected'?
                    <div className='station-body-buttons'>
                    <button className='station-body-button' style={charge?{backgroundColor: '#E5BB12'}:{backgroundColor: '#A3A6AB'}} onClick={()=>{
                        setCharge(true)
                        setAction('charge')
                        setHour(true)
                        setHourmess(true)
                        setReserv(false)
                        }}>Зарядить</button>
                </div>:
                    <div></div>}
                    {reserv?
                    <div className='reserv-body'>
                        <CounterInput
                            count = {countCharge}
                            placeholder='mm'
                            min={0}
                            max={500}
                            onCountChange={count => setCountCharge(count)}
                            />
                        <div className='reserv-tittle'>Итого:</div>
                        {state.connectors[port-1]?<div className='reserv-count'>{countCharge * Math.round(state.connectors[port-1].tariffs.reserve*100)/100}</div>:<div></div>}
                        <div className='reserv-UAH'>UAH</div>
                        <button className='station-body-button reserv-btn' onClick={()=>{startcharge("totalSeconds", 60)}} style={{backgroundColor: '#C416FF'}}>Зарезервировать</button>
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
                            setCountCharge(1)
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
                            <div className='reserv-count'>{countCharge * Math.round(state.connectors[port-1].tariffs.charge*100)/100}</div>:
                            <div className='reserv-count'>{100 * Math.round(state.connectors[port-1].tariffs.charge*100)/100}</div>}
                            <div className='reserv-UAH'>Uah</div>
                            
                            <button
                            className='station-body-button reserv-btn'
                            onClick={state.connectors[port-1]&&hour?()=>{startcharge('energy')}:
                            state.connectors[port-1]&&unlim?()=>{startcharge('energy', 100)}:
                            ()=>{startcharge("energy", 1)}} style={{backgroundColor: '#41a350'}}>Зарядить</button>
                    </div>:
                    <div></div>
                    }
                </div>
             </div>
        </>
    )
}

export default Connectors
