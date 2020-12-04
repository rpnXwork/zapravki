import React, {useEffect, useState}  from 'react';
import {MapContainer, TileLayer} from "react-leaflet";
import { useLocation } from "react-router-dom"
// import MarkerClusterGroup from 'react-leaflet-markercluster'
import 'react-leaflet-markercluster/dist/styles.min.css';
import MapOptions from './MapOptions';
import './MapPage.css';
import Test from './Test';
import Markers from './Markers'
import {w3cwebsocket as W3CWebSocket} from 'websocket';

const adress = 'ws://192.168.0.64:8886'
const ws = new W3CWebSocket(adress);

const MapPage = () => {

    const [state, setState] = useState()
    const [newdata, setNwedata] = useState()
    const [map, setMap] = useState()
    const [options, setOptions] = useState()
    const [conected, setConected] = useState(false)

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

    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === '/map'){
            window.scrollTo(0, 0);
        }

    }, [pathname]);


    useEffect(()=>{
        if(conected){
            ws.send('givedata')
            console.log('data response')
        }
    },[conected])

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

    useEffect(()=>{},[state])

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
        <div className='map-window'>
            <MapOptions  updateData={updateOptions} />
            <div className='map-body'>
                <MapContainer fullscreenControl={true} maxZoom={18} whenCreated={setMap} center={[53.90757424711361,27.554397583007812]} zoom={12} scrollWheelZoom={true} >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                    />
                    <Test map={map}/>
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