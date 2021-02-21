import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { MapWrapper } from '../../Style'
import 'leaflet/dist/leaflet.css'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';

const Map = (props) => {
    const [mapCenter, setMapCenter] = useState()
    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });
    L.Marker.prototype.options.icon = DefaultIcon;

    function ChangeView(center) {
        const map = useMap();
        map.setView(Object.values(center)[0], 6);
        return null
    }

    return (
        <MapWrapper>
            <MapContainer center={props.cityPosition} zoom={5} scrollWheelZoom={false}>
                <ChangeView center={props.cityPosition} />
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={props.cityPosition}>
                    <Popup>You are here!</Popup>
                </Marker>
            </MapContainer>
        </MapWrapper>
    )
}

export default Map;