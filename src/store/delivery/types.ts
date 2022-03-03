export const FETCH_DELIVERIES = "FETCH_DELIVERIES";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

 export interface DeliveryListData {

    client: string,
    customer : {
      name: string
      address: string,
      city: string,
      zipCode: string,
      latitude: string,
      longitude: string
    },
    delivery: {
      status: "idle" |
     "delivered" | "undelivered",
      latitude: number,
      longitude: number
    },
    id: string
}
 
export interface DeliveryError {
	cod: string;
	message: string;
}
interface GetDeliveryListAction {
	type: typeof FETCH_DELIVERIES;
	payload: DeliveryListData[] | null;
}

interface SetLoadingAction {
	type: typeof SET_LOADING;
}
interface SetErrorAction {
	type: typeof SET_ERROR;
	payload: string;
}
export type DelieveryAction =
	| GetDeliveryListAction
	| SetLoadingAction
  | SetErrorAction;
  
  export interface DeliveryListState {
    data: DeliveryListData[] | null;
    loading: boolean;
    error: string;
  }
  
     