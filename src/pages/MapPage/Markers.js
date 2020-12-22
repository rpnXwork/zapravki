import React, { useState, useEffect, useContext}  from 'react'
import { Marker, Popup } from "react-leaflet"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {MarkerContext} from '../../context/MarkerContext'
import { faClock  } from '@fortawesome/free-solid-svg-icons'
import './Markers.css'
import {
    Work,
    Busy,
    Reserved,
    Service,
    Build,
    Connected,
    Alert,

    WorkWork,
    WorkBuild,
    WorkBusy,
    WorkReserved,
    WorkConnected,
    WorkAlert,
    WorkService,

    BuildBuild,
    BuildService,
    BuildBusy,
    BuildWork,
    BuildAlert,
    BuildReserved,
    BuildConnected,

    ServiceService,
    ServiceBusy,
    ServiceBuild,
    ServiceWork,
    ServiceConnected,
    ServiceReserved,
    ServiceAlert,

    BusyService,
    BusyWork,
    BusyBusy,
    BusyBuild,
    BusyAlert,
    BusyConnected,
    BusyReserved,

    AlertService,
    AlertWork,
    AlertBusy,
    AlertBuild,
    AlertAlert,
    AlertConnected,
    AlertReserved,

    ConnectedService,
    ConnectedWork,
    ConnectedBusy,
    ConnectedBuild,
    ConnectedAlert,
    ConnectedConnected,
    ConnectedReserved,

    ReservedService,
    ReservedWork,
    ReservedBusy,
    ReservedBuild,
    ReservedAlert,
    ReservedConnected,
    ReservedReserved,
    } from './icons/Icon'

import { Link } from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext'


