import React, { FC } from "react";
import { DeliveryListData } from "../store/delivery/types";
import { FaBuilding, FaCheck, FaCode, FaLocationArrow, FaRegAddressBook, FaTruckLoading, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';


interface DeliveryProps {
	data: DeliveryListData;
}

const DeliveryListItem: FC<DeliveryProps> = ({ data }) => { 
  	return (
        
         <div className="well-custom">
         <div className="list-group">
         <Link to={`/details/${data.id}`} className="list-group-item"  data-testid="list-clicked">
                 <div className="media col-md-3">
                    {
                        data.delivery.status =="delivered" ? 
                        <FaCheck size={60} color={"green"}/>
                        :
                        <FaTruckLoading size={60} color={"red"}/>
                    }
                </div>
                <div className="col-md-6">
                    <h4 className="list-group-item-heading"  data-testid="id-client"  > {data.client}</h4>
                    <p className="list-group-item-text"      data-testid="id-customer-name" > 
                     <FaUser size={10}/> {data.customer.name}
                    </p>
                    <p className="list-group-item-text"      data-testid="id-customer-address"> 
                     <FaLocationArrow size={10}/> {data.customer.address}
                    </p>
                    <p className="list-group-item-text"      data-testid="id-customer-city"> 
                     <FaBuilding size={10}/> {data.customer.city}
                    </p>
                    <p className="list-group-item-text"       data-testid="id-customer-zipcode"> 
                     <FaRegAddressBook size={10}/> {data.customer.zipCode}
                    </p>

                </div>
                <div className="col-md-3 text-center" data-testid="id-status">
                    <h4>{data.delivery.status}</h4>
                </div>
            </Link>
            </div>
         </div>
          
 	);
};

export default DeliveryListItem;