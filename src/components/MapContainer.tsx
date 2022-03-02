import React, { FC ,useEffect} from 'react'; 
import { GoogleMap, Marker,withGoogleMap } from "react-google-maps";
import env from "react-dotenv";

interface IMapProps {
    longitude: number;
    latitude: number;
}
const MapContainer: FC<IMapProps> = (props) => { 
  return (
    <img src={`https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&zoom=12&size=600x400&key=AIzaSyDYvFivEr-DAIlbIWonrgTnQ6k9AQfEodc`} className="full-width-map-image"/>
    );
}
export default MapContainer;