import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

export default function Map(props) {

    // const { isLoaded } = useLoadScript({googleMapsApiKey: process.env.REACT_APP_GOOGLE_APIKEY})

    const lat = props.resultObject.coordinates.latitude;
    const lng = props.resultObject.coordinates.longitude;
    


    return <>
        <GoogleMap
        zoom={10}
        center={{ lat: lat, lng: lng }}
        mapContainerClassName="map-container"
        >
            <Marker position={{lat:lat, lng:lng}} />
        </GoogleMap>
    </>
}
