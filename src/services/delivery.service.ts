import http from "./http-common";
import {DeliveryListData} from "../store/delivery/types";
import {DeliveryDetailsListData} from "../store/details/types";

class DeliveryDataService {
  getListDelivery() {
    return http.get<Array<DeliveryListData>>("/deliveries");
  }
  getDeliveryListDetails(deliveryID:string) {
    return http.get<Array<DeliveryDetailsListData>>(`/deliveries/${deliveryID}`);
  }
}
export default new DeliveryDataService();