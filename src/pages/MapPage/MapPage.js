import React, {useEffect, useState, useContext}  from 'react';
import {MapContainer, TileLayer} from "react-leaflet";
import { useLocation, useParams } from "react-router-dom"
// import MarkerClusterGroup from 'react-leaflet-markercluster'
import 'react-leaflet-markercluster/dist/styles.min.css';
import MapOptions from './MapOptions';
import './MapPage.css';
import MyLocation from './MyLocation';
import Markers from './Markers'
import {w3cwebsocket as W3CWebSocket} from 'websocket';
import {MarkerContext} from '../../context/MarkerContext'
import {SOCKET} from '../../api'

const ws = new W3CWebSocket(SOCKET);

const MapPage = () => {

    let loc = localStorage.getItem("mappage")
    const {pathname} = useLocation();

    const [state, setState] = useState()
    const [newdata, setNwedata] = useState()
    const [options, setOptions] = useState()
    const [conected, setConected] = useState(false)
    
    const [markers, setMarkers] = useContext(MarkerContext)

    ws.onerror = function() {
        console.log('Connection Error');
        setConected(false)
    };
     
    ws.onopen = function() {
        console.log('WebSocket Client Connected');
        setConected(true)
    };
     
    ws.onclose = function() {
        console.log('echo-protocol Client Closed');
        setConected(false)
    };
     
    ws.onmessage = e => {
        const data = JSON.parse(e.data);
        if 
        (data.type === 'data'){
            setState(data.features)
            setConected(true)
        }
        if 
        (data.type === "update"){
            setNwedata(data.features)
            setConected(true)
        }
    }

    useEffect(() => {
        if (pathname === '/map'){
            window.scrollTo(0, 0);
        }
        if(ws&&conected) {
          ws.send('givedata')  
        }
        
    }, [conected, pathname]);

    useEffect(()=>{
        if(conected){
            ws.send('givedata')
        }
        setState(markers)
    },[conected])



    console.log(conected)

    // useEffect(()=>{
    //     setInterval(() => {
    //         if(conected === false){
    //             window.location.reload()
    //         }    
    //     }, 2000)
    //     console.log('reload')
        
    // },[conected])

    useEffect(()=>{

        if (state && newdata){
            newdata.forEach((key)=>(
                setState(prevState => {
                    let state = Object.assign({}, prevState); 
                    state[key.id-1].connectors = key.connectors
                    return Object.values(state)                  
                  })
            ))        
        } 

    },[newdata])

    useEffect(() => {
        localStorage.setItem("path", JSON.stringify("/map"))
    }, [])

    useEffect(()=>{
        setMarkers(state)
    },[state])

    useEffect(()=>{
        if (conected) {
            ws.send(JSON.stringify(options))
            console.log("New Options Sent", JSON.stringify(options))
        }
    },[options])

    const updateOptions = (e) => {
        setOptions(e)
        
    }

    return (
        <>
        {/* <Test props={state}/> */}
        <div className='map-window'>
            <MapOptions  updateData={updateOptions} />
            <div className='map-body'>
                <MapContainer fullscreenControl={true} maxZoom={18} center={[53.90757424711361,27.554397583007812]} zoom={12} scrollWheelZoom={true} >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                    />
                    <MyLocation/>
                    {/* <MarkerClusterGroup animate={false} spiderfyOnMaxZoom={true} showCoverageOnHover={false} zoomToBoundsOnClick={true} >
                                          
                    </MarkerClusterGroup> */}
                    {state?state.map((key,i) =>
                            <Markers props = {key} key = {i} />       
                        ):<div></div>
                    } 

                </MapContainer>
            </div>
        </div>
        </>
    )
}


export default MapPage