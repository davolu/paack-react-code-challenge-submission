import React, { FC} from 'react'; 
import { DeliveryDetailsListData } from "../store/details/types";
import { FaCheck } from 'react-icons/fa';

interface IDeliveryProps {
    deliveryData: DeliveryDetailsListData;
    isActive:boolean,
    makeActive: any,
    aDeliveryIsActive:boolean,
    updateDelivery:any
  }
 
const DetailsBox: FC<IDeliveryProps> = ({deliveryData,isActive,makeActive,aDeliveryIsActive,updateDelivery}) => { 
 
    const setActiveButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
          event.preventDefault();
          makeActive();
       };
    const setDeliveredButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
      updateDelivery("delivered");
    };     
    const setUnDeliveredButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
      updateDelivery("undelivered");
    };        
    
    return (
    <div className="card">
    <div className="card-body"> 
      <div className="d-flex flex-column align-items-center text-center">
        <div className="mt-10x">
          <h4>{deliveryData.client}</h4>
          <p className="text-secondary mb-1" data-testid="details-customer-name">{deliveryData.customer.name}</p>
          <p className="text-muted font-size-sm" data-testid="details-customer-address">{deliveryData.customer.address}</p>
          <p className="text-muted font-size-sm" data-testid="details-customer-city">{deliveryData.customer.city} | {deliveryData.customer.zipCode}</p>

          { deliveryData.delivery.status !== "delivered"  ?
            isActive ? 
            <div>
             <button className="btn btn-success" 
                    data-testid="details-button-delivered"
                     onClick={setDeliveredButtonHandler}>
            Mark as delivered
            </button>

             <button className="btn btn-primary" 
                     data-testid="details-button-undelivered"
                    onClick={setUnDeliveredButtonHandler}>Mark as unDelivered</button> 
              </div>
            :
            <div>
            <button  disabled={aDeliveryIsActive ? true :false} 
                    className="btn btn-success"  
                    data-testid="make-active-button"
                    onClick={setActiveButtonHandler} >Make Active
            </button>
             </div>
            :
            <>
                 <FaCheck size={60} color={"green"}/>
                 <p className="text-success text-bold">{deliveryData.delivery.status}</p>
            </>
          }
            </div>
      </div>
    </div>
  </div>

    );
}
export default DetailsBox;