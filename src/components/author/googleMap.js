import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { Loader } from "semantic-ui-react";

const MyMapComponent = withScriptjs(withGoogleMap((props) =>{
  console.log("map",props)
  if(props.coordinates){
    let { lat, lng } = props.coordinates
    lat = parseFloat(lat, 10);
    lng = parseFloat(lng, 10)
    return (
      <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat, lng }}
      >
        <Marker position={{ lat, lng }} />
      </GoogleMap>
    )
  } else {
    return (
      <Loader style={{width:'100%', height:'100%'}}/>
    )
  }
}))

export default MyMapComponent
