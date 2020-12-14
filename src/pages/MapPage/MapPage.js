import React, {useEffect, useState, useContext, useRef}  from 'react';
import {MapContainer, TileLayer} from "react-leaflet";
import { useLocation, useParams } from "react-router-dom"
import 'react-leaflet-markercluster/dist/styles.min.css';
import MapOptions from './MapOptions';
import './MapPage.css';
import MyLocation from './MyLocation';
import Markers from './Markers'
import {MarkerContext} from '../../context/MarkerContext'
import { SOCKET } from '../../api';
// import {w3cwebsocket as W3CWebSocket} from 'websocket';

// const ws = new W3CWebSocket(adress);

const MapPage = () => {

    const ws = useRef(null)

    const [state, setState] = useState()
    const [newdata, setNwedata] = useState()
    const [map, setMap] = useState()
    const [options, setOptions] = useState()
    const [conected, setConected] = useState(false)
    
    const [markers, setMarkers] = useContext(MarkerContext)

    useEffect(() => {
        ws.current = new WebSocket(SOCKET);
        ws.current.onopen = () => console.log("ws opened", new Date());
        ws.current.onclose = () => console.log("ws closed", new Date());

        ws.current.onmessage = e => {
        const data = JSON.parse(e.data);
        if 
        (data.type === 'data'){
            setState(data.features)
            console.log('get Data', new Date())
            setConected(true)
        }
        if 
        (data.type === "update"){
            setNwedata(data.features)
            console.log('update Data', new Date())
            setConected(true)
        }
    }

        return () => {
            ws.current.close();
        };
    }, [])

    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === '/map'){
            window.scrollTo(0, 0);
        }

    }, [pathname]);

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
        if (!state)
        setState(markers)
    },[state])

    useEffect(()=>{
        if (conected) {
            ws.current.send(JSON.stringify(options))
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
                <MapContainer fullscreenControl={true} maxZoom={18} whenCreated={setMap} center={[53.90757424711361,27.554397583007812]} zoom={12} scrollWheelZoom={true} >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                    />
                    <MyLocation map={map}/>
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