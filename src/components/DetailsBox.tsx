import React, { FC} from 'react'; 
import { DeliveryDetailsListData } from "../store/details/types";
import { FaCheck } from 'react-icons/fa';

interface IDeliveryProps {
    deliveryData: DeliveryDetailsListData;
    isActive:boolean,
    makeActive: any,
    aDeliveryIsActive:boolean
  }
 
const DetailsBox: FC<IDeliveryProps> = ({deliveryData,isActive,makeActive,aDeliveryIsActive}) => { 
 
    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
         makeActive();
       };

    return (
    <div className="card">
    <div className="card-body"> 
      <div className="d-flex flex-column align-items-center text-center">
        <div className="mt-10x">
          <h4>{deliveryData.client}</h4>
          <p className="text-secondary mb-1">{deliveryData.customer.name}</p>
          <p className="text-muted font-size-sm">{deliveryData.customer.address}</p>
          <p className="text-muted font-size-sm">{deliveryData.customer.city} | {deliveryData.customer.zipCode}</p>

          { deliveryData.delivery.status !== "delivered"  ?
            isActive ? 
            <div>
             <button className="btn btn-success">Mark as delivered</button>
             <button className="btn btn-primary">Mark as unDelivered</button> 
              </div>
            :
            <div>
            <button  disabled={aDeliveryIsActive ? true :false} className="btn btn-success"  onClick={buttonHandler} >Make Active</button>
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