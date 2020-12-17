import React, {useContext, useState,useEffect} from 'react'
import {Redirect, useParams} from "react-router-dom"
import './Use.css'

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

import {NavLink} from 'react-router-dom'
import {MarkerContext} from '../context/MarkerContext'
import {AuthContext} from '../context/AuthContext'
import {Loaderr} from './Loaderr'

import CounterInput from "./CounterInput"

const Use = ({props}) => {
    const [state, setState] = useState()


const [markers] = useContext(MarkerContext)

useEffect(() => {
    if (props !== undefined && markers !== undefined){
        markers.map((key)=>{
            if (key.id === props.chargePointId){
                setState(key)
            }
        })
    }
}, [props])
    if (props && state){

    return (
        <>
            <div className="station-prop">
                <div className="station-prob-bg"></div>
            
                <div className='station-body charge-body'>
                    <div className='use-charge'>
                        <div className='use-sharge-left'>
                            <div className="station-opt">
                                <div className="station-connector-bold">Port</div>
                                <div className="station-connector-text">&nbsp;&nbsp;&nbsp;&nbsp;{props.connectorId}</div>
                            </div>
                            <div className="station-opt">
                                <div className="station-connector-bold">Type</div>
                                <div className="station-connector-text">{state.connectors[props.connectorId].type}</div>
                            </div>
                        </div>
                        <div className='use-charge-centre'>
                            <div className='use-charge-connector'><img className='charge-img' src={Type2work} alt='charge'/></div>
                            <div className='usecharge-counter'> {props.userAction.currentTime}</div>
                        </div>
                        <div className='use-charge-right'>
                            <div className="station-opt">
                                <div className="station-connector-bold">Power</div>
                                <div className="station-connector-text">{state.connectors[props.connectorId].power}</div>
                            </div>
                            <div className="station-opt">
                                <div className="station-connector-bold">Тириф</div>
                                <div className="station-connector-text">{state.connectors[props.connectorId].tariffs.charge} гр/кВт</div>
                            </div>
                        </div>
                    </div>
                    <div className='use-btn-block'>
                        <div className='use-btn-text'>{props.userAction.currentEnergy}</div>
                        <div className='use-btn-calk'>{props.userAction.remainedEnergy} / {props.userAction.totalEnergy}</div>
                        <button className='station-body-button use-btn'>Завершить</button>
                    </div>
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

return <div></div>
}


export default Use
