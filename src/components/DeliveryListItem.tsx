import React, { FC } from "react";
import { DeliveryListData } from "../store/delivery/types";
import { FaBuilding, FaCheck, FaCode, FaLocationArrow, FaRegAddressBook, FaTruckLoading, FaUser } from 'react-icons/fa'
interface DeliveryProps {
	data: DeliveryListData;
}

const DeliveryListItem: FC<DeliveryProps> = ({ data }) => { 
    console.log("DeliveryList: FC<DeliveryProps>"+ JSON.stringify(data))
 	return (
        
         <div className="well-custom">
         <div className="list-group">
          <a href="#" className="list-group-item ">
                <div className="media col-md-3">
                    {
                        data.delivery.status =="delivered" ? 
                        <FaCheck size={60} color={"green"}/>
                        :
                        <FaTruckLoading size={60} color={"red"}/>
                    }
                </div>
                <div className="col-md-6">
                    <h4 className="list-group-item-heading"> {data.client}</h4>
                    <p className="list-group-item-text"> 
                     <FaUser size={10}/> {data.customer.name}
                    </p>
                    <p className="list-group-item-text"> 
                     <FaLocationArrow size={10}/> {data.customer.address}
                    </p>
                    <p className="list-group-item-text"> 
                     <FaBuilding size={10}/> {data.customer.city}
                    </p>
                    <p className="list-group-item-text"> 
                     <FaRegAddressBook size={10}/> {data.customer.zipCode}
                    </p>

                </div>
                <div className="col-md-3 text-center">
                    <h4>{data.delivery.status}</h4>
                </div>
           </a>
            </div>
         </div>
          
 	);
};

export default DeliveryListItem;