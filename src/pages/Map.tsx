import React from 'react'


import { DirectionsRenderer, GoogleMap, TransitLayer, useJsApiLoader } from '@react-google-maps/api';

export const MapPage = () => {

    // console.log(process.env.REACT_APP_GOOGLEMAP_API_KEY)

    const { isLoaded } = useJsApiLoader({
        id: import.meta.env.GOOGLEMAP_API_KEY,
        googleMapsApiKey: 'AIzaSyAcTBRGIFKleG8VRP7iWt7as-6yubf0kck'
      
    })


    const containerStyle = {
        width: '100%',
        height: '90VH'
    }

    const center = {
        lat: 40.756952937702906,
        lng: -73.98429783140546
    }

  
    
    return isLoaded && (
        <div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={13}
            >
           <TransitLayer />
            </GoogleMap>
        </div>
    );
}