import React, { FC} from 'react'; 

interface IMapProps {
    longitude: number;
    latitude: number;
}
const MapContainer: FC<IMapProps> = (props) => { 
  return (
    <img data-testid="details-map-image" src={`https://maps.googleapis.com/maps/api/staticmap?center=${props.latitude},${props.longitude}&zoom=12&size=600x400&key=AIzaSyDYvFivEr-DAIlbIWonrgTnQ6k9AQfEodc`} className="full-width-map-image"/>
    );
}
export default MapContainer;