import React, { useCallback, useState } from 'react'
import { GoogleMap, TransitLayer, useJsApiLoader } from '@react-google-maps/api';
import { CurrentLocation, MapRender } from './Data';



export const MapPage  = () =>{  

    return (
        <div>
            <MapRender />
           
        </div>
    );
}