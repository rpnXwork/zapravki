import React, {useEffect, useState, useContext, useRef}  from 'react';
import {MapContainer, TileLayer} from "react-leaflet";
import {useLocation, useParams} from "react-router-dom"
import 'react-leaflet-markercluster/dist/styles.min.css';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import {AuthContext} from '../../context/AuthContext'

import MapOptions from './MapOptions';
import './MapPage.css';
import MyLocation from './MyLocation';
import Markers from './Markers'
import {MarkerContext} from '../../context/MarkerContext'
import {SOCKET} from '../../api';
import Use from '../../components/Use';


const MapPage = () => {

    const {isAuthenticated, token, id, chargeid} = useContext(AuthContext)
    const ws = useRef(null)
    const [state, setState] = useState()
    const [newdata, setNwedata] = useState()
    const [map, setMap] = useState()
    const [options, setOptions] = useState()
    const [conected, setConected] = useState(false)
    const [charging, setCharging] = useState(false)
    const [close, setClose] = useState(false)
    const [chargeData, setChargeData] = useState()

    
    const [markers, setMarkers] = useContext(MarkerContext)

    useEffect(() => {
        ws.current = new WebSocket(SOCKET);
        
        ws.current.onopen = () => {
            console.log('socket open')
            getChargingStatus()
            setConected(true)
        }

        ws.current.onclose = () => {
            console.log('socket close')
            setConected(false)
            setClose(true)
        }

        ws.current.onmessage = e => {
        const data = JSON.parse(e.data);
        if 
        (data.type === 'data'){
            setState(data.features)
        }
        if 
        (data.type === "update"){
            setNwedata(data.features)
            
        }
        if 
        (data.type === "charge"){
            setCharging(true)
            setChargeData(data)
        }
    }

        return () => {
            ws.current.close();
        };
    }, [])

    const { pathname } = useLocation();

    useEffect(() => {
        if(close) { 
            ws.current = new WebSocket(SOCKET);
            setClose(false)
        }
    }, [close])

    useEffect(() => {
        if (pathname === '/map'){
            window.scrollTo(0, 0);
        }

    }, [pathname]);

    useEffect(()=>{
        if (state && newdata){
            setState(state.map((key,i)=>{
                newdata.map((newdataitem, i)=>{
                    if (key.id === newdataitem.id){
                        key = newdataitem
                    }
                })
                return key
            }))
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
        if (ws && conected) {
            ws.current.send(JSON.stringify(options))
            console.log("New Options Sent", JSON.stringify(options))
        }
    },[options])

    useEffect(()=>{
        if (chargeid !== undefined) {
            ws.current.send(JSON.stringify({id: chargeid}))
            console.log('sent id')
        }
    },[chargeid])

    const getChargingStatus = () =>{
        if (isAuthenticated) {
            ws.current.send(JSON.stringify({id : id}))
            console.log("user sent", {id : id})
        }
    }

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
                {isAuthenticated && charging? <Use  props= {chargeData}/>:<div></div>}
            </div>
        </div>
        </>
    )
}


export default MapPage