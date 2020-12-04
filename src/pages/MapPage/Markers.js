import React, { useState, useEffect }  from 'react';
import { Marker, Popup } from "react-leaflet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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



const  Popups = ({props}) => {


    const [state, setState] = useState(props)

        useEffect(() => {
            setState(props)
        }, [props])

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
                                    <div className='popup-connector-status' style={{border:'8px solid green'}}>
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
                                        <div className='popup-connector-status' style={{border:'8px solid gray'}}>
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
                                        <div className='popup-connector-status' style={{border:'8px solid black'}}>
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
                                        <div className='popup-connector-status' style={{border:'8px solid blue'}}>
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
                                        <div className='popup-connector-status' style={{border:'8px solid orange'}}>
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
                                        <div className='popup-connector-status' style={{border:'8px solid purple'}}>
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
                                    <div className='popup-connector-status' style={{border:'8px solid red'}}>
                                        <div className='popup-connector-status-status'>
                                            {i + 1}
                                        </div>
                                    </div>              
                                </div>
                            )
                        }
                        
                    })}
                </div>
            </Popup> 
            
        </>
    )
    
}

const Markers = ({props}) => {


    const [state, setState] = useState(props)

        useEffect(() => {
            setState(props)
        }, [props])

const geo = [state.geometry.coordinates[1],state.geometry.coordinates[0]]

    if (state.connectors.length  === 1){
        if (state.connectors[0].status === 'work'){
            return(
                <Marker position={geo} icon = {Work}>
                    <Popups props = {props}/>  
                </Marker>
            )
        }
        if (state.connectors[0].status === 'service'){
            return(
                <Marker position={geo} icon = {Service}>
                    <Popups props = {props}/>  
                </Marker>  
            )
        }
        if (state.connectors[0].status === 'busy'){
            return(
                <Marker position={geo} icon = {Busy}>
                    <Popups props = {props}/>  
                </Marker>
            )
        }
        if (state.connectors[0].status === 'alert'){
            return(
                <Marker position={geo} icon = {Alert}>
                    <Popups props = {props}/>  
                </Marker>
            )
        }
        if (state.connectors[0].status === 'connected'){
            return(
                <Marker position={geo} icon = {Connected}>
                    <Popups props = {props}/>  
                </Marker>  
            )
        }
        if (state.connectors[0].status === 'build'){
            return(
                <Marker position={geo} icon = {Build}>
                    <Popups props = {props}/>  
                </Marker>
            )
        }
        if (state.connectors[0].status === 'reserved'){
            return(
                <Marker position={geo} icon = {Reserved}>
                    <Popups props = {props}/>  
                </Marker>
            )
        }
    }

    // WORK||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

    if (state.connectors[0].status === 'work' && state.connectors[1].status === 'work'){
        return(
            <Marker position={geo} icon = {WorkWork}>
                <Popups props = {props}/>  
            </Marker>
        )}
    if (state.connectors[0].status === 'work' && state.connectors[1].status === 'service'){
        return(
            <Marker position={geo} icon = {WorkService}>
                <Popups props = {props}/>          
            </Marker>
        )}

    if (state.connectors[0].status === 'work' && state.connectors[1].status === 'build'){
        return(
                <Marker position={geo} icon = {WorkBuild}>
                 <Popups props = {props}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'work' && state.connectors[1].status === 'busy'){
        return(
                <Marker position={geo} icon = {WorkBusy}>
                 <Popups props = {props}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'work' && state.connectors[1].status === 'connected'){
        return(
                <Marker position={geo} icon = {WorkConnected}>
                    <Popups props = {props}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'work' && state.connectors[1].status === 'reserved'){
        return(
                <Marker position={geo} icon = {WorkReserved}>
                    <Popups props = {props}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'work' && state.connectors[1].status === 'alert'){
        return(
                <Marker position={geo} icon = {WorkAlert}>
                    <Popups props = {props}/>                  
            </Marker>
        )}

    // Build||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

    if (state.connectors[0].status === 'build' && state.connectors[1].status === 'build'){
        return(
                <Marker position={geo} icon = {BuildBuild}>
                 <Popups props = {props}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'build' && state.connectors[1].status === 'service'){
        return(
                <Marker position={geo} icon = {BuildService}>
                 <Popups props = {props}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'build' && state.connectors[1].status === 'work'){
        return(
                <Marker position={geo} icon = {BuildWork}>
                 <Popups props = {props}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'build' && state.connectors[1].status === 'busy'){
        return(
                <Marker position={geo} icon = {BuildBusy}>
                 <Popups props = {props}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'build' && state.connectors[1].status === 'connected'){
        return(
                <Marker position={geo} icon = {BuildConnected}>
                    <Popups props = {props}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'build' && state.connectors[1].status === 'alert'){
        return(
                <Marker position={geo} icon = {BuildAlert}>
                    <Popups props = {props}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'build' && state.connectors[1].status === 'reserverd'){
        return(
                <Marker position={geo} icon = {BuildReserved}>
                    <Popups props = {props}/>                  
            </Marker>
        )}

    // BUSY ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

    if (state.connectors[0].status === 'busy' && state.connectors[1].status === 'busy'){
        return(
                <Marker position={geo} icon = {BusyBusy}>
                 <Popups props = {props}/>                  
            </Marker>
        )}

    if (state.connectors[0].status === 'busy' && state.connectors[1].status === 'work'){
        return(
                <Marker position={geo} icon = {BusyWork}>
                 <Popups props = {props}/>                  
            </Marker>
        )}


    if (state.connectors[0].status === 'busy' && state.connectors[1].status === 'service'){
        return(
                <Marker position={geo} icon = {BusyService}>
                 <Popups props = {props}/>                  
            </Marker>
        )}


    if (state.connectors[0].status === 'busy' && state.connectors[1].status === 'buid'){
        return(
                <Marker position={geo} icon = {BusyBuild}>
                 <Popups props = {props}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'busy' && state.connectors[1].status === 'alert'){
        return(
                <Marker position={geo} icon = {BusyAlert}>
                    <Popups props = {props}/>                  
            </Marker>
        )}


    if (state.connectors[0].status === 'busy' && state.connectors[1].status === 'connected'){
        return(
                <Marker position={geo} icon = {BusyConnected}>
                    <Popups props = {props}/>                  
            </Marker>
        )}


    if (state.connectors[0].status === 'busy' && state.connectors[1].status === 'reserved'){
        return(
                <Marker position={geo} icon = {BusyReserved}>
                    <Popups props = {props}/>                  
            </Marker>
        )}


    if (state.connectors[0].status === 'service' && state.connectors[1].status === 'work'){
        return(
                <Marker position={geo} icon = {ServiceWork}>
                 <Popups props = {props}/>                  
            </Marker>
        )}

    if (state.connectors[0].status === 'service' && state.connectors[1].status === 'service'){
        return(
                <Marker position={geo} icon = {ServiceService}>
                 <Popups props = {props}/>                  
            </Marker>
        )}

    if (state.connectors[0].status === 'service' && state.connectors[1].status === 'busy'){
        return(
                <Marker position={geo} icon = {ServiceBusy}>
                 <Popups props = {props}/>                  
            </Marker>
        )}

    if (state.connectors[0].status === 'service' && state.connectors[1].status === 'build'){
        return(
                <Marker position={geo} icon = {ServiceBuild}>
                 <Popups props = {props}/>                  
            </Marker>
        )}

    if (state.connectors[0].status === 'service' && state.connectors[1].status === 'alert'){
        return(
                <Marker position={geo} icon = {ServiceAlert}>
                    <Popups props = {props}/>                  
            </Marker>
        )}

    if (state.connectors[0].status === 'service' && state.connectors[1].status === 'connected'){
        return(
                <Marker position={geo} icon = {ServiceConnected}>
                    <Popups props = {props}/>                  
            </Marker>
        )}

    if (state.connectors[0].status === 'service' && state.connectors[1].status === 'reserved'){
        return(
                <Marker position={geo} icon = {ServiceReserved}>
                    <Popups props = {props}/>       
                </Marker>
        )}    
        
        

    if (state.connectors[0].status === 'connected' && state.connectors[1].status === 'build'){
        return(
                <Marker position={geo} icon = {ConnectedBuild}>
                    <Popups props = {props}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'connected' && state.connectors[1].status === 'service'){
        return(
                <Marker position={geo} icon = {ConnectedService}>
                    <Popups props = {props}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'connected' && state.connectors[1].status === 'work'){
        return(
                <Marker position={geo} icon = {ConnectedWork}>
                    <Popups props = {props}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'connected' && state.connectors[1].status === 'busy'){
        return(
                <Marker position={geo} icon = {ConnectedBusy}>
                    <Popups props = {props}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'connected' && state.connectors[1].status === 'connected'){
        return(
                <Marker position={geo} icon = {ConnectedConnected}>
                    <Popups props = {props}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'connected' && state.connectors[1].status === 'alert'){
        return(
                <Marker position={geo} icon = {ConnectedAlert}>
                    <Popups props = {props}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'connected' && state.connectors[1].status === 'reserverd'){
        return(
                <Marker position={geo} icon = {ConnectedReserved}>
                    <Popups props = {props}/>                  
            </Marker>
        )}


    if (state.connectors[0].status === 'reserved' && state.connectors[1].status === 'build'){
        return(
                <Marker position={geo} icon = {ReservedBuild}>
                    <Popups props = {props}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'reserved' && state.connectors[1].status === 'service'){
        return(
                <Marker position={geo} icon = {ReservedService}>
                    <Popups props = {props}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'reserved' && state.connectors[1].status === 'work'){
        return(
                <Marker position={geo} icon = {ReservedWork}>
                    <Popups props = {props}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'reserved' && state.connectors[1].status === 'busy'){
        return(
                <Marker position={geo} icon = {ReservedBusy}>
                    <Popups props = {props}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'reserved' && state.connectors[1].status === 'connected'){
        return(
                <Marker position={geo} icon = {ReservedConnected}>
                    <Popups props = {props}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'reserved' && state.connectors[1].status === 'alert'){
        return(
                <Marker position={geo} icon = {ReservedAlert}>
                    <Popups props = {props}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'reserved' && state.connectors[1].status === 'reserverd'){
        return(
                <Marker position={geo} icon = {ReservedReserved}>
                    <Popups props = {props}/>                  
            </Marker>
        )}


    if (state.connectors[0].status === 'alert' && state.connectors[1].status === 'build'){
        return(
                <Marker position={geo} icon = {AlertBuild}>
                    <Popups props = {props}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'alert' && state.connectors[1].status === 'service'){
        return(
                <Marker position={geo} icon = {AlertService}>
                    <Popups props = {props}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'alert' && state.connectors[1].status === 'work'){
        return(
                <Marker position={geo} icon = {AlertWork}>
                    <Popups props = {props}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'alert' && state.connectors[1].status === 'busy'){
        return(
                <Marker position={geo} icon = {AlertBusy}>
                    <Popups props = {props}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'alert' && state.connectors[1].status === 'connected'){
        return(
                <Marker position={geo} icon = {AlertConnected}>
                    <Popups props = {props}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'alert' && state.connectors[1].status === 'alert'){
        return(
                <Marker position={geo} icon = {AlertAlert}>
                    <Popups props = {props}/>                  
            </Marker>
        )}
    if (state.connectors[0].status === 'alert' && state.connectors[1].status === 'reserverd'){
        return(
                <Marker position={geo} icon = {AlertReserved}>
                    <Popups props = {props}/>                  
            </Marker>
        )}
        
        
















    return(
        <Marker position={geo}>
            <Popups props = {props}/>               
        </Marker>
        )
        
}


export default Markers;