const  Popups = ({props, charge}) => {
    const [markers] = useContext(MarkerContext)
    const {isAuthenticated} = useContext(AuthContext)


    const [state, setState] = useState(props)
    const [work, setWork] = useState(false)
    const [c, setC] = useState()

    useEffect(() => {
        if(charge !== undefined) {
            setC(charge.type)
            if (charge.userAction.shouldBeFinished) {
                setC(undefined)
            }
        }
        
    }, [charge])

        useEffect(() => {
            setState(props)
        }, [props])

        useEffect(() => {
            setWork(false)
            if (state.connectors.length  === 2 ){
                if (state.connectors[0].status === 'work' || state.connectors[0].status === 'connected'){
                    setWork(true)
                } else if (state.connectors[1].status === 'work' || state.connectors[1].status === 'connected') {
                    setWork(true)
                } else {
                    setWork(false)
                }
            } else if (state.connectors.length === 1 ){
                if (state.connectors[0].status === 'work' || state.connectors[0].status === 'connected'){
                    setWork(true)
                }       
            } else {
                setWork(false)
            }    
        }, [markers, state.connectors])

    return (
        <>
            <Popup closeButton={true} closeOnClick={true} minWidth={250}>
                <div className='popup-tittle'>{props.properties.tittle}</div>
                <div className='popup-adress'>{props.properties.address}</div>
                <div className='popup-worktime'><FontAwesomeIcon className='popup-icon' icon={faClock} size="lg"/>{props.properties.worktime}</div>
                <div className='popup-connectors'>
                    {state.connectors.map((key, i) => {
                        if (key.status === "work") {
                            return (  
                            <div className='popup-connector' key={i} style={{padding: '10px'}}>
                                    <div className='popup-connector-type'>{key.type}</div>
                                    <div className='popup-connector-power'>{key.power}</div>
                                    <div className='popup-connector-status' style={{border:'8px solid #41a350'}}>
                                        <div className='popup-connector-status-status'>
                                            {i + 1}
                                        </div>
                                    </div>              
                                </div>
                            )
                        }
                        if (key.status === "service") {
                            return (
                                <div className='popup-connector' key={i} style={{padding: '10px'}}>
                                        <div className='popup-connector-type'>{key.type}</div>
                                        <div className='popup-connector-power'>{key.power}</div>
                                        <div className='popup-connector-status' style={{border:'8px solid #A3A6AB'}}>
                                            <div className='popup-connector-status-status'>
                                                {i + 1}
                                            </div>
                                        </div>              
                                    </div>
                                )
                        }
                        if (key.status === "build") {
                            return (
                                <div className='popup-connector' key={i} style={{padding: '10px'}}>
                                        <div className='popup-connector-type'>{key.type}</div>
                                        <div className='popup-connector-power'>{key.power}</div>
                                        <div className='popup-connector-status' style={{border:'8px solid #404040'}}>
                                            <div className='popup-connector-status-status'>
                                                {i + 1}
                                            </div>
                                        </div>              
                                    </div>
                                )
                        }
                        if (key.status === "busy") {
                            return (
                                <div className='popup-connector' key={i} style={{padding: '10px'}}>
                                        <div className='popup-connector-type'>{key.type}</div>
                                        <div className='popup-connector-power'>{key.power}</div>
                                        <div className='popup-connector-status' style={{border:'8px solid #00B0E6'}}>
                                            <div className='popup-connector-status-status'>
                                                {i + 1}
                                            </div>
                                        </div>              
                                    </div>
                                )
                        }
                        if (key.status === "connected") {
                            return (
                                <div className='popup-connector' key={i} style={{padding: '10px'}}>
                                        <div className='popup-connector-type'>{key.type}</div>
                                        <div className='popup-connector-power'>{key.power}</div>
                                        <div className='popup-connector-status' style={{border:'8px solid #E5BB12'}}>
                                            <div className='popup-connector-status-status'>
                                                {i + 1}
                                            </div>
                                        </div>              
                                    </div>
                                )
                        }
                        if (key.status === "reserved") {
                            return (
                                <div className='popup-connector' key={i} style={{padding: '10px'}}>
                                        <div className='popup-connector-type'>{key.type}</div>
                                        <div className='popup-connector-power'>{key.power}</div>
                                        <div className='popup-connector-status' style={{border:'8px solid #C416FF'}}>
                                            <div className='popup-connector-status-status'>
                                                {i + 1}
                                            </div>
                                        </div>              
                                    </div>
                                )
                        }
                        if (key.status === "alert") {
                            return (
                                <div className='popup-connector' key={i} style={{padding: '10px'}}>
                                    <div className='popup-connector-type'>{key.type}</div>
                                    <div className='popup-connector-power'>{key.power}</div>
                                    <div className='popup-connector-status' style={{border:'8px solid #FF3549'}}>
                                        <div className='popup-connector-status-status'>
                                            {i + 1}
                                        </div>
                                    </div>              
                                </div>
                            )
                        }
                        return (  
                            <div className='popup-connector' key={i} style={{padding: '10px'}}>
                                    <div className='popup-connector-type'>{key.type}</div>
                                    <div className='popup-connector-power'>{key.power}</div>
                                    <div className='popup-connector-status' style={{border:'8px solid #41a350'}}>
                                        <div className='popup-connector-status-status'>
                                            {i + 1}
                                        </div>
                                    </div>              
                                </div>
                            )
                        
                    })}
                </div>
                
                {(isAuthenticated && work && !c)?
                <Link to={`map/station${state.id}`}> <button className='popup-btn'>Зарядиться</button></Link>:
                 (isAuthenticated && !work)?<div>Нет доступных станций</div>:
                 (isAuthenticated && work && c === 'charge')?<div>уже идет зарядка</div>:
                 (isAuthenticated && work && c === 'reserve')?<div>уже есть резерв</div>:
                <Link to='/login'> <button className='popup-btn'>Войти</button></Link>}
            </Popup>   
        </>
    )
}

