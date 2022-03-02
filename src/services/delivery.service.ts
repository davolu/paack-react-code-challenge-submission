import http from "./http-common";
import {DeliveryListData} from "../store/delivery/types";
import {DeliveryDetailsListData, UpdateDeliveryData} from "../store/details/types";

class DeliveryDataService {
  getListDelivery() {
    return http.get<Array<DeliveryListData>>("/deliveries");
  }
  getDeliveryListDetails(deliveryID:string) {
    return http.get<Array<DeliveryDetailsListData>>(`/deliveries/${deliveryID}`);
  }
  updateDeliveryDetailsStatus(data: UpdateDeliveryData, id: string) {
    return http.put<any>(`/deliveries/${id}`, data);
  }
}
export default new DeliveryDataService();