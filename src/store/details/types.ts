export const GET_DELIVERY_DETAILS = "GET_DELIVERY_DETAILS";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

 export interface DeliveryDetailsListData {

    id: string,
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
      status: "idle" | "delivered" | "undelivered",
      latitude: number,
      longitude: number
    }
}

export interface UpdateDeliveryData {
    delivery: {
        status: string,
        latitude: number,
        longitude: number
      }
}

export interface DeliveryDetailsError {
	cod: string;
	message: string;
}
interface GetDeliveryDetailsListAction {
	type: typeof GET_DELIVERY_DETAILS;
	payload: DeliveryDetailsListData | null;
}

interface SetLoadingAction {
	type: typeof SET_LOADING;
}
interface SetErrorAction {
	type: typeof SET_ERROR;
	payload: string;
}
export type DeliveryDetailsAction =
	| GetDeliveryDetailsListAction
	| SetLoadingAction
  | SetErrorAction;
  
  export interface DeliveryDetailsListState {
    data: DeliveryDetailsListData | null;
    loading: boolean;
    error: string;
  }
  
     