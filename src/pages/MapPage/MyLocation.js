import React, {useEffect} from 'react';
import L from "leaflet";
import {useMap} from "react-leaflet";
import c from './crosshair.png'
import o from './M.png'
import 'leaflet-easybutton'
import 'leaflet-easybutton/src/easy-button.css'

const MyLocation = () => {

    const map = useMap()

    useEffect(()=> {
        
        L.easyButton(`<div id='tag' class='glyphicon glyphicon-tag'><img src='${c}' width='23px'/>.</div>`, function(btn, map) {
            navigator.geolocation.getCurrentPosition(function(position) {
                let latit = position.coords.latitude;
                let longit = position.coords.longitude;
                var LeafIcon = L.Icon.extend({
                    options: {
                        iconSize:     [32, 32],
                        iconAnchor:   [16, 0],
                    }
                }); 
                let positionIcon = new LeafIcon({iconUrl: o})
                let marker = L.marker([position.coords.latitude, position.coords.longitude],{icon: positionIcon })
                marker.bindPopup("Your current location").addTo(map).openPopup()
                map.flyTo(new L.LatLng(latit, longit), 14)}
                
                )
        }, { position: "topleft"}).addTo(map);
    },[])

    return (
    <>
    </>
    )
}


export default MyLocation