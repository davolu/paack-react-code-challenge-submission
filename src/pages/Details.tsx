import React, { FC ,useEffect,useState} from 'react'; 
import MapContainer from '../components/MapContainer';
import { RootState } from '../store';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getDeliveryDetails, setLoading } from '../store/details/action'
import DetailsBox from '../components/DetailsBox';


const Details:React.FC  =  () => {
    const dispatch = useDispatch();
    const deliveryData = useSelector((state: RootState) => state.deliveryDetails.data);
    const loading = useSelector((state: RootState) => state.deliveryDetails.loading);
    const error = useSelector((state: RootState) => state.deliveryDetails.error);
    const { deliveryID } = useParams<{ deliveryID: string }>();
    const [isActive, setIsActive] = useState(false); //for current delivery
    const [aDeliveryIsActive, setADeliveryIsActive] = useState(false); //to know if any other delivery is active

    useEffect(() =>  {
      dispatch(setLoading());
       if(deliveryID){
        let getActiveID = window.localStorage.getItem("activeDelivery");
        getActiveID == deliveryID ? setIsActive(true):setIsActive(false);
        getActiveID !==null || getActiveID !==undefined ? setADeliveryIsActive(true) :setADeliveryIsActive(false);
        dispatch(getDeliveryDetails(deliveryID));
          }
    },[]);
    
    //simple function to change active delivery
    const makeActive = async () =>{
      if(deliveryID){
     await window.localStorage.setItem("activeDelivery",deliveryID);
      dispatch(setLoading());
      dispatch(getDeliveryDetails(deliveryID));
      }
    }

  return (
      <div className="container">
          <h3>Delivery Details </h3>

            {loading ? <p>Fetching data...</p>:
            <div> 
           {deliveryData && (
          <div className="row">
              <div className="col-md-7 well">
              <DetailsBox deliveryData={deliveryData} 
                          isActive={isActive}
                          aDeliveryIsActive={aDeliveryIsActive}
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