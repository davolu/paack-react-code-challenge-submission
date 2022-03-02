import React, { FC ,useEffect} from 'react'; 
import { GoogleMap, Marker } from "react-google-maps";
import MapContainer from '../components/MapContainer';

const Details:React.FC  =  () => {
 

  return (
      <div className="container">
          <h3>Delivery Details </h3>
       
          <div className="col-md-7">

          </div>
          <div className="col-md-5">
          <MapContainer longitude={0.001} latitude={1}/>
          </div>
       
     </div>
    );
    
}
 

export default Details;