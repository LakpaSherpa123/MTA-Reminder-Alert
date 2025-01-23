// Suggested code may be subject to a license. Learn more: ~LicenseLog:439827608.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:190582486.

import { useEffect, useRef, useState } from 'react'
import { GoogleMap, TransitLayer, useJsApiLoader, Marker, DirectionsRenderer} from '@react-google-maps/api';
import { DirectionsResult } from '@types/google.maps';


//type for the data that navigator.geolocation.watchPosition returns
type Position = {
    lat: number;
    lng: number;
    accuracy: number;
    timestamp: number;
    speed: number | null;
    heading: number | null;
} | {
    lat: number;
    lng: number;
};





export const MapRender = () => {

    const [currentPosition, setCurrentPosition] = useState<Position | null>(null);
    const [currentLatLng, setCurrentLatLng] = useState<Position | null>(null);
    const [loading, setLoading] = useState(true);


    const [directionsResponse, setDirectionsResponse] = useState(/** @type google.maps.DirectionsResult */ (null))

    // /** @type React.MutableRefObject<HTMLInputElement> */
    // const originRef = useRef()
    // /** @type React.MutableRefObject<HTMLInputElement> */
    // const destiantionRef = useRef()


    const { isLoaded } = useJsApiLoader({
        id: import.meta.env.VITE_APP_GOOGLEMAP_API_KEY,
        googleMapsApiKey: import.meta.env.VITE_APP_GOOGLEMAP_API_KEY
    })

    const containerStyle = {
        width: '100%',
        height: '90VH'
    }

    const center = {
        // lat: 40.756952937702906,
        // lng: -73.98429783140546

        lat: 40.695171, lng: -73.987236
    }

    const options = {
        styles: [
          {
            featureType: 'poi.business',
            elementType: 'all',
            stylers: [{ visibility: 'off' }]
          },
          
            {
              featureType: 'transit.station.bus',
              elementType: 'all',
              stylers: [{ visibility: 'off' }]
            },
        ]
    };

    CurrentLocation(currentPosition, currentLatLng, loading, setCurrentPosition, setCurrentLatLng, setLoading );

    

    useEffect(() =>{
    async function calculateRoute() {
        // if (originRef.current.value === '' || destiantionRef.current.value === '') {
        //   return
        // }
        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService()
        const results = await directionsService.route({
          origin: { 
            lat: 40.756952937702906,
            lng: -73.98429783140546 
        },
          destination: {
            lat: 40.695171, 
            lng: -73.987236
        },
          // eslint-disable-next-line no-undef
          travelMode: google.maps.TravelMode.TRANSIT,
        })
        setDirectionsResponse(results as DirectionsResult)

        // console.log("This is direction results" +directionsResponse);
        // setDistance(results.routes[0].legs[0].distance.text)
        // setDuration(results.routes[0].legs[0].duration.text)
      }

      calculateRoute();
    },[]); 

       

    return isLoaded && (
        <div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={currentLatLng as Position}
                zoom={13}
                options={options}
            >
                 <TransitLayer />                                
                <Marker position={currentLatLng as Position} />   {/*   //puts a Marker in the position */}      
                <DirectionsRenderer directions={directionsResponse as DirectionsResult} />

            </GoogleMap>
        </div>
    );
}


//Gets the real time current location using the geolocation API in web browser. 
//runs in background.

const CurrentLocation = ( currentPosition: Position | null, currentLatLng: Position | null, loading: Boolean, setCurrentPosition: Function, setCurrentLatLng: Function, setLoading: Function) => {

    // navigator.geolocation.watchPosition() is a method of the Geolocation API 
    // in web browsers. It is used to register a handler function that will be 
    // called repeatedly each time the user's position changes. This allows your
    //  web application to track the user's location continuously.

    useEffect(() => {

        //watchPosition has two call back parameter that it needs to receive
        const watchId = navigator.geolocation.watchPosition(
            //success callBack to this 
            (position) => {
                setCurrentPosition({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                    accuracy: position.coords.accuracy,         //the accuracy of the location in meter
                    timestamp: position.timestamp,              //timeStamp representing when the location was determined
                    speed: position.coords.speed,               //users speed in terms of location change in m/s
                    heading: position.coords.heading            //User's current heading direction in degrees clockwise from true north.
                } as Position);

                setCurrentLatLng(
                    {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    } as Position);

                setLoading(false);
            },
            //error callBack 
            (error) => {
                console.log(error);
                setLoading(false);
            }
        );

        // Clean up the watch when the component unmounts
        return () => navigator.geolocation.clearWatch(watchId);


    }, []);

}