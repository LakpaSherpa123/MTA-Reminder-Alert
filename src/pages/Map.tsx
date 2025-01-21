import React, { useCallback, useState } from 'react'
import { GoogleMap, TransitLayer, useJsApiLoader } from '@react-google-maps/api';



export const MapPage  = () =>{



    const { isLoaded } = useJsApiLoader({
        id: import.meta.env.VITE_APP_GOOGLEMAP_API_KEY,
        googleMapsApiKey: import.meta.env.VITE_APP_GOOGLEMAP_API_KEY
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