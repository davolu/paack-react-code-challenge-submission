import http from "./http-common";
import {DeliveryListData} from "../store/delivery/types"
class DeliveryDataService {
  getListDelivery() {
    return http.get<Array<DeliveryListData>>("/deliveries");
  }
}
export default new DeliveryDataService();