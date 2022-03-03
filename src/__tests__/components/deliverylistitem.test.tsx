import React from 'react';
import { render,fireEvent } from '@testing-library/react';
import { BrowserRouter as Router} from "react-router-dom";
import DeliveryListItem from '../../components/DeliveryListItem'
import {deliveryData} from "../../utils/mock-common-data";

let getByTestId:any; 
 describe('DeliveryList Component Tests', () => {
    
    beforeEach(() => {
        ({getByTestId} = render(
            <Router>  
            <DeliveryListItem data={deliveryData} />
            </Router>
            ))
        });
       
  it('displays Client title correctly', () => {
    expect(getByTestId('id-client')).toHaveTextContent("Feest Group");
   });
   
  it('displays customer name correctly', () => {
    expect(getByTestId('id-customer-name')).toHaveTextContent("Mr. Chris Dach");
    });

   it('displays customer address correctly', () => {
    expect(getByTestId('id-customer-address')).toHaveTextContent("1739 Andreane Court");
    });  
 
   it('displays customer city correctly', () => {
    expect(getByTestId('id-customer-city')).toHaveTextContent("Miramar");
    });     

   it('displays customer zipcode correctly', () => {
    expect(getByTestId('id-customer-zipcode')).toHaveTextContent("90920");
    });     
   
    it('displays delivery status correctly', () => {
        expect(getByTestId('id-status')).toHaveTextContent("idle");
    }); 

    it('List is clickable and redirects correctly to the right path', () => {
        fireEvent.click(getByTestId('list-clicked'))
         expect(window.location.pathname).toEqual(`/details/${deliveryData.id}`) 
    });
 
   
}); 