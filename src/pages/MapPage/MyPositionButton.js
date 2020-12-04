import React from 'react';
import { useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBusinessTime  } from '@fortawesome/free-solid-svg-icons'
import './MyPositionButton.css'

 
const MyPositionButton = () => {

    const  map  = useMap();
    console.log(map);

    useEffect(() => {
        const legend = L.control({ position: "topleft" });

        legend.onAdd = () => {
        const div = L.DomUtil.create("div", "info legend");
        div.innerHTML = (`<button onClick={console.log('gogo')}>o</button>`);
        return div;
        }
        legend.addTo(map);

    },[])




    return(
        <>
            

        </>
    )
}


export default MyPositionButton;