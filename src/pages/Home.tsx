import React, { FC ,useEffect} from 'react';
import { RootState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { getDeliveryList, setLoading } from '../store/delivery/action'
import DeliveryListItem from '../components/DeliveryListItem';
 
const Home:React.FC  =  () => {
  const dispatch = useDispatch();
  const deliveryData = useSelector((state: RootState) => state.delivery.data);
  const loading = useSelector((state: RootState) => state.delivery.loading);
  const error = useSelector((state: RootState) => state.delivery.error);
   
  useEffect(() => {
    dispatch(setLoading());
    dispatch(getDeliveryList());
  },[]);

  return (
      <div className="container">
          <div className="row">
            <h4 className="text-center">Your delivery List</h4>
            <div className="col-md-2"></div>
            <div className="col-md-8 ">
            {loading ? 
            <p className="text-center">
            <img src="loading-buffering.gif"/>
            </p>:
            <div>
              {
              deliveryData && 
              deliveryData.map(item => (
                  <div key={item.id}>
                  <DeliveryListItem data={item}/> 
                  </div>
                ))
              }
            
            </div>
            }        
        </div>
        </div>
     </div>
    );
 
}
 

export default Home;