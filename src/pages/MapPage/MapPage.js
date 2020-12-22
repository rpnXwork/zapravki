import React, {useEffect, useState, useContext, useRef}  from 'react';
import {MapContainer, TileLayer} from "react-leaflet";
import {useLocation} from "react-router-dom"
import 'react-leaflet-markercluster/dist/styles.min.css';
// import MarkerClusterGroup from 'react-leaflet-markercluster';
import {AuthContext} from '../../context/AuthContext'
import MapOptions from './MapOptions';
import './MapPage.css';
import MyLocation from './MyLocation';
import Markers from './Markers'
import {MarkerContext} from '../../context/MarkerContext'
import {SOCKET} from '../../api';
import Use from '../../components/Use';

const MapPage = () => {

    const {isAuthenticated, id, chargeid} = useContext(AuthContext)
    const { pathname } = useLocation();
    const ws = useRef(null)
    const [state, setState] = useState()
    const [newdata, setNwedata] = useState()
    const [map, setMap] = useState()
    const [options, setOptions] = useState()
    const [conected, setConected] = useState(false)
    const [charging, setCharging] = useState(false)
    const [chargingbtn, setChargingbtn] = useState(false)
    const [resevdedbtn, setResevdedbtn] = useState(false)
    const [close, setClose] = useState(false)
    const [chargeData, setChargeData] = useState()
    const [use, setUse] = useState(true)
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
            setChargeData(data)
            setChargingbtn(true)
            if (!data.userAction.shouldBeFinished){
               setCharging(true)
            }
            if (data.userAction.shouldBeFinished) {
                if (!use) {
                    setChargingbtn(false)
                    setCharging(false)
                    setUse(true)
                } else {
                    setChargingbtn(false)
                }
            }
        }
        if 
        (data.type === "reserve"){
            setChargeData(data)
            setResevdedbtn(true)
            if (!data.userAction.shouldBeFinished){
               setCharging(true)
            }
            if (data.userAction.shouldBeFinished) {
                if (!use) {
                    setResevdedbtn(false)
                    setCharging(false)
                    setUse(true)
                } else {
                    setResevdedbtn(false)
                }
            }
        }
    }

        return () => {
            ws.current.close();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (chargeData) {
             if (chargeData.userAction.shouldBeFinished && !use && charging){
            setCharging(false)
            setUse(true)
            }
        } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [use])



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
            setState(state.map((key)=>{
                newdata.forEach(newdataitem =>{
                    if (key.id === newdataitem.id){
                        key = newdataitem
                    }
                })
                return key
            }))
        } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[newdata])

    useEffect(() => {
        localStorage.setItem("path", JSON.stringify("/map"))
    }, [])

    useEffect(()=>{
        setMarkers(state)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[state])


    useEffect(()=>{
        if (!state)
        setState(markers)
    },[markers, state])

    useEffect(()=>{
        if (state !== undefined && conected) {
            ws.current.send(JSON.stringify(options))
            console.log("New Options Sent", JSON.stringify(options))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[options])

    useEffect(()=>{
        if (chargeid !== undefined) {
            ws.current.send(JSON.stringify({id: id}))
            console.log('sent id')
        }
    },[chargeid, id])

    const getChargingStatus = () =>{
        if (isAuthenticated) {
            ws.current.send(JSON.stringify({id : id}))
            console.log("user sent", {id : id})
        }
    }

    const updateOptions = (e) => {
        setOptions(e)
    }
    const updUse = (e) => {
        setUse(!!e)
    }

    return (
        <>
        {/* <Test props={state}/> */}
        
        <div className='map-window'>
            <div>
                {chargingbtn?<div className='charge-status' onClick={()=>{setUse(true)}}>Зарядка</div>:<div></div>}
                {resevdedbtn?<div className='charge-status' style={{backgroundColor:"rgb(196, 22, 255)"}} onClick={()=>{setUse(true)}}>Резерв</div>:<div></div>}
                <MapOptions  updateData={updateOptions} /></div>
            
            
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
                            <Markers props = {key} key = {i} charge={chargeData}/>       
                        ):<div></div>
                    }   
                </MapContainer>
                {isAuthenticated && use && charging? <Use  props= {chargeData} updUse={updUse}/>:<div></div>}
            </div>
        </div>
        
        </>
    )
}


export default MapPage