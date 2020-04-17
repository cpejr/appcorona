import React from 'react'

import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

import Geocode from "react-geocode";
 
// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
 
// set response language. Defaults to english.
Geocode.setLanguage("pt");
 
// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion("br");
 
// Enable or disable logs. Its optional.
Geocode.enableDebug();


export function GoogleMap(props){

    let street = props.ong.street;
    let number = props.ong.number;
    let city = props.ong.city;
    let state = props.ong.state;


    function getCoordenates(street, number, city, state){
        console.log('aaaaaa');
        Geocode.fromAddress(`${street}, ${number}, ${city}, ${state}`).then(
            response => {
              const { lat, lng } = response.results[0].geometry.location;
              console.log(lat, lng);
              return {lat, lng}
            },
            error => {
              console.error(error);
            }
        );
    }

    return (


        <Map google={props.google}zoom={14} center={getCoordenates(street, number, city, state)}>
            <Marker
                title={'ONG'}
                name={'ONG'}
                position={getCoordenates(street, number, city, state)} 
            />
        </Map>
    )
}


export default GoogleApiWrapper({
    apiKey: ('AIzaSyCewowoesrdbQj-hX4s77nW7MA3eaO2NxM')
})(GoogleMap)