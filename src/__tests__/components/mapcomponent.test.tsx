import React,{useState} from 'react';
import { render,fireEvent } from '@testing-library/react';
import MapContainer from '../../components/MapContainer'
import { BrowserRouter as Router} from "react-router-dom";
import {deliveryData} from "../../utils/mock-common-data";

let getByTestId:any;
let isActive:boolean = false;
let aDeliveryIsActive:boolean = false;

 
 describe('Map Component Tests', () => {
    
    beforeEach(() => {
        ({getByTestId} = render(
            <Router>  
            <MapContainer 
              longitude={deliveryData.delivery.longitude} 
              latitude={deliveryData.delivery.latitude}/>
            </Router>
            ))
        });
       
  it('it returns valid static map', () => {
    expect(getByTestId('details-map-image')).toHaveAttribute("src");
   });
 
 
   
}); 