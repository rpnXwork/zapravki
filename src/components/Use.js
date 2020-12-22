import React, {useContext, useState,useEffect} from 'react'
import './Use.css'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {API, PORT} from '../api'

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

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'

import {MarkerContext} from '../context/MarkerContext'
import {AuthContext} from '../context/AuthContext'
import {Loaderr} from './Loaderr'

const Use = ({updUse,props}) => {
    const {id} = useContext(AuthContext)
    const {request, error, clearError} = useHttp()
    const [state, setState] = useState()
    const [markers] = useContext(MarkerContext)
    const message = useMessage()
    const [mes] = useState(null)
    const [use, setUse] = useState(true)

    useEffect(() => {
        message(mes)
        message(error)
        clearError()
      }, [error, message, clearError, mes])

      useEffect(() => {
        window.M.updateTextFields()
      }, [])

    useEffect(() => {
        if (props !== undefined && markers !== undefined){
            markers.forEach(key=>{
                if (key.id === props.chargePointId){
                    setState(key)
                }
            })
        }
    }, [markers, props])

    const stopsharge = async () => {
        try{
            const data = await request(`${API}${PORT}/end/${id}`, 'POST', '')
            if(data){
            }
        } catch(e){
        }  
    }

    useEffect(()=>{
        updUse(use)
    },[updUse, use])

    if (props && state){

    return (
        <>
            <div className="station-prop">
                <div className="station-prob-bg" onClick={()=>{setUse(false)}}></div>
                <div className='station-body charge-body'>
                <button className='use-close-btn' onClick={()=>{setUse(false)}}>
                    <FontAwesomeIcon className='closebtn' icon={faTimes}/>
                </button>
                    <div className='use-charge'>
                        <div className='use-sharge-left'>
   
                            <div className="station-opt">
                                <div className="station-connector-bold">Port</div>
                                <div className="station-connector-text">&nbsp;&nbsp;&nbsp;&nbsp;{props.connectorId}</div>
                            </div>
                            <div className="station-opt">
                                <div className="station-connector-bold">Type</div>
                                <div className="station-connector-text">{state.connectors[props.connectorId-1].type}</div>
                            </div>
                        </div>
                        <div 
                        className='use-charge-centre' 
                        style={
                            state.connectors[props.connectorId-1].status ==='work'?{borderColor:"#41a350"}:
                            state.connectors[props.connectorId-1].status ==='connected'?{borderColor:"#E5BB12"}:
                            state.connectors[props.connectorId-1].status ==='reserved'?{borderColor:"#C416FF"}:
                            state.connectors[props.connectorId-1].status ==='busy'?{borderColor:"#00B0E6"}:
                            state.connectors[props.connectorId-1].status ==='servise'?{borderColor:"#A3A6AB"}:
                            state.connectors[props.connectorId-1].status ==='build'?{borderColor:"#404040"}:
                            state.connectors[props.connectorId-1].status ==='alert'?{borderColor:"#FF3549"}:
                            {borderColor:"#A3A6AB"}}>
                            <div className='use-charge-connector'>
                                {state.connectors[props.connectorId-1].type === "AC1/J1772"?
                                    <img className='charge-img' src={state.connectors[props.connectorId-1].status ==='work'?Type1work:
                                    state.connectors[props.connectorId-1].status ==='connected'?Type1connected:
                                    state.connectors[props.connectorId-1].status ==='reserved'?Type1reserved:
                                    state.connectors[props.connectorId-1].status ==='busy'?Type1busy:
                                    state.connectors[props.connectorId-1].status ==='buid'?Type1build:
                                    state.connectors[props.connectorId-1].status ==='alert'?Type1alert:
                                    state.connectors[props.connectorId-1].status ==='service'?Type1service:
                                    Type1service} alt='reserve-img'/>:
                                    state.connectors[props.connectorId-1].type === "AC3/Type2"?
                                    <img className='charge-img' src={state.connectors[props.connectorId-1].status ==='work'?Type2work:
                                    state.connectors[props.connectorId-1].status ==='connected'?Type2connected:
                                    state.connectors[props.connectorId-1].status ==='reserved'?Type2reserved:
                                    state.connectors[props.connectorId-1].status ==='busy'?Type2busy:
                                    state.connectors[props.connectorId-1].status ==='build'?Type2build:
                                    state.connectors[props.connectorId-1].status ==='alert'?Type2alert:
                                    state.connectors[props.connectorId-1].status ==='service'?Type2service:
                                    Type2service} alt='reserve-img'/>:
                                    <img className='charge-img' src={state.connectors[props.connectorId-1].status ==='work'?Type2work:
                                    state.connectors[props.connectorId-1].status ==='connected'?Type2connected:
                                    state.connectors[props.connectorId-1].status ==='reserved'?Type2reserved:
                                    state.connectors[props.connectorId-1].status ==='busy'?Type2busy:
                                    state.connectors[props.connectorId-1].status ==='build'?Type2build:
                                    state.connectors[props.connectorId-1].status ==='service'?Type2service:
                                    state.connectors[props.connectorId-1].status ==='alert'?Type2alert:
                                    Type2service} alt='reserve-img'/>
                                }
                                </div>
                            <div className='usecharge-counter'> {props.userAction.currentTime}</div>
                        </div>
                        <div className='use-charge-right'>
                            <div className="station-opt">
                                <div className="station-connector-bold">Power</div>
                                <div className="station-connector-text">{state.connectors[props.connectorId-1].power}</div>
                            </div>
                            <div className="station-opt">
                                <div className="station-connector-bold">Тириф</div>
                                <div className="station-connector-text">{state.connectors[props.connectorId-1].tariffs.charge} гр/кВт</div>
                            </div>
                        </div>
                    </div>
                    {props.type === "charge"?<div className='use-btn-block'>
                        <div className='use-btn-text'>{props.userAction.currentEnergy} кВт.ч</div>
                        <div className='use-btn-calk'>{props.userAction.remainedEnergy} / {props.userAction.totalEnergy}</div>
                    </div>:
                    props.type === "reserve"?
                    <div className='use-btn-block'>
                    <div className='use-btn-calk'>{props.userAction.remainedTime} / {props.userAction.totalTime}</div>
                    </div>:<div></div>}
                    
                    {!props.userAction.shouldBeFinished?<button className='station-body-button use-btn' onClick={()=>{stopsharge()}}>Завершить</button>:<div>Завершено</div>}

                    <div className='use-info'>
                        <div className='station-body-head'>
                            <div className="station-title">{state.properties.tittle} </div>
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
                        </div>
                    </div>
                </div>
             </div>
        </>
    )
}    

return <Loaderr/>
}


export default Use
