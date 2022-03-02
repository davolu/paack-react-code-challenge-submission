import React, { FC ,useEffect,useState} from 'react'; 
import MapContainer from '../components/MapContainer';
import { RootState } from '../store';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getDeliveryDetails, setLoading,UpdateDeliveryDetails } from '../store/details/action'
import DetailsBox from '../components/DetailsBox';
import {UpdateDeliveryData} from "../store/details/types";


const Details:React.FC  =  () => {
    const dispatch = useDispatch();
    const deliveryData = useSelector((state: RootState) => state.deliveryDetails.data);
    const loading = useSelector((state: RootState) => state.deliveryDetails.loading);
    const error = useSelector((state: RootState) => state.deliveryDetails.error);
    const { deliveryID } = useParams<{ deliveryID: string }>();
    const [isActive, setIsActive] = useState<boolean>(false); //for current delivery
    const [aDeliveryIsActive, setADeliveryIsActive] = useState<boolean>(false); //to know if any other delivery is active
    const [longitude, setLongitude] = useState<number>(0);
    const [latitude, setLatitude] = useState<number>(0);

    useEffect(() =>  {
      dispatch(setLoading());
       if(deliveryID){
        let getActiveID = window.localStorage.getItem("activeDelivery");
        
        getActiveID == deliveryID ? setIsActive(true):setIsActive(false);
        getActiveID !==null && getActiveID !==undefined ? setADeliveryIsActive(true) :setADeliveryIsActive(false);
        dispatch(getDeliveryDetails(deliveryID));
          }
    },[]);
    
    //get dispatch rider's location
    useEffect(()=>{
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLongitude(position.coords.latitude)
          setLatitude(position.coords.longitude)
        });
      } else {
        //GeoLocation not supported
      }
    })
    
    //simple function to change active delivery
    const makeActive = async () =>{
      if(deliveryID){
     await window.localStorage.setItem("activeDelivery",deliveryID);
      dispatch(setLoading());
      dispatch(getDeliveryDetails(deliveryID));
      setADeliveryIsActive(true);
      setIsActive(true);
      }
    }
    
    const updateDelivery = async  (delivery_value:string) =>{
      if(deliveryID){
        
        let data:UpdateDeliveryData = {
          delivery: {
              status: delivery_value,
              latitude: longitude,
              longitude: latitude
            }
          }
      dispatch(setLoading());
      dispatch(UpdateDeliveryDetails(data,deliveryID));
      //clear localstorage to allow another active to be selected.
      await window.localStorage.removeItem("activeDelivery");
      setADeliveryIsActive(false);
      setIsActive(false);
        }
    }

  return (
      <div className="container">
          <h3>Delivery Details </h3>

            {loading ? 
             <p className="text-center">
             <img src="../loading-buffering.gif"/>
             </p>
             :
            <div> 
           {deliveryData && (
          <div className="row">
              <div className="col-md-7 well">
              <DetailsBox deliveryData={deliveryData} 
                          isActive={isActive}
                          aDeliveryIsActive={aDeliveryIsActive}
                          updateDelivery={updateDelivery}
                           makeActive={makeActive}/>
              </div>
              <div className="col-md-5">
              <MapContainer 
              longitude={deliveryData.delivery.longitude} 
              latitude={deliveryData.delivery.latitude}/>
              </div>
          </div>
      )}
        </div>
        }

     </div>
    );
    
}
 

export default Details;