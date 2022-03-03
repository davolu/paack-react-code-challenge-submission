import React,{useState} from 'react';
import { render,fireEvent } from '@testing-library/react';
import DetailsBox from '../../components/DetailsBox'
import { BrowserRouter as Router} from "react-router-dom";
import {deliveryData} from "../../utils/mock-common-data";

let getByTestId:any;
let isActive:boolean = false;
let aDeliveryIsActive:boolean = false;

 const updateDelivery = ()=>{

}
const makeActive = ()=>{
    
}
 describe('DetailsBox Component Tests', () => {
    
    beforeEach(() => {
        ({getByTestId} = render(
            <Router>  
           <DetailsBox   
            deliveryData={deliveryData} 
            isActive={isActive}
            aDeliveryIsActive={aDeliveryIsActive}
            updateDelivery={updateDelivery()}
            makeActive={makeActive}/>
            </Router>
            ))
        });
       
  it('displays customer name correctly', () => {
    expect(getByTestId('details-customer-name')).toHaveTextContent("Mr. Chris Dach");
   });
       
  it('displays customer address correctly', () => {
    expect(getByTestId('details-customer-address')).toHaveTextContent("1739 Andreane Court");
   });

   it('displays customer city correctly', () => {
    expect(getByTestId('details-customer-city')).toHaveTextContent("Miramar");
   });

   it('displays customer city correctly', () => {
    expect(getByTestId('details-customer-city')).toHaveTextContent("Miramar");
   });


    it('make active button works', () => {
            fireEvent.click(getByTestId('make-active-button')); 
    })
 
   
}); 