const Markers = ({props,charge}) => {

    const [state, setState] = useState(props)

        useEffect(() => {
            setState(props)
        }, [props])


const geo = [state.geometry.coordinates[1],state.geometry.coordinates[0]]

    if (state.connectors.length  === 1){
        if (state.connectors[0].status === 'work'){
            return(
                <Marker position={geo} icon = {Work}>
                    <Popups props = {state} charge={charge}/>  
                </Marker>
            )
        }
        if (state.connectors[0].status === 'service'){
            return(
                <Marker position={geo} icon = {Service}>
                    <Popups props = {state} charge={charge}/>  
                </Marker>  
            )
        }
        if (state.connectors[0].status === 'busy'){
            return(
                <Marker position={geo} icon = {Busy}>
                    <Popups props = {state} charge={charge}/>  
                </Marker>
            )
        }
        if (state.connectors[0].status === 'alert'){
            return(
                <Marker position={geo} icon = {Alert}>
                    <Popups props = {state} charge={charge}/>  
                </Marker>
            )
        }
        if (state.connectors[0].status === 'connected'){
            return(
                <Marker position={geo} icon = {Connected}>
                    <Popups props = {state} charge={charge}/>  
                </Marker>  
            )
        }
        if (state.connectors[0].status === 'build'){
            return(
                <Marker position={geo} icon = {Build}>
                    <Popups props = {state} charge={charge}/>  
                </Marker>
            )
        }
        if (state.connectors[0].status === 'reserved'){
            return(
                <Marker position={geo} icon = {Reserved}>
                    <Popups props = {state} charge={charge}/>  
                </Marker>
            )
        }
    }

    // WORK||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

    if (state.connectors[0].status === 'work' && state.connectors[1].status === 'work'){
        return(
            <Marker position={geo} icon = {WorkWork}>
                <Popups props = {state} charge={charge}/>  
            </Marker>
        )}
    if (state.connectors[0].status === 'work' && state.connectors[1].status === 'service'){
        return(
            <Marker position={geo} icon = {WorkService}>
                <Popups props = {state} charge={charge}/>          
            </Marker>
        )}

    if (state.connectors[0].status === 'work' && state.connectors[1].status === 'build'){
        return(
                <Marker position={geo} icon = {WorkBuild}>
                 <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'work' && state.connectors[1].status === 'busy'){
        return(
                <Marker position={geo} icon = {WorkBusy}>
                 <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'work' && state.connectors[1].status === 'connected'){
        return(
                <Marker position={geo} icon = {WorkConnected}>
                    <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'work' && state.connectors[1].status === 'reserved'){
        return(
                <Marker position={geo} icon = {WorkReserved}>
                    <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'work' && state.connectors[1].status === 'alert'){
        return(
                <Marker position={geo} icon = {WorkAlert}>
                    <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}

    // Build||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

    if (state.connectors[0].status === 'build' && state.connectors[1].status === 'build'){
        return(
                <Marker position={geo} icon = {BuildBuild}>
                 <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'build' && state.connectors[1].status === 'service'){
        return(
                <Marker position={geo} icon = {BuildService}>
                 <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'build' && state.connectors[1].status === 'work'){
        return(
                <Marker position={geo} icon = {BuildWork}>
                 <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'build' && state.connectors[1].status === 'busy'){
        return(
                <Marker position={geo} icon = {BuildBusy}>
                 <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'build' && state.connectors[1].status === 'connected'){
        return(
                <Marker position={geo} icon = {BuildConnected}>
                    <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'build' && state.connectors[1].status === 'alert'){
        return(
                <Marker position={geo} icon = {BuildAlert}>
                    <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'build' && state.connectors[1].status === 'reserved'){
        return(
                <Marker position={geo} icon = {BuildReserved}>
                    <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}

    // BUSY ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

    if (state.connectors[0].status === 'busy' && state.connectors[1].status === 'busy'){
        return(
                <Marker position={geo} icon = {BusyBusy}>
                 <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}

    if (state.connectors[0].status === 'busy' && state.connectors[1].status === 'work'){
        return(
                <Marker position={geo} icon = {BusyWork}>
                 <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}


    if (state.connectors[0].status === 'busy' && state.connectors[1].status === 'service'){
        return(
                <Marker position={geo} icon = {BusyService}>
                 <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}


    if (state.connectors[0].status === 'busy' && state.connectors[1].status === 'build'){
        return(
                <Marker position={geo} icon = {BusyBuild}>
                 <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'busy' && state.connectors[1].status === 'alert'){
        return(
                <Marker position={geo} icon = {BusyAlert}>
                    <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}


    if (state.connectors[0].status === 'busy' && state.connectors[1].status === 'connected'){
        return(
                <Marker position={geo} icon = {BusyConnected}>
                    <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}


    if (state.connectors[0].status === 'busy' && state.connectors[1].status === 'reserved'){
        return(
                <Marker position={geo} icon = {BusyReserved}>
                    <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}


    if (state.connectors[0].status === 'service' && state.connectors[1].status === 'work'){
        return(
                <Marker position={geo} icon = {ServiceWork}>
                 <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}

    if (state.connectors[0].status === 'service' && state.connectors[1].status === 'service'){
        return(
                <Marker position={geo} icon = {ServiceService}>
                 <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}

    if (state.connectors[0].status === 'service' && state.connectors[1].status === 'busy'){
        return(
                <Marker position={geo} icon = {ServiceBusy}>
                 <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}

    if (state.connectors[0].status === 'service' && state.connectors[1].status === 'build'){
        return(
                <Marker position={geo} icon = {ServiceBuild}>
                 <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}

    if (state.connectors[0].status === 'service' && state.connectors[1].status === 'alert'){
        return(
                <Marker position={geo} icon = {ServiceAlert}>
                    <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}

    if (state.connectors[0].status === 'service' && state.connectors[1].status === 'connected'){
        return(
                <Marker position={geo} icon = {ServiceConnected}>
                    <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}

    if (state.connectors[0].status === 'service' && state.connectors[1].status === 'reserved'){
        return(
                <Marker position={geo} icon = {ServiceReserved}>
                    <Popups props = {state} charge={charge}/>       
                </Marker>
        )}    
        
        

    if (state.connectors[0].status === 'connected' && state.connectors[1].status === 'build'){
        return(
                <Marker position={geo} icon = {ConnectedBuild}>
                    <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'connected' && state.connectors[1].status === 'service'){
        return(
                <Marker position={geo} icon = {ConnectedService}>
                    <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'connected' && state.connectors[1].status === 'work'){
        return(
                <Marker position={geo} icon = {ConnectedWork}>
                    <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'connected' && state.connectors[1].status === 'busy'){
        return(
                <Marker position={geo} icon = {ConnectedBusy}>
                    <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'connected' && state.connectors[1].status === 'connected'){
        return(
                <Marker position={geo} icon = {ConnectedConnected}>
                    <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'connected' && state.connectors[1].status === 'alert'){
        return(
                <Marker position={geo} icon = {ConnectedAlert}>
                    <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'connected' && state.connectors[1].status === 'reserved'){
        return(
                <Marker position={geo} icon = {ConnectedReserved}>
                    <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}


    if (state.connectors[0].status === 'reserved' && state.connectors[1].status === 'build'){
        return(
                <Marker position={geo} icon = {ReservedBuild}>
                    <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'reserved' && state.connectors[1].status === 'service'){
        return(
                <Marker position={geo} icon = {ReservedService}>
                    <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'reserved' && state.connectors[1].status === 'work'){
        return(
                <Marker position={geo} icon = {ReservedWork}>
                    <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'reserved' && state.connectors[1].status === 'busy'){
        return(
                <Marker position={geo} icon = {ReservedBusy}>
                    <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'reserved' && state.connectors[1].status === 'connected'){
        return(
                <Marker position={geo} icon = {ReservedConnected}>
                    <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'reserved' && state.connectors[1].status === 'alert'){
        return(
                <Marker position={geo} icon = {ReservedAlert}>
                    <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'reserved' && state.connectors[1].status === 'reserved'){
        return(
                <Marker position={geo} icon = {ReservedReserved}>
                    <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}


    if (state.connectors[0].status === 'alert' && state.connectors[1].status === 'build'){
        return(
                <Marker position={geo} icon = {AlertBuild}>
                    <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'alert' && state.connectors[1].status === 'service'){
        return(
                <Marker position={geo} icon = {AlertService}>
                    <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'alert' && state.connectors[1].status === 'work'){
        return(
                <Marker position={geo} icon = {AlertWork}>
                    <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'alert' && state.connectors[1].status === 'busy'){
        return(
                <Marker position={geo} icon = {AlertBusy}>
                    <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'alert' && state.connectors[1].status === 'connected'){
        return(
                <Marker position={geo} icon = {AlertConnected}>
                    <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'alert' && state.connectors[1].status === 'alert'){
        return(
                <Marker position={geo} icon = {AlertAlert}>
                    <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'alert' && state.connectors[1].status === 'reserved'){
        return(
                <Marker position={geo} icon = {AlertReserved}>
                    <Popups props = {state} charge={charge}/>                  
            </Marker>
        )}
        
    return(
        <Marker position={geo}>
            <Popups props = {state} charge={charge}/>               
        </Marker>
        )
        
}


export default Markers;