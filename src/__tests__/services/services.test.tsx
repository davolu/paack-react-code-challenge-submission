import * as axios from "axios";
import DeliveryDataService from "../../services/delivery.service";
import {deliveryData} from "../../utils/mock-common-data";
import {UpdateDeliveryData} from "../../store/details/types";


  
describe('test DeliveryDataService ', () => {
  
    it('getDeliveryListDetails Service Status Code : 200 and Ok ',  async() => {
        // Response body sample
       let response =  await DeliveryDataService.getDeliveryListDetails("5")
       expect(response.status).toEqual(200);
       expect(response.statusText).toEqual("OK");
     });
       
    it('getListDelivery Service Status Code : 200 and Ok ',  async() => {
        // Response body sample
       let response =  await DeliveryDataService.getListDelivery()
       expect(response.status).toEqual(200);
       expect(response.statusText).toEqual("OK");
     });
            
    it('getListDelivery Service Status Code : 200 and Ok ',  async() => {
        // Response body sample
        let data:UpdateDeliveryData = {
            delivery: {
                status: "delivered",
                latitude: 0,
                longitude: 0
              }
            }
       let response =  await DeliveryDataService.updateDeliveryDetailsStatus(data,"5")
       expect(response.status).toEqual(200);
       expect(response.statusText).toEqual("OK");
     });


});
